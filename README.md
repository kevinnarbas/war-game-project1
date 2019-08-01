# War game 
## Phase 1 Project:

### Wireframe for game board:
![Imgur](https://i.imgur.com/CqdZTPl.png)

### General Pseudocode 
    Initiate
        -Board
        -Turn
        -Winner

    Constants
        -Players turn *might change this if single player  only

    Game state
        -"Score/Card Count"
        -Flipped card


### Detailed Pseudocode

    * <- if two player game
    init
        array for each player 
            with cards dealt to each
        board arrays to hold players card
        *who goes first
        winner = null
        start render

    render
        shift from players array
        *change turn
        check which card is higher 
        run war function/push cards to winners array
        *change turns 
        update score/card count
        

    button click
        look for button click to run render

    check function
        check if player 1 > player 2 push to array
        else if player 1 < player 2 push to player 2
        or run war function for = cards

    war function 
        new background -maybe
        shift 3 additional cards to board array
        check logic on 4th card
    
    winner
        array.length = 52
        alert of winning player

    reset 
        run init

### Extra features if all goes well
* End early 
* Landing page with rules
* Different modes 
    * Two player
* Add audio elements

    




        

    

    
