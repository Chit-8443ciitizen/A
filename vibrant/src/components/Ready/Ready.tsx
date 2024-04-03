import React from 'react'
import BoxClick03 from '../../shared/boxClick03/boxClick03';
import BoxClick04 from '../../shared/boxClick04/boxClick04';

const title = "Ready to get started?";
const sub_title = "Choose a plan fits to your needs.";
function Ready() {
  return (
    <div className='my-[5vh] pt-[15vh] w-full h-[180vh]'>
        <h2 className='text-center text-[43px] mb-[3vh] '>{title}</h2> 
        <p className='text-center text-[19px] '>{sub_title}</p> 
        <div className='w-full h-[60vh] py-[10vh] flex flex-row mx-auto items-start justify-center space-x-5'>
            <BoxClick03
                title = "Personal"
                sub_title = "Best for brands that need designs on an ongoing basis."
                price = "2.99"
                contents={[
                    { content: 'Request unlimited designs' },
                    { content: 'Deliverables as-you-need' },
                    { content: 'No limit on revisions' }
                  ]}                   
                               
                />
            <BoxClick04
                title = "Business"
                sub_title = "Best for brands that need designs on an ongoing basis."
                price = "8.99"
                contents={[
                    { content: 'Request unlimited designs' },
                    { content: 'Deliverables as-you-need' },
                    { content: 'No limit on revisions' },
                    { content: 'No code needed' },
                    { content: 'Individual help center' },
                    { content: 'Your personal mentor' }
                  ]}                   
                               
                />
        </div>
    </div>
  )
}

export default Ready