// Variable donnant la taille en case du labyrinthe 
let size_lab = 8;
function keysLab(arr) {
    let arrSizeLab = [];
    arrSizeLab.push(arr);
    let arrKeys = Object.keys(arrSizeLab[0])
    return arrKeys;
}

// Variable donnant le numéro d'exemple de labyrinthe choisi
let ex_lab = 2;

// Variable récupérant les labyrinthes
const labDFS = labyrinthes[size_lab.toString()]['ex-' + ex_lab.toString()];
const labBFS = labyrinthes[size_lab.toString()]['ex-' + ex_lab.toString()];

let keysLabArr = keysLab(labyrinthes)

// console.log(keysLabArr)
function sizeLab(sizeArr) {
    for (i = 0; i <= sizeArr.length - 1; i++) {
        let size = parseInt(sizeArr[i]);
        return size
    }
    return 
}

console.log(sizeLab(keysLabArr))

// function createListSizeLab() {
//     const option = document.createElement("option")
// }


// Création d'une case du labyrinthe
function createCell(dataCell) {
    const cell = document.createElement("div");
    let id = getId(dataCell["posX"], dataCell["posY"]);
    cell.setAttribute('id', id);
    cell.setAttribute('class', "case");
    cell.style.borderWidth = createBorder(dataCell["walls"]);
    if (dataCell["entrance"]) {
        let startCell = document.createElement("div");
        startCell.classList.add("start");
        cell.appendChild(startCell);
    }
    if (dataCell["exit"]) {
        let endCell = document.createElement("div");
        endCell.classList.add("end");
        cell.appendChild(endCell);
    }
    return cell;
};


// Création des murs du labyrinthe
function createBorder(walls) {
    let borders = walls.map(el => el ? "1px" : "0px").join(" ");
    return borders;
};

// Création du labyrinthe DFS
function createLabyrintheDFS(data) {
    let size = sizeContainer(labDFS);
    const container = document.getElementById("containerDFS");
    container.style.width = size + 'px';
    container.style.height = size + 'px';
    data.forEach(cellData => {
        let cell = createCell(cellData);
        container.appendChild(cell);
    });
    resolveLabDFS(labDFS, labDFS.getStart())
};

// Création du labyrinthe BFS
function createLabyrintheBFS(data) {
    let size = sizeContainer(labBFS);
    const container = document.getElementById("containerBFS");
    container.style.width = size + 'px';
    container.style.height = size + 'px';
    data.forEach(cellData => {
        let cell = createCell(cellData);
        container.appendChild(cell);
    });
    resolveLabBFS(labBFS, labBFS.getStart());
};

// Fonction qui récupère la case d'entrée
labDFS.getStart = function () {
    let startCell = this.find(cell => cell.entrance);
    return startCell;
}

labBFS.getStart = function () {
    let startCell = this.find(cell => cell.entrance);
    return startCell;
}

// Fonction qui récupère les coordonnées de la case courante
labDFS.getCell = function (x, y) {
    let currentCell = this.find(cell => cell.posX == x && cell.posY == y);
    return currentCell;
};

labBFS.getCell = function (x, y) {
    let currentCell = this.find(cell => cell.posX == x && cell.posY == y);
    return currentCell;
};

// Fonction qui trouve les cases voisines à la case courante et qui sont accessibles 
labDFS.getNeighbors = function (cell) {
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

labBFS.getNeighbors = function (cell) {
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

// Fonction délai affichage des cases
function resolveAfter500MS() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 50);
    });
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
function resolveLabDFS(lab, start) {
    let waitingList = new Stack();
    waitingList.push(start);
    while (!waitingList.isEmpty()) {
        let currentCell = waitingList.pop();
        if (!currentCell.visited) {
            currentCell.visited = true;
            if (currentCell.exit) {
                return buildPathDFS(start, currentCell);
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

// Création de Queue()
function Queue() {
    this.data = [];
    this.isEmpty = () => this.data.length == 0;
    this.push = (elt) => {
        if (typeof elt !== "undefined") {
            this.data.push(elt);
        }
    }
    this.shift = () => this.data.shift();
}

// Création de la fonction de jeu pour trouver le chemin de la case de départ à la case de sortie du labyrinthe
function resolveLabBFS(lab, start) {
    let waitingList = new Queue();
    waitingList.push(start);
    while (!waitingList.isEmpty()) {
        let currentCell = waitingList.shift();
        if (!currentCell.visited) {
            currentCell.visited = true;
            if (currentCell.exit) {
                return buildPathBFS(start, currentCell);
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

// Fonction qui permet de construire le chemin final (sans tous les essais de recherche)
async function buildPathDFS(start, currentCell) {
    while (currentCell != start) {
        currentCell = currentCell.parent
        let pathCell = currentCell;
        if (pathCell && currentCell != start) {
            let cell = document.getElementById(`${pathCell.posX}-${pathCell.posY}`);
            let circleCell = document.createElement("div");
            // Eléments pour afficher des pattes de chats à la place de cercles
            // circleCell.setAttribute('class', "fa fa-paw");
            // circleCell.setAttribute('style', 'color: purple');
            // circleCell.style.width = "15px";
            // circleCell.style.height = "15px";
            circleCell.style.width = "5px";
            circleCell.style.height = "5px";
            circleCell.style.backgroundColor = "purple";
            circleCell.style.margin = "auto";
            circleCell.style.borderRadius = "50px"
            cell.appendChild(circleCell)
            await resolveAfter500MS();
        };
    }
    return
};

// Fonction qui permet de construire le chemin final (sans tous les essais de recherche)
async function buildPathBFS(start, currentCell) {
    while (currentCell != start) {
        currentCell = currentCell.parent
        let pathCell = currentCell;
        if (pathCell && currentCell != start) {
            let cell = document.getElementById(`${pathCell.posX}-${pathCell.posY}`);
            let circleCell = document.createElement("div");
            circleCell.style.width = "10px";
            circleCell.style.height = "10px";
            circleCell.style.backgroundColor = "purple";
            circleCell.style.margin = "auto";
            circleCell.style.borderRadius = "50px"
            cell.appendChild(circleCell)
            await resolveAfter500MS();
        };
    }
    return
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



// Appel de la function qui créée le labyrinthe DFS
createLabyrintheDFS(labDFS)



// Appel de la function qui créée le labyrinthe BFS
createLabyrintheBFS(labBFS)

//  resolveLabBFS(lab, lab.getStart());
// resolveLabDFS(lab, lab.getStart());

// Création des 2 labyrinthes
// function createBothLab(lab) {
//     const container = document.getElementById("allContentainers");
//     createLabyrintheDFS(lab);
//     createLabyrintheBFS(lab);
// }