morphessure.preload = function() {
    morphessure.game.load.image('logo', 'phaser_50x50.png');
    morphessure.game.load.image('player', 'player.png');
}

morphessure.create =function () {

    
    
    
    var graphics = morphessure.game.add.graphics(0, 0);
    
    
    // set a fill and line style
    //graphics.beginFill(0xFF3300);
    graphics.lineStyle(1, 0xffffff, 1);
    drawField(graphics);
    drawTraps();
    drawPlayer(0);

}

function drawPlayer(playerId){
    morphessure.player1 = morphessure.game.add.sprite(75,75,  'player');            
    //logo.scale.setTo(1, 1); //Scale object
    //logo.inputEnabled = true;
    //logo.input.useHandCursor = true; //if you want a hand cursor
    //logo.input.enableDrag(false, true);
}


/**
* Draw the traps on the triange 
*/
function drawTraps(){
    var up = true;
    for(var m=0; m<7; m++){
        for(var n=0; n<7; n++){
            var l = 75+n*100;
            var r = 75+m*100;
            if(!up){l = l+50}
            var logo = morphessure.game.add.sprite(l,r,  'logo');            
            //logo.scale.setTo(1, 1); //Scale object
            logo.inputEnabled = true;
            logo.input.useHandCursor = true; //if you want a hand cursor
            logo.events.onInputDown.add(function(sprite, pointer){
                console.log(sprite,pointer);
                
                morphessure.game.add.tween(morphessure.player1).to( { x: sprite.x, y:sprite.y }, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
                
                
                //morphessure.player1.x=sprite.x;
                //morphessure.player1.y=sprite.y;
                
            }, this);
        
        }
        up=!up;
    }
}


/**
* This will draw the whole triange field
*/
function drawField(graphics){
    // draw a shape
    //This creates a game field
    var up = true;
    for(var i = 0; i<8; i++){
        var m = 100*i;
        
        
        for(var l = 0; l<12; l++){
            var n = 100*l;
            if(up){n = n+50}
            drawTriange(graphics, [n,m],true);
            drawTriange(graphics, [50+n,m],false);
        }
        
        up=!up;
    };
}

/**
* This will draw one Triangle
*/
function drawTriange (graphics, pos, up){
    var size = 100;
    
    if(up){
        graphics.moveTo(pos[0], pos[1]);
        graphics.lineTo(pos[0]+size/2, pos[1]+size);
        graphics.lineTo(pos[0]-size/2, pos[1]+size);
        graphics.lineTo(pos[0], pos[1]);
    }else{
        graphics.moveTo(pos[0]+size/2, pos[1]);
        graphics.lineTo(pos[0], pos[1]+size);
        graphics.lineTo(pos[0]-size/2, pos[1]);
        graphics.lineTo(pos[0]+size/2, pos[1]);
    }
}
