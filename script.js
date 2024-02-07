function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('image');
    let bgd = document.body;

    function atualizarHora() {
        let data = new Date();
        let hora = data.getHours();
        let minuto = data.getMinutes();
        let segundos = data.getSeconds();


        if (minuto < 10) {
            minuto = "0" + minuto;
        }
        if (segundos < 10) {
            segundos = "0" + segundos;
        }

        msg.innerHTML = `Agora são ${hora}:${minuto}:${segundos}`;


        if (hora >= 0 && hora < 5) {
            //Boa madrugada!
            img.src = "./images/madrugada.jpg";
            bgd.style.background = "#2B3E50";

        } else if (hora >= 6 && hora < 12) {
            //Bom dia!
            img.src = './images/manha.jpg';
            bgd.style.background = "#FFD700";
        } else if (hora >= 12 && hora < 18) {
            //Boa tarde!
            img.src = "./images/tarde.png";
            bgd.style.background = "#F4A261";
        } else {
            //Boa noite
            img.src = "./images/noite.jpg";
            bgd.style.background = "#3C4152";
        }
    }

    setInterval(atualizarHora, 1000);
}

carregar();
