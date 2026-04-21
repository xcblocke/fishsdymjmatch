"use strict";
cc._RF.push(module, '88af3WX+BJGuIxkElLjvC4g', 'Tile2FailSwapBtnTrait');
// subpackages/l_tile2FailSwapBtn/Scripts/Tile2FailSwapBtnTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2FailSwapBtnTrait = /** @class */ (function (_super) {
    __extends(Tile2FailSwapBtnTrait, _super);
    function Tile2FailSwapBtnTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2FailSwapBtnTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2FailSwapBtnTrait.prototype.onTile2FailVw_show = function (t, e) {
        var r = t.ins;
        if (r && cc.isValid(r.node)) {
            var o = r.node.getChildByName("content_node");
            if (o) {
                var i = o.getChildByName("btn_use"), n = o.getChildByName("btn_replay");
                if (i && n) {
                    var a = i.getPosition(), c = n.getPosition();
                    i.setPosition(c);
                    n.setPosition(a);
                    e();
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    Tile2FailSwapBtnTrait.traitKey = "Tile2FailSwapBtn";
    Tile2FailSwapBtnTrait = __decorate([
        mj.trait,
        mj.class("Tile2FailSwapBtnTrait")
    ], Tile2FailSwapBtnTrait);
    return Tile2FailSwapBtnTrait;
}(Trait_1.default));
exports.default = Tile2FailSwapBtnTrait;

cc._RF.pop();