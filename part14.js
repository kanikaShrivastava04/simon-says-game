/*let url = 'https://dog.ceo/api/breeds/image/random';
//Example(GET request):
axios.get(url)
.then(response => {
    console.log(response.data);
    console.log(response.data.message);
})
.catch(error=>{
    console.error('Axios error:' , error);
});

axios.post(url, {
  name: 'Kanika',
  age: 22
})
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.error(error);
}); 
*/

//Dong picture API
// Make sure Axios is loaded (via CDN or installed in your project)

/*axios.get('https://dog.ceo/api/breeds/image/random')
  .then(response => {
    const dogImageUrl = response.data.message;
    console.log(dogImageUrl);

    // Display image
    const img = document.createElement('img');
    img.src = dogImageUrl;
    img.alt = 'Random Dog';
    document.body.appendChild(img);
  })
  .catch(error => {
    console.error('Axios error:', error);
  });*/
//using Fetch: 
/*fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    const dogImageUrl = data.message;
    console.log(dogImageUrl);

    // Display image
    const img = document.createElement('img');
    img.src = dogImageUrl;
    img.alt = 'Random Dog';
    document.body.appendChild(img);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });*/
// How to Send Headers with Axios 
const Url = "https://icanhazdadjoke.com";
 async function getJokes(){
    try{
        const config = {header : {Accept:'application/json'}};
        let res = await axios.get(Url,config);
      console.log(res.data);
    } catch(err){
        console.log(err);
    }
 }
