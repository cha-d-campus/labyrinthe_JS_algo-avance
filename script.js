// Variable donnant la taille en case du labyrinthe 
let size_lab = 15;

// Variable donnant le numéro d'exemple de labyrinthe choisi
let ex_lab = 0;

// Variable récupérant les labyrinthes
const lab = labyrinthes[size_lab.toString()]['ex-' + ex_lab.toString()];

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
    return cell;
};

function buildPath(currentCell) {
    while (currentCell.parent) {
        pathCell = currentCell.parent;
        document.getElementById(`${pathCell.posX}-${pathCell.posY}`).style.backgroundColor = "purple"
        console.log("chemin :")
        console.log(pathCell);
    }
    return
}



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

// Fonction qui récupère la case d'entrée
lab.getStart = function () {
    let startCell = this.find(cell => cell.entrance);
    return startCell;
}

// Fonction qui récupère les coordonnées de la case courante
lab.getCell = function (x, y) {
    let currentCell = this.find(cell => cell.posX == x && cell.posY == y);
    return currentCell;
};

// Fonction qui trouve les cases voisines à la case courante et qui sont accessibles 
lab.getNeighbors = function (cell) {
    let neighbors = [];
    let topNeighbor = this.getCell(cell.posX - 1, cell.posY);
    let rightNeighbor = this.getCell(cell.posX, cell.posY + 1);
    let bottomNeighbor = this.getCell(cell.posX + 1, cell.posY);
    let letfNeighbor = this.getCell(cell.posX, cell.posY - 1);
    if (topNeighbor && !cell.walls[0]) {
        neighbors.push(topNeighbor)
    };
    if (rightNeighbor && !cell.walls[1]) {
        neighbors.push(rightNeighbor)
    };
    if (bottomNeighbor && !cell.walls[2]) {
        neighbors.push(bottomNeighbor)
    };
    if (letfNeighbor && !cell.walls[3]) {
        neighbors.push(letfNeighbor)
    };
    return neighbors;
}

// Création du Stack
function Stack() {
    this.data = [];
    this.isEmpty = () => this.data.length == 0;
    this.push = (elt) => {
        if (typeof elt !== "undefined") {
            this.data.push(elt);
        }
    }
    this.pop = () => this.data.pop();
}

// Création de la fonction de jeu pour trouver le chemin de la case de départ à la case de sortie du labyrinthe
function resolveLab(lab, start) {
    let waitingList = new Stack();
    waitingList.push(start);
    while (!waitingList.isEmpty()) {
        let currentCell = waitingList.pop();

        if (!currentCell.visited) {
            currentCell.visited = true;

            document.getElementById(`${currentCell.posX}-${currentCell.posY}`).style.backgroundColor = "purple"


            console.log(currentCell)
            if (currentCell.exit) {
                return buildPath(currentCell);
            }
            lab.getNeighbors(currentCell).forEach(neighborCell => {
                if (!neighborCell.visited) {
                    neighborCell.parent = currentCell;
                    waitingList.push(currentCell);
                }
                waitingList.push(neighborCell)
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



// Appel de la function qui créée le labyrinthe
createLabyrinthe(lab)
resolveLab(lab, lab.getStart());

