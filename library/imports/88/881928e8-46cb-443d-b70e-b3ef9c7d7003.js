"use strict";
cc._RF.push(module, '88192joRstEPbcOs++cfXAD', 'HighestScoreItem');
// subpackages/l_classic/Scripts/HighestScoreItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var HighestScoreItem = /** @class */ (function (_super) {
    __extends(HighestScoreItem, _super);
    function HighestScoreItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this._currentMaxScore = 0;
        return _this;
    }
    HighestScoreItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    HighestScoreItem.prototype.updateScore = function (t) {
        if (cc.isValid(this.scoreLabel)) {
            this._currentMaxScore = t;
            this.scoreLabel.string = t.toString();
        }
    };
    HighestScoreItem.prototype.getCurrentMaxScore = function () {
        return this._currentMaxScore;
    };
    HighestScoreItem.prototype.checkAndUpdate = function (t, e) {
        var n = Math.max(t, e);
        if (n > this._currentMaxScore) {
            this.updateScore(n);
            return true;
        }
        return false;
    };
    HighestScoreItem.prototype.reset = function (t) {
        this.updateScore(t);
    };
    HighestScoreItem.prefabUrl = "prefabs/HighestScoreItem";
    HighestScoreItem.bundleName = "l_classic";
    __decorate([
        mj.component("label", cc.Label)
    ], HighestScoreItem.prototype, "scoreLabel", void 0);
    HighestScoreItem = __decorate([
        mj.class
    ], HighestScoreItem);
    return HighestScoreItem;
}(BaseUI_1.default));
exports.default = HighestScoreItem;

cc._RF.pop();