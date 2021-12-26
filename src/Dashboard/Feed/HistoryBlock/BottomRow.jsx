import React from 'react'

export default function BottomRow({bText,btnTColor,btnBg}) {
    return (
        <div class="bottom-btn">
            <button type="button" style={{backgroundColor: btnBg, color: btnTColor}}>{bText}</button>
            <div class="view-more">
                <p>view more</p>
            </div>
        </div>
    )
}
