$(document).ready(function() {

  // d3 map tutorial:
  // http://chimera.labs.oreilly.com/books/1230000000345/ch12.html

  // ----------------------------------------------------------------------------------------------------------------
  // INITIAL SETUP

	var w = 1000;
	var h = 600;
	var padding = 50;
	var viz = d3.select("#viz");
  var color = d3.scale.linear()
    .domain([0,56])
    .range(["#cbb320","#693acb"]);
	viz.attr("width", w).attr("height", h);



  // ----------------------------------------------------------------------------------------------------------------
  // SCALE & PROJECTION

  /*
  // note: work on this section after you've successfully drawn the map

  // basic example of projection:
  var projection = d3.geo.albersUsa()
    .translate([100,100])
    .scale([1000]);
  */

  // TASK
  // set up an albersUSA projection
  var projection;

  // TASK
  // include the projection in the path generator below (after you've set it up above)
	var path = d3.geo.path();
	


  // ----------------------------------------------------------------------------------------------------------------
  // DRAW

	d3.json("_data/states.geojson", function(json) {  	

    /*
    // basic example of drawing map:
    svg.selectAll("path")
       .data(json.features)
       .enter()
       .append("path")
       .attr("d", path);
    */
    
    // TASK
    // draw a US map using the included geojson file
    // each state should be colored according to its alphabetical order, which is identified by the "STATE" key in the geojson file
    // how you can change the color by taking advantage of the .domain() and .range() methods? (hint: see "var color")

    // TASK
    // once you've successfully drawn the map, add a simple "hover" interaction 
    // when the user hovers over a state, a tooltip with the state's name should appear and it should follow the user's mouse movement

	});

});

