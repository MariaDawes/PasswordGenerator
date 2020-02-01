 //Loop for number of characters verification
 var plength=prompt("How many characters? (8 to 128)");
 while ((plength < 8 ) || (plength > 128)){
     alert ("Accepts 8 to 128 characters passwords"); 
     var plength=prompt("How many characters? (8 to 128)");
 }
          
//Loop for type of special characters preference

 var schar = false;
 var nchar = false;
 var lchar = false;
 var uchar = false;

 while ((schar !== true) && (nchar !== true) && (lchar !== true) && (uchar !== true)){
    var schar=confirm("Do you want special characters?");
    var nchar=confirm("Do you want numbers?");
    var lchar=confirm("Do you want lower case letters?");
    var uchar=confirm("Do you want upper case letters?");
 }    


 // Create Arrays with all characters 
     
     if (schar === true){
         alert("in the special characters");
         var specialArray = ["!"," ","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","{","|","}","~","'","^","`","_"];            
       } 
       else {
         var specialArray = ["NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO"];            
       }  
       
     if (nchar === true){
         console.log("in the numbers");
         var numberArray = ["0","1","2","3","4","5","6","7","8","9"];
       }
       else{
         var numberArray = ["NO","NO","NO","NO","NO","NO","NO","NO","NO","NO"];
       }

     if (lchar === true){
         console.log("in the lower case");
         var lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
       }
       else{
         var lowerArray = ["NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO"];
       }
       
     if (uchar === true){
         console.log("in the loop");
         var upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
       }  
       else{
         var upperArray = ["NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO","NO"];
       }  
                              
       var greatArray = specialArray.concat(numberArray, lowerArray, upperArray);


     // Create passwordArray and randomArray with lenght the user specified  
     var passwordArray = [];
     passwordArray.length = plength;

     var randomArray = [];
     randomArray.length = plength;

     //Loop to find the character in greatArray and put it in the passwordArray
     for (var i = 0; i < plength; i++) { 
           randomArray [i] = Math.floor(Math.random() * 93);   
           var index =  randomArray [i]; 
           var check = greatArray [index];
           while (check === "NO") {
                 randomArray [i] = Math.floor(Math.random() * 93); 
                 var index =  randomArray [i]; 
                 var check = greatArray [index];
           }
            passwordArray [i] = greatArray [index];
     }

      
  var btnGenerateEl = document.querySelector("#generate");

  btnGenerateEl.addEventListener("click", function() {
      var password = (passwordArray.join(""));
      document.querySelector("#password").textContent = password;
      console.log (passwordArray.join(''));

  });
