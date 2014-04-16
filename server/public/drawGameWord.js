_mp.preload = function () {
    
    //localPlayer
    //Player one (1) is default
    _mp.mapPlayer = _mp.mapPlayer1;
    if(location.getParameter("player")!=null){
        if(location.getParameter("player") == "2"){
            _mp.mapPlayer = _mp.mapPlayer2;
        }
    }
    
    _mp.game.load.image('logo', 'phaser_50x50.png');
    _mp.game.load.image('player', 'player.png');

    var ap1 = _mp.mapPlayer.map;
    for (a in ap1) {
        _mp.game.load.image(ap1[a].file, ap1[a].file);
    }
}

_mp.create = function () {

    var graphics = _mp.game.add.graphics(0, 0);

    _mp.game.world.setBounds(0, 0, 1400, 1400); //
    // set a fill and line style
    //graphics.beginFill(0xFF3300);
    graphics.lineStyle(1, 0xffffff, 1);
    drawField(graphics);
    //drawTraps();
    drawDynTraps();
    drawPlayer(0);

}


/**
 * Lets listen to changes :D
 *
 */
dpd.players.on('put', function (message) {
    console.log(message);
    
    if (message.id == _mp.mapPlayer.properties.dbId) {
        console.log("i change something in db");
        changePlayerPosition(message.graphNode);
        
    }else{
        console.log("someone else changed something in db");
        console.log("i change something in db");
        changePlayerPosition(message.graphNode);
    }
});

/**
* Tells server what node player want to change to
*/
function dbChangePlayerPosition(graphNode){
    dpd.players.put(_mp.mapPlayer.properties.dbId, {"graphNode":graphNode}, function(result, err) {
      if(err) return console.log(err);
      console.log(result, result.id);
    });
}


/**
* move player to graphNode
*/
function changePlayerPosition(graphNode){
    console.log("Change to graph: ", graphNode);
    
    _mp.game.add.tween(_mp.player1).to({
        x: _mp.mapPlayer.map[graphNode].x,
        y: _mp.mapPlayer.map[graphNode].y
    }, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
}

function drawPlayer(playerId) {
    _mp.player1 = _mp.game.add.sprite(275, 75, 'player');
    _mp.game.camera.follow(_mp.player1); //camera will from now on follow the player
}


/**
 * Draws traps from the config json file.
 */
function drawDynTraps() {
    var up = true;

    var ap1 = _mp.mapPlayer.map;
    var rowSize = _mp.mapPlayer.properties.rowSize;
    var xoff = -25;
    var x = xoff; //x start point
    var y = 75; //y start point
    var m = 0;
    for (m = 0; m < ap1.length; m++) {

        if (m != 0 && m % rowSize == 0) {
            y = y + 100;
            x = xoff;
            up = !up;
            if (!up) {
                x = x + 50;
            }

        }

        x = x + 100;
        
        //add current coordinated to currentUser // for debugging and testing
        ap1[m].x=x;
        ap1[m].y=y;

        var logo = _mp.game.add.sprite(x, y, ap1[m].file);

        //add click listeners
        logo.inputEnabled = true;
        logo.input.useHandCursor = true; //if you want a hand cursor
        
    
        
        logo.events.onInputDown.add(function(k){
            //This uses a closure funtion 
            //see this stackoverflow entry
            // http://stackoverflow.com/questions/3572480/please-explain-the-use-of-javascript-closures-in-loops/3572616#3572616
            return function (sprite, pointer) {
                //tell server what node current use stands on
                //console.log(k);
                dbChangePlayerPosition(k);
                /*
                _mp.game.add.tween(_mp.player1).to({
                    x: sprite.x,
                    y: sprite.y
                }, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
                */
            }
          }(m), this);
        
    }


}

/**
 * DEPRICATED
 * Draw the traps on the triange
 */
function drawTraps() {
    var up = true;
    for (var m = 0; m < 7; m++) {
        for (var n = 0; n < 6; n++) {
            var l = 75 + n * 100;
            var r = 75 + m * 100;
            if (!up) {
                l = l + 50
            }
            var logo = _mp.game.add.sprite(l, r, 'logo');
            //logo.scale.setTo(1, 1); //Scale object
            logo.inputEnabled = true;
            logo.input.useHandCursor = true; //if you want a hand cursor
            logo.events.onInputDown.add(function (sprite, pointer) {
                //console.log(sprite, pointer);

                _mp.game.add.tween(_mp.player1).to({
                    x: sprite.x,
                    y: sprite.y
                }, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);


                //_mp.player1.x=sprite.x;
                //_mp.player1.y=sprite.y;

            }, this);

        }
        up = !up;
    }
}


/**
 * This will draw the whole triange field
 */
function drawField(graphics) {
    // draw a shape
    //This creates a game field
    var up = true;
    for (var i = 0; i < 50; i++) {
        var m = 100 * i;


        for (var l = 0; l < 50; l++) {
            var n = 100 * l;
            if (up) {
                n = n + 50
            }
            drawTriange(graphics, [n, m], true);
            drawTriange(graphics, [50 + n, m], false);
        }

        up = !up;
    };
}

/**
 * This will draw one Triangle
 */
function drawTriange(graphics, pos, up) {
    var size = 100;

    if (up) {
        graphics.moveTo(pos[0], pos[1]);
        graphics.lineTo(pos[0] + size / 2, pos[1] + size);
        graphics.lineTo(pos[0] - size / 2, pos[1] + size);
        graphics.lineTo(pos[0], pos[1]);
    } else {
        graphics.moveTo(pos[0] + size / 2, pos[1]);
        graphics.lineTo(pos[0], pos[1] + size);
        graphics.lineTo(pos[0] - size / 2, pos[1]);
        graphics.lineTo(pos[0] + size / 2, pos[1]);
    }
}