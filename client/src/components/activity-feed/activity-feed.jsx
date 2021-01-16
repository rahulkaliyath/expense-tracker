import React from 'react';
import {Link} from 'react-router-dom';
import Feed from '../feed/feed';

import './activity-feed.styles.scss';


const ActivityFeed = () => {
    return (
        <div className="dashboard__item">
                <div className="card">
                    <div className="card__header">
                        Activity Feed
                    </div>
                    <div className="card__content">
                        <div className="card__item">
                        <Feed />
                        <Feed />
                        <Feed />
                        
                        <Feed />

                        
                        </div>
                    </div>
                </div>
            </div>
    )
  };

  export default ActivityFeed;