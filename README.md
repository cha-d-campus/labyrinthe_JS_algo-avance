# Cours d'algo avancé - le labyrinthe

> Le but de l'exercice sera de créer un algorithme qui trouve la sortie du labyrinthe

## Pseudo-code - Etape 2 :

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
```
DFS_iterative (G, e):                                   
    → let S be a stack
    → insert e in the stack

    while ( S is not empty ) :
      → Pop an element v from stack to visit next
       if v was not visited :
        → mark v as visited
        if v is the exit :
            → return path from e to v
        for all neighbors w of v in graph G:
          if w was not visited :
            → Tag v as the parent of w    
            → insert w in the stack         
    → return Undefined
```

Explication des différentes variables :  
* G → votre labyrinthe  
* e → entrée du labyrinthe  
* v → le vertex courant (la position actuelle)  
* Stack (cf. ressource)

_**“Tag v as the parent of w”** est utile pour retourner le chemin en sortie de fonction, en revenant sur ses pas (en remontant les parents successifs depuis la sortie)._


### Version récursive de DFS
```
  DFS_recursive (G, v):                                   
    if v was not visited :
      → mark v as visited
        if v is the exit :
          → return v
        for all neighbors w of v in graph G :
          → let path be the result of calling DFS_recursive (G, w)
          if path is valid :
            → return the concatenation of v and path
    → return Undefined 
```

Explication des différentes variables :   
* G → votre labyrinthe  
* v → le vertex courant (la position actuelle)  

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





