"use strict";
cc._RF.push(module, '122b0x0BctE5KxvqQtMQSr7', 'RankBoxBtn');
// subpackages/l_rank/Scripts/RankBoxBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var RankModel_1 = require("./RankModel");
var RankBoxBtn = /** @class */ (function (_super) {
    __extends(RankBoxBtn, _super);
    function RankBoxBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rankNum = 1;
        return _this;
    }
    RankBoxBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node.children[0], this.onBoxClick.bind(this));
    };
    RankBoxBtn.prototype.setRankNum = function (t) {
        this._rankNum = t;
    };
    RankBoxBtn.prototype.getRankNum = function () {
        return this._rankNum;
    };
    RankBoxBtn.prototype.getConfigReward = function () {
        return RankModel_1.default.getInstance().getRewardIdByRank(this._rankNum);
    };
    RankBoxBtn.prototype.onBoxClick = function () { };
    RankBoxBtn.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    RankBoxBtn.prefabUrl = "prefabs/rank/buttons/Rank1BoxBtn";
    __decorate([
        mj.traitEvent("RankBoxBtn_boxClk")
    ], RankBoxBtn.prototype, "onBoxClick", null);
    RankBoxBtn = __decorate([
        mj.class
    ], RankBoxBtn);
    return RankBoxBtn;
}(BaseUI_1.default));
exports.default = RankBoxBtn;

cc._RF.pop();