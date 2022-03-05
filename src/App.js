// import { useRef, useEffect, useState } from 'react';
import { Stream } from './components/Stream/Stream';
import { StreamContainer } from './components/StreamContainer/StreamContainer';
import { SideBar } from './components/SideBar/SideBar';

import './App.css';


function App() {
    return (
        <>
            <div className='container'>
                <SideBar />
                <StreamContainer>
                    <Stream channel={"monstahler"} />
                    <Stream channel={"monstahler"} />
                    <Stream channel={"monstahler"} />
                    <Stream channel={"monstahler"} />
                </StreamContainer>
            </div>
        </>
    );
}



export default App;
