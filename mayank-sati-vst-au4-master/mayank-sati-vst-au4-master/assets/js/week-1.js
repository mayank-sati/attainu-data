'use strict';

(function(){

    var game = new Phaser.Game(900, 600, Phaser.AUTO, 'gameDiv');

    var state = {
        preload: function() {
            this.currentData = {
                gameTitle: "",
                gameBg: "bgBlack",
                showSpaceShip: false
            };
            this.newData = {};

            this.game.load.image('bgBlack', '../../assets/img/bg-black.png');
            this.game.load.image('bgPurple', '../../assets/img/bg-purple.png');
            this.game.load.image('bgDirt', '../../assets/img/bg-dirt.png');
            this.game.load.image('bgGrass', '../../assets/img/bg-grass.png');
            this.game.load.image('playerShip', '../../assets/img/player-ship.png');
            
            this.backgroundPool = this.game.add.group();
        },

        create: function() {
            var xTitle = game.world.width / 2;
            var yTitle = game.world.height / 2;
            var headingStyle = { font: "48px Arial", fill: "#ffffff" };
            this.headingText = this.game.add.text(
                xTitle - 225, yTitle - 30, "", headingStyle
            );
            this.updateShip();
        },

        update: function() {
            this.newData.gameTitle = window.myGameTitle || "";
            this.newData.gameBg = window.myGameBackground || "bgBlack";
            this.newData.showSpaceShip = window.showSpaceShip || false;
            
            this.updateTitle();
            this.updateBackground();
            this.updateShip();
            this.rotateShip();
        },

        updateTitle: function() {
            if(this.currentData.gameTitle === this.newData.gameTitle) {
                return;
            }

            this.headingText.text = this.newData.gameTitle;
            this.currentData.gameTitle = this.newData.gameTitle;
        },

        updateBackground: function(bgColor) {
            if(this.currentData.gameBg === this.newData.gameBg) {
                return;
            }

            this.backgroundPool.killAll();

            var numCols = this.game.width / 128 + 1;
            var numRows = this.game.height / 128 + 1;
            for(var i = 1, x = 1, j, y; i <= numCols; i += 1) {
                for(j = 1, y = 1; j <= numRows; j += 1) {
                    var bg = this.game.add.sprite(x, y, this.newData.gameBg);
                    this.backgroundPool.add(bg);
                    y += 128;
                }
                x += 128
            }

            this.currentData.gameBg = this.newData.gameBg;
        },

        updateShip: function() {
                if(this.currentData.showSpaceShip === this.newData.showSpaceShip) {
                    return;
                }

                var show = this.newData.showSpaceShip;

                if(!show) {
                    if(this.ship && this.ship.alive) {
                        this.ship.kill();
                    }
                    this.currentData.showSpaceShip = false;
                    return;
                }

                this.ship = this.game.add.sprite(
                  this.game.world.centerX, 
                  this.game.world.centerY + 200,
                  'playerShip'
                );
                this.ship.anchor.setTo(0.5, 0.5);
                this.game.physics.enable(this.ship, Phaser.Physics.ARCADE);

                this.currentData.showSpaceShip = true;
        },

        rotateShip: function() {
            if(this.ship && this.ship.alive && window.rotateShip) {
                this.ship.angle += parseInt(window.rotateShip);
            }
        }
    };

    game.state.add('main', state);
    game.state.start('main');

})();