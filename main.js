var siguiente = document.getElementById("next");

siguiente.addEventListener('submit', () => {
    // console.log("tocando");
    // location.href = "http://instagram.com/"
    setTimeout(() => {

        window.location.replace('http://instagram.com/');
    }, 4000);
})