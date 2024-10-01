import { ParticleBackground } from '@/components/core/particles/ParticleBackground'
import React from 'react'

const page = () => {
  return (
    <div className='relative'>
      <div id='particleJs'>
        <ParticleBackground />
      </div>



      <div className='mx-auto'>
        <svg
          className=''
          width="100%"
          height="100%"
          viewBox="-100 0 780 360"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path id="MyPath"
              d="M3,73 C550,39 0,475 596,318" />
          </defs>
          <use xlinkHref="#MyPath" fill="none" stroke="" />
          <text fontFamily="Verdana" fontSize="23" fill="white">
            <textPath xlinkHref="#MyPath">
              Hello There I’m Abu Saadat Md. Sayem,
              <tspan id='tspan'> A Frontend Developer.</tspan> 
            </textPath>
          </text>
        </svg>
      </div>

      {/* 
      <div className=''>
        <svg className='curved-svg  absolute top-[20%] right-[20%]' viewBox="0 0 500 500">
          <path
            id="curve-path"
            d="M250 22.5C124.4 22.5 22.5 124.4 22.5 250S124.4 477.5 250 477.5 477.5 375.6 477.5 250c0-125.1-101-226.7-226-227.5H250"
            fill="none"
            stroke="none"
            strokeMiterlimit={10}
          />
          <text id='curved-text' fill='white' width={'100%'}>
            <textPath xlinkHref="#curve-path">
              Hello There how are you? doing great? what can i do?
            </textPath>
          </text>
        </svg>

      </div> */}
    </div>
  )
}

export default page