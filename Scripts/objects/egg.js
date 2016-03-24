var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //Egg class 
    var Egg = (function (_super) {
        __extends(Egg, _super);
        //private instance variable
        //constructor
        function Egg() {
            _super.call(this, "egg");
            this._speed.y = 5; //5 pixel per pixel
            this._reset(-this._height);
        }
        //Private methods
        Egg.prototype._checkBound = function (value) {
            //check that the top of the egg has reached outside of the screen
            if (this.y >= value) {
                this._reset(-this._height);
            }
        };
        Egg.prototype._reset = function (value) {
            //reset the ocean offscreen
            this.y = value;
        };
        Egg.prototype.update = function () {
            //scroll the ocean 5px per frame
            this.y += this._speed.y;
            this._checkBound(config.Screen.HEIGHT + this._height);
        };
        return Egg;
    }(objects.GameObject));
    objects.Egg = Egg;
})(objects || (objects = {}));

//# sourceMappingURL=egg.js.map
