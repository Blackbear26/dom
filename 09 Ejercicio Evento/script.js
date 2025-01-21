// referencia 

const emojiCursor = document.querySelector(".emoji-cursor");

//detectamos evento del movimiento del mouse

document.addEventListener("mousemove", (e) => {
    //console.log(e.clientX)
    //console.log(e.clientY)

    //guardamos las cordenadas en variables

    let mouseX = e.clientX;
    let mouseY = e.clientY;

    //aplicamos las coordenadas al evento emojiCursor

    emojiCursor.style.left = `${mouseX}px`;
    emojiCursor.style.top = `${mouseY}px`;
});

//cambiar el emoji al precionar una tecla

document.addEventListener("keydown", (e) => {
    //utilizamos switch para cambiar el emoji)
    switch (e.key) {
        case "1":
            emojiCursor.textContent = "😶‍🌫️";
            break;
            
        case "2":
            emojiCursor.textContent = "👻";
            break;

        case "3":
            emojiCursor.textContent = "👽";
            break;

        case "4":
            emojiCursor.textContent = "👾";
            break;

        case "5":
            emojiCursor.textContent = "👹";
            break;
        default:
            emojiCursor.textContent = "��";
            break;
    }    
});