
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_coldStartResume/Scripts/ColdStartResumeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f32c6EfWCtMAJoElvVQqA3Y', 'ColdStartResumeTrait');
// subpackages/l_coldStartResume/Scripts/ColdStartResumeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ColdStartResumeTrait = /** @class */ (function (_super) {
    __extends(ColdStartResumeTrait, _super);
    function ColdStartResumeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeHours = 24;
        _this._lastQuitAppTime = 0;
        _this._normalLastQuitTime = 0;
        _this._tile2LastQuitTime = 0;
        return _this;
    }
    ColdStartResumeTrait_1 = ColdStartResumeTrait;
    ColdStartResumeTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._timeHours = this._traitData.timeHours || 24;
        var a = UserModel_1.default.getInstance();
        this._normalLastQuitTime = (null === (e = a.normalData.localData) || void 0 === e ? void 0 : e.lastUpdateTime) || 0;
        this._tile2LastQuitTime = (null === (r = a.tile2NormalData.localData) || void 0 === r ? void 0 : r.lastUpdateTime) || 0;
    };
    ColdStartResumeTrait.prototype.onLoginM_enterGame = function (t, e) {
        if (this._timeHours <= 0)
            e();
        else {
            var r = UserModel_1.default.getInstance().getMainGameType();
            this._lastQuitAppTime = r === GameTypeEnums_1.MjGameType.Tile2Normal ? this._tile2LastQuitTime : this._normalLastQuitTime;
            if (this.shouldResumeGame()) {
                e({
                    isBreak: true
                });
            }
            else {
                e();
            }
        }
    };
    ColdStartResumeTrait.prototype.onMainGameCtrl_vwLoad = function (t, e) {
        var r = UserModel_1.default.getInstance().getCurrentGameType();
        if (r === GameTypeEnums_1.MjGameType.Normal || r === GameTypeEnums_1.MjGameType.Tile2Normal) {
            this.localData.isInLevelGame = true;
        }
        else {
            this.localData.isInLevelGame = false;
        }
        e();
    };
    ColdStartResumeTrait.prototype.onUISetBtnBack_onBtnClk = function (t, e) {
        this.localData.isInLevelGame = false;
        e();
    };
    ColdStartResumeTrait.prototype.shouldResumeGame = function () {
        try {
            var t = UserModel_1.default.getInstance(), e = t.getGameDataByGameType(t.getMainGameType()), a = e.getLevelData();
            if (!this.localData.isInLevelGame)
                return false;
            if (!a || "" === a)
                return false;
            var i = e.getClearTileCount();
            if (this._traitData.isSkipCount)
                ;
            else if (0 === i)
                return false;
            var o = this._lastQuitAppTime || 0;
            return !!o && !(Date.now() - o > 3600000 * this._timeHours);
        }
        catch (t) {
            console.error("[" + ColdStartResumeTrait_1.traitKey + "] 检查续关条件异常: " + t.message);
            return false;
        }
    };
    var ColdStartResumeTrait_1;
    ColdStartResumeTrait.traitKey = "ColdStartResume";
    ColdStartResumeTrait = ColdStartResumeTrait_1 = __decorate([
        mj.trait,
        mj.class("ColdStartResumeTrait")
    ], ColdStartResumeTrait);
    return ColdStartResumeTrait;
}(Trait_1.default));
exports.default = ColdStartResumeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NvbGRTdGFydFJlc3VtZS9TY3JpcHRzL0NvbGRTdGFydFJlc3VtZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUdqRTtJQUFrRCx3Q0FBSztJQUF2RDtRQUFBLHFFQXdEQztRQXZEQyxnQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixzQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIseUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLHdCQUFrQixHQUFHLENBQUMsQ0FBQzs7SUFvRHpCLENBQUM7NkJBeERvQixvQkFBb0I7SUFNdkMscUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BILElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMs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Q0F4RGlELGVBQUssR0F3RHREO2tCQXhEb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ29sZFN0YXJ0UmVzdW1lVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGRTdGFydFJlc3VtZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfdGltZUhvdXJzID0gMjQ7XG4gIF9sYXN0UXVpdEFwcFRpbWUgPSAwO1xuICBfbm9ybWFsTGFzdFF1aXRUaW1lID0gMDtcbiAgX3RpbGUyTGFzdFF1aXRUaW1lID0gMDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDb2xkU3RhcnRSZXN1bWVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3RpbWVIb3VycyA9IHRoaXMuX3RyYWl0RGF0YS50aW1lSG91cnMgfHwgMjQ7XG4gICAgdmFyIGEgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgICB0aGlzLl9ub3JtYWxMYXN0UXVpdFRpbWUgPSAobnVsbCA9PT0gKGUgPSBhLm5vcm1hbERhdGEubG9jYWxEYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmxhc3RVcGRhdGVUaW1lKSB8fCAwO1xuICAgIHRoaXMuX3RpbGUyTGFzdFF1aXRUaW1lID0gKG51bGwgPT09IChyID0gYS50aWxlMk5vcm1hbERhdGEubG9jYWxEYXRhKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmxhc3RVcGRhdGVUaW1lKSB8fCAwO1xuICB9XG4gIG9uTG9naW5NX2VudGVyR2FtZSh0LCBlKSB7XG4gICAgaWYgKHRoaXMuX3RpbWVIb3VycyA8PSAwKSBlKCk7ZWxzZSB7XG4gICAgICB2YXIgciA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lVHlwZSgpO1xuICAgICAgdGhpcy5fbGFzdFF1aXRBcHBUaW1lID0gciA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCA/IHRoaXMuX3RpbGUyTGFzdFF1aXRUaW1lIDogdGhpcy5fbm9ybWFsTGFzdFF1aXRUaW1lO1xuICAgICAgaWYgKHRoaXMuc2hvdWxkUmVzdW1lR2FtZSgpKSB7XG4gICAgICAgIGUoe1xuICAgICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTWFpbkdhbWVDdHJsX3Z3TG9hZCh0LCBlKSB7XG4gICAgdmFyIHIgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICBpZiAociA9PT0gTWpHYW1lVHlwZS5Ob3JtYWwgfHwgciA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCkge1xuICAgICAgdGhpcy5sb2NhbERhdGEuaXNJbkxldmVsR2FtZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmlzSW5MZXZlbEdhbWUgPSBmYWxzZTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uVUlTZXRCdG5CYWNrX29uQnRuQ2xrKHQsIGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5pc0luTGV2ZWxHYW1lID0gZmFsc2U7XG4gICAgZSgpO1xuICB9XG4gIHNob3VsZFJlc3VtZUdhbWUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciB0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICAgIGUgPSB0LmdldEdhbWVEYXRhQnlHYW1lVHlwZSh0LmdldE1haW5HYW1lVHlwZSgpKSxcbiAgICAgICAgYSA9IGUuZ2V0TGV2ZWxEYXRhKCk7XG4gICAgICBpZiAoIXRoaXMubG9jYWxEYXRhLmlzSW5MZXZlbEdhbWUpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICghYSB8fCBcIlwiID09PSBhKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgaSA9IGUuZ2V0Q2xlYXJUaWxlQ291bnQoKTtcbiAgICAgIGlmICh0aGlzLl90cmFpdERhdGEuaXNTa2lwQ291bnQpIDtlbHNlIGlmICgwID09PSBpKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgbyA9IHRoaXMuX2xhc3RRdWl0QXBwVGltZSB8fCAwO1xuICAgICAgcmV0dXJuICEhbyAmJiAhKERhdGUubm93KCkgLSBvID4gMzYwMDAwMCAqIHRoaXMuX3RpbWVIb3Vycyk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENvbGRTdGFydFJlc3VtZVRyYWl0LnRyYWl0S2V5ICsgXCJdIOajgOafpee7reWFs+adoeS7tuW8guW4uDogXCIgKyB0Lm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufSJdfQ==