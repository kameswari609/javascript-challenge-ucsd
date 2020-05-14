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
//filterButton.on("click", function() {

function handleClick(){
    d3.event.preventDefault();
    
    // Get date input
    var dateInput = d3.select("#datetime").property("value");
    var cityInput = d3.select("#city").property("value").toLowerCase();
    var stateInput = d3.select("#state").property("value").toLowerCase();
    var countryInput = d3.select("#country").property("value").toLowerCase();
    var shapeInput = d3.select("#shape").property("value").toLowerCase();


    // Filter the table with multiple input filters
    let ufofilterdata = tableData;
  
  // Generate array based on filters
  // 5 inputs
  if (dateInput && cityInput && stateInput && countryInput && shapeInput) {
    var filteredData = ufofilterdata.filter(row => row.datetime === dateInput && row.city === cityInput && row.state === stateInput && row.country === countryInput && row.shape === shapeInput);
  }

    // 4 inputs
    else if (dateInput && cityInput && stateInput && countryInput) {
      var filteredData = ufofilterdata.filter(row => row.datetime === dateInput && row.city === cityInput && row.state === stateInput && row.country === countryInput);
  } else if (dateInput && cityInput && stateInput && shapeInput) {
      var filteredData = ufofilterdata.filter(row => row.datetime === dateInput && row.city === cityInput && row.state === stateInput && row.shape === shapeInput);
  }

    // 3 inputs
    else if (dateInput && cityInput && stateInput) {
      var filteredData = ufofilterdata.filter(row => row.datetime === dateInput && row.city === cityInput && row.state === stateInput);
  } else if (dateInput && cityInput && countryInput) {
      var filteredData = ufofilterdata.filter(row => row.datetime === dateInput && row.city === cityInput && row.country === countryInput);
  } else if (dateInput && cityInput && shapeInput) {
      var filteredData = ufofilterdata.filter(row => row.datetime === dateInput && row.city === cityInput && row.shape === shapeInput);
  } else if (dateInput && stateInput && countryInput) {
      var filteredData = ufofilterdata.filter(row => row.datetime === dateInput && row.state === stateInput && row.country === countryInput);
  } else if (dateInput && stateInput && shapeInput) {
      var filteredData = ufofilterdata.filter(row => row.datetime === dateInput && row.state === stateInput && row.shape === shapeInput);
  } else if (dateInput && countryInput&& shapeInput) {
      var filteredData = ufofilterdata.filter(row => row.datetime === dateInput && row.country === countryInput && row.shape === shapeInput);
  }
 
    // 2 inputs
    else if (dateInput && cityInput) {
      var filteredData = ufofilterdata.filter(row => row.datetime === dateInput && row.city === cityInput);
  } else if (dateInput && stateInput) {
      var filteredData = ufofilterdata.filter(row => row.datetime === dateInput && row.state === stateInput);
  } else if (dateInput && countryInput) {
      var filteredData = ufofilterdata.filter(row => row.datetime === dateInput && row.country === countryInput);
  } else if (dateInput && shapeInput) {
      var filteredData = ufofilterdata.filter(row => row.datetime === dateInput && row.shape === shapeInput);
  } else if (cityInput && stateInput) {
      var filteredData = ufofilterdata.filter(row => row.city === cityInput && row.state === stateInput);
  } else if (cityInput && countryInput) {
      var filteredData = ufofilterdata.filter(row => row.city === cityInput && row.country === countryInput);
  } else if (cityInput && shapeInput) {
      var filteredData = ufofilterdata.filter(row => row.city === cityInput && row.shape === shapeInput);
  } else if (stateInput && countryInput) {
      var filteredData = ufofilterdata.filter(row => row.state === stateInput && row.country === countryInput);
  } else if (stateInput && shapeInput) {
      var filteredData = ufofilterdata.filter(row => row.state === stateInput && row.shape === shapeInput);
  } 

    // 1 input
    else if (dateInput) {
    var filteredData = ufofilterdata.filter(row => row.datetime === dateInput);
  } else if (cityInput) {
      var filteredData = ufofilterdata.filter(row => row.city === cityInput);
  } else if (stateInput) {
      var filteredData = ufofilterdata.filter(row => row.state === stateInput);
  } else if (countryInput) {
      var filteredData = ufofilterdata.filter(row => row.country === countryInput);
  } else if (shapeInput) {
      var filteredData = ufofilterdata.filter(row => row.shape === shapeInput);
  } 
  
  console.log(filteredData);

    
   /*  //if(dateInput) {
      //  filteredTableData = ufofilterdata.filter((ufodata)=> ufodata.datetime === dateInput);
    //};
    //if(cityInput) {
      // filteredTableData = filteredTableData.filter(ufodata   => ufodata.city === cityInput);
   // };
    if(stateInput) {
        filteredTableData = filteredTableData.filter(ufodata => ufodata.state === stateInput);
    };
    if(countryInput) {
       filteredTableData = filteredTableData.filter(ufodata => ufodata.country === countryInput);
    };
    if(shapeInput) {
      filteredTableData = filteredTableData.filter(ufodata => ufodata.shape === shapeInput);
    

 */

    // Clear the current table
    //tableBody.text("");

    // Enter the filtered table
    /* filteredData.forEach(function(ufofilter) {
        var row = tbody.append('tr'); // one row per data
        Object.entries(ufofilter).forEach(function([key, value]) {
            tbody.append('td').text(value);
        });
    }); */


    buildTable(filteredData);

    

};


//66k lines, too much to show limited to 200
//buildTable(filteeredData).slice(0,30)
//buildTable(filtershape);
d3.selectAll("#filter-btn").on("click", handleClick);


 
