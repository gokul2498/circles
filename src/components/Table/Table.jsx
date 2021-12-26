import React from 'react'
import  './Table.scss'
export default function Table(props) {
    const { headData , rowData } = props;
    return (
        <table>
            <thead className="table-heading">
                <tr> {headData.map(thElements=><th>{thElements}</th>)}</tr>
            </thead>
            <tbody>
                {rowData.map(rowDataElements=> <RowDataComponent dataFields = {rowDataElements}/> )}
            </tbody> 
        </table>
    )
}


const RowDataComponent = (props)=>{
    const { dataFields } = props;
    let keys = Object.keys(dataFields);
    console.log(keys)
    return(
        <tr>
            {
                keys.map(key=>key.toUpperCase() == "TYPE" ? <td className={key}><img src={`/images/colored-icons/${dataFields[key]}-color.png`} alt="" /></td> : <td className={key}>{dataFields[key]}</td>)
            }
        </tr>
    )
}
 
   
