import React from 'react';
import DonutChart from '../donut-chart/donut-chart';
import {Link} from 'react-router-dom';
import './percentage-spent.styles.scss';


const PercentageSpent = () => {
    return (
        <div className="dashboard__item dashboard__item--col">
                <div className="card">
                    <div className="card__header">
                        Percentage Spent
                    </div>
                    <div className="card__content">
                        <div className="card__item">
                            <DonutChart />
                        </div>
                    </div>
                </div>
            </div>
    )
  };

  export default PercentageSpent;