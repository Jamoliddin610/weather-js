let elForm = document.querySelector('form')
let elInput = document.querySelector('input')
let elInner = document.querySelector('.inner')
let country = ""

elForm.addEventListener('submit',(e)=>{

    e.preventDefault()
    country = elInput.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=33dedde6287575d237be2e1c44271762`)
    .then((res) => res.json())
    .then((data)=>{
        elInner.innerHTML = `
        <div class="about-wrapper about">
        <h1 class="about__name">${data.name}</h1>
        <span class="about__degree">${data.main.temp}<sup>0</sup>C</span>
        <p class="about__weather">${data.weather[0].main}</p>
        <p class="about__humadity">Humidity: ${data.main.humidity}</p>
        <p class="about__wind">Wind Speed: ${data.wind.speed} km/h</p>
      </div>
      <div class="map-wrapper">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d231349.90450351135!2d${data.coord.lon}!3d${data.coord.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1650374986650!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
        `
        console.log(data);
    }).catch((err)=>{
        alert("Enter the city name correctly")
    })

    elInput.value = ""
        
})

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tashkent&units=metric&appid=33dedde6287575d237be2e1c44271762`)
    .then((res) => res.json())
    .then((data) => {
        elInner.innerHTML = `
        <div class="about-wrapper about">
        <h1 class="about__name">${data.name}</h1>
        <span class="about__degree">${data.main.temp}<sup>0</sup>C</span>
        <p class="about__weather">${data.weather[0].main}</p>
        <p class="about__humadity">Humidity: ${data.main.humidity}</p>
        <p class="about__wind">Wind Speed: ${data.wind.speed} km/h</p>
      </div>
      <div class="map-wrapper">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d231349.90450351135!2d${data.coord.lon}!3d${data.coord.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1650374986650!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
        `
    })


// api.openweathermap.org foydalandim