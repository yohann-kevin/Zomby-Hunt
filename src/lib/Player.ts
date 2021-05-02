import Game from "../Game";
import Animations from "./Animations";

export default class Player {
    name: string;
    game: Game;
    playerOne: any;
    isJumping: boolean;
    animations: Animations;

    constructor (game: Game) {
        this.name = "kirua";
        this.game = game;
        this.playerOne = null;
        this.isJumping = false;
        this.animations = new Animations(this.game);
    }

    initPlayer () {
        this.playerOne = this.game.physics.add.sprite(200, 200, "adventurer", "adventurer_stand");
        this.playerOne.setCollideWorldBounds(true);
    }

    generatePlayerAnimations() {
        this.animations.walkAnim();
        this.animations.idleAnim();
    }

    manageMove() { 
        if (this.game.cursors.left.isDown) {
            this.playerOne.setVelocityX(-200);
            this.playerOne.setFlip(true, false);
        } else if (this.game.cursors.right.isDown) {
            this.playerOne.setVelocityX(+200);
            this.playerOne.setFlip(false, false);
        } else {
            this.playerOne.setVelocityX(0);
        }
        
        if(this.game.cursors.up.isDown && this.playerOne.body.onFloor()) {
            this.playerOne.setVelocityY(-350);
        }

        this.playerOne.body.onFloor() ? this.isJumping = false : this.isJumping = true;

        if (this.isJumping) {
            this.playerOne.setTexture("adventurer", "adventurer_jump");
        } else {
            if (this.game.cursors.left.isDown) {
                this.playerOne.play("playerWalk", true);
            } else if (this.game.cursors.right.isDown) {
                this.playerOne.play("playerWalk", true);
            } else {
                this.playerOne.play("playerIdle", true);
            }
        }
    }
}