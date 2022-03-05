import './Stream.css';


export function Stream(props) {
    const url = "https://player.twitch.tv/?channel=" + props.channel + "&playsinline=true&parent=localhost&player=popup&controls=false&autoplay=true&muted=false";

    return (
        <>
            <iframe
                title={props.channel + ' twitch stream'}
                src={url}
                width="320"
                height="auto"
                allowfullscreen=""
                allow="autoplay; fullscreen" 
                frameBorder="0"
                scrolling="no"> 
            </iframe>
        </>
    );
}