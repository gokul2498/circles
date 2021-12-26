import React from 'react'
import './displaycard.scss';
import SingleDisplayCard from './singleDisplayCard';
export default function DisplayCard({type}) {

    return (
       <div className="card-outline">
        <SingleDisplayCard type={type}/>
        <SingleDisplayCard type={type}/>
        <SingleDisplayCard type={type}/>
        <SingleDisplayCard type={type}/>
       </div>
    )
}

