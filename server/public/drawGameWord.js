function preload(playerId) {

    
    _mp[playerId].properties.game.load.atlasJSONHash('player', 'base_pack/Player/p1_walk/p1_walk.png', 'base_pack/Player/p1_walk/p1_walk.json');
    
    //_mp[playerId].properties.game.load.image('player', 'base_pack/Player/p1_front.png');
    _mp[playerId].properties.game.load.image('question', 'question.png');

    //Load Player one sprites
    var ap1 = _mp[playerId].map;
    for (a in ap1) {
        _mp[playerId].properties.game.load.image(ap1[a].file, ap1[a].file);
    }

}

function create() {

    //Player 1 map creation
    var graphics1 = _mp[0].properties.game.add.graphics(0, 0);
    _mp[0].properties.game.world.setBounds(0, 0, 680, 1400);
    graphics1.lineStyle(1, 0xffffff, 1);
    drawField(graphics1);
    //drawTraps();
    //drawDynTraps(0);
    drawHiddenTraps(0)
    drawPlayer(0,7);
    dbChangePlayerPosition(8, 0);

    //Player 2 map creation
    var graphics2 = _mp[1].properties.game.add.graphics(0, 0);
    _mp[1].properties.game.world.setBounds(0, 0, 680, 1400);
    graphics2.lineStyle(1, 0xffffff, 1);
    drawField(graphics2);
    drawDynTraps(1);
    drawClues(graphics2, 1)
    drawPlayer(1,8);
}


/**
 * Lets listen to changes :D
 *
 */
dpd.players.on('put', function (message) {
    console.log(message);

    if (message.id == _mp[0].properties.dbId) {
        console.log("i change something in db");
        changePlayerPosition(message.graphNode, 0);

    } else {
        console.log("someone else changed something in db");
        changePlayerPosition(message.graphNode, 1);
    }
});

/**
 * Tells server what node player want to change to
 */
function dbChangePlayerPosition(graphNode, playerId) {
    dpd.players.put(_mp[playerId].properties.dbId, {
        "graphNode": graphNode
    }, function (result, err) {
        if (err) return console.log(err);
        console.log(result, result.id);
    });
}


/**
 * move player to graphNode
 */
function changePlayerPosition(graphNode, playerId) {
    console.log("Change to graph: ", graphNode);

    _mp[playerId].properties.game.add.tween(_mp[playerId].properties.player).to({
        x: _mp[playerId].map[graphNode].x,
        y: _mp[playerId].map[graphNode].y
    }, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
    
    //if player is 0 than draw surrounding sprites
    if(playerId==0){
            
        var mp = _mp[playerId].map;
        console.log("myPost: ", graphNode);
        var cA = [1,6,7,0,-1,-5,-6];    
        if(mp[graphNode].odd==true){//check if odd or even row
            console.log("odd");
            cA = [1,5,6,0,-1,-6,-7]
        }
        for(a in cA){
            var n = graphNode+cA[a];
            console.log("myPost: ", n);
            mp[n].sprite.kill();
            mp[n].sprite = _mp[playerId].properties.game.add.sprite(mp[n].x, mp[n].y, mp[n].file);
            
            //Add listener to sprites
            mp[n].sprite.inputEnabled = true;
            mp[n].sprite.input.useHandCursor = true; //if you want a hand cursor    

            mp[n].sprite.events.onInputDown.add(function (k, playerId) {
                //This uses a closure funtion 
                //see this stackoverflow entry
                // http://stackoverflow.com/questions/3572480/please-explain-the-use-of-javascript-closures-in-loops/3572616#3572616
                return function (sprite, pointer) {
                    //tell server what node current use stands on
                    dbChangePlayerPosition(k, playerId);
                    

                }
            }(n, playerId), this);
        }
        _mp[playerId].properties.player.bringToTop();
    }
}

function drawPlayer(playerId, position) {
    
    _mp[playerId].properties.player = _mp[playerId].properties.game.add.sprite(_mp[playerId].map[position].x, _mp[playerId].map[position].y, 'player');
    _mp[playerId].properties.player.animations.add('run');
    _mp[playerId].properties.player.animations.play('run', 15, true);
    _mp[playerId].properties.player.scale.x=0.6;
    _mp[playerId].properties.player.scale.y=0.6;
    _mp[playerId].properties.player.anchor.setTo(-0.1, 0.0);
    _mp[playerId].properties.game.camera.follow(_mp[playerId].properties.player); //camera will from now on follow the player
}


/**
* This will draw a map of question marks. During the player the question marks will change to symbols
*/ 
function drawHiddenTraps(playerId){
    var up = true;

    var ap1 = _mp[playerId].map;
    var rowSize = _mp[playerId].properties.rowSize;
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
        ap1[m].x = x;
        ap1[m].y = y;
        ap1[m].odd = up;
        ap1[m].sprite = _mp[playerId].properties.game.add.sprite(ap1[m].x, ap1[m].y, "question");
        
    }
}

/**
 * Draws traps from the config json file.
 */
function drawDynTraps(playerId) {
    console.log("drawDynTraps: ", playerId);
    var up = true;

    var ap1 = _mp[playerId].map;
    var rowSize = _mp[playerId].properties.rowSize;
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
        ap1[m].x = x;
        ap1[m].y = y;

        var logo = _mp[playerId].properties.game.add.sprite(x, y, ap1[m].file);


        //click listener only needed for user 0
        if (playerId == 0) {
            //add click listeners
            logo.inputEnabled = true;
            logo.input.useHandCursor = true; //if you want a hand cursor    

            logo.events.onInputDown.add(function (k, playerId) {
                //This uses a closure funtion 
                //see this stackoverflow entry
                // http://stackoverflow.com/questions/3572480/please-explain-the-use-of-javascript-closures-in-loops/3572616#3572616
                return function (sprite, pointer) {
                    //tell server what node current use stands on
                    dbChangePlayerPosition(k, playerId);

                }
            }(m, playerId), this);
        };
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
            var logo = _mp.game1.add.sprite(l, r, 'logo');
            //logo.scale.setTo(1, 1); //Scale object
            logo.inputEnabled = true;
            logo.input.useHandCursor = true; //if you want a hand cursor
            logo.events.onInputDown.add(function (sprite, pointer) {
                //console.log(sprite, pointer);

                _mp.game1.add.tween(_mp.player1).to({
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

/**
* This will draw all clues
*/
function drawClues(graphics, playerId){
    var ap1 = _mp[playerId].map;
    graphics.lineStyle(2, 0x0000FF, 1); // width, color (0x0000FF), alpha (0 -> 1) // required settings
    graphics.beginFill(0xFFFF0B, 1) // color (0xFFFF0B), alpha (0 -> 1) // required settings   
    for (m = 0; m < ap1.length; m++) {
        
        if(!ap1[m].trap){
            //graphics.moveTo(ap1[m].x, ap1[m].y);
            graphics.drawCircle(ap1[m].x+25, ap1[m].y+25, 35);
        }
    }
}