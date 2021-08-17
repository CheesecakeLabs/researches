//Drag out event
document.getElementById('drag').ondragstart = (event) => {
  event.preventDefault()
  window.electron.startDrag('logo.png')
}

//Drop events
const dropDiv = document.getElementById('drop')

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