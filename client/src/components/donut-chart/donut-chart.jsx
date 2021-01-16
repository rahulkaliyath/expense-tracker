import React from 'react';
import {Link} from 'react-router-dom';
import './donut-chart.styles.scss';


const DonutChart = () => {
    return (
        <div class="donut-card">
  <div class="donut-chart chart">
    <div class="slice one"></div>
    <div class="slice two"></div>
    <div class="chart-center">
      <span></span>
    </div> 
  </div>
</div>
   )
  };

  export default DonutChart;