//make variable for all the select tags in html
//and use d3.select to set them up

// select the user input field
var idSelect = d3.select("#selDataset");

// select the demographic info div's ul list group
var demographicsTable = d3.select("#sample-metadata");

// select the bar chart div
var barChart = d3.select("#bar");

// select the bubble chart div
var bubbleChart = d3.select("bubble");

// select the gauge chart div
var gaugeChart = d3.select("gauge");

// create a function to initially populate dropdown menu with IDs and draw charts by default 
function init() {

    // reset any previous data
    resetData();

    // read in samples from JSON file
    d3.json("../data/samples.json").then((data => {

        //  use a forEach to loop over each name in the array data.names to populate dropdowns with IDs
        data.names.forEach((name => {
            //this code will make dropdown contain all ids as there own instead an array of all of them
            var option = idSelect.append("option");
            option.text(name);
        })); 

        // get the first ID from the list for initial charts as a default
        var initId = idSelect.property("value")

        // plot charts with initial ID
        plotCharts(initId);

    })); 

} 

// create a function to reset divs to prepare for new data
//when this called, the data will be reset 
function resetData() {

    demographicsTable.html("");
    barChart.html("");
    bubbleChart.html("");
    gaugeChart.html("");

};

// create a function to read JSON and plot charts
