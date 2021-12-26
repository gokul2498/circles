import React from 'react'
import BorrowSavingBox from '../../components/borrow_saving_box/BorrowSavingBox'

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
const BorrowBoxData1 = {
    getLevelInfo:[{
        Name:'CSE III Borrow',
        EMI:134.05,
        Level:2,
        CreditDetail:'CREDITED 60%',
        Status:'15% EMI',
        Duration:10,
    }]
}
const data = [BorrowBoxData ,SavingBoxData,BorrowBoxData1 ];
export default function BorrowSaving() {
    return (
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
           {data.map(data=><BorrowSavingBox data={data}/>)}
        </div>
    )
}
