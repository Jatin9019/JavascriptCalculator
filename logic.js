let screen = document.getElementById('screen');
let screenValue="";
buttons=document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttontext=e.target.innerText;
        console.log(buttontext);
        if(buttontext=='X'){
            buttontext='*';
            screenValue+=buttontext;
            screen.value=screenValue;
        }
        else if(buttontext=="="){
            screen.value=eval(screenValue);
        }
        else if(buttontext=="C"){
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttontext=="Return"){
            screenValue=screenValue.substring(0,screenValue.length-1);
            screen.value=screenValue;
        }
        else{
            screenValue+=buttontext;
            screen.value=screenValue;
        }
    })
}