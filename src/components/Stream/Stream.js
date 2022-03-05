import './Stream.css';


export function Stream(props) {
    const prefix = "https://player.twitch.tv/?channel="
    const parameters = "&playsinline=true&parent=localhost&player=popup&controls=false&autoplay=true&muted=false";
    const url = prefix + props.channel + parameters

    return (
        <>
            <iframe
                title={props.channel + ' twitch stream'}
                src={url}
                width="320"
                height="auto"
                allowfullscreen="true"
                allow="autoplay; fullscreen" 
                frameBorder="0"
                scrolling="no"> 
            </iframe>
        </>
    );
}