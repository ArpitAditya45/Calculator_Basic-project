let string="";
let buttons=document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    
    button.addEventListener('click',(e)=>{
        console.log("clicked")
       
        if(e.target.innerHTML==='='){
            
            if(string.indexOf("sin")!=-1){
                string=string.replace("sin","");
                string=0+string;
                if(typeof(string)!=='number'){
                    document.querySelector('input').value="Invalid Input";

                }
                string=Math.sin(string*Math.PI/180);

            }
            else if(string.indexOf("cos")!=-1){
                string=string.replace("cos","");
                string=0+string;
                
                if(typeof(string)!=='number'){
                    document.querySelector('input').value="Invalid Input";

                }

                string=Math.cos(string*Math.PI/180);

            }
            else{
                string=eval(string)
            }
            document.querySelector('input').value=string;
           

        }
        else if(e.target.innerHTML==='C'){
            string="";
            document.querySelector('input').value=string;
        }
        else{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        }

    })

})

