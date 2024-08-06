// function Fun() {
//     const name = "Millan";
//     function Fun2() {
//         console.log(name);
//     }
//     return Fun2();
// }
// const myFun= Fun();
// myFun();


// Closure scope chain
function outer() {
    let getY;
{
    const y = 6;
    getY = () => y;
}
console.log(typeof y);
console.log(getY());
}
outer();
