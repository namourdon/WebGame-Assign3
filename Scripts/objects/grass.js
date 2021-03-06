var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //Grass class 
    var Grass = (function (_super) {
        __extends(Grass, _super);
        //private instance variable
        //constructor
        function Grass() {
            _super.call(this, "grass");
            this._speed.y = 5; //5 pixel per pixel
            this._reset(-500);
        }
        //Private methods
        Grass.prototype._checkBound = function (value) {
            if (this.y >= value) {
                this._reset(-500);
            }
        };
        Grass.prototype._reset = function (value) {
            //reset the ocean offscreen
            this.y = value;
        };
        Grass.prototype.update = function () {
            //scroll the ocean 5px per frame
            this.y += this._speed.y;
            this._checkBound(0);
        };
        return Grass;
    }(objects.GameObject));
    objects.Grass = Grass;
})(objects || (objects = {}));

//# sourceMappingURL=grass.js.map
