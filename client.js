// console.log('JS ready');

$(document).ready(ReadyNow);

function ReadyNow() {
    // console.log('JQ ready');
    // click handler
    $('#submit-button').on('click', appendCityToTable);
}

function appendCityToTable() {
    let cityName = $('#city-name').val(); // .val() returns a string
    let temperature = $('#city-temperature').val();
    console.log(cityName, temperature);  

    $('#city-table-body').append(`
        <tr>
            <td>${cityName}</td>
            <td>${temperature}</td>
        </tr>
    `)
}