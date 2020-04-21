(function () {

    let cities = [
        { city: "Washington D.C", population: 702455, country: "United States" },
        { city: "Paris", population: 2148271 , country: "France" },
        { city: "Brasilia", population: 4235000, country: "Brazil" },
        { city: "Rome", population: 2879728, country: "Italy" },
        { city: "London", population: 8173941, country: "England" }
    ];


    let table = document.querySelector("table");
    let TableHeadings = Object.keys(cities[0]);
    table.classList.add("table")
    generateTableHead(table, TableHeadings);
    generateTable(table, cities);

})();

function generateTableHead(table, TableHeadings) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let heading of TableHeadings) {
        let th = document.createElement("th");
        let text = document.createTextNode(heading);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

