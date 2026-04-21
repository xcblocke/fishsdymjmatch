"use strict";
cc._RF.push(module, '6e540kOvHtCMqxph0MbmE//', 'TravelCollectTip');
// Scripts/gamePlay/travel/view/TravelCollectTip.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../core/simulator/constant/GameTypeEnums");
var Adapter_1 = require("../../../component/Adapter");
var BaseUI_1 = require("../../../framework/ui/BaseUI");
var TravelCollectTip = /** @class */ (function (_super) {
    __extends(TravelCollectTip, _super);
    function TravelCollectTip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contentNode = null;
        _this.maskNode = null;
        _this._isPlayFlyAudio = false;
        return _this;
    }
    TravelCollectTip.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TravelCollectTip.prototype.playShowAnim = function (e, t, o) {
        var n = this;
        if (cc.isValid(this.contentNode)) {
            Adapter_1.default.ignoreSafeRect(this.maskNode);
            this._isPlayFlyAudio = false;
            this.playPopAudio();
            this.contentNode.scale = 0.01;
            this.contentNode.opacity = 0;
            cc.Tween.stopAllByTarget(this.contentNode);
            var i = cc.tween().to(0.26, {
                scale: 1
            }, {
                easing: cc.easing.backOut
            }), r = cc.tween().to(0.16, {
                opacity: 255
            }, {
                easing: cc.easing.circOut
            }), a = cc.tween().to(0.17, {
                scale: 0
            }, {
                easing: cc.easing.elasticInOut
            }), s = cc.tween().to(0.17, {
                opacity: 0
            }, {
                easing: cc.easing.circOut
            }), c = this;
            cc.tween(this.contentNode).parallel(i, r).delay(0.57).parallel(a, s).call(function () {
                null == o || o();
            }).delay(0.5).call(function () {
                c.node.destroy();
            }).start();
            this.maskNode.opacity = 0;
            cc.Tween.stopAllByTarget(this.maskNode);
            cc.tween(this.maskNode).to(0.16, {
                opacity: 153
            }).delay(0.67).to(0.17, {
                opacity: 0
            }).start();
            for (var u = cc.tween().to(0.14, {
                scale: 1.3
            }, {
                easing: cc.easing.circOut
            }).to(0.2, {
                scale: 1
            }, {
                easing: cc.easing.cubicIn
            }), p = function p(o) {
                var i = e[o];
                if (!cc.isValid(i) || !cc.isValid(i.parent))
                    return "continue";
                var r = t[o], a = f.contentNode.convertToWorldSpaceAR(cc.Vec3.ZERO), l = i.parent.convertToNodeSpaceAR(a), s = i._designPos, c = cc.v3(s.x, l.y - 50, 0);
                i.active = true;
                i.position = c;
                i.scale = 0;
                i.opacity = 0;
                cc.Tween.stopAllByTarget(i);
                var p = cc.tween().to(0.34, {
                    position: s
                });
                cc.tween(i).to(0.26, {
                    scale: 1.16,
                    opacity: 255
                }, {
                    easing: cc.easing.backOut
                }).delay(0.4).delay(0.03 * o).call(function () {
                    n.playFlyAudio(r);
                }).parallel(u.clone(), p).start();
            }, f = this, d = 0; d < e.length; d++)
                p(d);
        }
        else
            null == o || o();
    };
    TravelCollectTip.prototype.playPopAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Blank);
    };
    TravelCollectTip.prototype.playFlyAudio = function (e) {
        if (!this._isPlayFlyAudio) {
            this._isPlayFlyAudio = true;
            var t = 0;
            switch (e) {
                case "Yoga":
                case "Normal":
                case "ColorCard":
                case "RollCard":
                default:
                    t = GameTypeEnums_1.EAudioID.Targetfly3;
            }
            mj.audioManager.playEffect(t);
        }
        var o = 0;
        switch (e) {
            case "RollCard":
                o = GameTypeEnums_1.EAudioID.Targetfly2;
                break;
            case "Yoga":
                o = GameTypeEnums_1.EAudioID.CollectionShow;
                break;
            case "ColorCard":
                o = GameTypeEnums_1.EAudioID.Targetfly1;
                break;
            case "Normal":
            case "RankCard":
            default:
                o = GameTypeEnums_1.EAudioID.Targetfly1;
        }
        mj.audioManager.playEffect(o);
    };
    TravelCollectTip.prefabUrl = "prefabs/journey/JourneyCollectTip";
    __decorate([
        mj.node("Content")
    ], TravelCollectTip.prototype, "contentNode", void 0);
    __decorate([
        mj.node("Mask")
    ], TravelCollectTip.prototype, "maskNode", void 0);
    TravelCollectTip = __decorate([
        mj.class
    ], TravelCollectTip);
    return TravelCollectTip;
}(BaseUI_1.default));
exports.default = TravelCollectTip;

cc._RF.pop();