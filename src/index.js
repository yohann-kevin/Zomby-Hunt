import Phaser from 'phaser';
import tilesheet from './assets/images/tilesheet.png';
import map from './assets/json/test.json';
import World from './lib/world.js';
import Player from './lib/player.js';

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
    
const phaserGame = new Phaser.Game(config);

let game = {
    scene: null,
    world: World,
    player: Player
}

function preload(){
    game.scene = this;
    game.scene.load.image("tiles", tilesheet);
    game.scene.load.tilemapTiledJSON("map", map);

    game.scene.load.atlas(
        "adventurer", 
        './src/assets/images/spritesheet.png', 
        './src/assets/json/adventurer.json',
        Phaser.Loader.TEXTURE_ATLAS_JSON_HASH,
        Phaser.Loader.TEXTURE_ATLAS_JSON_HASH
    );
}

function create(){
    game.world.initWorld(game);

    game.player.initPlayer(game);
    game.player.generatePlayerAnimations(game);
    // game.player.aPlayer.play("playerWalk");
}

function update(time, delta){
    // controls.update(delta);
}
