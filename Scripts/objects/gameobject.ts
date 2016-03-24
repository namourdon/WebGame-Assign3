module objects{
    //GameObject super class 
    export class GameObject extends createjs.Bitmap{
        //private instance variable
        protected _speed:createjs.Point;
        protected _width:number;
        protected _height:number;
        protected _leftBounds: number;
        protected _rightBounds:number;
        protected _topBounds:number;
        protected _bottomBounds:number;
        
        //constructor
        constructor(bitmapString:string){
            super(assets.getResult(bitmapString));
            
           this._speed= new createjs.Point(0,0);
            this._width= this.getBounds().width;
            this._height= this.getBounds().height;
            this._topBounds= this._height;
            this._bottomBounds= config.Screen.HEIGHT + this._height;
            this._leftBounds= 0;
            this._rightBounds = config.Screen.WIDTH - this._width;
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