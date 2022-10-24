const progress = document.querySelectorAll(".bar");

var a= parseInt(document.getElementById("invalue").value);

var b =parseInt(document.getElementById("maxvalue").value);
function myFun(){
    if(a>b){

        alert("you enterned high number");
        document.getElementById('a').value = '';
        document.getElementById('b').focus();
     }else{
         alert("Added one ore progress bar")
        
         
     }

}





