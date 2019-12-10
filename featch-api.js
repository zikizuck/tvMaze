

const inputEl = document.querySelector('.input');
const formEl = document.querySelector('.search-form');

function getShows(name) {
    return fetch("https://api.tvmaze.com/search/shows?q=" + encodeURI(name));
}

function getJSON(response) {
    return response.json();
}

function getRelevantData(show) {
    return show.show.name ;

}

let renderShows = (shows) => {
    document.querySelector('.shows-box').innerHTML = '';

    shows.forEach((show) => {
        let cardDiv = document.createElement('div');
        let showName = document.createElement('p');
        let showScore = document.createElement('p');
        let imgLink = document.createElement('a');

        imgLink.href = show.show.url;
        imgLink.style.cursor = 'alias';

        showName.textContent = getRelevantData(show);
        showScore.textContent = show.score;

        if (show && show.show && show.show.image && show.show.image.medium) {
            let img = document.createElement('img');
            img.src = show.show.image.medium;
            imgLink.appendChild(img);
        }
        cardDiv.classList.add("card");
        showName.classList.add("name");
        showScore.classList.add("card-info");
        cardDiv.appendChild(imgLink);
        cardDiv.appendChild(showName);
        cardDiv.appendChild(showScore);
        document.querySelector('.shows-box').appendChild(cardDiv);

    });
};

function onSubmit(event) {
    event.preventDefault();

    getShows(inputEl.value)
        .then(getJSON)
        .then(renderShows)

}
formEl.addEventListener('submit', onSubmit);

window.addEventListener('DOMContentLoaded',onSubmit);

