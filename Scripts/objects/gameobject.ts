module objects{
    //GameObject super class 
    export class GameObject extends createjs.Bitmap{
        //private instance variable
        protected _speed:createjs.Point;
        protected _width:number;
        protected _height:number;
        
        //constructor
        constructor(bitmapString:string){
            super(assets.getResult(bitmapString));
            
           this._speed= new createjs.Point(0,0);
            this._width= this.getBounds().width;
            this._height= this.getBounds().height;
        }
        //Private methods
        protected _checkBound(value:number):void{
            var resetValue:number=0;
            //check that the y should be reset
            if(this.y>=value){
                this._reset(resetValue);
            }
        }
        protected _reset(value:number):void{
            //reset the object offscreen
            this.y=-value;
        }
        
        
        public update():void{
            var boundValue:number=0
            //scroll the ocean 5px per frame
            this.y+=this._speed.y;
            this._checkBound(boundValue);
        }
    }
}