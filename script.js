function createCell(dataCell) {
    const cell = document.createElement("div");
    let id = getId(dataCell["posX"], dataCell["posY"]);
    cell.setAttribute('id', id);
    cell.setAttribute('class', "case");
    cell.style.width = "25px";
    cell.style.height = "25px";
    cell.style.borderWidth = createBorder(dataCell["walls"]);
    cell.style.borderColor = "red";
    cell.style.borderStyle = "solid";
    cell.style.backgroundColor = createStartEnd(dataCell["entrance"], dataCell["exit"])
    return cell;
};

function createBorder(walls) {
    let borders = "";
    if (walls[0]) {
        borders += "2px "
    } else {
        borders += "0px "
    }
    if (walls[1]) {
        borders += "2px "
    } else {
        borders += "0px "
    }
    if (walls[2]) {
        borders += "2px "
    } else {
        borders += "0px "
    }
    if (walls[3]) {
        borders += "2px"
    } else {
        borders += "0px"
    }
    return borders;
};

function createStartEnd(start, end) {
    let colorBackground = "";
    if(start){
        colorBackground = "orange";
    }
    if(end){
        colorBackground = "green";
    }
    return colorBackground;
};


function createLabyrinthe(data) {
    let size = sizeContainer(lab);
    const container = document.getElementById("container");
    container.style.width = size + 'px';
    container.style.height = size + 'px';
    for (const cellData of data) {
        const cell = createCell(cellData);
        container.appendChild(cell);
    }
};

function sizeContainer(arr) {
    let tabSize = Math.sqrt(arr.length)
    let containerSize = tabSize * 25;
    return containerSize;
};

function getId(x, y) {
    let id = x.toString() + "-" + y.toString();
    return id
};

let size_lab = 10;
const lab = labyrinthes[size_lab.toString()]['ex-0'];
createLabyrinthe(lab)