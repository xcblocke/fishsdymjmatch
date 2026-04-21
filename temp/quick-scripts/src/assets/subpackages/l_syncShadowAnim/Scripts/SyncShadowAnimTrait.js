"use strict";
cc._RF.push(module, 'ecaa0Y+Pb9LS678kJhTnZEB', 'SyncShadowAnimTrait');
// subpackages/l_syncShadowAnim/Scripts/SyncShadowAnimTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var AnimationUtil_1 = require("../../../Scripts/util/AnimationUtil");
var SyncShadowAnimTrait = /** @class */ (function (_super) {
    __extends(SyncShadowAnimTrait, _super);
    function SyncShadowAnimTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SyncShadowAnimTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        AnimationUtil_1.AnimationUtil.setSyncShadowAnimation(true);
    };
    SyncShadowAnimTrait.prototype.onEnterAniBhv_playOld = function (t, r) {
        var e, o, n = t.ins.context;
        if (n) {
            var i = new Map(), l = n.getTileNodeMap();
            try {
                for (var u = __values(l), s = u.next(); !s.done; s = u.next()) {
                    var p = __read(s.value, 2)[1];
                    cc.isValid(p.cardNode) && cc.isValid(p.shadowNode) && i.set(p.cardNode, p.shadowNode);
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    s && !s.done && (o = u.return) && o.call(u);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
            AnimationUtil_1.AnimationUtil.setCardToShadowMap(i);
            r();
        }
        else
            r();
    };
    SyncShadowAnimTrait.traitKey = "SyncShadowAnim";
    SyncShadowAnimTrait = __decorate([
        mj.trait,
        mj.class("SyncShadowAnimTrait")
    ], SyncShadowAnimTrait);
    return SyncShadowAnimTrait;
}(Trait_1.default));
exports.default = SyncShadowAnimTrait;

cc._RF.pop();