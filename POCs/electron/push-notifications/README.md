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

## Example

To test the application, just click the "Create Push Notification" button and it will create a notification.

https://user-images.githubusercontent.com/37526665/130626427-742b9130-6833-410f-b5d0-32cbc63e7b16.mov

