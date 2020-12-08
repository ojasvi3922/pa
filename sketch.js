var fixed_rect,moving_rect;
 function setup() 
 { createCanvas(1200,800);
   fixed_rect= createSprite(600,400,50,80);
    fixed_rect.shapeColor="blue";
     moving_rect= createSprite(400,200,80,50);
      moving_rect.shapeColor="blue";
     }
     
function draw()
 { background("lightgreen");
  moving_rect.x=World.mouseX;
   moving_rect.y=World.mouseY;
    if(moving_rect.x-fixed_rect.x<moving_rect.width/2+fixed_rect.width/2 &&
       fixed_rect.x-moving_rect.x<<moving_rect.width/2+fixed_rect.width/2
      && moving_rect.y-fixed_rect.y<moving_rect.height/2+fixed_rect.height/2
       &&  fixed_rect.y-moving_rect.y<moving_rect.height/2+fixed_rect.height/2 ) 

       { moving_rect.shapeColor="red"; fixed_rect.shapeColor="red";
       }
        else
        { fixed_rect.shapeColor="black";
         moving_rect.shapeColor="black";
       }
        drawSprites();
       }
