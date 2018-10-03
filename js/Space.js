class Space {
    constructor(x, y) {
        [this.x, this.y] = [x, y];
        this.id = `space-${x}-${y}`;
        this.token = null;
    }
}