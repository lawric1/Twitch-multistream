import { useState } from 'react';

import './AddChannelScreen.css';


export function AddChannelScreen(props) {
    const [input, setInput] = useState("");

    function updateInput(event) {
        setInput(event.target.value);
    }


    function sendInput(event) {
        props.addChannelCallback(input);
        setInput("");
        event.preventDefault();
    }


    function close(event) {
        props.closeScreenCallback();
        event.preventDefault();
    }


    if (!props.visible) { return <></> }

    return (
        <>
            <div className='overlay'>
                <form onSubmit={sendInput}>
                    <input onChange={updateInput} className="search" type="text" value={input} placeholder="ex: buddha" spellCheck="false"/>
                    <input className="submit" type="submit" value="Add"/>
                </form>
            </div>
            <button className='close' onClick={close}>Close</button>
        </>
    );
}