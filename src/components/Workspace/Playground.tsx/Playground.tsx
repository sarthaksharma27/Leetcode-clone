import React from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';

type PlaygroundProps = {
    
};

const Playground:React.FC<PlaygroundProps> = () => {
    
    return (
        <div className='flex flex-col bg-dark-layer-1 relative'>
         <PreferenceNav />
         <Split>

         </Split>
        </div>
    )
}
export default Playground;