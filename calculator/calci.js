function display(value){
    document.getElementById('text').value+=value
}
function calculate() {
     var value= document.getElementById('text').value
     var answer = eval(value)
     document.getElementById('text').value=answer
}
function clr(){
    document.getElementById('text').value=null
}