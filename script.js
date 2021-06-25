//document.body.innerHTML = '<h1>Hello from JS</h1>'
console.log('Test 2323232323232323232323');
//window.alert('How is your day?');

const but = document.getElementById("23");
const span = document.getElementById('span');
const rnd = document.getElementById('rnd');

const colors = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let count = 0;

const colors = [1,2,3];

but.addEventListener('click', () => span.innerHTML = ++count);

rnd.addEventListener('click', () => document.body.style.background = 'gray');
