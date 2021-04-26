class World {
    constructor(game) {
        this.game = game;
        this.tilemap = null;
        this.tileset = null;
        this.downLayer = null;
        this.worldLayer = null;
        this.topLayer = null;
    }

    initWorld() {
        this.tilemap = this.game.make.tilemap({key: "map"});
        this.tileset = this.tilemap.addTilesetImage("ground","tiles");
        this.downLayer = this.tilemap.createStaticLayer("bottom",this.tileset,0,0);
        this.worldLayer = this.tilemap.createStaticLayer("world",this.tileset,0,0);
        this.topLayer = this.tilemap.createStaticLayer("top",this.tileset,0,0);

        this.downLayer.setCollisionByProperty({"rigid-body": true});
    }

    manageCollider() {
        this.game.physics.add.collider(this.game.player.playerOne, this.downLayer);
    }
}

module.exports = World;