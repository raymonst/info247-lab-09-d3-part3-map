#INFO 247 Lab 09: D3.js part 3 (Maps)

##Instructions

###Setup
1. Clone this repository to your computer.
2. Open "index.html" in your browser.
3. Open "script.js" in your text editor.

###Goals
In this lab, you are building a simple chloropleth map using D3. Take a look at screen.png for what the final result may look like.

###More practice with D3
0. The geojson file is already set up. However, if you'd like to go through the process of converting to geojson, you can download the shape file from the Census website (http://www.census.gov/geo/maps-data/data/tiger-line.html). Then, use programs such as QGIS (http://www.qgis.org/en/site/) to convert the shape file to geojson.
1. To draw a basic map, you can follow the tutorial here: http://chimera.labs.oreilly.com/books/1230000000345/ch12.html
2. You have three basic tasks:
  * Draw the chloropleth map:
    * First, take a brief look at the file structure in the geojson file.
    * Use D3 to read this file and draw the map.
    * The color corresponds to the state's alphabetical order. Although this sounds a little weird, the data for alphabetical order is already contained in the original shape file, so you won't have to do additional data transformation. The point is to practice using D3 to change visual properties based on data from a geojson file.
  * Adding tooltip:
    * This contains the name of the state.
    * The tooltip should appear when the user hovers over a state and it should also follow the user's mouse movement.
  * Setting up a projection:
    * You can read about different projections here: https://github.com/mbostock/d3/wiki/Geo-Projections
    * For this exercise, we'll stick with albersUsa. You may find that you need to adjust the scale as well.
3. You only need to edit the script. You may edit the HTML or CSS files to accomplish the same result, but it's not necesarry.