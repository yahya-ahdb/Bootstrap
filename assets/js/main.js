let btn=document.getElementById('btnscroll')

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
let btnDark =document.getElementById('dark')
let btnWhite = document.getElementById('white')


btnWhite.style.display = 'none'

btnDark.onclick = function(){
    document.body.style.background = '#111'
    btnDark.style.display = 'none'
    btnWhite.style.display ='block'
}
btnWhite.onclick = function(){
    document.body.style.background = '#fff'
    btnWhite.style.display ='none'
    btnDark.style.display = 'block'
}

