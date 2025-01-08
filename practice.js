let formValidate= (event)=>{
    console.log(event)
    event.preventDefault();
    const form =event.target;
    let isValid=true;
    for(let i=0;i<form.elements.length;i++){
        const input=form.elements[i];
        const value=input.value.trim();

        if(input.hasAttribute("required")&& value===""){
            isValid=false;
            input.classList.add("invalid")
        }
        else{
            input.classList.remove("invalid");
        }
    }

    const message=document.getElementById("message");
    if(isValid){
        message.classList.remove("error");
        message.textContent="Form submitted successfully";
    }
    else{
        message.classList.add("error");
        message.innerText="Please fill out the required fields";
    }
};
const form=document.getElementById("myForm");
console.log(form);
form.addEventListener("submit",formValidate)