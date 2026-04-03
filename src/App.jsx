import { useState } from 'react'
import SongInfo from './components/SongInfo'
import AlbumArt from './components/AlbumArt'
import PlayBackControls from './components/PlaybackControls'
import SearchBar from './components/SearchBar'
import VolumeControl from './components/VolumeControl'
import ProgressBar from './components/ProgressBar'
import './App.css'

function App() {

  return (
    <>
      <div className='app'>
        <SearchBar />
        <AlbumArt albumArtUrl="https://m.media-amazon.com/images/I/815RM2H+UcL.jpg" />
        <SongInfo title="Ensalada" artist="Freddie Gibbs" />
        <ProgressBar currentTime="1:24" maxTime="3:46" />
        <PlayBackControls />
        <VolumeControl />
      </div>
    </>
  )
}

export default App
