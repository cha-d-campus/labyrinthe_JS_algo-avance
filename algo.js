let size_lab = 4;

const lab = labyrinthes[size_lab.toString()]['ex-0'];
const container = document.querySelector("#labyrinthe-container");
let size = sizeContainer(lab);
container.style.width = size + 'px';
container.style.height = size + 'px';

// container.style.height = sizeContainer(lab) + 'px';
function createCell(id, borderTop, borderBottom, BorderLeft, BorderRight) {
    const el = document.createElement("div");
    el.setAttribute('id', id);
    el.setAttribute('class', "case")
    el.style.width = "25px";
    el.style.height ="25px";
    container.appendChild(el);
};

function sizeContainer(arr){
    let tabSize = Math.sqrt(arr.length)
    let containerSize = tabSize*25;
    return containerSize;
};

function getId(x, y) {
    let idX = x;
    let idY = y;
    let id = idX.toString() +"-"+ idY.toString();
    return id
};

// function getBorder(index) {
//     for(i=0; i<=lab[index][])
// }

function createLabyrinthe() {
    for (i = 0; i < lab.length; i++) {
        let id = getId(lab[i]["posX"], lab[i]["posY"])
        createCell(id)
    }
};

createLabyrinthe()