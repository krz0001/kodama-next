import React, { useState } from "react";
import trackStyles from './release-track.module.scss'


export default function ReleaseTrack({track, key}) {

  // State to show/hide accordion
  const [show, setShow] = useState(false);
  const handleOpen = () => {
    setShow(!show); // Toggle accordion
  };

  return (
      <div className="accordion" key={key}>
        <div className="container max-w-screen-lg mx-auto mb-4  flex	md:px-8" onClick={handleOpen}>
            <div className={trackStyles.track_number}>
                {track[0].padStart(2, '0')}
            </div>
            <div className='text-xl font-bold text-left select-none cursor-pointer '>
                {track[1].title} 
                <span className="ml-3">
                  {show ?  "▲" : "▼"}
                </span>
            </div>
            
        </div>
        {show && (
          <div className="accordian-body bg-[#18191b] text-white shadow-inner-xl py-4 mb-4">
            <div className="container max-w-screen-lg mx-auto mt-4">
            {track[1].description.map((descParagraph, index)  => {
                return (
                    <p key={index} className="mb-2 text-sm">
                        {descParagraph}
                    </p>
                )
            })}
            </div>
          </div>
        )}
      </div>
    
  );
}