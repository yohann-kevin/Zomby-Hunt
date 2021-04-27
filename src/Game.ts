import 'phaser';
import Config from './lib/Config';
import Style from './lib/Style';
import World from './lib/World';
import Player from './lib/Player';

export default class Game extends Phaser.Scene {
    world: World;
    player: Player;
    cursors: any;

    constructor () {
        super('Game');
        this.world = new World(this);
        this.player = new Player(this);
        this.cursors = null;
    }

    preload () {
        this.load.image("tiles", '../assets/images/tilesheet.png');
        this.load.tilemapTiledJSON("map", '../assets/json/test.json');

        this.load.atlas(
            "adventurer",
            '../assets/images/spritesheet.png',
            '../assets/json/adventurer.json'
        );
    }

    create () {
        new Style().initStyle();
        this.world.initWorld();

        this.player.initPlayer();
        this.player.generatePlayerAnimations();

        this.world.manageCollider();
        this.cursors = this.input.keyboard.createCursorKeys();

        this.world.manageCameras();
    }

    update () {
        this.player.manageMove();
    }
}

let conf = new Config();
conf.config.scene = new Game();
new Phaser.Game(conf.initConfig());
