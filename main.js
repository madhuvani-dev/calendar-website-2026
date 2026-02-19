const { app, BrowserWindow, ipcMain } = require("electron");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 450,
    height: 600,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
    webPreferences: {
      preload: __dirname + "/preload.js"
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

// Listen for buttons
ipcMain.on("minimize", () => {
  win.minimize();
});

ipcMain.on("close", () => {
  win.close();
});

