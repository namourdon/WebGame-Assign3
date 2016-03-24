module objects{
    //Slime class 
    export class Monster extends objects.GameObject{
        //private instance variable
        
        
        //constructor
        constructor(){
            super("monster");
            
            
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
            //reset the monster offscreen
           this._speed.y= Math.floor(Math.random()*5)+5;
           
            this.y=value;
            this.x =Math.floor( Math.random()* this._rightBounds)+ this._leftBounds;
        }
        
        
        public update():void{
            //scroll the ground 
            this.y+=this._speed.y;
            this._checkBound(this._bottomBounds);
        }
    }
}