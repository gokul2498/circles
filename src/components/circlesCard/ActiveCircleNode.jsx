import React from 'react'
import './circlesInfoCard.scss'
export default function ActiveCircleNode(props) {
    const { circleData } = props;
    const Level = circleData.getLevelInfo[0].Type === "saving" ? 1 : 2;
    console.log( circleData.getLevelInfo)
    return (
        <>
                {circleData && circleData.getLevelInfo.map((level_data) => (
                    <div className={level_data.Type + 'circles_info'} style={{marginBottom:"30px"}}>
                        <div className={'level'+Level}>
                            <div className={"card_header"+Level}>
                                <div className="card-top-brow">
                                    <button className={level_data.Type+"_level_button"} type="button">
                                        <img src={`/images/colored-icons/level.png`} alt="" style={{ marginRight: 10 }} />
                                           Level {Level}
                                    </button>
                                    <div className="circlename">
                                        {level_data.Name}
                                        <p className="credit_limit">
                                            Credit Limit:
                                            {level_data.circleLimit}
                                        </p>
                                    </div>
                                </div>
                                {
                                    Level === 1 ? 
                                    <div className='upcoming_bidding_info' >
                                        <div className="bidding_info">
                                        <p>UpComing Bidding: <span style={{fontWeight:'300'}}>25 days</span> </p>
                                        <p>
                                            Tenure: <span style={{fontWeight:'300'}}>{level_data.Months} Months </span>                           
                                        </p>
                                        </div>
                                        <div className="icon_box">
                                            <img src="/images/colored-icons/info.png" alt="" />
                                        </div>
                                    </div> :  
                                    <div className="icon_box">
                                        <img src="/images/colored-icons/info.png" alt="" />
                                    </div>
                                }
                            </div>
                            <div className={level_data.Type+"_progress" }/>
                            <div className={level_data.Type+"_progress-text"}>
                            <div className="amount-text">
                                {
                                    Level === 2 ?
                                     <>
                                     Amount Paid:
                                    {level_data.CreditDetail}</> : 
                                    <> 
                                     Paid Members:
                                        {level_data.PaidedDetail}
                                    </>
                                }                             
                            </div>
                            <div className={level_data.Type+"_progress-text-right"}>
                            {
                                    Level=== 2 ? <> Amount Available 40%</> : 
                                    <>    Unpaid Members:
                                    {level_data.noOfParticipants - level_data.PaidedDetail}
                                    </>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
        </>
    )
}
