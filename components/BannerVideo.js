import React from 'react'
import ReactPLayer from 'react-player'


export default function BannerVideo() {

  return (
    <div style={{opacity:"0.8"}}>
        <ReactPLayer
        width="270px"
        height="100px"
        url="https://www.youtube.com/watch?v=7KDRqBpT8NA"
        playing={true}
         />
        
    </div>
  )
}
