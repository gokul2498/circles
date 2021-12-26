import React from 'react'
import Table from '../../components/Table/Table'
import './Feed.scss'



const shortlistedLoanApplicationHeadData = ['Application Id' , 'Circle','Applied','Amount','Approval','Lender Name','Expiry']
const shortlistedLoanApplicationRowData = [
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





export default function shortlistedLoanApplication() {
    return (
        <div className="shortlistedLoanApplication">
                    <div className="title" style={{display:'flex'}}>
                        <div style={{ height: '50px',width: '50.39px', borderRadius: '8px',backgroundColor: '#E7EAF0'}} >
                        <img src={`/images/sidebar/circle-color.png`} alt="" style={{ height: '22px',
    width: '22.17px',margin:'10px'}} />
                        </div>
                        <h3 className="shortlistedLoanApplicationText">Shortlisted Loan Applications</h3>
                    </div>
                    <Table key={shortlistedLoanApplicationHeadData} headData = {shortlistedLoanApplicationHeadData} rowData={shortlistedLoanApplicationRowData}/>

                </div>
     
    )
}
