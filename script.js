//document.body.innerHTML = '<h1>Hello from JS</h1>'
console.log('Test 2323232323232323232323');
//window.alert('How is your day?');

const but = document.getElementById("23");
const span = document.getElementById('span');

let count = 0;

but.addEventListener('click', () => span.innerHTML = ++count);