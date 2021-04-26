import Phaser from 'phaser';
import tilesheet from './assets/images/tilesheet.png';
import map from './assets/json/test.json';
import World from './lib/World';
import Player from './lib/Player';

class Game extends Phaser.Scene {
    constructor () {
        super();
        this.world = new World(this);
        this.player = new Player(this);
        this.cursors = null;
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

let config = {
    type : Phaser.AUTO,
    backgroundColor : "#5d9bb0",
    width : window.screen.width,
    height : window.screen.height,
    scene: Game,
    physics : {
        default : "arcade",
        arcade : {
        gravity : {y : 500}
        }
    }
};

const game = new Phaser.Game(config);
