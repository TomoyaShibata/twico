const electron = require('electron')
const app: Electron.App = electron.app

class Twico {
  mainWindow: Electron.BrowserWindow

  constructor(public app: Electron.App) {
    this.app.on('window-all-closed', this.onWindowAllClosed)
    this.app.on('ready', this.onReady)
  }

  onWindowAllClosed() {
    if (process.platform != 'darwin') {
      this.app.quit()
    }
  }

  onReady() {
    this.mainWindow = new electron.BrowserWindow({
      width: 800,
      height: 400,
      minWidth: 500,
      minHeight: 200,
      acceptFirstMouse: true,
      titleBarStyle: 'default'
    })

    this.mainWindow.loadURL(`file://${__dirname}/index.html`)
    this.mainWindow.on('closed', () => {
      this.mainWindow = null
    })
    this.onChangeIsAlwaysShowTop(true) // default always on top

    const menu = electron.Menu.buildFromTemplate([
      {
        label: 'View',
        submenu: [
          {
            label: 'Always Show top',
            type: 'checkbox',
            checked: true,
            click(menuItem) {
              this.onChangeIsAlwaysShowTop(menuItem.checked)
            }
          }
        ]
      }
    ])

    electron.Menu.setApplicationMenu(menu)
  }

  onChangeIsAlwaysShowTop = (isAlwaysShowTop: boolean) => {
    this.mainWindow.setAlwaysOnTop(isAlwaysShowTop)
  }
}

const twico = new Twico(app)