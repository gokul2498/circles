import React from 'react';
import '../../Dashboard.scss';

export default function MiddleCard(props) {
    const { title , cardt1 ,  cardt2, cardt3, cardt4, cardt6, cardt7,cardt8 } = props;
    return (
        
            <div className="middle-card">
                <div className="card-div" style={{backgroundColor: "rgb(255, 255, 255)"}}>
                    <div className="card-header">
                        <div className="header-left">
                            <h4 className="header-t1">{cardt1}</h4>
                            <p className="header-t1">{cardt2}</p>
                        </div>

                        <div className="header-left">
                            <div className="header-t2">{cardt3}</div>
                            <p className="header-t2">{cardt4}</p></div>
                        </div>
                        <div className={title.toLowerCase() + "_progress_bar"}></div>
                        <div className="bottom-row">
                            <p className="bottom-row-text"> <span className={title.toLowerCase()+'_text' }> {cardt6}</span> {cardt7}</p>
                            <p className="bottom-row-text">{cardt8}</p>
                        </div>
                </div>
            </div>
      
    )
}

