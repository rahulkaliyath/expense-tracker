import React from 'react';
import {Link} from 'react-router-dom';
import BarChart from '../bar-chart/bar-chart';
import './expense-graph.styles.scss';


const ExpenseGraph = () => {
    return (
        <div className="dashboard__item">
                <div className="card">
                    <div className="card__header">
                        Expense
                    </div>
                    <div className="card__content">
                        <div className="card__item">
                        <BarChart />
                        </div>
                    </div>
                </div>
            </div>
    )
  };

  export default ExpenseGraph;