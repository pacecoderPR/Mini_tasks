// fetch api using normal callback function

async  function fetchData(url, callback){
    try{
        const res=await fetch(url);
      const data=await res.json();
    return Promise.resolve(data)
    }
    catch(err){
        return Promise.reject(err);
        
    }
      

}



fetchData('https://jsonplaceholder.typicode.com/posts/1')
.then(data => console.log(data))
.catch(error=> console.error(error));
