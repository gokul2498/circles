import React from 'react';
import BorrowSavingBox from '../../components/borrow_saving_box/BorrowSavingBox';
import './Feed.scss';

const SavingBoxData = {
    getLevelInfo:[{
        Name:'Football Team',
        EMI:'10,000.00',
        Level:1,
        CreditDetail:'Not Bidded',
        Status:'4 Installment',
        Duration:10,
    }]
}

const data = [SavingBoxData ,SavingBoxData];

export default function SavingBox() {
    return (
        <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"95px"}}>
        {data.map(data=><BorrowSavingBox data={data}/>)}
        <div className="saving-circle">
            <p className="saving-circle-text" >+ Saving Circle</p>
        </div>
       </div>
    )
}
