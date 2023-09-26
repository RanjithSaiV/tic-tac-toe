var num;
var btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9;

document.getElementById("player1").addEventListener("click",player1)


// result()


function player1(){
    for(var i=0;i<=8;i++){
      
        var input=document.querySelectorAll(".btn");
        input[i].addEventListener("click", clicked_1);
        

        
    

    }
}

const htmlContentX = '<button style="color:white;background-color:green;"><span style="font-size: 24px; padding:0px;margin:0px;">X WON</span> </br><span style="margin:0px; padding:0px; font-size: 15px;">Play again</span></button>';
const htmlContentO = '<button style="color:white;background-color:green;"><span style="font-size: 24px; padding:0px;margin:0px;">O WON</span> </br><span style="margin:0px; padding:0px; font-size: 15px;">Play again</span></button>';
const DRAW = '<button style="color:white;background-color:green;"><span style="font-size: 24px; padding:0px;margin:0px;">DRAW</span> </br><span style="margin:0px; padding:0px; font-size: 15px;">Play again</span></button>';


function result(){
    if((btn1==btn2 && btn1==btn3)&&(btn1!='')){
        if(btn1=='x'){
            res=document.getElementById("res").innerHTML=htmlContentX;
            
            document.getElementById("res").style="display: inline-block;";
            
            res=document.getElementById("reset").style="transform: translateY(-40vh);"
            document.getElementById("outer-div").style="  filter: blur(8px);"

            res.addEventListener(click,reload);
        }
        else{ 

            document.getElementById("res").style="display: inline-block;";
            res=document.getElementById("res").innerHTML=htmlContentO;
            document.getElementById("outer-div").style="  filter: blur(8px);"

            res=document.getElementById("reset").style="transform: translateY(-40vh);"
        }
    }
    else if((btn1==btn4 && btn1==btn7)&&(btn1!='')){
            if(btn1=='x'){
                document.getElementById("res").style="display: inline-block;";
                res=document.getElementById("res").innerHTML=htmlContentX;
            
                res=document.getElementById("reset").style="transform: translateY(-40vh);"
                document.getElementById("outer-div").style="  filter: blur(8px);"
            }
            else{
                document.getElementById("res").style="display: inline-block;";

                res=document.getElementById("res").innerHTML=htmlContentO;
            
                res=document.getElementById("reset").style="transform: translateY(-40vh);"
                document.getElementById("outer-div").style="  filter: blur(8px);"
    
            }
            }
    else if((btn1==btn5 && btn1==btn9)&&(btn1!='')){
            if(btn1=='x'){
                document.getElementById("res").style="display: inline-block;";

                res=document.getElementById("res").innerHTML=htmlContentX;
                document.getElementById("res").style="display: inline-block;";
            
                res=document.getElementById("reset").style="transform: translateY(-40vh);"
                document.getElementById("outer-div").style="  filter: blur(8px);"
            }
            else{
                res=document.getElementById("res").innerHTML=htmlContentO;
                document.getElementById("res").style="display: inline-block;";
            
                res=document.getElementById("reset").style="transform: translateY(-40vh);"
                document.getElementById("outer-div").style="  filter: blur(8px);"
    
            }
        }

    // results for btn2

    else if((btn2==btn5 && btn2==btn8)&&(btn2!='')){
        if(btn2=='x'){
            document.getElementById("res").style="display: inline-block;";

            res=document.getElementById("res").innerHTML=htmlContentX;
            
            res=document.getElementById("reset").style="transform: translateY(-40vh);"
            document.getElementById("outer-div").style="  filter: blur(8px);"
        }
        else{
            res=document.getElementById("res").innerHTML=htmlContentO;
            document.getElementById("res").style="display: inline-block;";
            
            res=document.getElementById("reset").style="transform: translateY(-40vh);"
            document.getElementById("outer-div").style="  filter: blur(8px);"

        }
    }

   // results for btn3

   else if((btn3==btn5 && btn3==btn7)&&(btn3!='')){
    if(btn3=='x')
        {
            document.getElementById("res").style="display: inline-block;";

            res=document.getElementById("res").innerHTML=htmlContentX;
            
        res=document.getElementById("reset").style="transform: translateY(-40vh);"
        document.getElementById("outer-div").style="  filter: blur(8px);"
        }
    else{
        res=document.getElementById("res").innerHTML=htmlContentO;
        document.getElementById("res").style="display: inline-block;";
            
        res=document.getElementById("reset").style="transform: translateY(-40vh);"
        document.getElementById("outer-div").style="  filter: blur(8px);"

        }
    }

    else if((btn3==btn6 && btn3==btn9)&&(btn3!='')){
        if(btn3=='x')
            {
                document.getElementById("res").style="display: inline-block;";

                res=document.getElementById("res").innerHTML=htmlContentX;

            
            res=document.getElementById("reset").style="transform: translateY(-40vh);"
            document.getElementById("outer-div").style="  filter: blur(8px);"

            }
        else{
            res=document.getElementById("res").innerHTML=htmlContentO;
            document.getElementById("res").style="display: inline-block;";
            
            res=document.getElementById("reset").style="transform: translateY(-40vh);"
            document.getElementById("outer-div").style="  filter: blur(8px);"
    
            }
        }
    // RESULTS FOR BTN-4
    else if((btn4==btn5 && btn4==btn6) && (btn4!='')){
        if(btn4=='x')
            {
            document.getElementById("res").style="display: inline-block;";

            res=document.getElementById("res").innerHTML=htmlContentX;
    document.getElementById("res").style="display: inline-block;";
            
    res=document.getElementById("reset").style="transform: translateY(-40vh);"
    document.getElementById("outer-div").style="  filter: blur(8px);"

            }
        else{
            res=document.getElementById("res").innerHTML=htmlContentO;
    document.getElementById("res").style="display: inline-block;";
            
    res=document.getElementById("reset").style="transform: translateY(-40vh);"
    document.getElementById("outer-div").style="  filter: blur(8px);"
    
            }
        }

        // RESULTS FOR BTN-7

        else if((btn7==btn8 && btn7==btn9) && (btn7!='')){
            if(btn7=='x')
                {
                    document.getElementById("res").style="display: inline-block;";

                    res=document.getElementById("res").innerHTML=htmlContentX;
            
                res=document.getElementById("reset").style="transform: translateY(-40vh);"
                document.getElementById("outer-div").style="  filter: blur(8px);"
                }
            else{
                res=document.getElementById("res").innerHTML=htmlContentO;
                document.getElementById("res").style="display: inline-block;";
            
                res=document.getElementById("reset").style="transform: translateY(-40vh);"
                document.getElementById("outer-div").style="  filter: blur(8px);"
        
                }
            }

    else if(a==9){    

        document.getElementById("res").style="display: inline-block;";
        res=document.getElementById("res").innerHTML=DRAW;            
        res=document.getElementById("reset").style="transform: translateY(-40vh);"
        document.getElementById("outer-div").style="  filter: blur(8px);"

    }
}

var flag=1;
let a=0;
function clicked_1()
{
  
    a=1+a;

    if(flag==1){
        this.innerHTML="O";
       
       
       
        flag=0;
    }
    else{
        this.innerHTML="x";
        
        flag=1; 
    }
    
    event.currentTarget.removeEventListener('click', clicked_1);


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

// ========================================================

document.getElementById("reset").addEventListener("click",reload)

function reload(){
    window.location.reload();
}
