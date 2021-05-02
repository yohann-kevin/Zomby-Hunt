import Game from "../Game";

export default class Player {
    name: string;
    game: Game;
    playerOne: any;
    isJumping: boolean;

    constructor (game: Game) {
        this.name = "kirua";
        this.game = game;
        this.playerOne = null;
        this.isJumping = false;
    }

    initPlayer () {
        this.playerOne = this.game.physics.add.sprite(200, 200, "adventurer", "adventurer_stand");
        this.playerOne.setCollideWorldBounds(true);
    }

    generatePlayerAnimations() {
        this.game.anims.create({
            key: "playerWalk",
            frames: this.game.anims.generateFrameNames("adventurer", {
                prefix: "adventurer_walk",
                start: 1,
                end: 2
            }),
            frameRate: 5,
            repeat: -1
        });
        this.game.anims.create({
            key: "playerIdle",
            frames: [{key: "adventurer", frame: "adventurer_stand"}, {key: "adventurer", frame: "adventurer_idle"}],
            frameRate: 2,
            repeat: -1
        });
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