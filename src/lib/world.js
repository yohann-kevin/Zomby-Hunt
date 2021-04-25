let World = {
    tilemap: null,
    tileset: null,
    downLayer: null,
    worldLayer: null,
    topLayer: null,

    initWorld: function(game) {
        this.tilemap = game.scene.make.tilemap({key: "map"});
        this.tileset = this.tilemap.addTilesetImage("ground","tiles");
        this.downLayer = this.tilemap.createStaticLayer("bottom",this.tileset,0,0);
        this.worldLayer = this.tilemap.createStaticLayer("world",this.tileset,0,0);
        this.topLayer = this.tilemap.createStaticLayer("top",this.tileset,0,0);

        this.downLayer.setCollisionByProperty({"rigid-body": true});
    },

    manageCollider: function(game) {
        game.scene.physics.add.collider(game.player.aPlayer, this.downLayer);
    }
}   

module.exports = World;