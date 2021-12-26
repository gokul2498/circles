import React from 'react'

import './Activity.scss';

export default function ActivityCreation(props) {
    const {activityHeadingData , activityRowData} = props;
   
    return (
        <div className='Activity-component'>
            <div className="title">Today's Activity</div>
            <table className="activity_content-table">
                <thead className="activity_head">
                    <tr className="activity_head-row">
                            { activityHeadingData.map(heading=>(
                                <th className='activity'>{heading}</th>
                            ))}       
                    </tr>     
                </thead>
            <tbody className='activity-row'>
                {
                   activityRowData.map(rowData=>(
                       <tr>
                           <td className="createdAt">{rowData["createdAt"]}</td>
                           <td className="type"> <img src={`/images/colored-icons/${rowData["type"]}-color.png`} alt="" /> </td>
                           <td className="address">{rowData["toAddress"]}</td>
                           <td className="amount" >
                               <p style={{color:rowData["fColor"]}}> {rowData["amount1"]} </p>
                               <p style={{color: "#B1B8C7"}}>{rowData["amount"]} </p>
                           </td>
                           <td className="status"><img src={`/images/colored-icons/${rowData["status"]}-color.png`} alt="" /></td>
                       </tr>
                   )) 
                }                   
            </tbody>                   
            </table>
            <div className="view-more-button">
               <p className="view-more-text"> View More Activity</p>
            </div>
        </div>
    )
}



