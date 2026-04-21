"use strict";
cc._RF.push(module, 'ae404uKXMBKa4jGu64zNth8', 'Tile2BeforeFailBehavior');
// Scripts/base/Tile2BeforeFailBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2BeforeFailBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var EffectLayerEnum_1 = require("../constant/EffectLayerEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var CommonUtils_1 = require("../framework/utils/CommonUtils");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2BeforeFailBehavior = /** @class */ (function (_super) {
    __extends(Tile2BeforeFailBehavior, _super);
    function Tile2BeforeFailBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2BeforeFailBehavior.prototype.onAbort = function () {
        var e;
        null === (e = this.context.gameView) || void 0 === e || e.setSwallowEventNodeActive(false);
    };
    Tile2BeforeFailBehavior.prototype.start = function (e) {
        var t, o, n = this, i = e.data.tileIds, l = null === (t = this.context.gameView) || void 0 === t ? void 0 : t.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top);
        if (l && cc.isValid(l)) {
            if (this.context.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot3) {
                null === (o = this.context.gameView) || void 0 === o || o.setSwallowEventNodeActive(true);
                for (var s = this.createMaskNode(l), p = 0; p < i.length; p++) {
                    var f = i[p], d = this.context.getTileNodeByTileId(f);
                    d && d.tile2BeforeFail(l);
                }
                mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Fail3Slot);
                this.playMaskFadeIn(s, function () {
                    var e;
                    cc.isValid(s) && s.destroy();
                    null === (e = n.context.gameView) || void 0 === e || e.setSwallowEventNodeActive(false);
                    n.finish(GameInputEnum_1.EBehaviorEnum.Success);
                });
            }
            else
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2BeforeFailBehavior.prototype.createMaskNode = function (e) {
        var t = CommonUtils_1.createSingleColorNode(cc.Color.BLACK, cc.size(9999, 9999));
        t.zIndex = -1;
        t.parent = e;
        return t;
    };
    Tile2BeforeFailBehavior.prototype.playMaskFadeIn = function (e, t) {
        if (e && cc.isValid(e)) {
            e.opacity = 0;
            var o = Math.round(76.5);
            cc.tween(e).to(0.27, {
                opacity: o
            }, {
                easing: cc.easing.sineInOut
            }).delay(1).call(function () {
                null == t || t();
            }).start();
        }
        else
            null == t || t();
    };
    return Tile2BeforeFailBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2BeforeFailBehavior = Tile2BeforeFailBehavior;

cc._RF.pop();