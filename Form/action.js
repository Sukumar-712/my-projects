const nameElem=document.querySelector('#name');
const phnNoElem=document.querySelector('#Phno');
const emailElem=document.querySelector('#Email');
const msgElem=document.querySelector('#Message');
const btnElem=document.querySelector('.btn');

const nameError=document.querySelector('#name-error');
const phnNoError=document.querySelector('#num-error');
const mailError=document.querySelector('#mail-error');
const msgError=document.querySelector('#Textarea-error');
const submitError=document.querySelector('#submit-error');
// const intervelId=setInterval((elem)=>{
//     elem.classList.add('invalid');
// },3000)

nameElem.addEventListener('keyup',()=>{validateName();});
phnNoElem.addEventListener('keyup',()=>{validatePhno();});
emailElem.addEventListener('keyup',()=>{validateMail();});
msgElem.addEventListener('keyup',()=>{validateMsg();});
btnElem.addEventListener('click',()=>{validateForm();
    validateMail();
    validateMsg();
    validateName();
    validatePhno();
})
function validateName(){
    const nam=document.querySelector('#name').value;
    if(nam.length===0){
        nameError.innerHTML='<i class="bi bi-x-circle-fill text-danger"></i>';
        nameError.classList.add('invalid');
        setTimeout(()=>{
            nameError.classList.remove('invalid');
        },2000);
        return false;
    }
    if(!nam.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='<i class="bi bi-x-circle-fill text-danger"></i>';
        nameError.classList.add('invalid');
        setTimeout(()=>{
            nameError.classList.remove('invalid');
        },2000);
        return false;
    }
    nameError.innerHTML='<i class="bi bi-check-circle-fill text-success"></i>';
    return true;    
}
function validatePhno(){
    const phnNo=document.querySelector('#Phno').value;
    if(phnNo.length===0){
        phnNoError.innerHTML='<i class="bi bi-x-circle-fill text-danger"></i>';
        phnNoError.classList.add('invalid');
        setTimeout(()=>{
            phnNoError.classList.remove('invalid');
        },2000);
        return false;
    }
    
    if((phnNo.length<10||phnNo.length>10)){
        phnNoError.innerHTML='<i class="bi bi-x-circle-fill text-danger"></i>';
        phnNoError.classList.add('invalid');
        setTimeout(()=>{
            phnNoError.classList.remove('invalid');
        },2000);
        return false;
    }
    if(!phnNo.match(/^[0-9]*$/)){
        phnNoError.innerHTML='<i class="bi bi-x-circle-fill text-danger"></i>';
        phnNoError.classList.add('invalid');
        setTimeout(()=>{
            phnNoError.classList.remove('invalid');
        },2000);
        return false;
    } 
    phnNoError.innerHTML='<i class="bi bi-check-circle-fill text-success"></i>';
    return true; 

}
function validateMail(){
    const email=document.querySelector('#Email').value;
    if(email.length===0){
        mailError.innerHTML='<i class="bi bi-x-circle-fill text-danger"></i>';
        mailError.classList.add('invalid');
        setTimeout(()=>{
            mailError.classList.remove('invalid');
        },2000);
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        mailError.innerHTML='<i class="bi bi-x-circle-fill text-danger"></i>';
        mailError.classList.add('invalid');
        setTimeout(()=>{
            mailError.classList.remove('invalid');
        },2000);
        return false;
    }
    mailError.innerHTML='<i class="bi bi-check-circle-fill text-success"></i>';
    return true; 
}
function validateMsg(){
    const msg=document.querySelector('#Message').value;
    if(msg.length<30){
        msgError.innerHTML='<i class="bi bi-x-circle-fill text-danger"></i>';
        msgError.classList.add('invalid');
        setTimeout(()=>{
            msgError.classList.remove('invalid');
        },2000);
        return false;
    }
    msgError.innerHTML='<i class="bi bi-check-circle-fill text-success"></i>';
    return true; 

}
function validateForm(){
    if(validateMail()&&validateMsg()&&validateName()&&validatePhno()){
        submitError.innerHTML='Submited';
        return true; 
    }else{
        submitError.innerHTML='Please fix the Error';
       
        return false;
    }
    
}
