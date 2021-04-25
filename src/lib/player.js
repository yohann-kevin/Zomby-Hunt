let Player = {
    aPlayer: null,

    initPlayer: function(game) {
        this.aPlayer = game.scene.physics.add.sprite(200,200,"adventurer","adventurer_stand");
    },

    generatePlayerAnimations: function(game) {
        game.scene.anims.create({
            key: "playerWalk",
            frames: game.scene.anims.generateFrameNames("adventurer", {
                prefix: "adventurer_walk",
                start: 1,
                end: 2
            }),
            frameRate: 5,
            repeat: -1
        })
    },

    manageMove: function(game) {
        if (game.cursors.left.isDown) {
            this.aPlayer.setVelocityX(-200);
        } else if (game.cursors.right.isDown) {
            this.aPlayer.setVelocityX(+200);
        } else {
            this.aPlayer.setVelocityX(0);
        }
    }
}

module.exports = Player;