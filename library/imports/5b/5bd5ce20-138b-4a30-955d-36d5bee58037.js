"use strict";
cc._RF.push(module, '5bd5c4gE4tKMJVdNtW+5YA3', 'ChangeSkinTrait70');
// subpackages/l_changeSkin/Scripts/ChangeSkinTrait70.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ChangeSkinTrait_1 = require("./ChangeSkinTrait");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var Adapter_1 = require("../../../Scripts/component/Adapter");
var ChangeSkinTrait70 = /** @class */ (function (_super) {
    __extends(ChangeSkinTrait70, _super);
    function ChangeSkinTrait70() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChangeSkinTrait70.prototype.onWinVw_showWinVw = function (t, e) {
        var i = t.ins;
        if (cc.isValid(i)) {
            var n = i.getContentNode();
            if (cc.isValid(n)) {
                var r = n.getChildByName("spine_victory");
                if (cc.isValid(r)) {
                    var a = r.getComponent(sp.Skeleton);
                    a && CommonUtils_1.playSpineAnim(a, 1, "in_1", function () {
                        CommonUtils_1.playSpineAnim(a, -1, "init");
                    });
                }
                var o = n.getChildByName("lbl_subtitle");
                cc.isValid(o) && (o.y = -149);
            }
        }
        e();
    };
    ChangeSkinTrait70.prototype.onWinVw_getDescAniDly = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.return,
            returnVal: 0.9,
            isBreak: true
        });
    };
    ChangeSkinTrait70.prototype.onWinVw_playWdAni2 = function (t, e) {
        var i = t.ins;
        if (cc.isValid(i)) {
            var n = i.getContentNode();
            if (cc.isValid(n)) {
                var r = n.getChildByName("lbl_title");
                if (cc.isValid(r)) {
                    r.scale = 1.8;
                    r.opacity = 0;
                    r.stopAllActions();
                    cc.tween(r).to(0.2, {
                        scale: 0.7
                    }, {
                        easing: cc.easing.sineInOut
                    }).to(0.13, {
                        scale: 1.05
                    }, {
                        easing: cc.easing.sineInOut
                    }).to(0.1, {
                        scale: 1
                    }, {
                        easing: cc.easing.quadIn
                    }).start();
                    cc.tween(r).to(0.43, {
                        opacity: 255
                    }).start();
                    e({
                        returnType: TraitCallbackReturnType.return,
                        isBreak: true
                    });
                    return;
                }
            }
        }
        e();
    };
    ChangeSkinTrait70.prototype.onBoxRwdUI_barBoxEnter = function (t, e) {
        var i = t.ins;
        if (cc.isValid(i) && cc.isValid(i.node)) {
            var n = i.node, r = n.getChildByName("sp_bottom_bg");
            if (cc.isValid(r)) {
                r.active = true;
                Adapter_1.default.ignoreSafeRect(r);
            }
            var a = n.getChildByName("BarLayout");
            if (cc.isValid(a)) {
                a.active = true;
                Adapter_1.default.ignoreSafeRect(a);
            }
            var o = n.getChildByName("BoxBtn");
            if (cc.isValid(o)) {
                o.active = true;
                Adapter_1.default.ignoreSafeRect(o);
            }
            n.opacity = 0;
            cc.tween(n).delay(1).to(0.5, {
                opacity: 255
            }).start();
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            e();
    };
    ChangeSkinTrait70.prototype.onLvBoxProg_barBoxEnter = function (t, e) {
        var i = t.ins;
        if (cc.isValid(i) && cc.isValid(i.node)) {
            var n = i.node, r = n.getChildByName("sp_bottom_bg");
            if (cc.isValid(r)) {
                r.active = true;
                Adapter_1.default.ignoreSafeRect(r);
            }
            var a = n.getChildByName("BarLayout");
            if (cc.isValid(a)) {
                a.active = true;
                Adapter_1.default.ignoreSafeRect(a);
            }
            var o = n.getChildByName("BoxBtn");
            if (cc.isValid(o)) {
                o.active = true;
                Adapter_1.default.ignoreSafeRect(o);
            }
            n.opacity = 0;
            cc.tween(n).delay(1).to(0.5, {
                opacity: 255
            }).start();
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            e();
    };
    ChangeSkinTrait70.traitKey = "ChangeSkin70";
    ChangeSkinTrait70 = __decorate([
        mj.trait,
        mj.class("ChangeSkinTrait70")
    ], ChangeSkinTrait70);
    return ChangeSkinTrait70;
}(ChangeSkinTrait_1.default));
exports.default = ChangeSkinTrait70;

cc._RF.pop();