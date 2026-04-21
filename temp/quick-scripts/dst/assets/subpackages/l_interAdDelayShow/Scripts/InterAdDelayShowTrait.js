
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_interAdDelayShow/Scripts/InterAdDelayShowTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73ae78/FuxLOLNWKNqBsycV', 'InterAdDelayShowTrait');
// subpackages/l_interAdDelayShow/Scripts/InterAdDelayShowTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var InterAdDelayShowTrait = /** @class */ (function (_super) {
    __extends(InterAdDelayShowTrait, _super);
    function InterAdDelayShowTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._beforeInterAdDelayTime = 0;
        _this._restartFrom = null;
        _this._delayTimerId = null;
        _this._allowBackDuringDelay = false;
        _this._isOnlyReplay = false;
        _this._isOnlyTile2Replay = false;
        _this._hasClearInCurrentGame = false;
        return _this;
    }
    InterAdDelayShowTrait.prototype.onLoad = function () {
        var e, a, n, r;
        _super.prototype.onLoad.call(this);
        void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.beforeInterAdDelayTime) && (this._beforeInterAdDelayTime = 1000 * this._traitData.beforeInterAdDelayTime);
        void 0 !== (null === (a = this._traitData) || void 0 === a ? void 0 : a.allowBackDuringDelay) && (this._allowBackDuringDelay = this._traitData.allowBackDuringDelay);
        void 0 !== (null === (n = this._traitData) || void 0 === n ? void 0 : n.isOnlyReplay) && (this._isOnlyReplay = this._traitData.isOnlyReplay);
        void 0 !== (null === (r = this._traitData) || void 0 === r ? void 0 : r.isOnlyTile2Replay) && (this._isOnlyTile2Replay = this._traitData.isOnlyTile2Replay);
    };
    InterAdDelayShowTrait.prototype.onIptRestart_excute = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var a = t.args[0];
            this._restartFrom = (null == a ? void 0 : a.callFrom) || null;
            e();
        }
        else
            e();
    };
    InterAdDelayShowTrait.prototype.onEntAniFiBhv_start = function (t, e) {
        var a, n = this;
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var r = t.ins, i = null === (a = null == r ? void 0 : r.context) || void 0 === a ? void 0 : a.gameView, l = this._restartFrom;
            this._restartFrom = null;
            null === l && (this._hasClearInCurrentGame = false);
            if (null !== this._delayTimerId) {
                clearTimeout(this._delayTimerId);
                this._delayTimerId = null;
            }
            !this._allowBackDuringDelay && this._beforeInterAdDelayTime > 0 && this.disableBackBtnInteractable(i);
            this._delayTimerId = setTimeout(function () {
                n._delayTimerId = null;
                n._allowBackDuringDelay || n.enableBackBtnInteractable(i);
                if (n._isOnlyTile2Replay) {
                    UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal && null !== l && ("setting" === l ? n.playInterAd("settings_replay", DGameAdShow_1.EAdPosition.FrontInsertScreen_ActiveRestart, function () { }, function () { }) : "fail" === l && n.playInterAd("fail_replay", DGameAdShow_1.EAdPosition.FrontInsertScreen_FailRestart, function () { }, function () { }));
                }
                else if (n._isOnlyReplay) {
                    null !== l && n._hasClearInCurrentGame && ("setting" === l ? n.playInterAd("settings_replay", DGameAdShow_1.EAdPosition.FrontInsertScreen_ActiveRestart, function () { }, function () { }) : "fail" === l && n.playInterAd("fail_replay", DGameAdShow_1.EAdPosition.FrontInsertScreen_FailRestart, function () { }, function () { }));
                }
                else {
                    if ("setting" === l) {
                        n.playInterAd("settings_replay", DGameAdShow_1.EAdPosition.FrontInsertScreen_ActiveRestart, function () { }, function () { });
                    }
                    else {
                        if ("fail" === l) {
                            n.playInterAd("fail_replay", DGameAdShow_1.EAdPosition.FrontInsertScreen_FailRestart, function () { }, function () { });
                        }
                        else {
                            n.playInterAd("new_game", DGameAdShow_1.EAdPosition.FrontInsertScreen_GameNew, function () { }, function () { });
                        }
                    }
                }
            }, this._beforeInterAdDelayTime);
            e();
        }
        else
            e();
    };
    InterAdDelayShowTrait.prototype.onClearBhv_collision = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this._hasClearInCurrentGame = true;
            e();
        }
        else
            e();
    };
    InterAdDelayShowTrait.prototype.onMainGameBtnBack_onClick = function (t, e) {
        UserModel_1.default.getInstance().getCurrentGameType(), GameTypeEnums_1.MjGameType.Classic, e();
    };
    InterAdDelayShowTrait.prototype.disableBackBtnInteractable = function (t) {
        if (t && cc.isValid(t.topRootNode)) {
            var e = t.topRootNode.getChildByName("btnBack");
            if (e && cc.isValid(e)) {
                var a = e.getComponent(cc.Button);
                a && (a.interactable = false);
            }
        }
    };
    InterAdDelayShowTrait.prototype.enableBackBtnInteractable = function (t) {
        if (t && cc.isValid(t.topRootNode)) {
            var e = t.topRootNode.getChildByName("btnBack");
            if (e && cc.isValid(e)) {
                var a = e.getComponent(cc.Button);
                a && (a.interactable = true);
            }
        }
    };
    InterAdDelayShowTrait.prototype.playInterAd = function (t, e, a, n) {
        DGameAdShowStage_1.DotGameAdShowStage.dot(true, "clickAdLock");
        AdManager_1.default.getInstance().playInterAd(e, {
            onSuccess: function () {
                a && a();
            },
            onFailed: function () {
                n && n();
            }
        }, t, {
            adTimeType: "beforeInterAd"
        });
    };
    InterAdDelayShowTrait.traitKey = "InterAdDelayShow";
    InterAdDelayShowTrait = __decorate([
        mj.trait,
        mj.class("InterAdDelayShowTrait")
    ], InterAdDelayShowTrait);
    return InterAdDelayShowTrait;
}(Trait_1.default));
exports.default = InterAdDelayShowTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ludGVyQWREZWxheVNob3cvU2NyaXB0cy9JbnRlckFkRGVsYXlTaG93VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRixnRUFBMkQ7QUFDM0QsZ0VBQTJEO0FBQzNELHlFQUF3RTtBQUN4RSxtRkFBb0Y7QUFDcEYsc0VBQWlFO0FBR2pFO0lBQW1ELHlDQUFLO0lBQXhEO1FBQUEscUVBb0dDO1FBbkdDLDZCQUF1QixHQUFHLENBQUMsQ0FBQztRQUM1QixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQiwyQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDOUIsbUJBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsd0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLDRCQUFzQixHQUFHLEtBQUssQ0FBQzs7SUE2RmpDLENBQUM7SUEzRkMsc0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2YsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNsTCxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FB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RUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO09BQ2IscUJBQXFCLENBb0d6QztJQUFELDRCQUFDO0NBcEdELEFBb0dDLENBcEdrRCxlQUFLLEdBb0d2RDtrQkFwR29CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBBZE1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL2FkL0FkTWFuYWdlcic7XG5pbXBvcnQgeyBFQWRQb3NpdGlvbiB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvZG90L0RHYW1lQWRTaG93JztcbmltcG9ydCB7IERvdEdhbWVBZFNob3dTdGFnZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvZG90L0RHYW1lQWRTaG93U3RhZ2UnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiSW50ZXJBZERlbGF5U2hvd1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlckFkRGVsYXlTaG93VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9iZWZvcmVJbnRlckFkRGVsYXlUaW1lID0gMDtcbiAgX3Jlc3RhcnRGcm9tID0gbnVsbDtcbiAgX2RlbGF5VGltZXJJZCA9IG51bGw7XG4gIF9hbGxvd0JhY2tEdXJpbmdEZWxheSA9IGZhbHNlO1xuICBfaXNPbmx5UmVwbGF5ID0gZmFsc2U7XG4gIF9pc09ubHlUaWxlMlJlcGxheSA9IGZhbHNlO1xuICBfaGFzQ2xlYXJJbkN1cnJlbnRHYW1lID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiSW50ZXJBZERlbGF5U2hvd1wiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIGEsIG4sIHI7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdm9pZCAwICE9PSAobnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuYmVmb3JlSW50ZXJBZERlbGF5VGltZSkgJiYgKHRoaXMuX2JlZm9yZUludGVyQWREZWxheVRpbWUgPSAxMDAwICogdGhpcy5fdHJhaXREYXRhLmJlZm9yZUludGVyQWREZWxheVRpbWUpO1xuICAgIHZvaWQgMCAhPT0gKG51bGwgPT09IChhID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmFsbG93QmFja0R1cmluZ0RlbGF5KSAmJiAodGhpcy5fYWxsb3dCYWNrRHVyaW5nRGVsYXkgPSB0aGlzLl90cmFpdERhdGEuYWxsb3dCYWNrRHVyaW5nRGVsYXkpO1xuICAgIHZvaWQgMCAhPT0gKG51bGwgPT09IChuID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmlzT25seVJlcGxheSkgJiYgKHRoaXMuX2lzT25seVJlcGxheSA9IHRoaXMuX3RyYWl0RGF0YS5pc09ubHlSZXBsYXkpO1xuICAgIHZvaWQgMCAhPT0gKG51bGwgPT09IChyID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmlzT25seVRpbGUyUmVwbGF5KSAmJiAodGhpcy5faXNPbmx5VGlsZTJSZXBsYXkgPSB0aGlzLl90cmFpdERhdGEuaXNPbmx5VGlsZTJSZXBsYXkpO1xuICB9XG4gIG9uSXB0UmVzdGFydF9leGN1dGUodCwgZSkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICB2YXIgYSA9IHQuYXJnc1swXTtcbiAgICAgIHRoaXMuX3Jlc3RhcnRGcm9tID0gKG51bGwgPT0gYSA/IHZvaWQgMCA6IGEuY2FsbEZyb20pIHx8IG51bGw7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbkVudEFuaUZpQmh2X3N0YXJ0KHQsIGUpIHtcbiAgICB2YXIgYSxcbiAgICAgIG4gPSB0aGlzO1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICB2YXIgciA9IHQuaW5zLFxuICAgICAgICBpID0gbnVsbCA9PT0gKGEgPSBudWxsID09IHIgPyB2b2lkIDAgOiByLmNvbnRleHQpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuZ2FtZVZpZXcsXG4gICAgICAgIGwgPSB0aGlzLl9yZXN0YXJ0RnJvbTtcbiAgICAgIHRoaXMuX3Jlc3RhcnRGcm9tID0gbnVsbDtcbiAgICAgIG51bGwgPT09IGwgJiYgKHRoaXMuX2hhc0NsZWFySW5DdXJyZW50R2FtZSA9IGZhbHNlKTtcbiAgICAgIGlmIChudWxsICE9PSB0aGlzLl9kZWxheVRpbWVySWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5VGltZXJJZCk7XG4gICAgICAgIHRoaXMuX2RlbGF5VGltZXJJZCA9IG51bGw7XG4gICAgICB9XG4gICAgICAhdGhpcy5fYWxsb3dCYWNrRHVyaW5nRGVsYXkgJiYgdGhpcy5fYmVmb3JlSW50ZXJBZERlbGF5VGltZSA+IDAgJiYgdGhpcy5kaXNhYmxlQmFja0J0bkludGVyYWN0YWJsZShpKTtcbiAgICAgIHRoaXMuX2RlbGF5VGltZXJJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBuLl9kZWxheVRpbWVySWQgPSBudWxsO1xuICAgICAgICBuLl9hbGxvd0JhY2tEdXJpbmdEZWxheSB8fCBuLmVuYWJsZUJhY2tCdG5JbnRlcmFjdGFibGUoaSk7XG4gICAgICAgIGlmIChuLl9pc09ubHlUaWxlMlJlcGxheSkge1xuICAgICAgICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsICYmIG51bGwgIT09IGwgJiYgKFwic2V0dGluZ1wiID09PSBsID8gbi5wbGF5SW50ZXJBZChcInNldHRpbmdzX3JlcGxheVwiLCBFQWRQb3NpdGlvbi5Gcm9udEluc2VydFNjcmVlbl9BY3RpdmVSZXN0YXJ0LCBmdW5jdGlvbiAoKSB7fSwgZnVuY3Rpb24gKCkge30pIDogXCJmYWlsXCIgPT09IGwgJiYgbi5wbGF5SW50ZXJBZChcImZhaWxfcmVwbGF5XCIsIEVBZFBvc2l0aW9uLkZyb250SW5zZXJ0U2NyZWVuX0ZhaWxSZXN0YXJ0LCBmdW5jdGlvbiAoKSB7fSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICAgICAgfSBlbHNlIGlmIChuLl9pc09ubHlSZXBsYXkpIHtcbiAgICAgICAgICBudWxsICE9PSBsICYmIG4uX2hhc0NsZWFySW5DdXJyZW50R2FtZSAmJiAoXCJzZXR0aW5nXCIgPT09IGwgPyBuLnBsYXlJbnRlckFkKFwic2V0dGluZ3NfcmVwbGF5XCIsIEVBZFBvc2l0aW9uLkZyb250SW5zZXJ0U2NyZWVuX0FjdGl2ZVJlc3RhcnQsIGZ1bmN0aW9uICgpIHt9LCBmdW5jdGlvbiAoKSB7fSkgOiBcImZhaWxcIiA9PT0gbCAmJiBuLnBsYXlJbnRlckFkKFwiZmFpbF9yZXBsYXlcIiwgRUFkUG9zaXRpb24uRnJvbnRJbnNlcnRTY3JlZW5fRmFpbFJlc3RhcnQsIGZ1bmN0aW9uICgpIHt9LCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChcInNldHRpbmdcIiA9PT0gbCkge1xuICAgICAgICAgICAgbi5wbGF5SW50ZXJBZChcInNldHRpbmdzX3JlcGxheVwiLCBFQWRQb3NpdGlvbi5Gcm9udEluc2VydFNjcmVlbl9BY3RpdmVSZXN0YXJ0LCBmdW5jdGlvbiAoKSB7fSwgZnVuY3Rpb24gKCkge30pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoXCJmYWlsXCIgPT09IGwpIHtcbiAgICAgICAgICAgICAgbi5wbGF5SW50ZXJBZChcImZhaWxfcmVwbGF5XCIsIEVBZFBvc2l0aW9uLkZyb250SW5zZXJ0U2NyZWVuX0ZhaWxSZXN0YXJ0LCBmdW5jdGlvbiAoKSB7fSwgZnVuY3Rpb24gKCkge30pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbi5wbGF5SW50ZXJBZChcIm5ld19nYW1lXCIsIEVBZFBvc2l0aW9uLkZyb250SW5zZXJ0U2NyZWVuX0dhbWVOZXcsIGZ1bmN0aW9uICgpIHt9LCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB0aGlzLl9iZWZvcmVJbnRlckFkRGVsYXlUaW1lKTtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uQ2xlYXJCaHZfY29sbGlzaW9uKHQsIGUpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgdGhpcy5faGFzQ2xlYXJJbkN1cnJlbnRHYW1lID0gdHJ1ZTtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uTWFpbkdhbWVCdG5CYWNrX29uQ2xpY2sodCwgZSkge1xuICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpLCBNakdhbWVUeXBlLkNsYXNzaWMsIGUoKTtcbiAgfVxuICBkaXNhYmxlQmFja0J0bkludGVyYWN0YWJsZSh0KSB7XG4gICAgaWYgKHQgJiYgY2MuaXNWYWxpZCh0LnRvcFJvb3ROb2RlKSkge1xuICAgICAgdmFyIGUgPSB0LnRvcFJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiYnRuQmFja1wiKTtcbiAgICAgIGlmIChlICYmIGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgICAgdmFyIGEgPSBlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBhICYmIChhLmludGVyYWN0YWJsZSA9IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZW5hYmxlQmFja0J0bkludGVyYWN0YWJsZSh0KSB7XG4gICAgaWYgKHQgJiYgY2MuaXNWYWxpZCh0LnRvcFJvb3ROb2RlKSkge1xuICAgICAgdmFyIGUgPSB0LnRvcFJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiYnRuQmFja1wiKTtcbiAgICAgIGlmIChlICYmIGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgICAgdmFyIGEgPSBlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBhICYmIChhLmludGVyYWN0YWJsZSA9IHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwbGF5SW50ZXJBZCh0LCBlLCBhLCBuKSB7XG4gICAgRG90R2FtZUFkU2hvd1N0YWdlLmRvdCh0cnVlLCBcImNsaWNrQWRMb2NrXCIpO1xuICAgIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlJbnRlckFkKGUsIHtcbiAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICBhICYmIGEoKTtcbiAgICAgIH0sXG4gICAgICBvbkZhaWxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBuICYmIG4oKTtcbiAgICAgIH1cbiAgICB9LCB0LCB7XG4gICAgICBhZFRpbWVUeXBlOiBcImJlZm9yZUludGVyQWRcIlxuICAgIH0pO1xuICB9XG59Il19