// js version :

import Phaser from 'phaser';
import Config from './lib/Config';
import Game from './lib/Game';

const configuration = new Config();
configuration.config.scene = Game;

new Phaser.Game(configuration.initConfig());
