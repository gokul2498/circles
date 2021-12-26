import React from 'react'
import './borrowSaving.scss';
export default function BorrowSavingBox(props) {
    const {data} = props;
    const type = data.getLevelInfo[0].Level == 1 ? "saving" : "borrow"
    return (

        data.getLevelInfo.map(item=>(<div class={type+"_box"}>
            <div class="activity_header">
                <div class="circle_name">
                    <h4>{item.Name}</h4>
                    <p class="amount">${item.EMI}</p>
                </div>
                <div class="details">
                    <p class="circle_id">
                    {item.Level}
                    </p>
                    <p class="info">{item.CreditDetail}</p>
                </div>
            </div>
            <div class={type+"_progress_bar"}></div>
                <div class={type+"_progress_bar_text"}>
                    <p class="bottom-row-text"> {item.Status} Paid</p>
                    <p class="bottom-row-text">{item.Duration} Months</p>
                </div>
        </div>
    ))
    )}
