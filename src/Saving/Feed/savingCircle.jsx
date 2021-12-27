import React from 'react'
import Table from '../../components/Table/Table'
import './Feed.scss'

const SavingCirclesHeadingData = ['Type','Name','Balance','USD','Limit','Members'];

const SavingCirclesRowData = [
    {
        Type : 'Borrow',
        Name : 'CSE III Borrow',
        Balance: '10,000.00',
        USD: '$2200.00',
        Limit: '5000000',
        Members: 5,
    },
    {
        Type : 'Borrow',
        Name : 'Tech 20',
        Balance: '40,000.00',
        USD: '$2200.00',
        Limit: '5000000',
        Members: 10,
    },
    {
        Type : 'Borrow',
        Name : 'Django FC',
        Balance: '10,000.00',
        USD: '$2200.00',
        Limit: '5000000',
        Members: 5,
    },
    {
        Type : 'Borrow',
        Name : 'Tech 20',
        Balance: '10.000.00',
        USD: '$2200.00',
        Limit: '5000000',
        Members: 5,
    },
    {
        Type : 'Borrow',
        Name : 'CSE III Borrow',
        Balance: '10,000.00',
        USD: '$2200.00',
        Limit: '5000000',
        Members: 5,
    },
    {
        Type : 'Borrow',
        Name : 'Tech 20',
        Balance: '10.000.00',
        USD: '$2200.00',
        Limit: '5000000',
        Members: 5,
    }
];
export default function AllSavingCircles() {
    return (
        <div className='AllSavingCircles'>
         <div className="title" style={{display:'flex'}}>
            <div style={{ height: '50px',width: '50.39px', borderRadius: '8px',backgroundColor: '#DEF0F9'}} >
            <img src={`/images/circles/all-borrow-circle.png`} alt="" style={{ height: '22px',
                width: '22.17px',margin:'10px'}} />
                 </div>
                 <h3 className="AllSavingCirclesText">All Saving Circles</h3>
            </div>
         <Table 
            key={SavingCirclesHeadingData} 
            headData = {SavingCirclesHeadingData} 
            rowData={SavingCirclesRowData}/>
        </div>
    )
}
