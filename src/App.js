// import { useRef, useEffect, useState } from 'react';
import { Stream } from './components/Stream/Stream';
import { StreamContainer } from './components/StreamContainer/StreamContainer';

import './App.css';

// function removeElementsByClass(reference, className){
//     const parent = reference.current;
//     const elements = parent;
//     console.log(parent);
//     // while(elements.length > 0){
//     //     elements[0].parentNode.removeChild(elements[0]);
//     // }
// }

function App() {
    return (
        <>
            <StreamContainer>
                <Stream channel={"monstahler"} />
                <Stream channel={"monstahler"} />
                <Stream channel={"monstahler"} />
                <Stream channel={"monstahler"} />
                <Stream channel={"monstahler"} />

            </StreamContainer>
        </>
    );
}



export default App;
