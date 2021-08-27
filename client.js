// console.log('JS ready');

$(document).ready(ReadyNow);

function ReadyNow() {
    // console.log('DOM ready');
    // click handler
    $('#submit-button').on('click', appendCityToTable);
    $('#city-table-body').on('click', '.clear-button', clearBackgroundColor)
}

function clearBackgroundColor() {
    // what it this?
    console.log($(this).parent().parent());
    let tableRow = $(this).parent().parent();
    tableRow.removeClass('warm'); // same as $(this).parent().parent().removeClass('warm');
    tableRow.removeClass('cold');
    // tableRow.removeClass('cold'); // or this will also remove all classes!


}

function appendCityToTable() {
    let cityName = $('#city-name').val(); // .val() returns a string
    let temperature = $('#city-temperature').val();
    let tempNumber = parseInt(temperature);
    console.log(cityName, temperature);  

    let rowClass = '';
    if (tempNumber > 75) {
        rowClass = 'warm';
    } else if (tempNumber < 50) {
        rowClass = 'cold';
    }

    $('#city-table-body').append(`
        <tr class="${rowClass}">
            <td>${cityName}</td>
            <td>${temperature}</td>
            <td><button class="clear-button">clear background</button></td>
        </tr>
    `) // another option class="warm" or class="cold"
}