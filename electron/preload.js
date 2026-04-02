const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electronBridge', {
    platform: process.platform
})