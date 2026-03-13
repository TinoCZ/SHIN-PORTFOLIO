const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const fabContainer = document.querySelector('.media-container');
const fabButton = document.querySelector('.plus');
const buttons = document.querySelectorAll(".price-plan")
const form = document.querySelector("form")


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Agrega este código para cerrar el menú cuando se hace clic en un enlace
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});


    fabButton.addEventListener('click', () => {
      fabContainer.classList.toggle('show');
    });


    buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    const plan = btn.dataset.plan

    const numero = "5491173659919" // tu numero

    const mensaje = `Hola! Estoy interesado en el plan ${plan} y me gustaría más información.`

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`

    window.open(url, "_blank")

  })
})


form.addEventListener("submit", async function(e){

  e.preventDefault()

  const data = new FormData(form)

  await fetch(form.action,{
    method:"POST",
    body:data,
    headers:{
      'Accept':'application/json'
    }
  })

  alert("Mensaje enviado correctamente")

  form.reset()

})
