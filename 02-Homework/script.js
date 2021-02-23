const i = 0;
const txt = 'Welcome, to my porfolio page';
const speed = 50;

 typeWriter = () => {
  if (i < txt.length) {
    document.getElementById("jumbotext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    
  } 
}
console.log(typeWriter())

document.getElementById("#navbarText")
