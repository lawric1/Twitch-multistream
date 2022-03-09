import React, { memo } from 'react'

export function Stream(props) {
    const prefix = "https://player.twitch.tv/?channel=";
    const name = props.channel.name;
    // const isMuted = props.channel.muted;
    
    const parameters = "&playsinline=true&parent=localhost&parent=twitch-multistream.netlify.app&player=popup";
    const url = prefix + name + parameters;

    return (
        <>
            <iframe
                title={name + ' twitch stream'}
                src={url}
                width="320"
                height="auto"
                allow="autoplay; fullscreen" 
                frameBorder="0"
                scrolling="no"> 
            </iframe>
        </>
    );
}

export default memo(Stream)