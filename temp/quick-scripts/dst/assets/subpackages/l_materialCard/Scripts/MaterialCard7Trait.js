
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_materialCard/Scripts/MaterialCard7Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae305wZ7W5G2pa5jnhWOpYM', 'MaterialCard7Trait');
// subpackages/l_materialCard/Scripts/MaterialCard7Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var MaterialCard7Trait = /** @class */ (function (_super) {
    __extends(MaterialCard7Trait, _super);
    function MaterialCard7Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 6;
        _this._interval = 5;
        return _this;
    }
    MaterialCard7Trait_1 = MaterialCard7Trait;
    MaterialCard7Trait.prototype.onLoad = function () {
        var e, r, a, i;
        _super.prototype.onLoad.call(this);
        this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 6;
        this._interval = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.interval) && void 0 !== i ? i : 5;
        this._initData();
    };
    MaterialCard7Trait.prototype._initData = function () {
        this.localData.modes || (this.localData.modes = {});
    };
    MaterialCard7Trait.prototype.setCurMaterialCard = function (t) {
        var e = UserModel_1.default.getInstance();
        e.normalData.setCardMaterialID(t);
        e.travelData.setCardMaterialID(t);
        e.dailyChallengeData.setCardMaterialID(t);
    };
    MaterialCard7Trait.prototype._getModeData = function (t) {
        var e;
        this.localData.modes || (this.localData.modes = {});
        if (!this.localData.modes[t]) {
            this.localData.modes[t] = {
                shouldSwitchNextRound: false
            };
            this.localData.modes = this.localData.modes;
        }
        return null !== (e = this.localData.modes[t]) && void 0 !== e ? e : {
            shouldSwitchNextRound: false
        };
    };
    MaterialCard7Trait.prototype._shouldEnableForLevel = function (t) {
        return !(t < this._startLevel) && (t - this._startLevel) % this._interval == 0;
    };
    MaterialCard7Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            var a = this.getCurrentGameType();
            if (this.isNormalMode()) {
                var i = this.getCurrentLevel();
                this._shouldEnableForLevel(i) && this.switchToNextMaterialCard();
            }
            else if (this.isDailyMode()) {
                var o = this._getModeData(a);
                if (o.shouldSwitchNextRound) {
                    this.switchToNextMaterialCard();
                    o.shouldSwitchNextRound = false;
                    this.localData.modes = this.localData.modes;
                }
            }
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard7Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCard7Trait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        try {
            var a = t.ins, i = null == a ? void 0 : a._curReward, o = null == a ? void 0 : a._curLv, l = null == a ? void 0 : a._canGain;
            i && o && l && i.lv === o - 1 && this.switchToNextMaterialCard();
        }
        catch (t) {
            console.error("[" + MaterialCard7Trait_1.traitKey + "] 旅行胜利处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    MaterialCard7Trait.prototype.onDCWinVw_showWinVw = function (t, e) {
        try {
            var a = GameTypeEnums_1.MjGameType.DailyChallenge;
            this._getModeData(a).shouldSwitchNextRound = true;
            this.localData.modes = this.localData.modes;
        }
        catch (t) {
            console.error("[" + MaterialCard7Trait_1.traitKey + "] 每日挑战胜利处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    var MaterialCard7Trait_1;
    MaterialCard7Trait.traitKey = "MaterialCard7";
    MaterialCard7Trait = MaterialCard7Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard7Trait")
    ], MaterialCard7Trait);
    return MaterialCard7Trait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCard7Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGVyaWFsQ2FyZC9TY3JpcHRzL01hdGVyaWFsQ2FyZDdUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBQzVELHNFQUFpRTtBQUNqRSx3RkFBb0Y7QUFHcEY7SUFBZ0Qsc0NBQXFCO0lBQXJFO1FBQUEscUVBOEVDO1FBN0VDLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGVBQVMsR0FBRyxDQUFDLENBQUM7O0lBNEVoQixDQUFDOzJCQTlFb0Isa0JBQWtCO0lBSXJDLG1DQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFD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QUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztTQUM3QztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsb0JBQWtCLENBQUMsUUFBUSxHQUFHLGdCQUFnQixHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3hHO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDOztJQTFFTSwyQkFBUSxHQUFHLGVBQWUsQ0FBQztJQUhmLGtCQUFrQjtRQUZ0QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0E4RXRDO0lBQUQseUJBQUM7Q0E5RUQsQUE4RUMsQ0E5RStDLCtCQUFxQixHQThFcEU7a0JBOUVvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWF0ZXJpYWxDYXJkQmFzZVRyYWl0IGZyb20gJy4vTWF0ZXJpYWxDYXJkQmFzZVRyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTWF0ZXJpYWxDYXJkN1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRlcmlhbENhcmQ3VHJhaXQgZXh0ZW5kcyBNYXRlcmlhbENhcmRCYXNlVHJhaXQge1xuICBfc3RhcnRMZXZlbCA9IDY7XG4gIF9pbnRlcnZhbCA9IDU7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTWF0ZXJpYWxDYXJkN1wiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIHIsIGEsIGk7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fc3RhcnRMZXZlbCA9IG51bGwgIT09IChyID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuc3RhcnRMZXZlbCkgJiYgdm9pZCAwICE9PSByID8gciA6IDY7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsICE9PSAoaSA9IG51bGwgPT09IChhID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmludGVydmFsKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogNTtcbiAgICB0aGlzLl9pbml0RGF0YSgpO1xuICB9XG4gIF9pbml0RGF0YSgpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5tb2RlcyB8fCAodGhpcy5sb2NhbERhdGEubW9kZXMgPSB7fSk7XG4gIH1cbiAgc2V0Q3VyTWF0ZXJpYWxDYXJkKHQpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgIGUubm9ybWFsRGF0YS5zZXRDYXJkTWF0ZXJpYWxJRCh0KTtcbiAgICBlLnRyYXZlbERhdGEuc2V0Q2FyZE1hdGVyaWFsSUQodCk7XG4gICAgZS5kYWlseUNoYWxsZW5nZURhdGEuc2V0Q2FyZE1hdGVyaWFsSUQodCk7XG4gIH1cbiAgX2dldE1vZGVEYXRhKHQpIHtcbiAgICB2YXIgZTtcbiAgICB0aGlzLmxvY2FsRGF0YS5tb2RlcyB8fCAodGhpcy5sb2NhbERhdGEubW9kZXMgPSB7fSk7XG4gICAgaWYgKCF0aGlzLmxvY2FsRGF0YS5tb2Rlc1t0XSkge1xuICAgICAgdGhpcy5sb2NhbERhdGEubW9kZXNbdF0gPSB7XG4gICAgICAgIHNob3VsZFN3aXRjaE5leHRSb3VuZDogZmFsc2VcbiAgICAgIH07XG4gICAgICB0aGlzLmxvY2FsRGF0YS5tb2RlcyA9IHRoaXMubG9jYWxEYXRhLm1vZGVzO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbCAhPT0gKGUgPSB0aGlzLmxvY2FsRGF0YS5tb2Rlc1t0XSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IHtcbiAgICAgIHNob3VsZFN3aXRjaE5leHRSb3VuZDogZmFsc2VcbiAgICB9O1xuICB9XG4gIF9zaG91bGRFbmFibGVGb3JMZXZlbCh0KSB7XG4gICAgcmV0dXJuICEodCA8IHRoaXMuX3N0YXJ0TGV2ZWwpICYmICh0IC0gdGhpcy5fc3RhcnRMZXZlbCkgJSB0aGlzLl9pbnRlcnZhbCA9PSAwO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vbk5ld0dhbWUodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgYSA9IHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgICBpZiAodGhpcy5pc05vcm1hbE1vZGUoKSkge1xuICAgICAgICB2YXIgaSA9IHRoaXMuZ2V0Q3VycmVudExldmVsKCk7XG4gICAgICAgIHRoaXMuX3Nob3VsZEVuYWJsZUZvckxldmVsKGkpICYmIHRoaXMuc3dpdGNoVG9OZXh0TWF0ZXJpYWxDYXJkKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNEYWlseU1vZGUoKSkge1xuICAgICAgICB2YXIgbyA9IHRoaXMuX2dldE1vZGVEYXRhKGEpO1xuICAgICAgICBpZiAoby5zaG91bGRTd2l0Y2hOZXh0Um91bmQpIHtcbiAgICAgICAgICB0aGlzLnN3aXRjaFRvTmV4dE1hdGVyaWFsQ2FyZCgpO1xuICAgICAgICAgIG8uc2hvdWxkU3dpdGNoTmV4dFJvdW5kID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5sb2NhbERhdGEubW9kZXMgPSB0aGlzLmxvY2FsRGF0YS5tb2RlcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZSgpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBNYXRlcmlhbENhcmQ3VHJhaXQudHJhaXRLZXkgKyBcIl0g5aSE55CG5paw5ri45oiP5LqL5Lu25aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25UTFdpblZ3X3Nob3dUTFdpblZ3KHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGEgPSB0LmlucyxcbiAgICAgICAgaSA9IG51bGwgPT0gYSA/IHZvaWQgMCA6IGEuX2N1clJld2FyZCxcbiAgICAgICAgbyA9IG51bGwgPT0gYSA/IHZvaWQgMCA6IGEuX2N1ckx2LFxuICAgICAgICBsID0gbnVsbCA9PSBhID8gdm9pZCAwIDogYS5fY2FuR2FpbjtcbiAgICAgIGkgJiYgbyAmJiBsICYmIGkubHYgPT09IG8gLSAxICYmIHRoaXMuc3dpdGNoVG9OZXh0TWF0ZXJpYWxDYXJkKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIE1hdGVyaWFsQ2FyZDdUcmFpdC50cmFpdEtleSArIFwiXSDml4XooYzog5zliKnlpITnkIblpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25EQ1dpblZ3X3Nob3dXaW5Wdyh0LCBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBhID0gTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZTtcbiAgICAgIHRoaXMuX2dldE1vZGVEYXRhKGEpLnNob3VsZFN3aXRjaE5leHRSb3VuZCA9IHRydWU7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5tb2RlcyA9IHRoaXMubG9jYWxEYXRhLm1vZGVzO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBNYXRlcmlhbENhcmQ3VHJhaXQudHJhaXRLZXkgKyBcIl0g5q+P5pel5oyR5oiY6IOc5Yip5aSE55CG5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG59Il19