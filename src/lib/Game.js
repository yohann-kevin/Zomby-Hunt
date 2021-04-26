import tilesheet from '../assets/images/tilesheet.png';
import map from '../assets/json/test.json';
import World from './World';
import Player from './Player';

class Game extends Phaser.Scene {
    constructor () {
        super();
        this.world = new World(this);
        this.player = new Player(this);
        this.cursors = null;
        this.essaie = "kirua";
    }

    preload () {
        this.load.image("tiles", tilesheet);
        this.load.tilemapTiledJSON("map", map);

        this.load.atlas(
            "adventurer",
            './src/assets/images/spritesheet.png',
            './src/assets/json/adventurer.json',
            Phaser.Loader.TEXTURE_ATLAS_JSON_HASH,
            Phaser.Loader.TEXTURE_ATLAS_JSON_HASH
        );
    }

    create () {
        this.world.initWorld();

        this.player.initPlayer();
        this.player.generatePlayerAnimations();
        // this.player.playerOne.play("playerWalk");

        this.world.manageCollider();
        this.cursors = this.input.keyboard.createCursorKeys();

        this.world.manageCameras();
    }

    update () {
        this.player.manageMove();
    }
}

export default Game;