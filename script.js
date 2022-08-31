// Création d'une case du labyrinthe
function createCell(dataCell) {
    const cell = document.createElement("div");
    let id = getId(dataCell["posX"], dataCell["posY"]);
    cell.setAttribute('id', id);
    cell.setAttribute('class', "case");
    cell.style.width = "25px";
    cell.style.height = "25px";
    cell.style.borderWidth = createBorder(dataCell["walls"]);
    cell.style.borderColor = "blueviolet";
    cell.style.borderStyle = "solid";
    cell.style.backgroundColor = createStartEnd(dataCell["entrance"], dataCell["exit"])
    cell.visited = false;
    return cell;
};

// Création des murs du labyrinthe
function createBorder(walls) {
    let borders = walls.map(el => el ? "1px" : "0px").join(" ");
    return borders;
};

// Création des cases de départ et de sortie du labyrinthe
function createStartEnd(start, end) {
    let colorBackground = "";
    if (start) {
        colorBackground = "turquoise";
    }
    if (end) {
        colorBackground = "chartreuse";
    }
    return colorBackground;
};



// Création du labyrinthe
function createLabyrinthe(data) {
    let size = sizeContainer(lab);
    const container = document.getElementById("container");
    container.style.width = size + 'px';
    container.style.height = size + 'px';
    data.forEach(cellData => {
        let cell = createCell(cellData);
        container.appendChild(cell);
    });
    
};

function getCell(x, y){
    let neighbor = 
    return neighbor;
}

function getNeighbors(cell) {
    let neighbors = []; 
    if (cell.walls[0] )
}

// Création du Stack
function Stack() {
    this.push = (el) => { console.log("pushing" + el) };
    this.isEmpty = () => true;
    this.pop = () => { console.log("poping") }
}

// Création de la fonction de jeu pour trouver le chemin de la case de départ à la case de sortie du labyrinthe
function resolveLab(lab, start) {
    let waitingList = new Stack();
    waitingList.push(start);
    while (!waitingList.isEmpty()) {
        let currentCell = waitingList.pop();
        if (!currentCell.visited) {
            currentCell.visited === true;
            if (currentCell.isExit) {
                return labPath(start, currentCell);
            }
            lab.getNeighbors(currentCell).forEach(neighborCell => {
                if (!neighborCell.visited) {
                    neighborCell.parentOf(currentCell);
                    neighborCell.pop();
                }
            });
        }
    }
    return undefined;
};

// Création du bloc qui contient le labyrinthe
function sizeContainer(arr) {
    let tabSize = Math.sqrt(arr.length)
    let containerSize = tabSize * 25;
    return containerSize;
};

// Création de la finction qui permet de créer l'ID de chaque cases
function getId(x, y) {
    let id = x.toString() + "-" + y.toString();
    return id
};

// Variable donnant la taille en case du labyrinthe 
let size_lab = 12;

// Variable donnant le numéro d'exemple de labyrinthe choisi
let ex_lab = 1;

// Variable récupérant les labyrinthes
const lab = labyrinthes[size_lab.toString()]['ex-' + ex_lab.toString()];

// Appel de la function qui créée le labyrinthe
createLabyrinthe(lab)
resolveLab(lab);
