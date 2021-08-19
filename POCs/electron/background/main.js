// Modules to control application life and create native browser window
const {app, Menu, Tray, nativeImage, BrowserWindow} = require('electron')
const path = require('path')

let mainWindow;

let systemTray;

function createWindow () {
  // Create the browser window.
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  window.loadFile('index.html')

  // Open the DevTools.
  // window.webContents.openDevTools()

  return window
}

function createTrayIcon() {
  //const trayIcon = nativeImage.createFromPath('icon@5x.png')
  //trayIcon.resize({height: 16, width: 16})

  const tray = new Tray('icon@5x.png')

  const contextMenu = Menu.buildFromTemplate([
    { 
      label: 'Show window',
      type: 'normal',
      click: (evt, browserWindow) => {
        if (BrowserWindow.getAllWindows().length) {
          BrowserWindow.getAllWindows()[0].show()
        } else {
          createWindow()
        }

        if (process.platform === 'darwin') {
          app.dock.show()
        }
      },
    },
    { type: 'separator' },
    {
      label: 'Quit',
      type: 'normal',
      click: (evt, browserWindow) => {
        app.quit()
      }
    }
  ])

  // Call this again for Linux because we modified the context menu
  tray.setContextMenu(contextMenu)

  return tray;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  systemTray = createTrayIcon()  

  mainWindow = createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  //macOS hide dock icon
  if (process.platform === 'darwin') {
    app.dock.hide()
  }

  //if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
