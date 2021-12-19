import React from 'react'
import "./circlesinfocard.scss"

export const Card = ({
  obj = []
}) => {



  return (
    <>
   <div className={obj.savings ?"Savingcircles_info": "borrowercircles_info"}>
          <div className={obj.savings ?"SavingLevel":"level2"}>
            <div
              className={obj.saving ?"card_header2" : "card_header"}
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <button className={obj.savings ?"saving_level_button" : "level_button"} type="button" >
                  <img src={""} alt="" style={{ marginRight: 10 }} />
                  Level
                  {' '}
                  {obj.Level}
                </button>
                <div className="circlename">
                  {obj.Name}
                  <p className="credit_limit">
                    Circle Limit:
                    {obj.circleLimit}
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {obj.savings &&
                <div className="bidding_info">
                  <p>UpComing Bidding: 25 days</p>
                  <p>
                    Tenure:
                    {' '}
                    {obj.Duration}
                    {' '}
                    Months
                  </p>
                </div>
                }
                <div className="icon_box">
                  {/* <InfoIcon className="saving_icon" />  */}
                  <img src='images/Shape.png' alt='shape'  style={{ marginTop: 10 }}/>
                </div>
              </div>
            </div> 
            {obj.savings && 
            <>
             <div className={"saving_progress"} />
            <div className="saving_progress-text">
              <div className="amount-text">
                Paid Members:
                {obj.PaidedDetail}
              </div>
              <div className="saving_progress-text-right">
                Unpaid Members:
                {obj.noOfParticipants - obj.PaidedDetail}
              </div>
            </div>
            </>
            }
           {
             obj.borrow && 
             <>
             <div className="progress" />
            <div className="progress-text">
              <div className="amount-text">
                Amount Paid:
                {obj.CreditDetail}
              </div>
              <div className="progress-text-right">Available 40%</div>
            </div>
             </>
           }
          </div>
          <br />
        </div>
     
    </>
  );
};
