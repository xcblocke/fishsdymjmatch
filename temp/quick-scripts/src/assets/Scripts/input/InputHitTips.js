"use strict";
cc._RF.push(module, 'e5e02SP5RpJZo6D8iZMMxLm', 'InputHitTips');
// Scripts/input/InputHitTips.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameUseItem_1 = require("../gamePlay/dot/DGameUseItem");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var HitTipsEffect_1 = require("../HitTipsEffect");
var UpdateHitTipsPropEffect_1 = require("../UpdateHitTipsPropEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputHitTips = /** @class */ (function (_super) {
    __extends(InputHitTips, _super);
    function InputHitTips() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputHitTips.prototype.excute = function () {
        if (!this.gameController.gameContext.getCanHitTips().length) {
            var e = this.gameContext.getGameData().getHitTipsNums();
            if (this.gameContext.getGameData().isHitTipsEnough()) {
                this.changePropNumDefault(e);
                var t = this.gameController.tileMapObject.getCanMatchTilesHint();
                if (0 == t.length) {
                    this.gameController.tileMapObject.updateCanMatchTiles();
                    t = this.gameController.tileMapObject.getCanMatchTilesHint();
                }
                if (t.length > 0) {
                    var o = this.findHintTile(t), n = o[0].id, i = o[1].id;
                    this.gameContext.trackerModifier.triggerHint(n, i);
                    this.gameController.tileMapObject.getTileObject(n).isHint = true;
                    this.gameController.tileMapObject.getTileObject(i).isHint = true;
                    this.gameController.gameContext.setCanHitTips([n, i]);
                    if (mj.triggerInternalEvent("IptHitTips_execTempFix", this, [e]))
                        return;
                    this.pushHitTipsEffect(n, i, false);
                }
            }
            else
                mj.EventManager.emit("SHOWTIPS", "Insufficient number of props.", cc.v2(0, 0));
        }
    };
    InputHitTips.prototype.findHintTile = function (e) {
        var t = e[Math.floor(Math.random() * e.length)];
        return t.slice(0, 2);
    };
    InputHitTips.prototype.pushHitTipsEffect = function (e, t, o) {
        var n = new HitTipsEffect_1.HitTipsEffect({
            isClearHit: o,
            tileId1: e,
            tileId2: t
        });
        this.pushEffect(n);
    };
    InputHitTips.prototype.pushUpdateHitTipsPropEffect = function (e) {
        var t = new UpdateHitTipsPropEffect_1.UpdateHitTipsPropEffect({
            curNum: e
        });
        this.pushEffect(t);
    };
    InputHitTips.prototype.changePropNumDefault = function () {
        var e = this.gameContext.getGameData().getHitTipsNums();
        this.gameContext.getGameData().changeHitTipsNums(-1);
        this.gameContext.getGameData().recordToolUse(GameTypeEnums_1.EItemId.Hint);
        this.gameContext.getGameData().toolChange(GameTypeEnums_1.EItemId.Hint, -1);
        var t = this.gameContext.getGameData().getHitTipsNums();
        DGameUseItem_1.DotGameUseItem.dot(this.gameContext, {
            itemId: GameTypeEnums_1.EItemId.Hint,
            afterNum: t,
            beforeNum: e
        });
        this.pushUpdateHitTipsPropEffect(t);
    };
    __decorate([
        mj.traitEvent("IptHitTips_exec")
    ], InputHitTips.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptHitTips_findHint")
    ], InputHitTips.prototype, "findHintTile", null);
    __decorate([
        mj.traitEvent("IptHitTips_chgPropDef")
    ], InputHitTips.prototype, "changePropNumDefault", null);
    return InputHitTips;
}(InputBase_1.InputBase));
exports.default = InputHitTips;

cc._RF.pop();