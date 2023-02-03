// const getjoke = async ()=>{
// try{
//     const response =    await fetch("https://api.chucknorris.io/jokes/random");
//     const data = await response.json();
//         const myjoke = document.querySelector("#jokeElement");
//         myjoke.innerHTML=data.value;
// }catch(error){}}
// window.addEventListener("load",()=>{
//     getjoke();
// })
fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=2b4abf5f118206cd6c142910da56')
    .then(data => data.json())
    .then(jokeData => {

        const jokeElement = document.getElementById("jokeElement");

        jokeElement.innerHTML = jokeData.jokeContent;
    })

    // fetch('https://api.chucknorris.io/jokes/random')
    // .then(data => data.json())
    // .then(jokeData => {

    //     const jokeElement = document.getElementById("jokeElement");

    //     jokeElement.innerHTML = jokeData.value;
    // })
