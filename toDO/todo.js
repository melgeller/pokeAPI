const container$$ = document.querySelector('.container')
const search$$ = document.querySelector('.search')
const input$$ = document.querySelector('.inputText')
const liContainer$$ = document.querySelector('.li-container')
const button$$ = document.querySelector('.btn-add')

let imputValue = input$$.value;

const borrar = (newLi$$) => {
newLi$$.remove()

}

const addElement = () => {

const newLi$$ = document.createElement('li')
const newp$$ = document.createElement('p')
const buttonLi$$ = document.createElement('button')

buttonLi$$.textContent = "-"
buttonLi$$.addEventListener('click', () => borrar(newLi$$));

newp$$.textContent = input$$.value;

newLi$$.appendChild(newp$$);
newLi$$.appendChild(buttonLi$$);
liContainer$$.appendChild(newLi$$);
input$$.value = "";


}

console.log(button$$);

button$$.addEventListener('click', addElement)

function sigueme() {
    var x = window.event.x + document.body.scrollLeft;
    var y = window.event.y + document.body.scrollTop;
  
    document.getElementById("siguelo").style.left = x + "px";
    document.getElementById("siguelo").style.top = y + "px";
  }
  
  document.onmousemove=function(){
      sigueme();
  };
  

