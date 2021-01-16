import React from 'react';
import './dashboard.styles.scss';

import SideBar from '../../components/sidebar/sidebar';
import TotalExpense from '../../components/total-expense/total-expense';
import Balance from '../../components/balance/balance';
import AddExpense from '../../components/add-expense/add-expense';
import Savings from '../../components/savings/savings';
import PercentageSpent from '../../components/percentage-spent/percentage-spent';
import ActivityFeed from '../../components/activity-feed/activity-feed';
import ExpenseGraph from '../../components/expense-graph/expense-graph';



import {Link} from 'react-router-dom';


const Dashboard = () => {


    return (
        <div className="admin">
   
        <SideBar />

        <main className="admin__main">
            <div className="dashboard">
            
                <TotalExpense />

                <Balance />

                <AddExpense />

                <Savings />

                <ActivityFeed />

                <PercentageSpent />
                    
                <Savings />

                <ExpenseGraph />

                <ActivityFeed />
            
                
                <div className="dashboard__item dashboard__item--full">
                    <div className="card">
                        <div className="card__header">
                            Card full width
                        </div>
                        <div className="card__content">
                            <div className="card__item">
                        
                            </div>
                        </div>
                    </div>
                </div>

                
            
        </div>
        
    </main>
 
</div>
        
   )
  };

  export default Dashboard;