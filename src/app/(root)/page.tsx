
import React from 'react'

const page = () => {
  return (
    <div className='relative'>
 



      <div className='mx-auto mt-10'>
        <svg
          className=''
          width="100%"
          height="100%"
          viewBox="-69 0 1000 550"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path id="MyPath"
              d="M 50 0 Q 50 300 250 200 Q 550 50 600 350 Q 650 500 850 450" />
          </defs>
          <use xlinkHref="#MyPath" fill="none" stroke="" />
          <text fontFamily="Verdana" fontSize="12.3" fill="white">
            <textPath xlinkHref="#MyPath">
              Hello There! I’m Abu Saadat Md. Sayem,  <tspan id='tspan'> a frontend developer.</tspan> based in Dhaka, Bangladesh. Currently exploring  exciting opportunities to collaborate on innovative web projects.
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