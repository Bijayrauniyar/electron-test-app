const { app, Menu, BrowserWindow } = require('electron');
const { showMessage, showSaveDialog, showOpenDialog } = require('./dialogs');

module.exports = {
  setMainMenu
};

function setMainMenu(mainWindow) {
  const template = [
    {
      label: app.getName(),
      submenu: [
        {
          label: 'Say Hello',
          click() {
            showMessage(mainWindow);
          }
        },
        {
          label: 'Save Memory Usage Info',
          click() {
            showSaveDialog(mainWindow);
          }
        },
        {
          label: 'Open File',
          click() {
            showOpenDialog(mainWindow);
          }
        },
        { type: 'separator' },
        { role: 'quit' }
      ]
    }
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}




// const { app, Menu } = require('electron');

// const isWindows = process.platform === 'win32';

// module.exports = {
//   setMainMenu
// };

// function setMainMenu() {
//   const template = [
//     {
//       label: isWindows ? 'File' : app.getName(),
//       submenu: [
//         {
//           label: isWindows ? 'Exit' : `Quit ${app.getName()}`,
//           accelerator: isWindows ? null : 'CmdOrCtrl+Q',
//           click() {
//             app.quit();
//           }
//         }
//       ]
//     },
//     {
//       label: 'Edit',
//       submenu: [
//         { role: 'undo' },
//         { role: 'redo' },
//         { type: 'separator' }, //just adds a line visually
//         { role: 'cut' },
//         { role: 'copy' },
//         { role: 'paste' },
//         { role: 'selectall' }
//       ]
//     }
//   ];
//   const menu = Menu.buildFromTemplate(template);
//   Menu.setApplicationMenu(menu);
// }