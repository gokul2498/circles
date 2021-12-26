import React from 'react';
import '../App.scss';
import AllSavingCircles from './Feed/savingCircle';
import UpcomingEmi from './Feed/upcomingEmi';
import SavingBox from './Feed/savingBox';
import ActiveCircles from '../components/circlesCard/ActiveCircles'
import Activity  from '../components/todayActivity/Activity'
import DisplayCard from '../components/displayCards/displayCard'
import ButtonComponent from '../components/buttonComponent/buttonComponent'

export default function Saving() {
    return (
        <div className='saving-container'>
            <div className="feed">
                <SavingBox/>
                <UpcomingEmi/>
                <div className="saveDashcard">
                    <div className="header">
                    <div class="img-div" style={{backgroundColor: '#F2E8F3'}}>
                        <img src={'/images/colored-icons/saving.png'} alt="img"/>            
                    </div>
                    <div className='dash-card-text'>Upcoming Bidding</div>
                    </div>
                <DisplayCard type="saving"/>
                </div>
                
                <AllSavingCircles/>
            </div>
            <div className="level">
            <div className="create-block" style={{marginTop:'120px'}}>  <ButtonComponent text='Automate Bidding'/> </div>

               <ActiveCircles/>
                <Activity/>
            </div>
        </div>
    )
}
