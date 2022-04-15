document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let inputText = document.querySelectorAll('input')[0];
  document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    buildToDo(inputText.value)
  })
});


function buildToDo(todo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent= 'x';
  p.textContent = ` ${todo} - `;
  p.appendChild(btn);
  document.getElementById('tasks').appendChild(p)
  btn.addEventListener('mouseenter', ()=> {p.style.color = 'red'
p.style.fontSize = '21px'
})
btn.addEventListener('mouseleave', ()=> {p.style.color = 'black'
p.style.fontSize = '20px'});
}


function handleDelete(e){
  e.target.parentNode.remove();
} 


