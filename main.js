var siguiente = document.getElementById("next");

siguiente.addEventListener('click', () => {
    console.log("tocando");
    // location.href = "http://instagram.com/"

    setTimeout(() => {
        // console.log("algonofuncionabien");
        // window.location.reload('http://instagram.com/');
        window.URL('https://www.facebook.com/');
        window.location.replace('https://www.facebook.com/');
    }, 4000);
})