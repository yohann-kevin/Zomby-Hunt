let Player = {
    aPlayer: null,

    initPlayer: function(game) {
        this.aPlayer = game.scene.add.sprite(200,200,"adventurer","adventurer_stand");
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
    }
}

module.exports = Player;