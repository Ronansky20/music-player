function AlbumArt(props) {
    return (
        <div className="album-art-container">
            <img src="/src/assets/record.png" className="vinyl-record" />
            <img src={props.albumArtUrl} className="center-art" />
        </div>
    )
}

export default AlbumArt