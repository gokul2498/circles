import React from 'react'
import '../../Dashboard.scss'

export default function MiddleRight({cardt9,cardt10,cardt11,cardt12}) {
    return (
        <div className="middle-right">
            <div className="middle-right-block">
                <p className="text1">{cardt9}</p>
                <p className="text1">{cardt10}</p>
            </div>
            <div className="bottom-view">
                <div className="middle-right-block-bottom">
                    <p className="left-text">{cardt11}</p>
                    <div className="right-icons"></div>
                  
                        {/* <p className="line"></p>
                        <p className="point"></p> */}
                   
                </div>
                <div className="middle-right-block-bottom">
                    <p className="left-text">{cardt12}</p>
                    <div className="right-icons"></div>
                  
                        {/* <p className="line"></p>
                        <p className="point"></p> */}
                  
                </div>
            </div>
        </div>
    )
}
