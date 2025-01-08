
function handleData(id){
    console.log(id);
    let el=document.getElementById(id);
    console.log(el);
    if(el.style.display==="none"){
        el.style.display="block";
    }
    else{
        el.style.display="none";
    }
}