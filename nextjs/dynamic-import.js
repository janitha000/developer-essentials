// include the npm package only when it is requested
// main site render will not inclued the library
//javascript bundle is only sent when requested

import dynamic from 'next/dynamic'

const DynamicComp = dynamic(() => import ('./DynamicComp')
                            
export default function Home() {
  return (
    <div> 
      <DynamicComp />
    </div>
}

//use case
//when there are two components needs to be shown for logged in and guest users
//if user is guest, AUthContent javascript will never be loaded
const AuthContent = dynamic(() => import ('./AuthContent')
const NonAuthContent = dynamic(() => import ('./NonAuthContent')
                        
return ( user ? <AuthContent /> : <NonAuthContent />
        
