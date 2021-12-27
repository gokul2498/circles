import React from 'react';
import Circles from './Feed/circles';
import CirclesInfo from './Level/CirclesInfo';
import CircleActivity from './Level/CircleActivity';
import CreateCircle from './Level/CreateCircle';
import BorrowSaving from './Feed/BorrowSaving';
import HistoryBlock from './Feed/HistoryBlock';
import '../App.scss'
export default function Dashboard() {
    return (
        <div className='dashboard-container'>
            <div className="feed">
                <div className="connect">
                    <button type="button" class="connect-btn">Connect</button>
                </div>
                <div className="Active_list"> 
                       <BorrowSaving/>
                </div>
                <div className="billing-details-section">
                  <Circles/>
                </div>
              <HistoryBlock/>
            </div>
            <div className="level">
                <CreateCircle/>
                <CirclesInfo/>
                <CircleActivity/>
            </div>
        </div>
    )
}
