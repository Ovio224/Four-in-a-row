class Game {
    constructor(ready) {
        this.board = new Board;
        this.players = [];
        this.ready = false;
    }
    /** 
     * Creates two player objects
     * @return  {Array}    An array of two Player objects.
     */

    createPlayers() {
        let players = [ new Player('Ovi', '#e15258', 1, true),
                        new Player('AI', '#e59a13', 2)]
        return players;
    }
}