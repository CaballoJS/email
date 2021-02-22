var siguiente = document.getElementById("next");

siguiente.addEventListener('click', () => {
    console.log("tocando");
    // location.href = "http://instagram.com/"

    setTimeout(() => {
        window.location.replace('http://instagram.com/');
        console.log("algonofuncionabien");
    }, 4000);
})