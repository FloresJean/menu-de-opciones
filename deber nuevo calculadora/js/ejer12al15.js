class ejercicios{
    limpiar(){
        let d=document
        d.getElementById('series').value=""
        d.getElementById('num1').value=""
        d.getElementById('num2').value=""
        d.getElementById('resp').textContent=""
    }
    factorial(arr){
        let factor=[]
            for(let i=0;i<arr.length;i++){
            let acu=1
                for(let mul=1;mul<=arr[i];mul++){
                    acu=acu*mul
                }
            factor.push(acu)
            }
        return factor
    }
    ejer13(){
        let cadena=document.getElementById('num1').value
        let $resp=document.getElementById("resp")
        let serie=cadena.split(",")
        let factoriales=this.factorial(serie)
        $resp.textContent=`${serie} su factorial es ${factoriales}`
    }
    ejer14(){
        let cadena=document.getElementById('series').value
        let $resp=document.getElementById("resp")
        let serie=cadena.split(",")
        let factoriales=this.factorial(serie)
        $resp.textContent=`${serie} su factorial es ${factoriales}`
    }
    ejer15(){
        let num1 = parseInt(document.getElementById("num1").value)
        let num2 = parseInt(document.getElementById("num2").value)
        let $resp = document.getElementById("resp")
        let serie=[]
        for(let acu=num1;acu<num2;acu++){
            serie.push(acu)
        }
        $resp.textContent=`[${serie}]`

    }

}   
let ejer = new ejercicios()