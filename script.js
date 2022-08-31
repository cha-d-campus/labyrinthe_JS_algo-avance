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

// Création des murs du labyrinthe
function createBorder(walls) {
    let borders = "";
    if (walls[0]) {
        borders += "1px "
    } else {
        borders += "0px "
    }
    if (walls[1]) {
        borders += "1px "
    } else {
        borders += "0px "
    }
    if (walls[2]) {
        borders += "1px "
    } else {
        borders += "0px "
    }
    if (walls[3]) {
        borders += "1px"
    } else {
        borders += "0px"
    }
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
    for (const cellData of data) {
        const cell = createCell(cellData);
        container.appendChild(cell);
    }
};

// Création de la fonction de jeu pour trouver le chemin de la case de départ à la case de sortie du labyrinthe
// function resolveLabyrinthe(dataCell) {
//     let id = getId(dataCell["posX"], dataCell["posY"]);
//     let idEntrance = 
//     if (dataCell["entrance"]) {
//         while ()
// }
// };

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
let size_lab = 15;

// Variable donnant le numéro d'exemple de labyrinthe choisi
let ex_lab = 1;

// Variable récupérant les labyrinthes
const lab = labyrinthes[size_lab.toString()]['ex-' + ex_lab.toString()];

// Appel de la function qui créée le labyrinthe
createLabyrinthe(lab)

