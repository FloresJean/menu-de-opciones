class ejercicios{
    limpiar(){
        let d=document
        d.getElementById('series').value=""
        d.getElementById('num1').value=""
        d.getElementById('num2').value=""
        d.getElementById('resp').textContent=""
    }
    losperfectos(arreglo){
        let per=0
        for(let i=0;i<arreglo.length;i++){
            let acu=0
            for(let Div=1;Div<arreglo[i];Div++){
                if(arreglo[i]%Div==0){
                    acu=acu+Div
                }
            }
            if(acu==arreglo[i]){
                per=per+acu
            }
       }
       return per
    }
    
    ejer1(){
        let cadena=document.getElementById('series').value
        let $resp=document.getElementById("resp")
        let serie=cadena.split(",")
        let perfectos=this.losperfectos(serie)
        $resp.textContent=`la suma de los perfecto es ${perfectos}`
    }

    isPrimo(num){
        let prim=[]
        for(let i=0;i<num.length;i++){
            let band=1,divisor=2
            while(divisor < num[i] && band == 1){
                if (num[i] % divisor == 0){
                    band=0
                }else{
                   
                    divisor=divisor+1
                }
            }
        if(band==1){
        prim.push(num[i])
        }
        }
        return prim
    }
    ejer2(){
        let cadena=document.getElementById('series').value
        let $resp=document.getElementById("resp")
        let serie=cadena.split(",")
        let primos=this.isPrimo(serie)
        $resp.textContent=`los primos de [${serie}] son [${primos}]`
    }

    ejer3(){
        let num1 = parseInt(document.getElementById("num1").value)
        let num2 = parseInt(document.getElementById("num2").value)
        let $resp = document.getElementById("resp") , pont=1
            for(let con=1;con<=num2;con++){
            pont=pont*num1
            }
        $resp.textContent=pont
    }

    ejer4(){
        let cadena=document.getElementById('series').value
        let $resp=document.getElementById("resp")
        let serie=cadena.split(",")
        let  arpont=[]
        for(let i=0;i<serie.length;i++){
            let potencia=1
            for(let acu=0;acu<serie[i];acu++){
                potencia=potencia*serie[i]
            }
        arpont.push(potencia)
        }
        $resp.textContent=`${serie} sus potencias ${arpont} `
    }
   
}   
let ejer = new ejercicios()