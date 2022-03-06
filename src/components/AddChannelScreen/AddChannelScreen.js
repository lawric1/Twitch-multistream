import { useState } from 'react';

import './AddChannelScreen.css';

// export function Button(props) {
//     return (
//         <img onClick={props.callback} alt="Add Stream button" className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/8/87/Bluesquare.png"></img>
//     )
// }

export function AddChannelScreen(props) {
    const [input, setInput] = useState("");

    function updateInput(event) {
        setInput(event.target.value);
    }


    function sendInput(event) {
        props.callback(input);
        setInput("");
        event.preventDefault();
    }
    
    
    if (!props.visible) { return <></> }

    return (
        <div className='overlay'>
            <form onSubmit={sendInput}>
                <input onChange={updateInput} className="search" type="text" value={input} placeholder="ex: buddha" spellCheck="false"/>
                <input className="button" type="submit" value="Add"/>
            </form>
        </div>
    );
}