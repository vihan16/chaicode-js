// for

for (let index = 0; index < 10; index++) {
    const element = index;
    //console.log(element);
}

for (let i = 0; i < 5; i++) {
     console.log(`Outer loop value : $(i)`);
    for (let j = 0; j < 5; j++) {
     console.log(`iner loop valie $(j) and inner loop $(i)`)
    } 
}