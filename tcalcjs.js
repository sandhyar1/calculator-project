// this function display the values
function  view(num) {
    document.getElementById("result").value += num;

}
// this function evaluates the expression and return results;
function calculate() {
    let x =document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}
// this function clear all the values
function clr() {
    document.getElementById("result").value="";
}

