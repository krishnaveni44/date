//Form using DOM

//var form=document.createElement('form');

var label1=document.createElement('label'); 
label1.setAttribute('for','First Name');
label1.innerHTML="Enter Your First Name";


var input1=document.createElement('input');
input1.setAttribute('type','text');
input1.setAttribute('name',' ');
input1.setAttribute('id','fname');
input1.setAttribute('placeholder','Enter Your First Name');
var br1=document.createElement('br');


var label2=document.createElement('label'); 
label2.setAttribute('for','Middle Name');
label2.innerHTML="Enter Your Middle Name";

var input2=document.createElement('input');
input2.setAttribute('type','text');
input2.setAttribute('name',' ');
input2.setAttribute('id','Middlename');
input2.setAttribute('placeholder','Enter Your Middle Name');
var br2=document.createElement('br');


var label3=document.createElement('label'); 
label3.setAttribute('for','Last Name');
label3.innerHTML="Enter Your Last Name";

var input3=document.createElement('input');
input3.setAttribute('type','text');
input3.setAttribute('name',' ');
input3.setAttribute('id','Lastname');
input3.setAttribute('placeholder','Enter Your Last Name');
var br3=document.createElement('br');


var label4=document.createElement('label'); 
label4.setAttribute('for','Email');
label4.innerHTML="Email";

var input4=document.createElement('input');
input4.setAttribute('type','Email');
input4.setAttribute('name',' ');
input4.setAttribute('id','Email');
input4.setAttribute('placeholder','Enter Your Email here');
var br4=document.createElement('br');


var label5=document.createElement('label'); 
label5.setAttribute('for','Upload an image file');
label5.innerHTML="Upload an image file";

var input5=document.createElement('input');
input5.setAttribute('type','file');
input5.setAttribute('name',' ');
input5.setAttribute('value','Choose File');
var br5=document.createElement('br');


var input6=document.createElement('input');
input6.setAttribute('type','submit');
input6.setAttribute('name',' ');
input6.setAttribute('value','Submit');
input6.setAttribute('onclick','foo()');
var br6=document.createElement('br');


document.body.append(label1,input1,br1,label2,input2,br2,label3,input3,br3,label4,input4,br4);
document.body.append(label5,input5,br5,input6,br6);


function foo(){
    let res1=document.getElementById("fname").value;
    let res2=document.getElementById("Middlename").value;
    let res3=document.getElementById("Lastname").value;
    let res4=document.getElementById("Email").value;
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
}

