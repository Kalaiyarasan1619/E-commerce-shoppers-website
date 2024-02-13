import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='description-box'>
        <div className="description-box-navigator">
            <div className="description-box-nav-box">Description</div>
            <div className="description-box-nav-box fade">Reviews (122)</div>
        </div>
        <div className="description-box-description">
              <p>
                An e-commerce website is an online platform that facilites buying and selling
                of products or services over the internet serves as a virtual maretplace where
                business and individual showcase their products,interact with customers,and
                conducting transcations without the need for a physical presence.E-commerce
                websites have gained immense popularity due to their conventional accesbitly,
                and the  global reach they offer.
              </p>
              <p>
                E-commerce websites typically display products or services as detailed descriptions,
                images,prices,and any available variable(e.g. , sizes,colors).Each product usually
                has its own dedicatios with relevant information.
              </p>
        </div>
    </div>
  )
}

export default DescriptionBox