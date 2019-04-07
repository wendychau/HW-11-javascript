// from data.js
var tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");

// function to build table

function buildTable(data){
    // clear any existing data
    tbody.html("");

    data.forEach((dataRow) => {
        // console.table(dataRow);
        let row = tbody.append("tr")

        // console.table(Object.values(dataRow));
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);

        });
    })
}

// event that calls a function, handleClick
function handleClick(){
    d3.event.preventDefault() // prevent form from refresh
    let date = d3.delect('#datetime').property('value');
    let filterData = tableData;

    // check if date entered & filter data using date
    // then apply data to table data to keep matching rows
    if(date){
        filterData = filterData.filter((row) => row.datetime === date);
    }

    buildTable(filterData);
}


d3.selectAll('#filter-btn').on('click', handleClick);

buildTable(tableData);