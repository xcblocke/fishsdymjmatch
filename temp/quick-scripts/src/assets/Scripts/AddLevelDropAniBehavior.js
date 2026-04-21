"use strict";
cc._RF.push(module, '5f98fyqbVVHjY7etWCZG5ly', 'AddLevelDropAniBehavior');
// Scripts/AddLevelDropAniBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLevelDropAniBehavior = void 0;
var GameBehaviorsBase_1 = require("./base/GameBehaviorsBase");
var AddLevelDropAniBehavior = /** @class */ (function (_super) {
    __extends(AddLevelDropAniBehavior, _super);
    function AddLevelDropAniBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddLevelDropAniBehavior.prototype.start = function (e) {
        var t = this, o = e.data.fallingTiles;
        if (e.data.isOpenGenerateState) {
            var n = this.context.getTileNodeManager();
            o.forEach(function (e) {
                var t = e.tile, o = n.getTileNodeByTileId(t.id);
                o && o.dropToPosition();
            });
            this.finish();
        }
        else if (o && o.length > 0) {
            this.playFallingTilesAnimation(o, function () {
                t.finish();
            });
        }
        else {
            this.finish();
        }
    };
    AddLevelDropAniBehavior.prototype.playFallingTilesAnimation = function (e, t) {
        for (var o = this.context.getTileNodeManager(), n = false, i = 0; i < e.length; i++) {
            var r = e[i].tile, a = o.getTileNodeByTileId(r.id);
            if (a) {
                var l = r.getPosition(), s = a.cardNode;
                this.playNodeMoveAnimation(s, l, n ? null : t);
                n = true;
                var c = a.shadowCardNode;
                cc.isValid(c) && this.playNodeMoveAnimation(c, l, null);
            }
        }
        n || t && t();
    };
    AddLevelDropAniBehavior.prototype.playNodeMoveAnimation = function (e, t, o) {
        if (cc.isValid(e)) {
            cc.tween(e).to(0.56, {
                position: cc.v3(t.x, t.y, 0)
            }, {
                easing: "backOut"
            }).call(function () {
                o && o();
            }).start();
        }
        else {
            o && o();
        }
    };
    return AddLevelDropAniBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.AddLevelDropAniBehavior = AddLevelDropAniBehavior;

cc._RF.pop();