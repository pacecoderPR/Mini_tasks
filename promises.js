
async function fetchData(urls){
  try{
      const responses=await Promise.all(urls.map(url=>fetch(url)))
      const data=await Promise.all(responses.map(response=>response.json()));
      return data;
  }
  catch(err){
    return Promise.reject(err);
  }
}



const urls=[
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/comments/1",
    "https://jsonplaceholder.typicode.com/albums/1"
]

fetchData(urls)
.then(responses=> console.log(responses))
.catch(err=> console.error(err))