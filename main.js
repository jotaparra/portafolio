window.onload = ()=>{
let writing = str => {
    let arrFromStr = str.split('');
    let  i = 0;
    let printStr = setInterval(function(){
        if(arrFromStr[i] === ' '){
            document.getElementById('msj').innerHTML += arrFromStr[i ];
            document.getElementById('msj').innerHTML += arrFromStr[i + 1];
            i += 2;

        }else{
            document.getElementById('msj').innerHTML += arrFromStr[i];
            i++;
        }
        document.getElementById('msj').innerHTML += arrFromStr[i];
        i++;

        if (i === arrFromStr.length ){
            clearInterval(printStr);           

            
        }
    },140); // 120 es el tiempo que yo le asigné, pueden cambiarlo para que sea más rápido o lento
};
writing('\<FRONT-END DEVELOPER\>');
}