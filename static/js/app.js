// from data.js
var tableData = data;

// YOUR CODE HERE!


let tbody = d3.select("tbody");
var filterButton = d3.select("#filter-btn");

function buildTable(data){
    // Start By Clearing Existing Data
    tbody.html("");
    // Loop Through `data` 
    data.forEach((dataRow) => {
        // Append Table Row `tr` to the Table Body `tbody`
        let row = tbody.append("tr");
        // `Object.values` & `forEach` to Iterate Through Values
        Object.values(dataRow).forEach((val) => {
            // Append a Cell to the Row for Each Value
            let cell = row.append("td");
            cell.text(val);
        });
    })
}

buildTable(tableData);
 
  







// Listen for events
filterButton.on("click", function() {
    d3.event.preventDefault();
    
    // Get date input
    var dateInput = d3.select("#datetime").property("value");
    var cityInput = d3.select("#city").property("value").toLowerCase();
    var stateInput = d3.select("#state").property("value").toLowerCase();
    var countryInput = d3.select("#country").property("value").toLowerCase();
    var shapeInput = d3.select("#shape").property("value").toLowerCase();

    // Filter the table with multiple input filters
    filteredTableData = tableData;
    if(dateInput) {
        filteredTableData = filteredTableData.filter(ufodata => ufodata.datetime === dateInput);
    };
    if(cityInput) {
        filteredTableData = filteredTableData.filter(ufodata   => ufodata.city === cityInput);
    };
    if(stateInput) {
        filteredTableData = filteredTableData.filter(ufodata => ufodata.state === stateInput);
    };
    if(countryInput) {
        filteredTableData = filteredTableData.filter(ufodata => ufodata.country === countryInput);
    };
    if(shapeInput) {
        filteredTableData = filteredTableData.filter(ufodata => ufodata.shape === shapeInput);
    };

    // Clear the current table
    tableBody.text("");

    // Enter the filtered table
    filteredTableData.forEach(function(sigthing) {
        var row = tbody.append('tr'); // one row per sighting
        Object.entries(sigthing).forEach(function([key, value]) {
            tbody.append('td').text(value);
        });
    });

});






//66k lines, too much to show limited to 200
//buildTable(filteeredData).slice(0,30)
//buildTable(filtershape);
//d3.selectAll("#filter-btn").on("click", handleClick);


 
