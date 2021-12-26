import React from 'react'
import BorrowSavingBox from '../../components/borrow_saving_box/BorrowSavingBox'
import './Feed.scss'
const BorrowBoxData = {
    getLevelInfo:[{
        Name:'CSE III Borrow',
        EMI:134.05,
        Level:2,
        CreditDetail:'CREDITED 60%',
        Status:'15% EMI',
        Duration:10,
    }]
}

const data = [BorrowBoxData ,BorrowBoxData];

export default function BorrowBox() {
    return (
        <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"95px"}}>
        {data.map(data=><BorrowSavingBox data={data}/>)}
        <div className="borrow-circle">
            <p className="borrow-circle-text" >+ Borrow Circle</p>
        </div>
       </div>
    )
}

