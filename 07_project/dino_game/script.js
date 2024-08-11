import { setupGround, updateGround } from "./ground.js"
import {updateDino , setupDino,getDinoreact, setDinoLose} from "./dino.js"
import {updateCactus, setupCactus, getCactusReacts} from "./cactus.js"

const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30
const SPEED_SCALE_INCREASE = 0.00001

const worldElem = document.querySelector("[data-world]")
const scoreElem = document.querySelector("[data-score]")
const startScreenElem = document.querySelector("[data-start-screen]")


function setPixelToWorldScale(){
    let worldScaleToPixel
    if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
        worldScaleToPixel = window.innerWidth / WORLD_WIDTH
    }else{
        worldScaleToPixel= window.innerHeight / WORLD_HEIGHT
    }

    worldElem.style.height = `${WORLD_HEIGHT * worldScaleToPixel}px`
    worldElem.style.width = `${WORLD_WIDTH * worldScaleToPixel}px`
}

window.addEventListener("resize",setPixelToWorldScale)
setPixelToWorldScale()
document.addEventListener("keydown",handleStart,{once: true})


let lastTime 
let speedScale
let score
function update(time){
    if(lastTime == null){
        lastTime = time
        window.requestAnimationFrame(update)
        return
    }
    const delta = time - lastTime

    updateGround(delta, speedScale)
    updateSpeedScale(delta)
    updateScore(delta)
    updateCactus(delta,speedScale)
    updateDino(delta,speedScale )
    if (checkLose()) return handleLose()

    lastTime = time
    window.requestAnimationFrame(update)
}

function checkLose(){
    const dinoReact = getDinoreact()
    return getCactusReacts().some(react => isCollision(react, dinoReact))
}
function isCollision(react1, react2){
    return( react1.left < react2.right && react1.top < react2.bottom && react1.right > react2.left && react1.bottom > react2.top)
}

function updateSpeedScale(delta){
    speedScale += delta * SPEED_SCALE_INCREASE
}

function updateScore(delta){
    score += delta * 0.01
    scoreElem.textContent = Math.floor(score)
}

function handleStart(){
    lastTime= null
    speedScale = 1
    score=0
    setupGround()
    setupDino()
    setupCactus()
    startScreenElem.classList.add("hide")
    window.requestAnimationFrame(update)
}

function handleLose(){
    setDinoLose()
    setTimeout(() => {
        document.addEventListener("keydown", handleStart, {once : true})
        startScreenElem.classList.remove("hide")
    },100)
}