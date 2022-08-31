# Cours d'algo avancé - le labyrinthe

> Le but de l'exercice sera de créer un algorithme qui trouve la sortie du labyrinthe

## Pseudo-code - Etape 2 :  
> Créer son pseudo-code et le comparer au DFS et BFS ensuite

#### Exercice pseudo-code :
Commencer à case _Entrance_  
Tant que ≠ de case _Exit_  
&nbsp;&nbsp;&nbsp;&nbsp; Si walls = false **ET** case n'a pas été visité  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Si case est une intersection   
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ⇒ stacker les possibilités supplémentaires   
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ⇒ avancer sur la 1ère case possible (changer la couleur de la case)  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sinon     
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ⇒ avancer (changer la couleur de la case)  
&nbsp;&nbsp;&nbsp;&nbsp; Sinon retourner à la dernière intersection et vérifier les autres possibilités  

## Résolution par DFS : Pseudo-code de parcours DFS (Depth First Search)

### Version itérative de DFS
DFS_iterative (**lab**, **start** ) :                                   
    &nbsp;&nbsp;&nbsp;&nbsp; → let **waitingList** be a stack
    &nbsp;&nbsp;&nbsp;&nbsp; → insert **start** in the stack
    &nbsp;&nbsp;&nbsp;&nbsp; while ( **waitingList** is not empty ) :
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  → Pop() an element **currentCell** from stack to visit next
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if **currentCell** was not visited :
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; → mark **currentCell** as visited
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if **currentCell** is the exit :
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; → return **path** from **start** to **currentCell**
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; for all neighbors **neighborsCell** of **currentCell** in graph **lab**:
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if **neighborsCell** was not visited :
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; → Tag **currentCell** as the parent of **neighborsCell**    
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; → insert **neighborsCell** in the stack         
   &nbsp;&nbsp;&nbsp;&nbsp; → return Undefined

Explication des différentes variables :  
* **lab** → votre labyrinthe  
* **start** → entrée du labyrinthe  
* **currentCell** → la case courante (la position actuelle)  
* **neighborsCell** → la/les case.s voisine.s de la case courante 
* **waitingList** → Stack (cf. ressource)

_**“Tag **currentCell** as the parent of **neighborsCell**”** est utile pour retourner le chemin en sortie de fonction, en revenant sur ses pas (en remontant les parents successifs depuis la sortie)._


### Version récursive de DFS

  DFS_recursive (**lab**, **currentCell**):                                   
     &nbsp;&nbsp;&nbsp;&nbsp; if **currentCell** was not visited :
      &nbsp;&nbsp;&nbsp;&nbsp; → mark **currentCell** as visited
         &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; if **currentCell** is the exit :
           &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; → return **currentCell**
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; for all neighbors **neighborsCell** of **currentCell** in graph **lab** :
         &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; → let **path** be the result of calling DFS_recursive (**lab**, **neighborsCell**)
         &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; if **path** is valid :
           &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; → return the concatenation of **currentCell** and **path**
   &nbsp;&nbsp;&nbsp;&nbsp; → return Undefined 

Explication des différentes variables :   
* **lab** → votre labyrinthe  
* **currentCell** → la case courante (la position actuelle)  

_Retourner le chemin revient à remonter la pile d’appels_

## Résolution par BFS : Pseudo-code de parcours BFS (Breadth First Search)
```
 BFS (G, e)
    → let Q be a queue.
    → push e to Q.
    while ( Q is not empty ) :
      → let v be the next element waiting in the queue
      if v was not visited :
        → mark v as visited.
        if v is the exit :
          → return path from e to v
        for all neighbours w of v in graph G
          if w is not visited :
            → Tag v as the parent of w  
            → add w to the queue
    → return Undefined
```
Explication de variable :  
* Queue (cf. ressource)





