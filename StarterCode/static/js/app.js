// from data.js
var tableData = data;

// YOUR CODE HERE!
function table(data){
    var tbody = d3.select('tbody').text('');
    data.forEach(sightings =>{
        var row = tbody.append('tr');
        Object.entries(sightings).forEach(([key,value]) =>{
            var cell = tbody.append('td');
            cell.text(value);
        });
    });
}
//returns the table for the first time
table(tableData);

var filter = d3.select("#filter-btn");
//Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

function change() {
  // Prevent the page from refreshing
 d3.event.preventDefault();

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
    
  var filteredData = tableData.filter(alien => alien.datetime === inputValue);

table(filteredData);
}

filter.on('click', change)