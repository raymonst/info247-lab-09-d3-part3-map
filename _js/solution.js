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

  var projection = d3.geo.albersUsa()
    .translate([w/2, h/2])
    .scale([1000]);
	var path = d3.geo.path()
	  .projection(projection);
	


  // ----------------------------------------------------------------------------------------------------------------
  // DRAW

	d3.json("_data/states.geojson", function(json) {
    viz.selectAll("path")
      .data(json.features)
      .enter()
      .append("path")
      .attr({
        "d" : path,
        "fill" : function(d, i) {
          return color(d.properties.STATE);
	     	},
	     	"state" : function(d, i) {
          return d.properties.NAME;
	     	} 
      })
      .on("mouseenter", function() {
        $(this).css({"opacity":.9});
        var tooltipText = $(this).attr("state");
        $("#tooltip").text(tooltipText).show();
      }).on("mouseleave", function() {
        $(this).css({"opacity":1});
        $("#tooltip").hide();
      }).on("mousemove", function(){
        $("#tooltip").css({"left":event.pageX + 10, "top":event.pageY + 10});
      });

	});

});

