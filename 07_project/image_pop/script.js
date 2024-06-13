// document.getElementById('center').addEventListener('mousemove',function(dets){
//      console.log(dets.clientX,dets.clientY);
// })

// const btn = document.querySelector("#throttle");
const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();

    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};
document.querySelector("#center").addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    var div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";

    var img = document.createElement("img");
    const images = [
      "https://images.unsplash.com/photo-1718046254335-d9ff832c9c3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1717949630415-ac4ef091bcfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1718019668172-5380fd58f2c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1686824684855-d389a22f762a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1718137654436-b9d3661a90d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1718051653501-c5530b8277c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1718048331518-55b15bd097ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
    ];

    const random = Math.floor(Math.random() * images.length);
    console.log(random, img.setAttribute('src',images[random]))
    // img.setAttribute(
    //   "src",
    //   console.log(random, images[random])
    // );
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img, {
      y: "0",
      ease: Power1,
      duration: 0.6,
    });
    gsap.to(img, {
      y: "100%",
      ease: Power2,
      delay: 0.7,
    });
    setTimeout(function () {
      div.remove();
    }, 2000);
  }, 400)
);
