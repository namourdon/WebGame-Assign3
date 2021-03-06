module objects{
    //Grass class 
    export class Grass extends objects.GameObject{
        //private instance variable
        
        
        //constructor
        constructor(){
            super("grass");
            
            this._speed.y=5;//5 pixel per pixel
            this._reset(-500);
        }
        //Private methods
        protected _checkBound(value:number):void{
            
            if(this.y>=value){
                this._reset(-500);
            }
        }
        protected _reset(value:number):void{
            //reset the ocean offscreen
            this.y=value;
        }
        
        
        public update():void{
            //scroll the ocean 5px per frame
            this.y+=this._speed.y;
            this._checkBound(0);
        }
    }
}