import React from 'react'
import Table from '../../components/Table/Table';
import './Feed.scss';

const upcomingEmiHeadData = ['Application Id' , 'Circle','Applied','Amount','Approval','Lender Name','Expiry']
const upcomingEmiRowData = [
    {
        Application_Id : '65HV893KKD',
        Circle:'CSE III Borrow',
        Applied:'3 days ago',
        Amount:'50,000.00',
        Approval:'89%',
        Lender_Name:'Balaji',
        Expiry:'5 days'
    },
    {
        Application_Id : '65HV893KKD',
        Circle:'CSE III Borrow',
        Applied:'3 days ago',
        Amount:'50,000.00',
        Approval:'89%',
        Lender_Name:'Balaji',
        Expiry:'5 days'
    },
    {
        Application_Id : '65HV893KKD',
        Circle:'CSE III Borrow',
        Applied:'3 days ago',
        Amount:'50,000.00',
        Approval:'89%',
        Lender_Name:'Balaji',
        Expiry:'5 days'
    },
    {
        Application_Id : '65HV893KKD',
        Circle:'CSE III Borrow',
        Applied:'3 days ago',
        Amount:'50,000.00',
        Approval:'89%',
        Lender_Name:'Balaji',
        Expiry:'5 days'
    }
];
export default function UpcomingEmi() {
    return (
        <div className="upcomingEmi">
                    <div className="title" style={{display:'flex'}}>
                        <div style={{ height: '50px',width: '50.39px', borderRadius: '8px',backgroundColor: '#E7EAF0'}} >
                        <img src={`/images/sidebar/circle-color.png`} alt="" style={{ height: '22px',
    width: '22.17px',margin:'10px'}} />
                        </div>
                        <h3 className="upcomingEmiText">Upcoming EMI</h3>
                    </div>
                    <Table  key={upcomingEmiHeadData} headData = {upcomingEmiHeadData} rowData={upcomingEmiRowData}/>

                </div>
    )
}


