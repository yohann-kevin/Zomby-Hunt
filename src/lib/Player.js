class Player {
    constructor(game) {
        this.game = game;
        this.playerOne = null;
    }

    initPlayer() {
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
        })
    }

    manageMove() {
        if (this.game.cursors.left.isDown) {
            this.playerOne.setVelocityX(-200);
            this.playerOne.play("playerWalk");
        } else if (this.game.cursors.right.isDown) {
            this.playerOne.setVelocityX(+200);
            this.playerOne.play("playerWalk");
        } else {
            this.playerOne.setVelocityX(0);
        }
    }
}

export default Player;
