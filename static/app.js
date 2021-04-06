//Read in json file and console log to test it 
d3.json("../data/samples.json").then((importedData) => {
    console.log(importedData);
    var data = importedData;


});

//first variable is drawChart with the function...
var drawChart = function(x_data, y_data, hoverText, metadata) {

    //using d3 to select sample metadata and grab key value pairs
    var metadata_panel = d3.select("#sample-metadata");
    metadata_panel.html("");
    Object.entries(metadata).forEach(([key, value]) => {
        metadata_panel.append("p").text(`${key}: ${value}`);
    });
    
    //establishing first trace
    var trace = {
        x: x_data,
        y: y_data,
        text: hoverText,
        type: 'bar',
        //orientation 'h'= horizontal
        orientation: 'h'
    };
    
    //making an array of trace so it can be plotted
    var data = [trace];
  
    //plot with plotly
    Plotly.newPlot('bar', data);
  
    //establishing second trace as a scatter this time
    var trace2 = {
        x: x_data,
        y: y_data,
        text: hoverText,
        mode: 'markers',
        marker: {
            size: y_data,
            color: x_data
        }
    };
    
    
    //making an array of trace so it can be plotted
    var data2 = [trace2];
  
    //plot with plotly...this time as "bubble"
    Plotly.newPlot('bubble', data2);
  
  
  };

  //populating the dropdown menu so it will return the values of what user chooses
  var populateDropdown = function(names) {

    //selDataset is the id we are looking for
    var selectTag = d3.select("#selDataset");
    //various options in dropdown
    var options = selectTag.selectAll('option').data(names);
  
    //actually populates the dropdown with all the values in the dataset
    options.enter()
        .append('option')
        .attr('value', function(d) {
            return d;
        })
        .text(function(d) {
            return d;
        });
  
  };
