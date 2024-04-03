import React from 'react'
const title = "What people say";

const listUser = [
    { imgUrl: "https://s3-alpha-sig.figma.com/img/5576/6b5f/7d688b0dcb2ddd3bbc5bcced3fedbefc?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J8lbPJvXsyjB2-xyjKXYyGVSEeFDCeJBNdqpCyLEDGmEGPyUY-vPgp35HrRZkFOFendNTwr7kMBsscZfADQmPUaEqsPc26-vPTU~JT2OeCG9iu-gRbm0cXwv3XL5hqmiuq1EDKr0640SEixdLmGD1zCEnJPupaN7yNENeAat17ckF3kuRjaPHvekvjEwhbg~LsHOAu527MSqvblipyitrt5cG3ahYZX7tdwKjibJ354Kdj~N7Gr222ej10KF8CcVhdBfJvfT5aFwOb6kw03RICtx8Ry8O3kLG8afXD5p8Z-ppnccKQZdhzGx7LM02-DQRzDYFJUrCpGm49B0t2TJBg__", 
      name: "Bryan Smith",
      position: "CEO Framer",
      id: 'user01',
      comment: 'Fusce quis sapien tristique mauris tempor tristique. Donec efficitur gravida nibh, ac aliquet diam volutpat non.'
    },
    { imgUrl: "https://s3-alpha-sig.figma.com/img/876d/4bca/777212f79769d00b53478fa975d4a0bc?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gE9iQNCa-8FX43kxfxadFA94tF8rOCer~1Js08ZxxVzSz2xC5HMwk81emgC-19LRcbRqEqHTLTW-~0~TlZvOGHNUSgTqX6o6DZRQdsua1Ql90be9KfZcXyX-4ansuR5ITejoKxp0Jv7uY-j9SBXODuCyKlvGQ7mFpSJ0WM5X-QrGkP7jhc0Ge9tiX7IL2qq9BKWAa70kObS2VEfASiwNNPOC2JwCDBR-L3yDlHCQ3cGg~mHAigsgmEmETQz7CwJ0jCMSYVOSyjePuHwyrAi6AvRBdR-b7-yET9YRHI6vqMDkCYdQpdjjscmW0gVhdjU2QdSPGQFx7TF0R119-9y07g__", 
      name: "Bryan Smith",
      position: "CEO Framer",
      id: 'user02',
      comment: 'Mauris nulla ex, rutrum vitae faucibus cursus, bibendum nec arcu.'
    },
    { imgUrl: "https://s3-alpha-sig.figma.com/img/8998/be3c/7391d73d0261e7cb78c8d92460eee09b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ALSNLJyDPV7dzrE91kApcEFovzO-WY-LPJOCegXsaCp~m5WiL1UK5tGs6sc5Db0imJNtlkvWDHMzRdFUCDBQ-gL6lXrWaFAE6if6LK4IAZG1c5A-ZKPqngPTg63a4Q7JJTLyQYuP7r7EUODPTRQ7pu~ypshB2nHvZ~oNB1DmjIAONz48X9lQSxzbOTDeKZJcUOC4qerrLZbL-aeMFqQp0TgDksa76r6ALijfCN-Rs3GkbgSRNGyVjcldC~wzWjwj7CUNyoi~RjPXjOzRWF6LhibR3IeNc6ET~RBdbyl5u1iYbGOqNbXV-dqBD7oPrYp2XrTb28sbXuH0p2WPT7BFVw__", 
      name: "Bryan Smith",
      position: "CEO Framer",
      id: 'user03',
      comment: "Curabitur gravida placerat purus nec bibendum. Proin porttitor varius risus blandit dictum. <br><br> Vestibulum at erat ut velit egestas venenatis sit amet nec metus.",
    },
    { imgUrl: "https://s3-alpha-sig.figma.com/img/24b7/376c/1ac96711cd0251bfd9c6d5eed9026826?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fyrpa9SCXrXzO20iLB7d6S0i4SYr8W0Qwh9ZEuzGq1lRDB2IV5wDDh1~jx~cwXsxw4SdW-620C-i05ifHWMn7gFuqrC0z937iq459digELEPW7MVZENmXuMGky9~NaWQ5kmTbp-h3R6-Q1355UnXfTnWQ37bR8I1YFxHq82QsRSROa-JeQzht~FbEqniOIA82dD9qN8hEczdwrBPH48imd~WOHigVEzY2udI5YBd-4Zz7Y-S8PA44KmhDnreOrBLmEP39ZEOzDp9gDcRYwnmnrKBl9xe9YpiuBsHUsV1JqE4u38~sP47KIFhiJrayWxl702qG~WN-9oCGJUqSWlp3Q__", 
      name: "Bryan Smith",
      position: "CEO Framer",
      id: 'user04',
      comment: "Morbi at metus accumsan, posuere mi quis, tempus tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    
    { imgUrl: "https://s3-alpha-sig.figma.com/img/8281/cd7c/983660e37c15889cc57aaf2d841e8745?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qno8zCZcbMJzYa-8dpsmI3UE7SlkedThEAHrgyJtB2hSygve6MHSzwr59nZCkgYKU25rS-jwoCRh-Olk0EBAhFrth9dM135lEXxPGexyNORSGi~x9fxCCeUteWGgVQwFD8CEx6rMTkOjjhO3Zl~G4vabyhNZxRJzy1emf0dVVWpOCOXPNyv5S38sgFzvFHHPvqKBaxsY~FezF5z6m566zagfp8n1tQTqTtScbmDsii2frFJXC0p1cx5ykrjBKIItmwpEEqOzOR04nRRcRLMoT~Sh3hY~lyGGnaIGHIw6BTPviHWNQuKM-ixqZG3~W82~8fv0YC8eX8vKHoBfX-ABNw__", 
      name: "Bryan Smith",
      position: "CEO Framer",
      id: 'user05',
      comment: `Curabitur gravida placerat purus nec bibendum. Proin porttitor varius risus blandit dictum. Vestibulum at erat ut velit egestas venenatis sit amet nec metus. <br><br>Integer fringilla erat vel sem luctus posuere.`,
    },
    { imgUrl: "https://s3-alpha-sig.figma.com/img/8689/6a8b/c213b27e9b7503d49f0df95cfe73bd49?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A1wz6pVT58bsM9-W2~-cZQjcjFK7-Dn75JV6kjmL4Uu9TvWHq2aR4~rzPbIEqA2XOvMVXzuwdHMm8Ee6JDFFHTkJLAPVD0ADDwF-wnY~8eX3~61fLj-ANE~erA0JYhU1s~5-PPHjzR-lvXODu3y0vbw5yog-VjjLzEnVO-4XV07L60dfXbV6~IeZoD~9FtezyRHZTypXIcV5wRUcX54VLfdMrpf3b2KpBxHRp8XmyuCJHBtHZBYqFP0~DqU-WoI5XRb-Ypk~HnLBhOEflaSL99lXAgX1c635LWKSct5rDI2G8PuGnj91CrWaEIGUvf4a-hucvWWg8NI0NCds1XSbEA__", 
      name: "Bryan Smith",
      position: "CEO Framer",
      id: 'user06',
      comment: "Donec efficitur gravida nibh, ac aliquet diam volutpat non.",
    },
    { imgUrl: "https://s3-alpha-sig.figma.com/img/0d1b/4cb5/13db07d49ea8af0455498aaa7cd0c67f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qv7RSRE8CLVbUXKnWnQ0RQTqMXFlLflcG~dMiLGsHwB-EgyNF3zO6qn37ebkzUf5uFuiN35rPgtidSGlVojpjOwV5~qrMUrWyCRAXmilNd0j0gJ2UMi6c3vbM5-GbLKq15~4BP0A66FnVu5uQkunRduUpyKt4bBaKL2C8nXFFLgBfwmermcU99JnRSaTyTaJi8RIknYH52G-Jpq~pbUxuUbDd3fb5uldRO8HrkeDSiXBZ6r358rk0fmLvU5pWc1Dsci1ogIRE4tx6ZDTUr7SuR1pfh7pud3ixUEqdhVcS169AxyGrx6BKPkwKTKkAPyrDq2Gje9lgTTgo0MqfinTUA__", 
      name: "Bryan Smith",
      position: "CEO Framer",
      id: 'user07',
      comment: "Mauris nulla ex, rutrum vitae faucibus cursus, bibendum nec arcu.",
    },
    { imgUrl: "https://s3-alpha-sig.figma.com/img/5e1b/f2c8/139bf8baef63b951dbc4cc550d217290?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e2bg1j~vEnUQXFi91gK2mWPALpFctK5t6ZXXsuZbzmS-tVNqNM7K2u7bYh~tHWyhFO56dL4M4NFAnBQv2NNPXmQ~-bHd6aB4AeHhk~UQz7yBLiDln8f0Go86zbWvuDskqzWrBbuRY4wj7ELGBUB78h-DnRDlLu-fO0J6ETeQ-3ne2WK0V6NUJ20yaGoabkADkvJQxh3kVhIt8FT5i67kXmmaeQDj08UXkBa5tJxCDfeffWGpIiBM5udIgYJgkUXROWVgivTZ47PH8mmMy-KrmwO3qKKBl4701kB7XK3FNiRn~GM5gJ-Db2jKki9pDVfCV1cefBUmw~kWZPXYxk80HQ__", 
      name: "Bryan Smith",
      position: "CEO Framer",
      id: 'user08',
      comment: "Curabitur gravida placerat purus nec bibendum. Proin porttitor varius risus blandit dictum. <br> Vestibulum at erat ut velit egestas venenatis sit amet nec metus.",
    },
    { imgUrl: "https://s3-alpha-sig.figma.com/img/8281/cd7c/983660e37c15889cc57aaf2d841e8745?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qno8zCZcbMJzYa-8dpsmI3UE7SlkedThEAHrgyJtB2hSygve6MHSzwr59nZCkgYKU25rS-jwoCRh-Olk0EBAhFrth9dM135lEXxPGexyNORSGi~x9fxCCeUteWGgVQwFD8CEx6rMTkOjjhO3Zl~G4vabyhNZxRJzy1emf0dVVWpOCOXPNyv5S38sgFzvFHHPvqKBaxsY~FezF5z6m566zagfp8n1tQTqTtScbmDsii2frFJXC0p1cx5ykrjBKIItmwpEEqOzOR04nRRcRLMoT~Sh3hY~lyGGnaIGHIw6BTPviHWNQuKM-ixqZG3~W82~8fv0YC8eX8vKHoBfX-ABNw__", 
      name: "Bryan Smith",
      position: "CEO Framer",
      id: 'user09',
      comment: "Fusce quis sapien tristique mauris tempor tristique. Donec efficitur gravida nibh, ac aliquet diam volutpat non.",
    }
]
function PeopleSay() {
  return (
    <div className='w-full h-auto'>
        <h2 className='text-center text-[43px] my-[15vh]'>{title}</h2> 
        <div className='w-full h-auto mx-auto  flex flex-wrap items-center justify-center space-y-[5vh]'>
          {listUser.map( (user)=>(         
                  
              <div className=' w-[25vw] h-auto space-y-3'>
                <div className=' flex items-center justify-start space-x-2 px-2'>
                  <img src={user.imgUrl} 
                    alt="" className='w-[44px] h-[44px]'/>
                  <div>
                    <p className='text-[16px]'>{user.name}</p>
                    <p className='text-[13px]'>{user.position}</p>
                  </div>
                </div>
                <p className='w-[18vw] px-2'>
                {<div dangerouslySetInnerHTML={{ __html: user.comment }} />} </p>
              </div>

          ))}
        </div>
        
    </div>
  )
}

export default PeopleSay