
const images = [
  "./images/atom.jpeg", "./images/dreamweaver.png",
  "./images/eclipse.png", "./images/emacs.png", "./images/fleet.png",
  "./images/frontpage.png", "./images/helix.png", "./images/intellij.png", "./images/kakoune.png",
  "./images/lapce.png", "./images/nano.png", "./images/neovim.jpeg", "./images/netbeans.webp", "./images/notepad.jpeg",
  "./images/notepad++.png", "./images/pycharm.png", "./images/sublime.png", "./images/tierlist.webp", "./images/vim.png",
  "./images/vscode.webp", "./images/vs-express.jpeg", "./images/vs.jpeg", "./images/xcode.png", "./images/zed.png"
]

initializeBank()


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  console.log(ev)

  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


function initializeBank() {
  const bank = document.getElementById("bank")
  for (let i = 0; i < images.length; i++) {
    bank.innerHTML += `<img id="${images[i]}" src="${images[i]}" class="image" draggable="true" ondragstart="drag(event)" width="100px" height="100px">`
    // console.log(images[i])
    // var image = document.createElement("img")
    // image.src = images[i]
    // image.style.width = "100px"
    // image.style.height = "100px"
    // image.draggable = true
    // image.ondragstart = "drag(event)"
    // bank.appendChild(image)
  }
}