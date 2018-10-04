class Game {
    constructor(ready) {
        this.board = new Board;
        this.players = this.createPlayers();
        this.ready = false;
    }
    get activePlayer() {
        return this.players.find(player => player.active);
    }
    /** 
     * Creates two player objects
     * @return  {Array}    An array of two Player objects.
     */

    createPlayers() {
        let players = [new Player('Ovi', 1, '#e15258', true),
            new Player('AI', 2, '#e59a13')
        ]
        return players;
    }

    /**
     * Branches code, depending on what key player presses
     * @param   {Object}    e - Keydown event object
     */

    handleKeyDown(e) {
        if (this.ready) {
            if (e.key === 'ArrowLeft') {
                this.activePlayer.activeTokens.moveLeft();
            } else if (e.key === 'ArrowRight') {
                this.activePlayer.activeTokens.moveRight(this.board.columns);
            } else if (e.key === 'ArrowDown') {
                this.activePlayer.activeTokens.playToken();
            }
        }
    }
    playToken(){
        for(let space in this.board.spaces){

        }
    }
    /*
     *   Initializes game. 
     */
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeTokens.drawHTMLToken();
        this.ready = true;
    }
}