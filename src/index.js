import Phaser from 'phaser';
import tilesheet from './assets/images/tilesheet.png';
import map from './assets/json/test.json';
import Enemy from './enemy.js';
import ImagePlayer from './imagePlayer.js';
import spritesheet from './assets/images/spritesheet.png';
import adventurer from './assets/json/adventurer.json';

console.log(adventurer);
console.log(spritesheet);

// console.log(window.screen.width);
// console.log(window.screen.height);

let config = {
    type : Phaser.AUTO,
    backgroundColor : "#5d9bb0",
    width : window.screen.width,
    height : window.screen.height,
    scene : {
        preload : preload,
        create : create,
        update : update
    },
    physics : {
        default : "arcade",
        arcade : {
        gravity : {y : 500}
        }
    }
}

const game = new Phaser.Game(config);
let controls;

function preload(){
    console.log(Enemy.plop());
    this.load.image("tiles", tilesheet);
    this.load.tilemapTiledJSON("map", map);
    this.load.image("player", ImagePlayer.adventurer());
    this.load.image("kick", ImagePlayer.adventurerKick());
    this.load.image("walkOne", ImagePlayer.adventurerWalkOne());
    this.load.image("walkTwo", ImagePlayer.adventurerWalkTwo());
    this.load.image("winOne", ImagePlayer.adventurerWinOne());
    this.load.image("winTwo", ImagePlayer.adventurerWinTwo());

    // this.load.atlas("adventurer", adventurer);
    this.load.atlas(
        "adventurer", 
        './src/assets/images/spritesheet.png', 
        './src/assets/json/adventurer.json',
        Phaser.Loader.TEXTURE_ATLAS_JSON_HASH,
        Phaser.Loader.TEXTURE_ATLAS_JSON_HASH
    );
}

function create(){
    this.tilemap = this.make.tilemap({key: "map"});

    this.tileset = this.tilemap.addTilesetImage("ground","tiles");

    this.downLayer = this.tilemap.createStaticLayer("bottom",this.tileset,0,0);
    this.worldLayer = this.tilemap.createStaticLayer("world",this.tileset,0,0);
    this.topLayer = this.tilemap.createStaticLayer("top",this.tileset,0,0);

    this.anims.create({
        key: "playerWalk",
        frames: this.anims.generateFrameNames("adventurer", {
            prefix: "adventurer_walk",
            start: 1,
            end: 2
        }),
        frameRate: 5,
        repeat: -1
    })

    let player = this.add.sprite(200,200,"adventurer","adventurer_stand");
    // player.anims.play("playerWalk");

    let cursors = this.input.keyboard.createCursorKeys();

    let controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        speed: 0.5
    }

    controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);
}

function update(time, delta){
    controls.update(delta);
}
