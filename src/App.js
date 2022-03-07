import { useState, createContext } from 'react';

import { AddChannelScreen } from './components/AddChannelScreen/AddChannelScreen';
import { Stream } from './components/Stream/Stream';
import { StreamContainer } from './components/StreamContainer/StreamContainer';
import { SideBar } from './components/SideBar/SideBar';

import './App.css';


const Callbacks = createContext();

function App() {
    const [isVisible, setIsVisible] = useState(false);
    const [channels, setChannels] = useState([]);
    
    const token = 'Bearer ' + process.env.REACT_APP_API_TOKEN;
    const clientID = process.env.REACT_APP_API_CLIENTID;
    const headers = new Headers({
        'Authorization': token, 
        'Client-ID': clientID
    });


    async function addChannel(channel) {
        if (!channel) {
            return
        }

        closeAddChannelScreen();

        const profilePic = await getChannelProfilePicture(channel);
        if (!profilePic) { return }

        const newChannel = {
            id: new Date(),
            name: channel,
            profilePic: profilePic
        }
    
        setChannels(channels =>
        ([
            ...channels, 
            newChannel
        ]));
    }


    async function getChannelProfilePicture(channel) {
        const url = 'https://api.twitch.tv/helix/users?login=' + channel;
        try {
            const response = await fetch(url, {method: 'GET', headers: headers}).then((response) => response.json());
            
            return response.data[0].profile_image_url;
        
        } catch (e) {
            console.log('Channel not found.');
        }

    }   


    function removeStream(id) {
        const updatedChannels = channels.filter((channel) => channel.id !== id);
        setChannels(updatedChannels);
    }


    function openAddChannelScreen() {
        setIsVisible(true);
    }


    function closeAddChannelScreen() {
        setIsVisible(false);
    }
    

    return (
        <>
            <AddChannelScreen visible={isVisible} addChannelCallback={addChannel} closeScreenCallback={closeAddChannelScreen} />
            <div className='container'>
                <Callbacks.Provider value={{openAddChannelScreen, removeStream}}>
                    <SideBar channels={channels}/>
                </Callbacks.Provider>

                <StreamContainer>
                    {channels.map((channel) => {
                        return <Stream channel={channel.name} key={channel.name} />
                    })}
                </StreamContainer>
            </div>
        </>
    );
}


export default App;
export { Callbacks };

// Better number for width
// mute and remove button
// Max channels?
// Css design
// Comments
// Deploy