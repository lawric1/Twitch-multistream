import './StreamContainer.css';


export function StreamContainer(props) {
    return (
        <div className='wrapper'>{props.children}</div>
    );
}