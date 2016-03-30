var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //Player class
    var PLayer = (function (_super) {
        __extends(PLayer, _super);
        function PLayer() {
            _super.call(this, assets.getResult("player"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._leftBounds = this.width * 0.5;
            this._rightBounds = config.Screen.WIDTH - (this.width * 0.5);
            this.y = 430;
        }
        //private methods
        PLayer.prototype._checkBounds = function () {
            if (this.x < this._leftBounds) {
                this.x = this._leftBounds;
            }
            if (this.x > this._rightBounds) {
                this.x = this._rightBounds;
            }
        };
        //public methods 
        PLayer.prototype.update = function () {
            this.x = stage.mouseX;
            this._checkBounds();
        };
        return PLayer;
    }(createjs.Bitmap));
    objects.PLayer = PLayer;
})(objects || (objects = {}));

//# sourceMappingURL=player.js.map
