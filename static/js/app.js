// from data.js
var tableData = data;

// YOUR CODE HERE!


let tbody = d3.select("tbody");


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


// Triggers a Function When the datetime Button is clicked
function handleClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value").toLowercase();
    let state = d3.select("#state").property("value").toLowercase();
    let country = d3.select("#country").property("value").toLowercase();
    let shape = d3.select("#shape").property("value");

    let anotherdata = tableData;

    // Check if a Date was Entered & Filter Data Using that Date;
    if(date) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterDate = anotherdata.filter((re) => re.datetime === date);
    }
    // Build Table with Filtered Data
     //buildTable(filterData);

   if(city) {

    filtercity = filterData.filter((re) => re.city === city);



   }

   if(state) {

    filterstate = filtercity.filter((re) => re.state === state);

      }


    if(country) {

        filtercountry = filterstate.filter((re) => re.country === country);
    
          }

    if(shape) {

        filtershape = filtercountry.filter((re) => re.shape === shape);
        
    }




buildTable(filtershape);


}




d3.selectAll("#filter-btn").on("click", handleClick);



// Build Table with data.js 
buildTable(tableData);