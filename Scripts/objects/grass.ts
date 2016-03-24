module objects{
    //Grass class 
    export class Grass extends createjs.Bitmap{
        //private instance variable
        private _dy:number;
        
        //constructor
        constructor(){
            super(assets.getResult("grass"));
            
            this._dy=5;//5 pixel per pixel
            this._reset();
        }
        //Private methods
        private _checkBound():void{
            
            if(this.y>=0){
                this._reset();
            }
        }
        private _reset():void{
            //reset the ocean offscreen
            this.y=-500;
        }
        
        
        public update():void{
            //scroll the ocean 5px per frame
            this.y+=this._dy;
            this._checkBound();
        }
    }
}