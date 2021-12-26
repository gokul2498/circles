import React from 'react'
import '../../Dashboard.scss'

export default function BillingTitle({img,title}) {
    return (
        <div class="billing-title-div">
            <div class="img-div">
             <img src={'/images/colored-icons/'+img+'-color.png'} alt="img"/>
            </div>
            <div class="block-title">{title}</div>
        </div>
    )
}
