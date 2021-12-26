import React from 'react'
import CirclesInfoCard from '../../components/circlesCard/ActiveCircleNode'
import './Level.scss'
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
export default function CirclesInfo() {
    return (
        <div>
            <h5 className="circles_info">Circles Info</h5>
            <CirclesInfoCard circleData = {borrow_data}/>
            <CirclesInfoCard circleData = {saving_data}/>
        </div>
    )
}


