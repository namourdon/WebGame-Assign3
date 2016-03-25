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
           this._speed.x= Math.floor(Math.random()*4)-2;
           
            this.y=value;
            this.x =Math.floor( Math.random()* this._rightBounds)+ this._leftBounds;
        }
        
        
        public update():void{
            //scroll the ground 
            this.y+=this._speed.y;
            this.x+= this._speed.x;
            this._checkBound(this._bottomBounds);
        }
    }
}