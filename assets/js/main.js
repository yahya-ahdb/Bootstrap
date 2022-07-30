let btn=document.getElementById('btnscroll')
let btnDark =document.getElementById('dark')
let btnWhite = document.getElementById('white')
let footer = document.getElementById('call')

window.onscroll = function(){
    if( scrollY > 200){
        btn.style.display='block'
    }
    else{
        btn.style.display = 'none'
    }


}
btn.onclick = function(){
    scroll({
        top:0,
        behavior:'smooth'
    })
}



function buy (){
    
    let confirmmas =confirm ("Are you sure buy car?")
    if(confirmmas === true){
        alert("Purchase completed successfully")
    }
    
}




btnWhite.style.display = 'none'
btnDark.onclick = function(){
    
    document.body.style.background = 'rgba(0, 0, 0, 0.849)'
    btnDark.style.display = 'none'
    btnWhite.style.display ='block'
    footer.style.background = 'black'
    
}
btnWhite.onclick = function(){
    
    document.body.style.background = '#fff'
    btnWhite.style.display ='none'
    btnDark.style.display = 'block'
    footer.style.background = 'rgba(0, 0, 0, 0.357)'
    
}


