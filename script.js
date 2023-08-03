function changeName(element){
    document.querySelector('.card-body h1').innerHTML="Adrien D";
}
function removeUsers (id,users){
    document.querySelector(id).remove();
    document.querySelector(".badge").innerHTML --;
}

function acceptButton(id,lista,butonat) {
    document.querySelector(".badge").innerHTML --;
    document.querySelector("#acceptBadge").innerHTML++

    document.querySelector(butonat).remove()
    var profili = document.querySelector(id)
    document.querySelector(lista).append(profili)
}

