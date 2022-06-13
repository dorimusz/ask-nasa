const selector = document.querySelector('#dateSelector');
const title = document.querySelector('#title');
const todayDate = document.querySelector('#date');
const image = document.querySelector('#img');
const explanation = document.querySelector('#explanation') 

const processData = async(date)=> {
    const todayPost = await fetch('https://api.nasa.gov/planetary/apod?api_key=ilxewf5dwTydyiWBVBBDT0guXcZExhkquL7KYXm9');
    const result = await todayPost.json();
    console.log(result);
    //console.log(result.explanation);

    image.src = result.url;
    title.innerHTML = result.title;
    explanation.innerHTML = result.explanation;

    const olderPost = await fetch(`https://api.nasa.gov/planetary/apod?api_key=ilxewf5dwTydyiWBVBBDT0guXcZExhkquL7KYXm9&date=${date}`);
    const olderResult = await olderPost.json();
    console.log(olderPost);
    selector.addEventListener("change", () => {
        processData(selector.value)
    })
        todayDate.innerHTML = olderResult.date;
        image.src = olderResult.url;
        title.innerHTML = olderResult.title;
        explanation.innerHTML = olderResult.explanation;
    
}

//The date today
let today = new Date();
console.log(today);
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
console.log(date);


processData(date);