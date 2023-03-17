class ejercicios{
    limpiar(){
        let d=document
        d.getElementById('series').value=""
        d.getElementById('num1').value=""
        d.getElementById('num2').value=""
        d.getElementById('resp').textContent=""
    }
    ejer5(){
        let valor = parseInt(document.getElementById("num1").value)
        let $resp = document.getElementById("resp")
        let resultado=""

        for(let cont=1;cont<=12;cont++){
        resultado += `${valor} x ${cont} = ${valor*cont}\n`;
        }
        $resp.textContent = resultado;
    }
    divi(num,div){
        let arreglo=[]
        for(let acu=div;acu<num;acu++){
            if(num % acu == 0){
                arreglo.push(acu)
            }
        }
        return arreglo
    }
    ejer6(){
        let num1 = parseInt(document.getElementById("num1").value)
        let num2 = parseInt(document.getElementById("num2").value)
        let $resp = document.getElementById("resp")
        let arrdivisores=[]
        arrdivisores=this.divi(num1,num2)
        $resp.textContent=`${num1} sus divisores son ${arrdivisores}`
        
    }
    ejer7(){
        let num1 = parseInt(document.getElementById("num1").value)
        let num2 = parseInt(document.getElementById("num2").value)
        let $resp = document.getElementById("resp")
        let arrdivisores=[],suma=0
        arrdivisores=this.divi(num1,num2)
        for(let i=0;i<arrdivisores.length;i++){
            suma=suma+arrdivisores[i]
        }
        $resp.textContent=`[${arrdivisores}] sus divisores son ${suma}`
    }

}   
let ejer = new ejercicios()