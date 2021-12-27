import React from 'react'
import '../../App.scss'
export default function ButtonComponent({text}) {
    return (
        <button type="button" className="aplay-btn">
            + {text}
        </button>
    )
}
