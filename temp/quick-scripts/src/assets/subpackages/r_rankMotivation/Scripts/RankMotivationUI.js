"use strict";
cc._RF.push(module, 'eb4f6BmgUVFNLI1IyDexZcn', 'RankMotivationUI');
// subpackages/r_rankMotivation/Scripts/RankMotivationUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var RankMotivationUI = /** @class */ (function (_super) {
    __extends(RankMotivationUI, _super);
    function RankMotivationUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._titleNode = null;
        _this._timeNode = null;
        _this._desc = null;
        return _this;
    }
    RankMotivationUI.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    RankMotivationUI.prototype.updateUI = function (t, e, o) {
        this.node.getComponent(cc.Widget).updateAlignment();
        t.parent = this._titleNode;
        t.setPosition(0, 0, 0);
        e.parent = this._timeNode;
        e.setPosition(0, 0, 0);
        var n = I18NStrings_1.default.get("LeaderBoard_rank_1", "<color=#f5e8c4>You climbed an amazing </c><outline color=#602e0b width=3><color=#ffd04b><size=38>13</size></color></outline><color=#f5e8c4> sports up the leaderboard</c>").replace("{0}", String(o));
        this._desc.getComponent(cc.RichText).string = n;
    };
    RankMotivationUI.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    RankMotivationUI.bundleName = "r_rankMotivation";
    RankMotivationUI.prefabUrl = "prefabs/rankMotivation";
    __decorate([
        mj.node("titleNode")
    ], RankMotivationUI.prototype, "_titleNode", void 0);
    __decorate([
        mj.node("timeNode")
    ], RankMotivationUI.prototype, "_timeNode", void 0);
    __decorate([
        mj.node("desc")
    ], RankMotivationUI.prototype, "_desc", void 0);
    RankMotivationUI = __decorate([
        mj.class
    ], RankMotivationUI);
    return RankMotivationUI;
}(BaseUI_1.default));
exports.default = RankMotivationUI;

cc._RF.pop();