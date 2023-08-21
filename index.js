
const images = [
  "./images/atom.jpeg", "./images/dreamweaver.png",
  "./images/eclipse.png", "./images/emacs.png", "./images/fleet.png",
  "./images/frontpage.png", "./images/helix.png", "./images/intellij.png", "./images/kakoune.png",
  "./images/lapce.png", "./images/nano.png", "./images/neovim.jpeg", "./images/netbeans.webp", "./images/notepad.jpeg",
  "./images/notepad++.png", "./images/pycharm.png", "./images/sublime.png", "./images/tierlist.webp", "./images/vim.png",
  "./images/vscode.webp", "./images/vs-express.jpeg", "./images/vs.jpeg", "./images/xcode.png", "./images/zed.png"
]

initializeBank()
initializeTiers()

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
  }
}


function initializeTiers() {
  const t1 = "God";
  const t2 = "DTC";
  const t3 = "If I Have To";
  const t4 = "Painful";
  const t5 = "Dog Water";
  const t6 = "Who?";
  const tierNames = [
      t1,
      t2,
      t3,
      t4,
      t5,
      t6,
  ];
  const tierColors = [
      "#ff7f7f",
      "#ffbf7f",
      "#ffdf7f",
      "#ffff7f",
      "#bfff7f",
      "#7fff7f",
      "#7fffbf",
      "#7fffff",
  ];

  for (let i = 0; i < tierNames.length; i++) {
    const tiersContainer = document.getElementById("tiers")

    tiersContainer.innerHTML += `<div class="tier">
    <div class="tier-title" style="background-color:${tierColors[i]};"><h1 class="title">${tierNames[i]}</h1></div>
    <div id="div1" class="drop" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

  </div>`
  }
}