import React from 'react'
import '../../Dashboard.scss'

export default function MiddleLeft({total1 ,total2,total3,total4 }) {
    return (
        <div className="middle-left">
            <p>{total1}</p>
            <p>{total2}</p>
            <h6>{total3}</h6>
            <h6>{total4}</h6>
        </div>
    )
}
