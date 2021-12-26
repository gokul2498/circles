import React from 'react'
import './displaycard.scss';

export default function SingleDisplayCard({type}) {

    const color = type.toLowerCase() == "saving" ? {
        bgColor:'#F2E8F3',
        color:'#B373B8'
    } :{
        bgColor: '#FFF4F2',
        color: '#FF9886'
    } ;

  
    return (
        
        <div className="dash-card-outline" style={{backgroundColor:color.bgColor}}>
          
            <div className="card-header">
                <div className="number" style={{color:color.color}}>10</div>
                <div className="card-title">Football Borrow Circle</div>
                <div className="amountText">Amount</div>
                <div className="amount">50,000.00</div>
            </div>
            <div className="card-bottom">
                <div>Next EMI 5th Oct</div>
                <div className='EMI-text'>15,000.00</div>
                <div className={ type.toLowerCase()+"_progress_bar"}></div>
                <div className="text"><span className="percentage" style={{color:color.color}}>30%  </span> Installment Paid </div>
            </div>
       </div>
    )
}
