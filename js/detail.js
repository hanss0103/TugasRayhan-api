const api ='https://api.jikan.moe/v4/seasons/now'; 

fetch(api)
.then((response) => response.json())
.then((res) => {
    const p = res.data;
    console.log(res);
    p.map((a) => {
        const season = document.querySelector('.season')
        const figure = document.createElement('figure');
        const figcaption = document.createElement('figcaption');
        const img = document.createElement('img');
        img.setAttribute('src',a.images.jpg.image_url);
        const judul = document.createElement('h4');
        judul.innerText = a.titles[0].title;
        const an = document.createElement('a');
        an.setAttribute('href',a.trailer.url);
        const an1 = document.createElement('a');
        an1.setAttribute('href',a.url);
        const eps = document.createElement('h4');
        eps.innerText = 'Episode : ' + a.episodes; 
        const type = document.createElement('h4');
        type.innerText = 'Type : ' + a.type;
        const status = document.createElement('h4');
        status.innerText = 'Status : ' + a.status;

        figcaption.appendChild(an);
        figcaption.appendChild(an1);
        figure.appendChild(img);
        figure.appendChild(figcaption);
        figcaption.appendChild(judul);
        figcaption.appendChild(type);
        figcaption.appendChild(status);
        an.appendChild(img);
        an1.appendChild(judul)
        figcaption.appendChild(eps);
        season.appendChild(figure);
    });
});