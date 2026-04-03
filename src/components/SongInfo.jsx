function SongInfo(props) {
    return (
        <div className="song-info">
            <h1>{props.title}</h1>
            <p>{props.artist}</p>
        </div>
    )
}

export default SongInfo