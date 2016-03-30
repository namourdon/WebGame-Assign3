var managers;
(function (managers) {
    //Collision Manager Class
    var Collision = (function () {
        function Collision(player) {
            this._player = player;
        }
        Collision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        Collision.prototype.check = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfHeight = this._player.height * 0.5;
            var objectHalfHeight = object.height * 0.5;
            var minimumDistance = playerHalfHeight + objectHalfHeight;
            var isColliding = false;
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                if (object.name == "egg") {
                    isColliding = true;
                    console.log("egg caught");
                }
                if (object.name == "monster") {
                    console.log("eaten by monster");
                    isColliding = true;
                }
            }
            return isColliding;
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));

//# sourceMappingURL=collision.js.map
