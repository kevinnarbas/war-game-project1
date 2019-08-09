# War game 
## Phase 1 Project:

## Technologies used:
- HTML, CSS, JavaScript.

### Wireframe for game board:
---
![Imgur](https://i.imgur.com/CqdZTPl.png)

### General Pseudocode 
---
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
---
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
---

# Getting started

![Imgur](https://i.imgur.com/76lMS8B.png)

This was my view for the majority of the game. These backs were hard coded into the HTML

Most of the game's logic was done with console.log - ing ...everything

![Imgur](https://i.imgur.com/4FRkJNZ.png)

This is the rough state when i finally got the logic done and started to render cards dynamically.

![Imgur](https://i.imgur.com/tGX0N1z.png)

This took another long bit to make happen and still isnt perfect but the cards that were pulled from the war function are displayed so you can see what precious cards youre losing. I know its supposed to me anonymous but oh well.

---


Here is the final state of what i was happy with.  the cards are still rendering really tall. Also added a turn count so you know how long this play session actually is. Also added another button to end game early for the impatient ones.

![Imgur](https://i.imgur.com/rIwJ2Ms.png)
![Imgur](https://i.imgur.com/YPfDbRI.png)
![Imgur](https://i.imgur.com/xg06Rkb.png)
![Imgur](https://i.imgur.com/5AyJ0py.png)
![Imgur](https://i.imgur.com/VoodlbT.png)

---

My actual end state is this with the added instructions page. 
![Imgur](https://i.imgur.com/ATXK3MK.png)