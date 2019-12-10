function GetSingleProduct(code) {
    var api = $('#api-key').val();
    $.ajax({
        url: "https://robarcko-webshop-api.azurewebsites.net/Api/Product/" + code,
        type: "GET",
        beforeSend: function (xhr)
        {
            xhr.setRequestHeader('aaf5d4cb-bb40-4d93-b92a-d6a3fd9aec47', api);
        },
        success: function (data) {
            $('#jsonResponse').html(JSON.stringify(data));
        }
    });
}
function getRelevantData(unit) {
    return unit.show.name ;

}

let renderShows = (shows) => {
    document.querySelector('.shows-box').innerHTML = '';

    shows.forEach((unit) => {
        let cardDiv = document.createElement('div');
        let showName = document.createElement('p');
        let showScore = document.createElement('p');
        let imgLink = document.createElement('a');

        imgLink.href = unit.show.url;
        imgLink.style.cursor = 'alias';

        showName.textContent = getRelevantData(unit);
        showScore.textContent = show.score;

        if (unit && unit.show && unit.show.image && unit.show.image.medium) {
            let img = document.createElement('img');
            img.src = unit.show.image.medium;
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
