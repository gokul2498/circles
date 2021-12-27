import React from 'react'
import ActiveCircleNode from './ActiveCircleNode'
import './circlesInfoCard.scss'
const borrow_data = {
          getLevelInfo: [{
            Name: 'CSE III Borrow',
            Balance: '1000000',
            usd: '$2200.00',
            circleLimit: '152020.1456',
            members: 5,
            iconBg: '#FFE2DD',
            CreditDetail: '60%',
            Type: 'borrow',
          }],
        }
const saving_data = {
            getLevelInfo: [{
              Name: 'Football Team Saving',
              Balance: '1000000',
              usd: '$2200.00',
              circleLimit: '100000.00',
              PaidedDetail: 4,
              noOfParticipants : 10,
              iconBg: '#FFE2DD',
              Months: '20',
              Type: 'saving',
            }],
          };
export default function ActiveCircles() {
    return (
        <div>
            <h5 className="circles_info">Active Circles</h5>
            <ActiveCircleNode circleData = {borrow_data}/>
            <ActiveCircleNode circleData = {saving_data}/>
            <ActiveCircleNode circleData = {borrow_data}/>
        </div>
    )
}


