const msgButton = document.querySelector("#naujazinute");
msgButton.addEventListener("click", message);

function message(){
    const forma =document.querySelector('#forma')
    if(forma.style.display==='none'){
        forma.style.display='block'
    }else{
        forma.style.display="none"
    }
}

export default message