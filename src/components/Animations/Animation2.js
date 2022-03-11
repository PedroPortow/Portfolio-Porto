import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web';



function Animation2() {
    const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,

      animationData: require('./animation2.json')
    })
  }, [])

  return (
    <>
      <div className="container" style={{zIndex: '2'}} ref={container}></div>
    </>
  )
}

export default Animation2;