var siguiente = document.getElementById("next");

siguiente.addEventListener('click', () => {
    console.log("tocando");
    // location.href = "http://instagram.com/"

    setTimeout(() => {
        console.log("algonofuncionabien");
        window.location.reload('http://instagram.com/');
    }, 4000);
})