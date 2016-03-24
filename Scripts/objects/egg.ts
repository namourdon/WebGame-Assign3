module objects{
    //Egg class 
    export class Egg extends objects.GameObject{
        //private instance variable
        
        
        //constructor
        constructor(){
            super("egg");
            
            this._speed.y=5;//5 pixel per pixel
            this._reset(this._topBounds);
        }
        //Private methods
        protected _checkBound(value:number):void{
            //check that the top of the egg has reached outside of the screen
            if(this.y>=value){
                this._reset(-this._topBounds);
            }
        }
        protected _reset(value:number):void{
            //reset the ocean offscreen
            var leftBounds:number;
            var rightBounds:number;
            
            this.y=value;
            this.x =Math.floor( Math.random()* this._rightBounds)+ this._leftBounds;
        }
        
        
        public update():void{
            //scroll the ocean 5px per frame
            this.y+=this._speed.y;
            this._checkBound(this._bottomBounds);
        }
    }
}