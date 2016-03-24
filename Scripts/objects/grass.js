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
        //constructor
        function Grass() {
            _super.call(this, assets.getResult("grass"));
            this._dy = 5; //5 pixel per pixel
            this._reset();
        }
        //Private methods
        Grass.prototype._checkBound = function () {
            if (this.y >= 0) {
                this._reset();
            }
        };
        Grass.prototype._reset = function () {
            //reset the ocean offscreen
            this.y = -500;
        };
        Grass.prototype.update = function () {
            //scroll the ocean 5px per frame
            this.y += this._dy;
            this._checkBound();
        };
        return Grass;
    })(createjs.Bitmap);
    objects.Grass = Grass;
})(objects || (objects = {}));
//# sourceMappingURL=grass.js.map