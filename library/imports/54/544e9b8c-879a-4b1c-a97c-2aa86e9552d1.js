"use strict";
cc._RF.push(module, '544e9uMh5pLHKl8KqhulVLR', 'StageRightItem');
// subpackages/l_classic/Scripts/StageRightItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var StageRightItem = /** @class */ (function (_super) {
    __extends(StageRightItem, _super);
    function StageRightItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stageLabel = null;
        _this._currentStage = 1;
        return _this;
    }
    StageRightItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    StageRightItem.prototype.updateStage = function (t) {
        if (cc.isValid(this.stageLabel)) {
            this._currentStage = t;
            var e = I18NStrings_1.default.get("classic_stage", "Stage"), n = I18NStrings_1.default.stringFormat(e + " {0}", t);
            this.stageLabel.string = n;
        }
    };
    StageRightItem.prototype.getCurrentStage = function () {
        return this._currentStage;
    };
    StageRightItem.prototype.checkAndUpdate = function (t) {
        if (t !== this._currentStage) {
            this.updateStage(t);
            return true;
        }
        return false;
    };
    StageRightItem.prefabUrl = "prefabs/StageRightItem";
    StageRightItem.bundleName = "l_classic";
    __decorate([
        mj.component("label", cc.Label)
    ], StageRightItem.prototype, "stageLabel", void 0);
    StageRightItem = __decorate([
        mj.class
    ], StageRightItem);
    return StageRightItem;
}(BaseUI_1.default));
exports.default = StageRightItem;

cc._RF.pop();