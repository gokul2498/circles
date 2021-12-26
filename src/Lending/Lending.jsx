import React from 'react';
import '../App.scss';
// import AllLoanApplications from './Feed/savingCircle';
// import UpcomingEmi from './Feed/upcomingEmi';
import SavingBox from './Feed/savingBox';
import AllLoanApplications from './Feed/loanApplication'
import ShortlistedLoanApplication from './Feed/shortlistedLoanApplication';
import ActiveCircles from '../components/circlesCard/ActiveCircles'
import Activity  from '../components/todayActivity/Activity'
import DisplayCard from '../components/displayCards/displayCard'
import ButtonComponent from '../components/buttonComponent/buttonComponent'

export default function Lending() {
    return (
        <div className='lending-container'>
            <div className="feed">
                <SavingBox/>
                <ShortlistedLoanApplication/>    
                <div className="saveDashcard">
                    <div className="header">
                    <div class="img-div"style={{backgroundColor: '#F2E8F3'}}>
                        <img src={'/images/colored-icons/saving.png'} alt="img"/>            
                    </div>
                    <div className='dash-card-text'>All Lended Borrowers</div>
                    </div>
                <DisplayCard type="saving"/>
                </div>          
                <AllLoanApplications/> 
                
            </div>
            <div className="level">
            <div className="create-block" style={{marginTop:'120px'}}>  <ButtonComponent text='Look for Borrower'/> </div>

               <ActiveCircles/>
                <Activity/>
            </div>
        </div>
    )
}