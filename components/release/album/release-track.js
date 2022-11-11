import { Disclosure, Transition } from '@headlessui/react'

import trackStyles from './release-track.module.scss'


export default function ReleaseTrack({track, key}) {


  return (

    
      <Disclosure className="accordion mb-4" key={key} as="div">
              <Disclosure.Button className="container max-w-screen-lg mx-auto mb-4 flex	px-2 md:px-8">
                <div className={trackStyles.track_number}>
                  {track[0].padStart(2, '0')}
                </div>
                <div className="text-xl font-bold text-left select-none cursor-pointer ">
                  {track[1].title} 
                </div>
              </Disclosure.Button>
              
              <Transition
                enter="transition duration-100 ease-out origin-top"
                enterFrom="transform scale-y-0 opacity-0 height-0"
                enterTo="transform scale-y-100 opacity-100 height-auto"
                leave="transition duration-100 ease-out origin-top"
                leaveFrom="transform scale-y-100 opacity-100 height-auto"
                leaveTo="transform scale-y-0 opacity-0 height-0"
              >
                <Disclosure.Panel className="accordian-body bg-[#18191b] text-white shadow-inner-xl py-4 px-4 mb-4 ">
                  <div className="container max-w-screen-lg mx-auto mt-4">
                    {track[1].description.map((descParagraph, index)  => {
                        return (
                            <p key={index} className="mb-2 text-sm">
                                {descParagraph}
                            </p>
                        )
                    })}
                  </div>
                </Disclosure.Panel>
              </Transition>
      </Disclosure>
      
    
  );
}