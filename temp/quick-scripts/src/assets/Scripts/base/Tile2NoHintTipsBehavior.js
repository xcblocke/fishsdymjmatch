"use strict";
cc._RF.push(module, '2787coMY+FKSZxlShmoL7Fv', 'Tile2NoHintTipsBehavior');
// Scripts/base/Tile2NoHintTipsBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2NoHintTipsBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var I18NStrings_1 = require("../framework/data/I18NStrings");
var Tile2NoHintTipsBehavior = /** @class */ (function (_super) {
    __extends(Tile2NoHintTipsBehavior, _super);
    function Tile2NoHintTipsBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2NoHintTipsBehavior.prototype.start = function () {
        this.showNoHintTips();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2NoHintTipsBehavior.prototype.showNoHintTips = function () {
        var e = I18NStrings_1.default.get("Tile4_tip_tool_cannot_use", "Try using other props to solve this challenge");
        mj.EventManager.emit("SHOWTILE2TIPS", e);
    };
    return Tile2NoHintTipsBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2NoHintTipsBehavior = Tile2NoHintTipsBehavior;

cc._RF.pop();