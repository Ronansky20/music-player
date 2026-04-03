function PlayBackControls() {
    return (
        <div className="playback-controls-container">
            <button>
                <img src="/src/assets/backward-vector.svg" />
            </button>
            <button>
                <img src="/src/assets/pause-vector.svg" />
            </button>
            <button>
                <img src="/src/assets/forward-vector.svg" />
            </button>
        </div>
    )
}

export default PlayBackControls