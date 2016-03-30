module managers{
    //Collision Manager Class
    export class Collision{
        //Private Instance Variables
        private _player: objects.PLayer;
        constructor(player:objects.PLayer){
           this._player= player;
        }
        
        public distance(startPoint:createjs.Point, endPoint:createjs.Point):number{
            return Math.sqrt(Math.pow((endPoint.x-startPoint.x),2)+Math.pow(endPoint.y- startPoint.y,2));
        }
        
        public check(object:objects.GameObject){
            var startPoint:createjs.Point = new createjs.Point();
            var endPoint:createjs.Point= new createjs.Point();
            var playerHalfHeight:number = this._player.height * 0.5;
            var objectHalfHeight:number= object.height*0.5;
            var minimumDistance:number= playerHalfHeight+ objectHalfHeight;
            var isColliding= false;
            
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            
            endPoint.x = object.centerX+ object.x;
            endPoint.y = object.centerY+object.y;
            
            if(this.distance(startPoint,endPoint)<minimumDistance){
                
                if(object.name=="egg"){
                    isColliding= true;
           console.log("egg caught");         
                }
                
                if(object.name=="monster"){
                    console.log("eaten by monster");
                    isColliding= true;
                }
           
            }
            return isColliding;
        }
    }
}