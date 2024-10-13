import * as d3 from "d3";
import PropTypes from "prop-types";

Map.propTypes = {
  mapData: PropTypes.object.isRequired,
};

export default function Map(props) {
  const mapData = props.mapData;

  const width = 800;
  const height = 600;

  const projection = d3.geoMercator().fitSize([width, height], mapData);
  const path = d3.geoPath().projection(projection);

  // Add circles:
  svg
    .selectAll("myCircles")
    .data(markers)
    .enter()
    .append("circle")
    .attr("cx", function (d) {
      return projection([d.long, d.lat])[0];
    })
    .attr("cy", function (d) {
      return projection([d.long, d.lat])[1];
    })
    .attr("r", 14)
    .style("fill", "69b3a2")
    .attr("stroke", "#69b3a2")
    .attr("stroke-width", 3)
    .attr("fill-opacity", 0.4);

  // Map and projection
/*  var projection = d3
    .geoMercator()
    .center([2, 47]) // GPS of location to zoom on
    .scale(1020) // This is like the zoom
    .translate([width / 2, height / 2]); */

  return (
    <svg width={width} height={height}>
      {mapData.features.map((d, i) => (
        <path
          key={i}
          d={path(d)}
          fill="none"
          stroke="black"
          strokeWidth={0.5}
        />
      ))}
    </svg>
  );
}
