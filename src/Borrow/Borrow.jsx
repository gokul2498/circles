import React from 'react'
import ShortListedLender from './Feed/shortListedLender'
import AllBorrowCircles from './Feed/borrowCircles'
import '../App.scss'
import ActiveCircles from '../components/circlesCard/ActiveCircles'
import Activity  from '../components/todayActivity/Activity'
import BorrowBox from './Feed/BorrowBox'
import DisplayCard from '../components/displayCards/displayCard'
import ButtonComponent from '../components/buttonComponent/buttonComponent'

export default function Borrow() {
    return (
        <div className="borrow-container">
            <div className="feed">
                <BorrowBox/>
               <ShortListedLender/>
               <div className="saveDashcard">
                    <div className="header">
                    <div class="img-div" style={{backgroundColor: '#FFF4F2'}}>
                        <img src={'/images/colored-icons/borrow.png'} alt="img"/>            
                    </div>
                    <div className='dash-card-text'>Active Loans</div>
                    </div>
                <DisplayCard type="borrow"/>
                </div>
               
                <AllBorrowCircles/>
            </div>
            <div className="level">
            <div className="create-block" style={{marginTop:'120px'}}>  <ButtonComponent text='Application'/> </div>

              
                <ActiveCircles/>
                <Activity/>
            </div>
        </div>
    )
}
