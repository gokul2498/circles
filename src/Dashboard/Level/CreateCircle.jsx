import React from 'react'
import './Level.scss'
import ButtonComponent from '../../components/buttonComponent/buttonComponent'
export default function CreateCircle() {
    return (
        <div className="create-block" style={{marginTop:'120px'}}>
            <h5 className="create-title">Create</h5>
            <div className="btn-row">
                <button type="button" className="create-btn" style={{color: "rgb(255, 152, 134)", borderColor: "rgb(255, 152, 134)"}}>+ Borrow Circle</button>
                <button type="button" className="create-btn" style={{color: "rgb(179, 115, 184)", borderColor: "rgb(179, 115, 184)"}}>+ Saving Circle</button>
                </div>
                <ButtonComponent text='Application'/>
        </div>
    )
}
