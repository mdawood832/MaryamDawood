let isModalOpen = false
let contrastToggle=false
const scaleFactor = 20

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX / scaleFactor
    const y = event.clientY / scaleFactor
    
    for (let i=0 ; i<shapes.length ; i++ ) {
        const isOdd = i % 2 !== 0 ; 
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * boolInt}px , ${y * boolInt}px)`
    }
}




function toggleContrast (){
    contrastToggle= !contrastToggle

    if(contrastToggle){
        document.body.classList += "dark-theme"
    }

    else{
        document.body.classList.remove("dark-theme")
    }
}

function toggleModal() {
    if (isModalOpen){
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    // console.log("toggleModal")
    isModalOpen = true
    document.body.classList += "modal--open"
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



