// have the welcome message show up letter by letter
let string = "Hi! This is Cassie Lin, a graphic designer based in New York. Welcome to my world:)";
let str = string.split("");
let el = document.querySelector(".welcome-msg");
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
let running = setTimeout(animate, 50);
})();

