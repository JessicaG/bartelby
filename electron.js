/* jshint node: true */
'use strict';

const electron         = require('electron');
const FileBin          = require('file-bin');
const Menu             = electron.Menu;
const app              = electron.app;
const BrowserWindow    = electron.BrowserWindow;
const emberAppLocation = `file://${__dirname}/dist/index.html`;
const Tray = electron.Tray;

let mainWindow = null;
let filesystem = new FileBin(__dirname + '/notes', ['.txt', '.md', '.markdown']);
let appIcon = null;

electron.crashReporter.start();

app.on('window-all-closed', function onWindowAllClosed() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function onReady() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  appIcon = new Tray('./app/assets/alphabet-letter-j.jpg');
  var contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
  ]);

  appIcon.setToolTip('This is my application.');
  appIcon.setContextMenu(contextMenu);

  delete mainWindow.module;

  mainWindow.loadURL(emberAppLocation);

  mainWindow.webContents.on('did-fail-load', () => {
    mainWindow.loadURL(emberAppLocation);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

exports.filesystem = filesystem;
