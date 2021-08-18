# Electron background/tray PoC

In this project, it's shown the functionality of the app to hide itself in the system Tray.

## Running application

```bash
#install dependecies
npm install

#run
npm start
```
## How to use

To create a background application, has to create a ``Tray`` object and set the icon that will be shown, in ``main.js`` file there is an example. The ``Menu``object create a menu in Tray.

```js
  appIcon = new Tray('icon@5x.png')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' }
  ])
  ```
