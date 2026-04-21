
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_materialCard/Scripts/MaterialCard2Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea5876ryYVJJbOk5+fnfExZ', 'MaterialCard2Trait');
// subpackages/l_materialCard/Scripts/MaterialCard2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var MaterialCard2Trait = /** @class */ (function (_super) {
    __extends(MaterialCard2Trait, _super);
    function MaterialCard2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaterialCard2Trait_1 = MaterialCard2Trait;
    MaterialCard2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._initData();
    };
    MaterialCard2Trait.prototype._initData = function () {
        this.localData.modes || (this.localData.modes = {});
    };
    MaterialCard2Trait.prototype.setCurMaterialCard = function (t) {
        var e = UserModel_1.default.getInstance();
        e.normalData.setCardMaterialID(t);
        e.travelData.setCardMaterialID(t);
        e.dailyChallengeData.setCardMaterialID(t);
    };
    MaterialCard2Trait.prototype._setAdFlagForAllModes = function () {
        this.localData.modes || (this.localData.modes = {});
        var t = this.localData.modes;
        MaterialCard2Trait_1.ALL_MODES.forEach(function (e) {
            t[e] || (t[e] = {
                hadInterAdLastRound: false,
                hadInterAdThisRound: false
            });
            var r = t[e];
            r && (r.hadInterAdLastRound = true);
        });
        this.localData.modes = this.localData.modes;
    };
    MaterialCard2Trait.prototype._clearAdFlagForAllModes = function () {
        if (this.localData.modes) {
            var t = this.localData.modes;
            MaterialCard2Trait_1.ALL_MODES.forEach(function (e) {
                var r = t[e];
                r && (r.hadInterAdLastRound = false);
            });
            this.localData.modes = this.localData.modes;
        }
    };
    MaterialCard2Trait.prototype._getModeData = function (t) {
        var e;
        this.localData.modes || (this.localData.modes = {});
        if (!this.localData.modes[t]) {
            this.localData.modes[t] = {
                hadInterAdLastRound: false,
                hadInterAdThisRound: false
            };
            this.localData.modes = this.localData.modes;
        }
        return null !== (e = this.localData.modes[t]) && void 0 !== e ? e : {
            hadInterAdLastRound: false,
            hadInterAdThisRound: false
        };
    };
    MaterialCard2Trait.prototype.onAdMgr_interAdClose = function (t, e) {
        try {
            var a = this.getCurrentGameType();
            this._getModeData(a).hadInterAdThisRound = true;
            this.localData.modes = this.localData.modes;
            this._setAdFlagForAllModes();
        }
        catch (t) {
            console.error("[" + MaterialCard2Trait_1.traitKey + "] 插屏广告关闭处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    MaterialCard2Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            var a = this.getCurrentGameType();
            if (!this.isNormalMode() && !this.isTravelMode() && !this.isDailyMode()) {
                e();
                return;
            }
            this._getModeData(a).hadInterAdLastRound && this.switchToNextMaterialCard();
        }
        catch (t) {
            console.error("[" + MaterialCard2Trait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    MaterialCard2Trait.prototype.onWinVw_showWinVw = function (t, e) {
        this._handleWinEvent("Normal");
        e();
    };
    MaterialCard2Trait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        this._handleWinEvent("Travel");
        e();
    };
    MaterialCard2Trait.prototype.onDCWinVw_showWinVw = function (t, e) {
        this._handleWinEvent("DailyChallenge");
        e();
    };
    MaterialCard2Trait.prototype._handleWinEvent = function () {
        var t, e;
        try {
            var a = this.getCurrentGameType(), i = null === (t = this.localData.modes) || void 0 === t ? void 0 : t[a];
            (null == i ? void 0 : i.hadInterAdThisRound) || this._clearAdFlagForAllModes();
            var o = null === (e = this.localData.modes) || void 0 === e ? void 0 : e[a];
            if (o) {
                o.hadInterAdThisRound = false;
                this.localData.modes = this.localData.modes;
            }
        }
        catch (t) {
            console.error("[" + MaterialCard2Trait_1.traitKey + "] 胜利处理失败: " + (null == t ? void 0 : t.message));
        }
    };
    var MaterialCard2Trait_1;
    MaterialCard2Trait.traitKey = "MaterialCard2";
    MaterialCard2Trait.ALL_MODES = [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge];
    MaterialCard2Trait = MaterialCard2Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard2Trait")
    ], MaterialCard2Trait);
    return MaterialCard2Trait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCard2Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGVyaWFsQ2FyZC9TY3JpcHRzL01hdGVyaWFsQ2FyZDJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBQzVELHdGQUFvRjtBQUNwRixzRUFBaUU7QUFHakU7SUFBZ0Qsc0NBQXFCO0lBQXJFOztJQXlHQSxDQUFDOzJCQXpHb0Isa0JBQWtCO0lBR3JDLG1DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0Qsc0NBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNELCtDQUFrQixHQUFsQixVQUFtQixDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0Qsa0RBQXFCLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUM3QixvQkFBa0IsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUM5QyxDQUFDLENB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RSxrQkFBa0I7UUFGdEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO09BQ1Ysa0JBQWtCLENBeUd0QztJQUFELHlCQUFDO0NBekdELEFBeUdDLENBekcrQywrQkFBcUIsR0F5R3BFO2tCQXpHb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hdGVyaWFsQ2FyZEJhc2VUcmFpdCBmcm9tICcuL01hdGVyaWFsQ2FyZEJhc2VUcmFpdCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk1hdGVyaWFsQ2FyZDJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0ZXJpYWxDYXJkMlRyYWl0IGV4dGVuZHMgTWF0ZXJpYWxDYXJkQmFzZVRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJNYXRlcmlhbENhcmQyXCI7XG4gIHN0YXRpYyBBTExfTU9ERVMgPSBbTWpHYW1lVHlwZS5Ob3JtYWwsIE1qR2FtZVR5cGUuVHJhdmVsLCBNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlXTtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2luaXREYXRhKCk7XG4gIH1cbiAgX2luaXREYXRhKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLm1vZGVzIHx8ICh0aGlzLmxvY2FsRGF0YS5tb2RlcyA9IHt9KTtcbiAgfVxuICBzZXRDdXJNYXRlcmlhbENhcmQodCkge1xuICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgZS5ub3JtYWxEYXRhLnNldENhcmRNYXRlcmlhbElEKHQpO1xuICAgIGUudHJhdmVsRGF0YS5zZXRDYXJkTWF0ZXJpYWxJRCh0KTtcbiAgICBlLmRhaWx5Q2hhbGxlbmdlRGF0YS5zZXRDYXJkTWF0ZXJpYWxJRCh0KTtcbiAgfVxuICBfc2V0QWRGbGFnRm9yQWxsTW9kZXMoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEubW9kZXMgfHwgKHRoaXMubG9jYWxEYXRhLm1vZGVzID0ge30pO1xuICAgIHZhciB0ID0gdGhpcy5sb2NhbERhdGEubW9kZXM7XG4gICAgTWF0ZXJpYWxDYXJkMlRyYWl0LkFMTF9NT0RFUy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB0W2VdIHx8ICh0W2VdID0ge1xuICAgICAgICBoYWRJbnRlckFkTGFzdFJvdW5kOiBmYWxzZSxcbiAgICAgICAgaGFkSW50ZXJBZFRoaXNSb3VuZDogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgdmFyIHIgPSB0W2VdO1xuICAgICAgciAmJiAoci5oYWRJbnRlckFkTGFzdFJvdW5kID0gdHJ1ZSk7XG4gICAgfSk7XG4gICAgdGhpcy5sb2NhbERhdGEubW9kZXMgPSB0aGlzLmxvY2FsRGF0YS5tb2RlcztcbiAgfVxuICBfY2xlYXJBZEZsYWdGb3JBbGxNb2RlcygpIHtcbiAgICBpZiAodGhpcy5sb2NhbERhdGEubW9kZXMpIHtcbiAgICAgIHZhciB0ID0gdGhpcy5sb2NhbERhdGEubW9kZXM7XG4gICAgICBNYXRlcmlhbENhcmQyVHJhaXQuQUxMX01PREVTLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHIgPSB0W2VdO1xuICAgICAgICByICYmIChyLmhhZEludGVyQWRMYXN0Um91bmQgPSBmYWxzZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLm1vZGVzID0gdGhpcy5sb2NhbERhdGEubW9kZXM7XG4gICAgfVxuICB9XG4gIF9nZXRNb2RlRGF0YSh0KSB7XG4gICAgdmFyIGU7XG4gICAgdGhpcy5sb2NhbERhdGEubW9kZXMgfHwgKHRoaXMubG9jYWxEYXRhLm1vZGVzID0ge30pO1xuICAgIGlmICghdGhpcy5sb2NhbERhdGEubW9kZXNbdF0pIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLm1vZGVzW3RdID0ge1xuICAgICAgICBoYWRJbnRlckFkTGFzdFJvdW5kOiBmYWxzZSxcbiAgICAgICAgaGFkSW50ZXJBZFRoaXNSb3VuZDogZmFsc2VcbiAgICAgIH07XG4gICAgICB0aGlzLmxvY2FsRGF0YS5tb2RlcyA9IHRoaXMubG9jYWxEYXRhLm1vZGVzO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbCAhPT0gKGUgPSB0aGlzLmxvY2FsRGF0YS5tb2Rlc1t0XSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IHtcbiAgICAgIGhhZEludGVyQWRMYXN0Um91bmQ6IGZhbHNlLFxuICAgICAgaGFkSW50ZXJBZFRoaXNSb3VuZDogZmFsc2VcbiAgICB9O1xuICB9XG4gIG9uQWRNZ3JfaW50ZXJBZENsb3NlKHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGEgPSB0aGlzLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgICAgdGhpcy5fZ2V0TW9kZURhdGEoYSkuaGFkSW50ZXJBZFRoaXNSb3VuZCA9IHRydWU7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5tb2RlcyA9IHRoaXMubG9jYWxEYXRhLm1vZGVzO1xuICAgICAgdGhpcy5fc2V0QWRGbGFnRm9yQWxsTW9kZXMoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgTWF0ZXJpYWxDYXJkMlRyYWl0LnRyYWl0S2V5ICsgXCJdIOaPkuWxj+W5v+WRiuWFs+mXreWkhOeQhuWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBvbkdzTGlzdGVuZXJfb25OZXdHYW1lKHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGEgPSB0aGlzLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgICAgaWYgKCF0aGlzLmlzTm9ybWFsTW9kZSgpICYmICF0aGlzLmlzVHJhdmVsTW9kZSgpICYmICF0aGlzLmlzRGFpbHlNb2RlKCkpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9nZXRNb2RlRGF0YShhKS5oYWRJbnRlckFkTGFzdFJvdW5kICYmIHRoaXMuc3dpdGNoVG9OZXh0TWF0ZXJpYWxDYXJkKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIE1hdGVyaWFsQ2FyZDJUcmFpdC50cmFpdEtleSArIFwiXSDlhbPljaHliIfmjaLlpITnkIblpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25XaW5Wd19zaG93V2luVncodCwgZSkge1xuICAgIHRoaXMuX2hhbmRsZVdpbkV2ZW50KFwiTm9ybWFsXCIpO1xuICAgIGUoKTtcbiAgfVxuICBvblRMV2luVndfc2hvd1RMV2luVncodCwgZSkge1xuICAgIHRoaXMuX2hhbmRsZVdpbkV2ZW50KFwiVHJhdmVsXCIpO1xuICAgIGUoKTtcbiAgfVxuICBvbkRDV2luVndfc2hvd1dpblZ3KHQsIGUpIHtcbiAgICB0aGlzLl9oYW5kbGVXaW5FdmVudChcIkRhaWx5Q2hhbGxlbmdlXCIpO1xuICAgIGUoKTtcbiAgfVxuICBfaGFuZGxlV2luRXZlbnQoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBhID0gdGhpcy5nZXRDdXJyZW50R2FtZVR5cGUoKSxcbiAgICAgICAgaSA9IG51bGwgPT09ICh0ID0gdGhpcy5sb2NhbERhdGEubW9kZXMpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHRbYV07XG4gICAgICAobnVsbCA9PSBpID8gdm9pZCAwIDogaS5oYWRJbnRlckFkVGhpc1JvdW5kKSB8fCB0aGlzLl9jbGVhckFkRmxhZ0ZvckFsbE1vZGVzKCk7XG4gICAgICB2YXIgbyA9IG51bGwgPT09IChlID0gdGhpcy5sb2NhbERhdGEubW9kZXMpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGVbYV07XG4gICAgICBpZiAobykge1xuICAgICAgICBvLmhhZEludGVyQWRUaGlzUm91bmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubW9kZXMgPSB0aGlzLmxvY2FsRGF0YS5tb2RlcztcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgTWF0ZXJpYWxDYXJkMlRyYWl0LnRyYWl0S2V5ICsgXCJdIOiDnOWIqeWkhOeQhuWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgfVxuICB9XG59Il19