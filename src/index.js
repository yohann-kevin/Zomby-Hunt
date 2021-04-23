import Phaser from 'phaser';
import tilesheet from './assets/images/tilesheet.png';
import map from './assets/json/test.json';
import Enemy from './enemy.js';
import ImagePlayer from './imagePlayer.js';

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
}

function create(){
    this.tilemap = this.make.tilemap({key: "map"});
    this.tileset = this.tilemap.addTilesetImage("ground","tiles");

    this.downLayer = this.tilemap.createStaticLayer("bottom",this.tileset,0,0);
    this.worldLayer = this.tilemap.createStaticLayer("world",this.tileset,0,0);
    this.topLayer = this.tilemap.createStaticLayer("top",this.tileset,0,0);

    let cameraPositionX = this.cameras.main.centerX;
    let cameraPositionY = this.cameras.main.centerY;
    let player = this.add.sprite(cameraPositionX, cameraPositionY, "player");
    player.setScale(0.8);
    let image = [
        this.add.sprite(50,40,"kick"),
        this.add.sprite(150,40,"walkOne"),
        this.add.sprite(250,40,"walkTwo"),
        this.add.sprite(350,40,"winOne"),
        this.add.sprite(450,40,"winTwo")
    ];
    for (let i = 0; i < image.length; i++) image[i].setScale(0.8);
}

function update(time, delta){

}
