var siguiente = document.getElementById("next");

siguiente.addEventListener('click', () => {
    // console.log("tocando");
    // location.href = "http://instagram.com/"
    window.location.replace('http://instagram.com/');
    setTimeout(() => {
        console.log("algonofuncionabien");
    }, 4000);
})