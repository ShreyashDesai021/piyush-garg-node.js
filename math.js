function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

//export { add, subtract };

const maths = {
    add,
    subtract
}

//export { maths }; 
export { maths as mathFn }; 

