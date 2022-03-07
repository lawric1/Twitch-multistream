import { useContext } from 'react';
import { Callbacks } from '../../App.js'

import './SideBar.css';

export function SideBar(props) {
    const channels = props.channels;

    return (
        <div className='sidebar'>
            {channels.map((channel) => {
                return <Avatar channel={channel} key={channel.name + 'picture'}/>
            })}
            <AddButton />
        </div>
    );
}


export function Avatar(props) {
        const callbacks = useContext(Callbacks);
        
        const profilePicture = props.channel.profilePic;
        const id = props.channel.id;

        function remove() {
            callbacks.removeStream(id)
        }


        return (
            <div className='avatarContainer'>
                <span>V</span>
                <img alt="Channel avatar" className='avatar' src={profilePicture}></img>
                <span onClick={remove}>R</span>
            </div>
        )
}


export function AddButton() {
    const callbacks = useContext(Callbacks);

    return (
        <i onClick={callbacks.openAddChannelScreen} className="gg-add"></i>
    )
}