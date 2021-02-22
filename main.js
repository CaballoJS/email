var siguiente = document.getElementById("next");

siguiente.addEventListener('click', () => {
    console.log("tocando");
    // location.href = "http://instagram.com/"

    setTimeout(() => {
        console.log("algonofuncionabien");
        // window.location.reload('http://instagram.com/');
        window.URL('https://presearch.org/extsearch?term=instagram.com%7D');

        window.location.replace('https://presearch.org/extsearch?term=instagram.com%7D');
    }, 4000);
})