"use strict";
cc._RF.push(module, 'f67093LcTZPwYvh0/309kG7', 'GameTopLabScaleTrait');
// subpackages/l_gameTopLabScale/Scripts/GameTopLabScaleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTopLabScaleTrait = /** @class */ (function (_super) {
    __extends(GameTopLabScaleTrait, _super);
    function GameTopLabScaleTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GameTopLabScaleTrait.prototype, "scale", {
        get: function () {
            var e;
            return null !== (e = this._traitData.scale) && void 0 !== e ? e : 1.15;
        },
        enumerable: false,
        configurable: true
    });
    GameTopLabScaleTrait.prototype.onMainGmVw_initLayers = function (e, t) {
        var r = e.ins;
        this.scaleTopLab(r);
        t();
    };
    GameTopLabScaleTrait.prototype.scaleTopLab = function (e) {
        cc.isValid(e) && cc.isValid(e.topRootNode) && this.scaleLabelRecursive(e.topRootNode);
    };
    GameTopLabScaleTrait.prototype.onScoreItem_getBaseScale = function (e, t) {
        var r;
        t({
            returnVal: (null !== (r = e.beforReturnVal) && void 0 !== r ? r : 1) * this.scale
        });
    };
    GameTopLabScaleTrait.prototype.scaleLabelRecursive = function (e) {
        var t, r;
        if (cc.isValid(e)) {
            e.getComponent(cc.Label) && e.setScale(e.scale * this.scale);
            try {
                for (var o = __values(e.children), n = o.next(); !n.done; n = o.next()) {
                    var i = n.value;
                    this.scaleLabelRecursive(i);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
    };
    GameTopLabScaleTrait.traitKey = "GameTopLabScale";
    GameTopLabScaleTrait = __decorate([
        mj.trait,
        mj.class("GameTopLabScaleTrait")
    ], GameTopLabScaleTrait);
    return GameTopLabScaleTrait;
}(Trait_1.default));
exports.default = GameTopLabScaleTrait;

cc._RF.pop();