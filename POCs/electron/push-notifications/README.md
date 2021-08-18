# Electron notification example

Example of how to use push-notification in Electron.

## Running application

```bash
# Install dependencies
npm install
# Run the app
npm start
```
## How to use

To create a new notification, has to create a ``Notification`` object and set some parameters, in ``renderer.js`` file there is an example:

```js
const NOTIFICATION_TITLE = 'Title'
const NOTIFICATION_BODY = 'Notification from the Renderer process.'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
```
