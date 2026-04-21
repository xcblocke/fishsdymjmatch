"use strict";
cc._RF.push(module, 'b1047eUVFZB/qe+GblfkmWj', 'GoalAchieveItem');
// Scripts/items/GoalAchieveItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../framework/ui/BaseUI");
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var I18NStrings_1 = require("../framework/data/I18NStrings");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GoalAchieveItem = /** @class */ (function (_super) {
    __extends(GoalAchieveItem, _super);
    function GoalAchieveItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._spineAnim = null;
        _this._tileLbl = null;
        return _this;
    }
    GoalAchieveItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._tileLbl = GameUtils_1.default.getSpineAttachedComponent(this._spineAnim, "hook_text", "tile", cc.Label);
        I18NStrings_1.default.setText(this._tileLbl.node, "Goal achieved", "Journey_Level_Done");
        this._tileLbl && this._tileLbl.node && (this._tileLbl.node.opacity = 0);
    };
    GoalAchieveItem.prototype.playAnimation = function (e) {
        GameUtils_1.default.playSpine(this._spineAnim, "in", false, function () { });
        this.playTextAnimation(e);
    };
    GoalAchieveItem.prototype.playTextAnimation = function (e) {
        var t = this;
        if (this._tileLbl && this._tileLbl.node) {
            cc.tween(this._tileLbl.node).to(0.16, {
                opacity: 255
            }, {
                easing: "cubicIn"
            }).delay(0.57).to(0.1, {
                opacity: 0
            }, {
                easing: "circOut"
            }).call(function () {
                t.node.destroy();
                null == e || e();
            }).start();
        }
        else {
            null == e || e();
        }
    };
    GoalAchieveItem.prototype.playSound = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Goals);
    };
    GoalAchieveItem.prefabUrl = "prefabs/effects/EffectGoalAchieve";
    GoalAchieveItem.bundleName = "mainRes";
    __decorate([
        mj.component("spin", sp.Skeleton)
    ], GoalAchieveItem.prototype, "_spineAnim", void 0);
    GoalAchieveItem = __decorate([
        mj.class
    ], GoalAchieveItem);
    return GoalAchieveItem;
}(BaseUI_1.default));
exports.default = GoalAchieveItem;

cc._RF.pop();