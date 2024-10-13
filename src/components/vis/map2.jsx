import * as d3 from "d3";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function Map(props) {
  const { mapData, populationData } = props;

  const width = 800;
  const height = 600;

  // 投影法の設定
  const projection = d3.geoMercator().fitSize([width, height], mapData);
  const path = d3.geoPath().projection(projection);

  const featscale = d3
    .scaleLinear()
    .domain(d3.extent(populationData.map((e) => e.density)))
    .range([0, 1]);

  const mapColors = d3.interpolateBlues;

  return (
    <svg width={width} height={height}>
      {mapData.features.map((d, i) => {
        const cityCode = d.properties.N03_007; // 各市町村のコード

        const cityData = populationData
            .filter((e) => e.地域コード)
            .find((e) => e.地域コード === cityCode);
        const density =
        cityData ?
          cityData.density 
        : 0; // 各市区町村の人口
        const fillColor = mapColors(featscale(density)); // 人口に基づく色
        console.log(cityData);
        console.log(density);
        console.log(fillColor);

        return (
          <path
            key={i}
            d={path(d)} // 地理データを描画
            fill={fillColor} // 色を設定
            stroke="black" // 境界線の色
            strokeWidth={0.5}
          />
        );
      })}
    </svg>
  );
}
