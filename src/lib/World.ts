import Game from "../Game";

export default class World {
    game: Game;
    tilemap: any;
    tileset: any;
    downLayer: any;
    worldLayer: any;
    topLayer: any;
    
    constructor (game: Game) {
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
        this.createLayer();
        this.addWorldCollider();
    }

    createLayer() {
        this.downLayer = this.tilemap.createStaticLayer("bottom",this.tileset,0,0);
        this.worldLayer = this.tilemap.createStaticLayer("world",this.tileset,0,0);
        this.topLayer = this.tilemap.createStaticLayer("top",this.tileset,0,0);
    }
    
    addWorldCollider() {
        this.downLayer.setCollisionByProperty({"rigid-body": true});
        this.game.physics.world.setBounds(0,0,this.tilemap.widthInPixels, this.tilemap.heightInPixels);
    }

    manageCollider() {
        this.game.physics.add.collider(this.game.player.playerOne, this.downLayer);
    }

    manageCameras() {
        this.game.cameras.main.startFollow(this.game.player.playerOne);
        this.game.cameras.main.setBounds(0,0,this.tilemap.widthInPixels, this.tilemap.heightInPixels);
    }
}