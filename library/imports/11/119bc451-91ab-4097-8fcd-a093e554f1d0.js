"use strict";
cc._RF.push(module, '119bcRRkatAl4/NoJPlVPHQ', 'MainGameUIEdgeTrait');
// subpackages/l_mainGameUIEdge/Scripts/MainGameUIEdgeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var MainGameUIEdgeTrait = /** @class */ (function (_super) {
    __extends(MainGameUIEdgeTrait, _super);
    function MainGameUIEdgeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainGameUIEdgeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MainGameUIEdgeTrait.prototype.onGameUI_onLoad = function (t, e) {
        var o = t.ins;
        if (o && cc.isValid(o.node)) {
            var i = UserModel_1.default.getInstance().getCurrentGameType();
            if (i === GameTypeEnums_1.MjGameType.DailyChallenge || i === GameTypeEnums_1.MjGameType.Normal) {
                var n = cc.find("nodeTop/gameplay_bg_up", o.node), r = cc.find("nodeTop/gameplay_bg_mask_top", o.node);
                if (n && cc.isValid(n)) {
                    var a = n.getComponent(cc.Widget);
                    a && a.isAlignTop && (a.top = a.top - 20);
                }
                if (r && cc.isValid(r)) {
                    var s = r.getComponent(cc.Widget);
                    s && s.isAlignTop && (s.top = s.top - 20);
                }
            }
            o.btnShuffle && cc.isValid(o.btnShuffle) && (o.btnShuffle.position = new cc.Vec3(o.btnShuffle.position.x, o.btnShuffle.position.y + 10, 0));
            o.btnHitTips && cc.isValid(o.btnHitTips) && (o.btnHitTips.position = new cc.Vec3(o.btnHitTips.position.x, o.btnHitTips.position.y + 10, 0));
            e();
        }
        else
            e();
    };
    MainGameUIEdgeTrait.traitKey = "MainGameUIEdge";
    MainGameUIEdgeTrait = __decorate([
        mj.trait,
        mj.class("MainGameUIEdgeTrait")
    ], MainGameUIEdgeTrait);
    return MainGameUIEdgeTrait;
}(Trait_1.default));
exports.default = MainGameUIEdgeTrait;

cc._RF.pop();