//Drag out event
document.getElementById('drag').ondragstart = (event) => {
  event.preventDefault()
  window.electron.startDrag('README.md')
}

//Drop events
document.getElementById('drop').addEventListener('drop', (event) => {
  event.preventDefault();
  event.stopPropagation();

  for (const f of event.dataTransfer.files) {
      // Using the path attribute to get absolute file path
      document.getElementById('result').innerText = `Dropped filename: ${f.path}`
    }
});

document.getElementById('drop').addEventListener('dragover', (e) => {
  e.preventDefault();
  e.stopPropagation();
});