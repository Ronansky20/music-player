const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

function createWindow() {
    const win = new BrowserWindow({
        width: 400,
        height: 700,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    if (process.env.NODE_ENV === 'development') {
        win.loadURL('http://localhost:4000')
    } else {
        win.loadFile(path.join(__dirname, '..', 'index.html'))
    }
}

app.whenReady().then(() => {
    createWindow()
})