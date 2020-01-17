const {app,BrowserWindow} = require('electron');
const path = require('path');
const {setMainMenu} = require('./main-menu');
let mainWindow;

app.on('ready',()=>{
    mainWindow = new BrowserWindow( {webPreferences: {
        nodeIntegration: true
    },});
    mainWindow.loadURL(path.join('file://',__dirname,'index.html'));
    setMainMenu(mainWindow);
});