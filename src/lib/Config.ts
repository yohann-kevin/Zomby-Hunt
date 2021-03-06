export default class Config {
    config: any;
    
    constructor () {
        this.config = {
            type : Phaser.AUTO,
            backgroundColor : "#5d9bb0",
            width : window.innerWidth,
            height : window.innerHeight,
            scene: null,
            physics : {
                default : "arcade",
                arcade : {
                gravity : {y : 500}
                }
            }
        };
    }

    initConfig () {
        return this.config;
    }
}