class ejercicios{
    limpiar(){
        let d=document
        d.getElementById('series').value=""
        d.getElementById('num1').value=""
        d.getElementById('num2').value=""
        d.getElementById('resp').textContent=""
    }

    arreglos(num){
        let pos=0 , mod=0 , arreglo=[]
        while(num>=1){
            mod=num%10
            num=parseInt(num/10)
            arreglo[pos]=mod
            pos=pos+1
        }
        return arreglo
    }

    ejer8(){
        let num1=parseInt(document.getElementById("num1").value)
        let $resp=document.getElementById("resp")
        let arreglos=[]
        arreglos=this.arreglos(num1)
        $resp.textContent=arreglos
    }

    ejer9(){
        let num1=parseInt(document.getElementById("num1").value)
        let $resp=document.getElementById("resp")
        let arreglos=[],sumadigito=0
        arreglos=this.arreglos(num1)
        for(let i=0;i<arreglos.length;i++){
            sumadigito=arreglos[i]+sumadigito
        }
        $resp.textContent=`la suma de ${num1} es ${sumadigito}`
    }

    ejer10(){
        let num1=parseInt(document.getElementById("num1").value)
        let $resp=document.getElementById("resp")
        let arreglos=[],pares=0,pos=0,arreglospar=[]
        arreglos=this.arreglos(num1)
        for(let i=0;i<arreglos.length;i++){
            if(arreglos[i]%2==0){
            arreglospar[pos]=arreglos[i]
            pos=pos+1
            }
        }
        $resp.textContent=`los pares de ${num1} es ${arreglospar}`
    }

    ejer11(){
        let num1=parseInt(document.getElementById("num1").value)
        let $resp=document.getElementById("resp")
        let arreglos=[],log=0
        arreglos=this.arreglos(num1)
        log=arreglos.length
         $resp.textContent=`el primer digito de ${num1} es ${arreglos[log-1]}`
    }

    ejer12(){
        let num1=parseInt(document.getElementById("num1").value)
        let $resp=document.getElementById("resp")
        let arreglos=[]
        arreglos=this.arreglos(num1)
         $resp.textContent=`el ultimo digito de ${num1} es ${arreglos[0]}`
    }
}
let ejer = new ejercicios()