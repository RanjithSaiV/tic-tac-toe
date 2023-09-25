var num;
var btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9;

document.getElementById("player1").addEventListener("click",player1)



function player1(){
    for(var i=0;i<=8;i++){
      
        var input=document.querySelectorAll(".btn");
        input[i].addEventListener("click", clicked_1);
        
    

    }
}

function result(){
    if(btn1==btn2 && btn1==btn3){
        if(btn1=='x'){
            document.getElementById("res").style="display: inline-block;";
            res=document.getElementById("res").innerHTML="x won ";
        }
        else{
            res=document.getElementById("res").innerHTML="o won ";

        }
    }
    else if(btn1==btn4 && btn1==btn7){
            if(btn1=='x'){
                document.getElementById("res").style="display: inline-block;";

                res=document.getElementById("res").innerHTML="x won ";
            }
            else{
                res=document.getElementById("res").innerHTML="o won ";
    
            }
            }
    else if(btn1==btn5 && btn1==btn9){
            if(btn1=='x'){
                document.getElementById("res").style="display: inline-block;";

                res=document.getElementById("res").innerHTML="x won ";
            }
            else{
                res=document.getElementById("res").innerHTML="o won ";
    
            }
        }

    // results for btn2

    else if(btn2==btn5 && btn2==btn8){
        if(btn1=='x'){
            document.getElementById("res").style="display: inline-block;";

            res=document.getElementById("res").innerHTML="x won ";
        }
        else{
            res=document.getElementById("res").innerHTML="o won ";

        }
    }

   // results for btn3

   else if(btn3==btn5 && btn3==btn7){
    if(btn1=='x')
        {
            document.getElementById("res").style="display: inline-block;";

        res=document.getElementById("res").innerHTML="x won ";
        }
    else{
        res=document.getElementById("res").innerHTML="o won ";

        }
    }

    else if(btn3==btn6 && btn3==btn9){
        if(btn1=='x')
            {
                document.getElementById("res").style="display: inline-block;";

            res=document.getElementById("res").innerHTML="x won ";
            }
        else{
            res=document.getElementById("res").innerHTML="o won ";
    
            }
        }
    // RESULTS FOR BTN-4
    else if(btn4==btn5 && btn4==btn6){
        if(btn1=='x')
            {
            document.getElementById("res").style="display: inline-block;";

            res=document.getElementById("res").innerHTML="x won ";
            }
        else{
            res=document.getElementById("res").innerHTML="o won ";
    
            }
        }

        // RESULTS FOR BTN-7

        else if(btn7==btn8 && btn7==btn9){
            if(btn1=='x')
                {
                    document.getElementById("res").style="display: inline-block;";

                res=document.getElementById("res").innerHTML="x won ";
                }
            else{
                res=document.getElementById("res").innerHTML="o won ";
        
                }
            }

    else{    

        document.getElementById("res").style="display: inline-block;";
        res=document.getElementById("res").innerHTML="DRAW";

    }
}

var flag=1;
function clicked_1()
{
    this.innerHTML="O";




    if(flag==1){
        this.innerHTML="O";
        this.disabled=true;
        flag=0;
    }
    else{
        this.innerHTML="x";
        this.disabled=true;
        flag=1; 
    }
    
    btn1=document.getElementById("1").innerHTML;
    btn2=document.getElementById("2").innerHTML;
    btn3=document.getElementById("3").innerHTML;
    btn4=document.getElementById("4").innerHTML;
    btn5=document.getElementById("5").innerHTML;
    btn6=document.getElementById("6").innerHTML;
    btn7=document.getElementById("7").innerHTML;
    btn8=document.getElementById("8").innerHTML;
    btn9=document.getElementById("9").innerHTML;

    result()

    
   

}

