import React from 'react'
import MiddleCard from './HistoryBlock/MiddleCard';
import MiddleLeft from './HistoryBlock/MiddleLeft';
import MiddleRight from './HistoryBlock/MiddleRight';
import BillingTitle from './HistoryBlock/billingTittle';
import BottomRow from './HistoryBlock/BottomRow';


const historyDataObject = [{
    title: 'Savings',
    total1: 'Total Savings',
    total2: '2,00,000.00',
    total3: 'Total Gained',
    total4: '80,000.00',
    cardt1: 'Total Installment Paid',
    cardt2: '30000.00',
    cardt3: 'Next Installement Date',
    cardt4: '5th October',
    cardt6: '30%',
    cardt7: 'Installment Paid',
    cardt8: '20 Months Tenure',
    cardt9: 'Circles',
    cardt10: '03',
    cardt11: 'Create Circle',
    cardt12: 'View Circles',
    bText: '+ Save More',
    btnBg: '#f2e8f3',
    btnTColor: '#B373B8',
    img: 'saving',
  },
  {
    title: 'Lending',
    total1: 'Total ETH',
    total2: '2,00,000.00',
    total3: 'Total ETH Gained',
    total4: '80,000.00',
    cardt1: 'Total Installment Received',
    cardt2: '30000.00',
    cardt3: 'Next Payment Date',
    cardt4: '10th October',
    cardt6: '30%',
    cardt7: 'Interset Received',
    cardt8: '20 Months Tenure',
    cardt9: 'Borrower',
    cardt10: '02',
    cardt11: 'View Applications',
    cardt12: 'View Borrowers',
    bText: '+ Lend More',
    btnBg: '#CCFEFF',
    btnTColor: '#157576',
    img: 'lending',
  },
  {
    title: 'Borrow',
    total1: 'Total Borrowed',
    total2: '2,00,000.00',
    total3: 'Total Repaid',
    total4: '80,000.00',
    cardt1: 'Total EMI Paid',
    cardt2: '30000.00',
    cardt3: 'Next EMI Date',
    cardt4: '5th October',
    cardt6: '30%',
    cardt7: 'EMI Paid',
    cardt8: '20 Months Tenure',
    cardt9: 'Circles',
    cardt10: '03',
    cardt11: 'Create Circle',
    cardt12: 'View Circles',
    bText: '+ Borrow More',
    btnBg: '#FFE2DD',
    btnTColor: '#FF9886',
    img: 'borrow',
  }];

export default function HistoryBlock() {
    return (
        <div class="billing-title-div">
           {
               historyDataObject.map(historyObject=>(
                   <div className='history-block'>
                    <BillingTitle  key={historyObject.title} img={historyObject.img}  title={historyObject.title} />
                <div className="middle-row-block">

                    <MiddleLeft key={historyObject.title} total1={historyObject.total1} total2={historyObject.total2} 
                    total3={historyObject.total3} total4={historyObject.total4}
                    />
                    <MiddleCard key={historyObject.title} title={historyObject.title}cardt1={historyObject.cardt1} 
                    cardt2={historyObject.cardt2}cardt3={historyObject.cardt3}cardt4={historyObject.cardt4}
                    cardt6={historyObject.cardt6}cardt7={historyObject.cardt7} cardt8 = {historyObject.cardt8} />

                    <MiddleRight key={historyObject.title} cardt9={historyObject.cardt9} cardt10={historyObject.cardt10} 
                    cardt11={historyObject.cardt11} cardt12={historyObject.cardt12}
                    />

                </div>
                <BottomRow bText={historyObject.bText} btnTColor={historyObject.btnTColor} btnBg = {historyObject.btnBg}/>
                </div>
               

               ))
           }
        </div>
    )
}
{/* <div class="history-block">
    <div class="billing-title-div">
        <div class="img-div" style="background-color: rgb(242, 232, 243);">
            <img src="/images/saving-color.png" alt="img">
                </div><div class="block-title">Savings</div>
                </div><div class="middle-row-block">
                    <div class="middle-left"><p>Total Savings</p>
                    <p>2,00,000.00</p><h6>Total Gained</h6><h6>80,000.00</h6>
                    </div><div class="middle-card">
                        <div class="card-div" style="background-color: rgb(255, 255, 255);">
                            <div class="card-header">
                                <div class="header-left">
                                    <h4 class="header-t1">
                                        Total Installment Paid</h4>
                                        <p class="header-t1">30000.00</p>
                                        </div><div class="header-left">
                                            <div class="header-t2">Next Installement Date</div>
                                            <p class="header-t2">5th October</p></div>
                                            </div><div class="progress_bar" style="background-color: rgb(242, 232, 243); color: rgb(179, 115, 184);">
                                                </div><div class="bottom-row"><p class="bottom-row-text">30% Installment Paid</p>
                                                <p class="bottom-row-text">20 Months Tenure</p></div></div></div><div class="middle-right">
                                                    <div class="middle-right-block"><p class="text1">Circles</p><p class="text1">03</p>
                                                    </div><div class="bottom-view"><div class="middle-right-block-bottom">
                                                        <p class="left-text">Create Circle</p>
                                                        <p class="right-icon" style="color: rgb(179, 115, 184);"></p></div>
                                                        <div class="middle-right-block-bottom"><p class="left-text">View Circles</p>
                                                        <p class="right-icon" style="color: rgb(179, 115, 184);"></p></div></div></div>
                                                        </div>
                                                        <div class="bottom-btn">
                                                            <button type="button" style="background-color: rgb(242, 232, 243); color: rgb(179, 115, 184);">+ Save More
                                                            </button><div class="view-more"><p>view more</p>
                                                            </div></div>
</div> */}