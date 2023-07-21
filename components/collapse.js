import React from 'react'

const Collapse = () => {
    return (
        <>
            <div className="mouse_scroll">
                <div className="mouse" onClick={()=>scrollTo({top:window.innerHeight,behavior:'smooth'})}>
                    <div className="wheel"></div>
                </div>
            </div>
        </>
    )
}

export default Collapse;