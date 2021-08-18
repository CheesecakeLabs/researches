# Electron drag-n-drop PoC

In this project, it's shown the functionality to drag out files from the application, and the ability to receive news files dragged in.

## Running application

```bash
#install dependecies
npm install

#run
npm start
```

## How to use

Below we have a example to use a drag and drop in Electron

### Drag example

To create a drag application, has to use ``ondragstart`` method to start listening the event, when clicked,
can use ``startDrag``method for get the image. In ``script.js`` file there is an example:

```js
document.getElementById('drag').ondragstart = (event) => {
  event.preventDefault()
  window.electron.startDrag('logo.png')
}
  ```

### Drop example

To create a drop application, has to create two event listener ``drop`` and ``dragover``. Inside of ``drop`` event has to add ``dataTransfer`` method for upload the image. In ``script.js`` file there is an example:

```js
dropDiv.addEventListener('drop', (event) => {
  event.preventDefault();
  event.stopPropagation();

  for (const f of event.dataTransfer.files) {
      // Using the path attribute to get absolute file path
      document.getElementById('result').innerText = `Dropped filename: ${f.path}`
    
      const imageTypes = ['image/png', 'ímage/jpg', 'image/jpeg']

      if (imageTypes.indexOf(f.type) !== -1) {
        dropDiv.style.background = `url(${f.path}) no-repeat center`
        dropDiv.style.backgroundSize = 'contain'
      }
    }
});

dropDiv.addEventListener('dragover', (e) => {
  e.preventDefault();
  e.stopPropagation();
});
```