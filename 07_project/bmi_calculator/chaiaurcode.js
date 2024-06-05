const form = document.querySelector('form')
//this usecase will give you empty value

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const guide = document.querySelector('#weight-guide')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'please give a valid height'
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'please give a valid weight'
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
        if(bmi <= 18.6 ){
            guide.innerHTML = 'under weight'
        }else if(  bmi <= 24.9 ){
            guide.innerHTML = 'normal weight'
        }else if (bmi >= 24.9 ){
           guide.innerHTML = 'over weight'
        }
    }
    




})