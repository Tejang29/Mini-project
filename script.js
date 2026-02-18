const button = document.querySelectorAll('.button');
const body= document.querySelector('body')
button.forEach(function(button){
    console.log(button)
    button.addEventListener ('mouseover',function (e){
        console.log(e);
        console.log(e.target);
        console.log(e.target.id);
        if(e.target.id==='red'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='green'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id
        }
         if(e.target.id==='purple'){
            body.style.backgroundColor=e.target.id
        }
    
    });
})

