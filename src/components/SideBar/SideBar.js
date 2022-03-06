import { useContext } from 'react';
import { ChannelScreenContext } from '../../App.js'

import './SideBar.css';

export function SideBar(props) {
    const channels = props.channels;

    return (
        <div className='sidebar'>
            {channels.map((channel) => {
                return <Avatar picture={channel.profilePic} key={channel.name + 'picture'}/>
            })}
            <Button />
        </div>
    );
}


export function Avatar(props) {
        return (
            <img alt="Channel avatar" className='avatar' src={props.picture}></img>
        )
}


export function Button(props) {
    const openAddScreen = useContext(ChannelScreenContext);

    return (
        <img onClick={openAddScreen} alt="Add Stream button" className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/8/87/Bluesquare.png"></img>
    )
}