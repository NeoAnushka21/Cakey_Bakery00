let invalidBorder="solid 4px red";
let validBorder="solid 4px green";

let fnameNode;let spanNode1;
let lnameNode;let spanNode2;
let mobNode;let spanNode4;
let emailNode;let spanNode5;
let pass1Node;let spanNode6;let tdNode;
let pass2Node;let spanNode7;
let formNode;

$(document).ready(function(){
    fnameNode=$('#fname');
    spanNode1=$('#error01');
    fnameNode.blur(()=>validate1());
    lnameNode=$('#lname');
    spanNode2=$('#error02');
    lnameNode.blur(()=>validate2());
    ageNode=$('#age');
    spanNode3=$('#error03');
    ageNode.blur(()=>validate3());
    mobNode=$('#mob');
    spanNode4=$('#error04');
    mobNode.blur(()=>validate4());
    emailNode=$('#emailId');
    spanNode5=$('#error05');
    emailNode.blur(()=>validate5());
    pass1Node=$('#pass1');
    spanNode6=$('#error06');
    tdNode=$('#passtd');
    pass1Node.blur(()=>validate6());
    pass2Node=$('#pass2');
    spanNode7=$('#error07');
    pass2Node.blur(()=>validate7());
    $('#rForm').submit(()=>formValidate());
});

function validate1(){
    let firstName=fnameNode.val();
    spanNode1.text("");
    if(firstName===''){
        spanNode1.text("First Name is Required...");
        fnameNode.css({'border':invalidBorder});
        return false;
    }
    else{
        fnameNode.css({'border':validBorder});
        return true;
    }
}
function validate2(){
    let lastName=lnameNode.val();
    spanNode2.text("");
    if(lastName===''){
        spanNode2.text("Last Name is Required...");
        lnameNode.css({'border':invalidBorder});
        return false;
    }
    else{
        lnameNode.css({'border':validBorder});
        return true;
    }
}
function validate4(){
    let yourmob=mobNode.val();
    spanNode4.text("");
    let regexp=new RegExp("^[0-9]{10}$");
    let result=regexp.test(yourmob);
    if(yourmob===''){
        spanNode4.text("Mobile Number is Required...");
        mobNode.css({'border':invalidBorder});
        return false;
    }
    else if(result===false){
        spanNode4.text("Please Enter valid Mobile number.");
        mobNode.css({'border':invalidBorder});
    }
    else{
        mobNode.css({'border':validBorder});
        return true;
    }
}

function validate5(){
    let youremail=emailNode.val();
    spanNode5.text("");
    if(youremail===''){
        spanNode5.text("Email ID is Required...");
        emailNode.css({'border':invalidBorder});
        return false;
    }
    else if(!youremail.includes('@')|| youremail.substring(youremail.indexOf('@')+1)===''){
        spanNode5.text("Put Valid email ID");
        emailNode.css({'border':invalidBorder});
        return false;
    }
    else{
        emailNode.css({'border':validBorder});
        return true;
    }
}
function validate6(){
    let yourpass1=pass1Node.val();
    console.log(yourpass1);
    let regexp=new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,12}$");
    let result=regexp.test(yourpass1);
    spanNode6.text(""); 
    tdNode.html("");
    tdNode.append(spanNode6);
    if(yourpass1===''){
        console.log("in if");
        console.log(spanNode6);
        spanNode6.text("Please enter password");
        pass1Node.css({'border':invalidBorder});
        return false;
    }
    else if(result===false){
        spanNode6.text("password should contain ");
        let ulNode=$('<ul></ul>');
        let array=['Atleast one lowercase alphabet','Atleast one uppercase alphabet','Atleast one digit','Atleast one special character'];
        for(let i of array){
            let liNode=$('<li></li>');
            liNode.text(i);
            ulNode.append(liNode);
        }
        let boldNode=$('b');
        boldNode.text('Password range should be between 5 to 15 characters');
        tdNode.append(spanNode6,ulNode,boldNode);
        pass1Node.css({'border':invalidBorder});
        return false;
    }
    else{
        pass1Node.css({'border':validBorder});
        return true;
    }
} 

function validate7(){
    let yourpass2=pass2Node.val()
    let yourpass1=pass1Node.val();
    spanNode7.text("");
    if(yourpass2===''){
        spanNode7.text("Please enter password");
        pass2Node.css({'border':invalidBorder});
        return false;
    }
    else if(yourpass2!=yourpass1){
        spanNode7.text("Passwords are not matching");
        pass2Node.css({'border':invalidBorder});
        return false;
    }
    else{
        pass2Node.css({'border':validBorder});
        return true;
    }
}

$(document).ready(function(){
  
    $('#showPass').on('click', function(){
       var pass1=$("#pass1");
       if(pass1.attr('type')==='password')
         {
           pass1.attr('type','text');
       }else{
          pass1.attr('type','password');
       }
       var pass2=$("#pass2");
       if(pass2.attr('type')==='password')
         {
           pass2.attr('type','text');
       }else{
          pass2.attr('type','password');
       }
   })
 })
function formValidate(){
    let st1=validate1();
    let st2=validate2();
    let st4=validate4();
    let st5=validate5();
    let st6=validate6();
    let st7=validate7();
    return(st1&&st2&&st4&&st5&&st6&&st7);
}