"use strict";
cc._RF.push(module, 'ba73e8D8khM963DhlYQXKYX', 'Tile2NotEnoughItemsBehavior');
// Scripts/base/Tile2NotEnoughItemsBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2NotEnoughItemsBehavior = void 0;
var I18NStrings_1 = require("../framework/data/I18NStrings");
var ControllerManager_1 = require("../framework/manager/ControllerManager");
var DAdRewardEnter_1 = require("../gamePlay/dot/DAdRewardEnter");
var DGameAdShow_1 = require("../gamePlay/dot/DGameAdShow");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var p = {
    shuffle: 0,
    hitTips: 1,
    revert: 2
};
var f = {
    shuffle: DGameAdShow_1.EAdPosition.InGameMotivation_Reshuffle,
    hitTips: DGameAdShow_1.EAdPosition.InGameMotivation_Hint,
    revert: DGameAdShow_1.EAdPosition.InGameMotivation_Revert
};
var Tile2NotEnoughItemsBehavior = /** @class */ (function (_super) {
    __extends(Tile2NotEnoughItemsBehavior, _super);
    function Tile2NotEnoughItemsBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2NotEnoughItemsBehavior.prototype.start = function (e) {
        var t = e.data.from;
        if (t) {
            ControllerManager_1.default.getInstance().pushViewByController("WatchAdGetPropController", {
                type: p[t],
                isShowAction: true
            });
            DAdRewardEnter_1.DotAdRewardEnter.dot(true, f[t]);
        }
        else {
            var o = I18NStrings_1.default.get("Tile4_item_not_enough", "Not enough items");
            mj.EventManager.emit("SHOWTILE2TIPS", o);
        }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return Tile2NotEnoughItemsBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2NotEnoughItemsBehavior = Tile2NotEnoughItemsBehavior;

cc._RF.pop();