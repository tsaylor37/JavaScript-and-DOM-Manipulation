// Retrieving data from data.js 
var tableData = data;

// Define tbody, input field, filter button and reset button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#filter-btn");
var $resetBtn = document.querySelector("#reset-btn");


// Event listener for searchButton & resetButton and call when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
$resetBtn.addEventListener("click", handleResetButtonClick);



// Set filteredUFO to data table
var filteredUFO= tableData; 

// Render table and start data loop
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredUFO.length; i++) {
    // Set current UFO object and its fields variables
    var ufo = filteredUFO[i];
    var observations = Object.keys(ufo);
    // Insert new row in tbody and set index
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < observations.length; j++) {
      // For every observations in the ufo object, create a new cell
      var observation = observations[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufo[observation];
    }
  }
}
function handleResetButtonClick() {
  location.reload();
}
function handleSearchButtonClick(event) {
  // Format user's search, remove leading/trailing whitespace and maing string lowercase.
  var filterDate = $dateInput.value.trim();

  if (filterDate != "") {
    filteredUFO = filteredUFO.filter(function (ufo) {
      var UFODate = ufo.datetime;
      return UFODate === filterDate;
      });
  }
  else {filteredData};
  renderTable();
}

  function handleResetButtonClick() {
    location.reload();
  }
   
  // Render table when page loads
  renderTable();

