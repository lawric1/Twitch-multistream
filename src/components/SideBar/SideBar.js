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
        <i onClick={openAddScreen} className="gg-add"></i>
    )
}