const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');
const contextMenu = require('./contextMenu');
require('dotenv').config();

let win;

let isDev = process.env.NODE_ENV === 'development';
if (isDev) {
  require('electron-reload')(path.join(__dirname, '../build'), {
    electron: require(`${__dirname}/../node_modules/electron`),
    awaitWriteFinish: true,
  });
}

function createWindow() {

  win = new BrowserWindow({
    height: 800,
    width: 1200,
    minHeight: 800,
    minWidth: 1200,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      enableRemoteModule: true
    },
    icon: path.join(__dirname, 'assets', 'img', 'icon.png'),
    title: 'Ciane 13 Manager',
  });

  const startUrl = isDev ?
    'http://localhost:3000' :
    path.join(`file://${path.join(__dirname, "../build/index.html")}`);


  win.loadURL(startUrl);
  // win.webContents.openDevTools();
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  contextMenu(win); //Menu tasto destro
  Menu.setApplicationMenu(null); //Barra degli strumenti, null per nasconderlo

}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

//------------------------------------------------------------------------------------


