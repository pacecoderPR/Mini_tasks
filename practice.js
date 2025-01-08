
function loadImage(url,callback){
    var img=new Image();
    img.addEventListener('load',()=>{
        callback(null,img);
    })
    img.addEventListener('error',()=>{
        callback(new Error(`failed to load the img at ${url}`));
    })
    img.src=url;
}






loadImage('https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg',(err,data)=>{
    if(err)console.log(err);
    else {
        document.getElementById("khali").appendChild(data);
    }
})
