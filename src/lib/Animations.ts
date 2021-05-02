import Game from "../Game";

export default class Animations {
    game: Game;

    constructor(game: Game) {
        this.game = game;
    }

    walkAnim() {
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
    }

    idleAnim() {
        this.game.anims.create({
            key: "playerIdle",
            frames: [{key: "adventurer", frame: "adventurer_stand"}, {key: "adventurer", frame: "adventurer_idle"}],
            frameRate: 2,
            repeat: -1
        });
    }
}