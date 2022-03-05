import './SideBar.css';

export function Avatar() {
    return (
        <img alt="Channel avatar" className='avatar' src="https://www.seekpng.com/png/detail/206-2061724_white-square-border-png.png"></img>
    )
}

export function AddChannel() {
    return (
        <img alt="Add Stream button" className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/8/87/Bluesquare.png"></img>
    )
}

export function SideBar() {
    return (
        <div className='sidebar'>
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <AddChannel />
        </div>
    );
}