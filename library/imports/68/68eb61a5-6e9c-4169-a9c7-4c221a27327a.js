"use strict";
cc._RF.push(module, '68eb6GlbpxBaanHTCIaJzJ6', 'ClassicBeforeFailBehavior');
// Scripts/base/ClassicBeforeFailBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicBeforeFailBehavior = void 0;
var I18NStrings_1 = require("../framework/data/I18NStrings");
var BaseUI_1 = require("../framework/ui/BaseUI");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var FailMaskNodeStateAni_1 = require("../tilenodes/fsm/ani/FailMaskNodeStateAni");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ClassicBeforeFailBehavior = /** @class */ (function (_super) {
    __extends(ClassicBeforeFailBehavior, _super);
    function ClassicBeforeFailBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassicBeforeFailBehavior.prototype.onAbort = function () {
        _super.prototype.onAbort.call(this);
        this.context.gameView.setSwallowEventNodeActive(false);
    };
    ClassicBeforeFailBehavior.prototype.start = function () {
        var e = this;
        this.context.gameView.setSwallowEventNodeActive(true);
        this.showView(function () {
            e.context.gameView.setSwallowEventNodeActive(false);
            e.finish(GameInputEnum_1.EBehaviorEnum.Success);
        });
    };
    ClassicBeforeFailBehavior.prototype.showView = function (e) {
        var t = this;
        BaseUI_1.default.createUI("prefabs/game/ClassicBeforeFail").then(function (o) {
            if (o && cc.isValid(o)) {
                o.parent = t.context.gameView.nodeTopEffectRoot;
                var n = o.getChildByName("LabelText");
                if (n) {
                    n.getComponent(cc.Label).string = I18NStrings_1.default.get("MahjongTiles_Revive_Title_1");
                    n.opacity = 0;
                }
                var i = o.getChildByName("showbg");
                i && (i.opacity = 0);
                t.playFailAnimation(o, n, i, e);
            }
        });
    };
    ClassicBeforeFailBehavior.prototype.playFailAnimation = function (e, t, o, n) {
        this.playTilesGrayAnimation(0.4);
        this.playBgFadeIn(o, 0.4, 178);
        this.playLabelScaleAndFadeIn(t, 0.4, function () { });
        cc.tween(e).delay(0.9).call(function () {
            null == n || n();
        }).to(0.3, {
            opacity: 0
        }, {
            easing: cc.easing.sineInOut
        }).call(function () {
            cc.isValid(e) && e.destroy();
        }).start();
    };
    ClassicBeforeFailBehavior.prototype.playTilesGrayAnimation = function (e) {
        if (e === void 0) { e = 0.4; }
        var t = this.context.getTileNodeManager();
        if (t) {
            var o = t.getTileNodes();
            o && 0 !== o.length && o.forEach(function (e) {
                if (e && cc.isValid(e.tileNode)) {
                    var t = new FailMaskNodeStateAni_1.FailMaskNodeStateAni(e.tileNode, e, 0);
                    e.attachNodeStateAnis([t]);
                    e.playAttachEnterAni(null, function () { });
                }
            });
        }
    };
    ClassicBeforeFailBehavior.prototype.playBgFadeIn = function (e, t, o) {
        if (t === void 0) { t = 0.4; }
        if (o === void 0) { o = 178; }
        if (e && cc.isValid(e)) {
            e.opacity = 0;
            cc.tween(e).to(t, {
                opacity: o
            }, {
                easing: cc.easing.sineInOut
            }).start();
        }
    };
    ClassicBeforeFailBehavior.prototype.playLabelScaleAndFadeIn = function (e, t, o) {
        if (t === void 0) { t = 0.4; }
        if (e && cc.isValid(e)) {
            e.opacity = 0;
            cc.tween(e).to(0, {
                scale: 0,
                opacity: 0
            }).to(t, {
                scale: 1,
                opacity: 255
            }, {
                easing: cc.easing.backOut
            }).start();
        }
        else
            null == o || o();
    };
    return ClassicBeforeFailBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.ClassicBeforeFailBehavior = ClassicBeforeFailBehavior;

cc._RF.pop();