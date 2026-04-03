function ProgressBar(props) {
    return (
        <div className="progress-bar-container">
            <p className="current-time">{props.currentTime}</p>
            <input type="range" className="song-progress" />
            <p className="max-time">{props.maxTime}</p>
        </div>
    )
}

export default ProgressBar