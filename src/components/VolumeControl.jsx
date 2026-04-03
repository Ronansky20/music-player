function VolumeControl() {
    return (
        <div className="volume-control-container">
            <button className="volume-button">
                <img src="/src/assets/Volume-Vector.svg" />
            </button>
            <input type="range" className="volume-slider" />
        </div>
    )
}

export default VolumeControl