

function fetchData(url,callback){
    fetch(url)
    .then(response=>response.json())
    .then (data=>callback(null,data))
    .catch(error=>callback(error,null));
}

fetchData('https://catfact.ninja/facts',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})