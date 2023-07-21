import React from 'react'
import Link from 'next/link';

const CTA = (props) => {
  const href = props.href != undefined ? props.href : '#'
  return (
    <>
    

      <div className="div ButtonStyle hexabellcta">
        {
          props.onClick != undefined ?
            <button  className='custom-btn' onClick={(e) => props.onClick != undefined && props.onClick(e)}>
              <img src="/assets/images/cta-arrow-down-right-red.svg"
               alt='cta arrow red'
                height={14}
                width={14}
                />
              <span> {props.CtaName}</span>
              <img src="/assets/images/cta-arrow-down-right.svg"
               alt='cta arrow white'
                height={14}
                width={30}
                />
            </button>
            :
            <Link className='custom-btn' href={href}>
              <>
                <img src="/assets/images/cta-arrow-down-right-red.svg"
                 alt='cta arrow red'
                 height={14}
                 width={14}
                  />
                <span> {props.CtaName}</span>
                <img src="/assets/images/cta-arrow-down-right.svg"
                 alt='cta arrow white'
                  height={14}
                  width={30}
                 />
              </>
            </Link>
        }
        
        
      </div>
    </>
  )
}

export default CTA;