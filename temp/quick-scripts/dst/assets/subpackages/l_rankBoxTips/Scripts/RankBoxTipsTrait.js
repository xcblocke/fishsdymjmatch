
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankBoxTips/Scripts/RankBoxTipsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ea6eYf0kFOAbVG2QN1Lcqz', 'RankBoxTipsTrait');
// subpackages/l_rankBoxTips/Scripts/RankBoxTipsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Config_1 = require("../../../Scripts/Config");
var RankBoxTipsTrait = /** @class */ (function (_super) {
    __extends(RankBoxTipsTrait, _super);
    function RankBoxTipsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankBoxTipsTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[Config_1.EVT_MSG_KEY_EVENT_TOP_TOUCH_START] = this.onTopTouchStart.bind(this);
        return _t;
    };
    RankBoxTipsTrait.prototype.onTopTouchStart = function () {
        "function" == typeof this.dispatchEvent && this.dispatchEvent("msg_removeRankBoxTips");
    };
    RankBoxTipsTrait.prototype.onRankBoxBtn_boxClk = function (t, e) {
        var o, n = t.ins, r = n.getConfigReward(), i = [cc.v2(0, 80), cc.v2(0, 56), cc.v2(0, 56)][n.getRankNum() - 1];
        (null === (o = null == r ? void 0 : r.Items) || void 0 === o ? void 0 : o.length) > 0 && i && this.dispatchEvent("msg_addRankBoxTips", n.node, r, i);
        e();
    };
    RankBoxTipsTrait.prototype.onRankItem_btnTips = function (t, e) {
        var o, n = t.ins, r = n.getConfigReward();
        (null === (o = null == r ? void 0 : r.Items) || void 0 === o ? void 0 : o.length) > 0 && this.dispatchEvent("msg_addRankBoxTips", n.getBoxBtnNode(), r);
        e();
    };
    RankBoxTipsTrait.traitKey = "RankBoxTips";
    __decorate([
        mj.traitEvent("RankBoxTips_touchStart")
    ], RankBoxTipsTrait.prototype, "onTopTouchStart", null);
    RankBoxTipsTrait = __decorate([
        mj.trait,
        mj.class("RankBoxTipsTrait")
    ], RankBoxTipsTrait);
    return RankBoxTipsTrait;
}(Trait_1.default));
exports.default = RankBoxTipsTrait;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtCb3hUaXBzL1NjcmlwdHMvUmFua0JveFRpcHNUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELGtEQUE0RTtBQUc1RTtJQUE4QyxvQ0FBSztJQUFuRDs7SUEwQkEsQ0FBQztJQXhCQyw4Q0FBbUIsR0FBbkI7UUFDRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDWixFQUFFLENBQUMsMENBQWlDLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCwwQ0FBZSxHQUFmO1FBQ0UsVUFBVSxJQUFJLE9BQU8sSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDekYsQ0FBQztJQUNELDhDQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDVCxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUN2QixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyRSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckosQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsNkNBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNULENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hKLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQXhCTSx5QkFBUSxHQUFHLGFBQWEsQ0FBQztJQU9oQztRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7MkRBR3ZDO0lBVmtCLGdCQUFnQjtRQUZwQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7T0FDUixnQkFBZ0IsQ0EwQnBDO0lBQUQsdUJBQUM7Q0ExQkQsQUEwQkMsQ0ExQjZDLGVBQUssR0EwQmxEO2tCQTFCb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IEVWVF9NU0dfS0VZX0VWRU5UX1RPUF9UT1VDSF9TVEFSVCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQ29uZmlnJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUmFua0JveFRpcHNUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua0JveFRpcHNUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJSYW5rQm94VGlwc1wiO1xuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfdCA9IHt9O1xuICAgIF90W0VWVF9NU0dfS0VZX0VWRU5UX1RPUF9UT1VDSF9TVEFSVF0gPSB0aGlzLm9uVG9wVG91Y2hTdGFydC5iaW5kKHRoaXMpO1xuICAgIHJldHVybiBfdDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtCb3hUaXBzX3RvdWNoU3RhcnRcIilcbiAgb25Ub3BUb3VjaFN0YXJ0KCkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdGhpcy5kaXNwYXRjaEV2ZW50ICYmIHRoaXMuZGlzcGF0Y2hFdmVudChcIm1zZ19yZW1vdmVSYW5rQm94VGlwc1wiKTtcbiAgfVxuICBvblJhbmtCb3hCdG5fYm94Q2xrKHQsIGUpIHtcbiAgICB2YXIgbyxcbiAgICAgIG4gPSB0LmlucyxcbiAgICAgIHIgPSBuLmdldENvbmZpZ1Jld2FyZCgpLFxuICAgICAgaSA9IFtjYy52MigwLCA4MCksIGNjLnYyKDAsIDU2KSwgY2MudjIoMCwgNTYpXVtuLmdldFJhbmtOdW0oKSAtIDFdO1xuICAgIChudWxsID09PSAobyA9IG51bGwgPT0gciA/IHZvaWQgMCA6IHIuSXRlbXMpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8ubGVuZ3RoKSA+IDAgJiYgaSAmJiB0aGlzLmRpc3BhdGNoRXZlbnQoXCJtc2dfYWRkUmFua0JveFRpcHNcIiwgbi5ub2RlLCByLCBpKTtcbiAgICBlKCk7XG4gIH1cbiAgb25SYW5rSXRlbV9idG5UaXBzKHQsIGUpIHtcbiAgICB2YXIgbyxcbiAgICAgIG4gPSB0LmlucyxcbiAgICAgIHIgPSBuLmdldENvbmZpZ1Jld2FyZCgpO1xuICAgIChudWxsID09PSAobyA9IG51bGwgPT0gciA/IHZvaWQgMCA6IHIuSXRlbXMpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8ubGVuZ3RoKSA+IDAgJiYgdGhpcy5kaXNwYXRjaEV2ZW50KFwibXNnX2FkZFJhbmtCb3hUaXBzXCIsIG4uZ2V0Qm94QnRuTm9kZSgpLCByKTtcbiAgICBlKCk7XG4gIH1cbn0iXX0=