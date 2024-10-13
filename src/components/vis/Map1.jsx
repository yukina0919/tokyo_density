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
