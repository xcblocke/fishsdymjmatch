
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_changeFullCombo/Scripts/ChangeFullComboTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '103194uBLFGgIwgaPOoDuRp', 'ChangeFullComboTrait');
// subpackages/r_changeFullCombo/Scripts/ChangeFullComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ChangeFullComboTrait = /** @class */ (function (_super) {
    __extends(ChangeFullComboTrait, _super);
    function ChangeFullComboTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        _this._isLoading = false;
        _this._isInitialized = false;
        _this._config = {};
        return _this;
    }
    ChangeFullComboTrait.prototype.onLoad = function () {
        var e, i, o, n, r, a, l, u, f, s, c, d, p;
        _super.prototype.onLoad.call(this);
        this._config = {
            comboBundleName: (null === (i = null === (e = this._traitData) || void 0 === e ? void 0 : e.configs) || void 0 === i ? void 0 : i.comboBundleName) || "r_fullCombo_1",
            comboSpinePath: (null === (n = null === (o = this._traitData) || void 0 === o ? void 0 : o.configs) || void 0 === n ? void 0 : n.comboSpinePath) || "spine/gameplay_perfectCombo",
            fadeIn: null !== (l = null === (a = null === (r = this._traitData) || void 0 === r ? void 0 : r.configs) || void 0 === a ? void 0 : a.fadeIn) && void 0 !== l ? l : 0.5,
            fadeOut: null !== (s = null === (f = null === (u = this._traitData) || void 0 === u ? void 0 : u.configs) || void 0 === f ? void 0 : f.fadeOut) && void 0 !== s ? s : 0.4,
            fadeOutDelay: null !== (p = null === (d = null === (c = this._traitData) || void 0 === c ? void 0 : c.configs) || void 0 === d ? void 0 : d.fadeOutDelay) && void 0 !== p ? p : 2
        };
        this._isInitialized = true;
    };
    ChangeFullComboTrait.prototype.getAniCfg = function () {
        return {
            bundleName: this._config.comboBundleName || "r_fullCombo_1",
            spinePath: this._config.comboSpinePath || "spine/gameplay_perfectCombo"
        };
    };
    ChangeFullComboTrait.prototype.getFadeIn = function () {
        var t;
        return null !== (t = this._config.fadeIn) && void 0 !== t ? t : 0.5;
    };
    ChangeFullComboTrait.prototype.getFadeOut = function () {
        var t;
        return null !== (t = this._config.fadeOut) && void 0 !== t ? t : 0.4;
    };
    ChangeFullComboTrait.prototype.getFadeOutDelay = function () {
        var t;
        return null !== (t = this._config.fadeOutDelay) && void 0 !== t ? t : 2;
    };
    ChangeFullComboTrait.prototype.loadSpine = function (t) {
        var e, i = this, o = this.getAniCfg() || {
            bundleName: this._config.comboBundleName,
            spinePath: this._config.comboSpinePath
        }, n = o.bundleName, r = o.spinePath;
        this._currSkData = null;
        null === (e = null == t ? void 0 : t.gameCtr) || void 0 === e || e.loadRes(r, sp.SkeletonData, n).then(function (t) {
            var e = Array.isArray(t) ? t[0] : t;
            i._currSkData = e || null;
        }).catch(function () {
            i._currSkData = null;
        });
    };
    ChangeFullComboTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        if (this._isInitialized) {
            this.loadSpine(t.ins.context);
            e();
        }
        else
            e();
    };
    ChangeFullComboTrait.prototype.onFullComboItem_initSpine = function (t, e) {
        if (this._isInitialized) {
            var i = t.ins, o = null == i ? void 0 : i._spineAnim, n = this._currSkData;
            n && o && o.skeletonData !== n && (o.skeletonData = n);
            e();
        }
        else
            e();
    };
    ChangeFullComboTrait.prototype.onFullComboItem_fadeInTime = function (t, e) {
        var i;
        if (this._isInitialized) {
            var o = null !== (i = this.getFadeIn()) && void 0 !== i ? i : this._config.fadeIn;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: o
            });
        }
        else
            e();
    };
    ChangeFullComboTrait.prototype.onFullComboItem_animDlyTime = function (t, e) {
        var i;
        if (this._isInitialized) {
            var o = null !== (i = this.getFadeOutDelay()) && void 0 !== i ? i : this._config.fadeOutDelay;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: o
            });
        }
        else
            e();
    };
    ChangeFullComboTrait.prototype.onFullComboItem_fadeOutTime = function (t, e) {
        var i;
        if (this._isInitialized) {
            var o = null !== (i = this.getFadeOut()) && void 0 !== i ? i : this._config.fadeOut;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: o
            });
        }
        else
            e();
    };
    ChangeFullComboTrait.traitKey = "ChangeFullCombo";
    __decorate([
        mj.traitEvent("ChgFullCombo_getAniCfg")
    ], ChangeFullComboTrait.prototype, "getAniCfg", null);
    __decorate([
        mj.traitEvent("ChgFullCombo_getFadeIn")
    ], ChangeFullComboTrait.prototype, "getFadeIn", null);
    __decorate([
        mj.traitEvent("ChgFullCombo_getFadeOut")
    ], ChangeFullComboTrait.prototype, "getFadeOut", null);
    __decorate([
        mj.traitEvent("ChgFullCombo_getDelay")
    ], ChangeFullComboTrait.prototype, "getFadeOutDelay", null);
    ChangeFullComboTrait = __decorate([
        mj.trait,
        mj.class("ChangeFullComboTrait")
    ], ChangeFullComboTrait);
    return ChangeFullComboTrait;
}(Trait_1.default));
exports.default = ChangeFullComboTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NoYW5nZUZ1bGxDb21iby9TY3JpcHRzL0NoYW5nZUZ1bGxDb21ib1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQWtELHdDQUFLO0lBQXZEO1FBQUEscUVBeUdDO1FBeEdDLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG9CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGFBQU8sR0FBRyxFQUFFLENBQUM7O0lBcUdmLENBQUM7SUFuR0MscUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLGVBQWUsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksZUFBZTtZQUNySyxjQUFjLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLDZCQUE2QjtZQUNqTCxNQUFNLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDdkssT0FBTyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ3pLLFlBQVksRUFBRSxJQUFJ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LDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFjcEM7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO3lEQU12QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzt5REFJdkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7MERBSXhDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDOytEQUl0QztJQXZDa0Isb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQXlHeEM7SUFBRCwyQkFBQztDQXpHRCxBQXlHQyxDQXpHaUQsZUFBSyxHQXlHdEQ7a0JBekdvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDaGFuZ2VGdWxsQ29tYm9UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlRnVsbENvbWJvVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jdXJyU2tEYXRhID0gbnVsbDtcbiAgX2lzTG9hZGluZyA9IGZhbHNlO1xuICBfaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuICBfY29uZmlnID0ge307XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2hhbmdlRnVsbENvbWJvXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZSwgaSwgbywgbiwgciwgYSwgbCwgdSwgZiwgcywgYywgZCwgcDtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICBjb21ib0J1bmRsZU5hbWU6IChudWxsID09PSAoaSA9IG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmNvbmZpZ3MpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuY29tYm9CdW5kbGVOYW1lKSB8fCBcInJfZnVsbENvbWJvXzFcIixcbiAgICAgIGNvbWJvU3BpbmVQYXRoOiAobnVsbCA9PT0gKG4gPSBudWxsID09PSAobyA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5jb25maWdzKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmNvbWJvU3BpbmVQYXRoKSB8fCBcInNwaW5lL2dhbWVwbGF5X3BlcmZlY3RDb21ib1wiLFxuICAgICAgZmFkZUluOiBudWxsICE9PSAobCA9IG51bGwgPT09IChhID0gbnVsbCA9PT0gKHIgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuY29uZmlncykgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5mYWRlSW4pICYmIHZvaWQgMCAhPT0gbCA/IGwgOiAwLjUsXG4gICAgICBmYWRlT3V0OiBudWxsICE9PSAocyA9IG51bGwgPT09IChmID0gbnVsbCA9PT0gKHUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdSA/IHZvaWQgMCA6IHUuY29uZmlncykgfHwgdm9pZCAwID09PSBmID8gdm9pZCAwIDogZi5mYWRlT3V0KSAmJiB2b2lkIDAgIT09IHMgPyBzIDogMC40LFxuICAgICAgZmFkZU91dERlbGF5OiBudWxsICE9PSAocCA9IG51bGwgPT09IChkID0gbnVsbCA9PT0gKGMgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gYyA/IHZvaWQgMCA6IGMuY29uZmlncykgfHwgdm9pZCAwID09PSBkID8gdm9pZCAwIDogZC5mYWRlT3V0RGVsYXkpICYmIHZvaWQgMCAhPT0gcCA/IHAgOiAyXG4gICAgfTtcbiAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNoZ0Z1bGxDb21ib19nZXRBbmlDZmdcIilcbiAgZ2V0QW5pQ2ZnKCkge1xuICAgIHJldHVybiB7XG4gICAgICBidW5kbGVOYW1lOiB0aGlzLl9jb25maWcuY29tYm9CdW5kbGVOYW1lIHx8IFwicl9mdWxsQ29tYm9fMVwiLFxuICAgICAgc3BpbmVQYXRoOiB0aGlzLl9jb25maWcuY29tYm9TcGluZVBhdGggfHwgXCJzcGluZS9nYW1lcGxheV9wZXJmZWN0Q29tYm9cIlxuICAgIH07XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDaGdGdWxsQ29tYm9fZ2V0RmFkZUluXCIpXG4gIGdldEZhZGVJbigpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSB0aGlzLl9jb25maWcuZmFkZUluKSAmJiB2b2lkIDAgIT09IHQgPyB0IDogMC41O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQ2hnRnVsbENvbWJvX2dldEZhZGVPdXRcIilcbiAgZ2V0RmFkZU91dCgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSB0aGlzLl9jb25maWcuZmFkZU91dCkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IDAuNDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNoZ0Z1bGxDb21ib19nZXREZWxheVwiKVxuICBnZXRGYWRlT3V0RGVsYXkoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gdGhpcy5fY29uZmlnLmZhZGVPdXREZWxheSkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IDI7XG4gIH1cbiAgbG9hZFNwaW5lKHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIGkgPSB0aGlzLFxuICAgICAgbyA9IHRoaXMuZ2V0QW5pQ2ZnKCkgfHwge1xuICAgICAgICBidW5kbGVOYW1lOiB0aGlzLl9jb25maWcuY29tYm9CdW5kbGVOYW1lLFxuICAgICAgICBzcGluZVBhdGg6IHRoaXMuX2NvbmZpZy5jb21ib1NwaW5lUGF0aFxuICAgICAgfSxcbiAgICAgIG4gPSBvLmJ1bmRsZU5hbWUsXG4gICAgICByID0gby5zcGluZVBhdGg7XG4gICAgdGhpcy5fY3VyclNrRGF0YSA9IG51bGw7XG4gICAgbnVsbCA9PT0gKGUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmdhbWVDdHIpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLmxvYWRSZXMociwgc3AuU2tlbGV0b25EYXRhLCBuKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgZSA9IEFycmF5LmlzQXJyYXkodCkgPyB0WzBdIDogdDtcbiAgICAgIGkuX2N1cnJTa0RhdGEgPSBlIHx8IG51bGw7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgaS5fY3VyclNrRGF0YSA9IG51bGw7XG4gICAgfSk7XG4gIH1cbiAgb25Jbml0Vmlld0Jodl9jcnRUbHModCwgZSkge1xuICAgIGlmICh0aGlzLl9pc0luaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmxvYWRTcGluZSh0Lmlucy5jb250ZXh0KTtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uRnVsbENvbWJvSXRlbV9pbml0U3BpbmUodCwgZSkge1xuICAgIGlmICh0aGlzLl9pc0luaXRpYWxpemVkKSB7XG4gICAgICB2YXIgaSA9IHQuaW5zLFxuICAgICAgICBvID0gbnVsbCA9PSBpID8gdm9pZCAwIDogaS5fc3BpbmVBbmltLFxuICAgICAgICBuID0gdGhpcy5fY3VyclNrRGF0YTtcbiAgICAgIG4gJiYgbyAmJiBvLnNrZWxldG9uRGF0YSAhPT0gbiAmJiAoby5za2VsZXRvbkRhdGEgPSBuKTtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uRnVsbENvbWJvSXRlbV9mYWRlSW5UaW1lKHQsIGUpIHtcbiAgICB2YXIgaTtcbiAgICBpZiAodGhpcy5faXNJbml0aWFsaXplZCkge1xuICAgICAgdmFyIG8gPSBudWxsICE9PSAoaSA9IHRoaXMuZ2V0RmFkZUluKCkpICYmIHZvaWQgMCAhPT0gaSA/IGkgOiB0aGlzLl9jb25maWcuZmFkZUluO1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiBvXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uRnVsbENvbWJvSXRlbV9hbmltRGx5VGltZSh0LCBlKSB7XG4gICAgdmFyIGk7XG4gICAgaWYgKHRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHZhciBvID0gbnVsbCAhPT0gKGkgPSB0aGlzLmdldEZhZGVPdXREZWxheSgpKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogdGhpcy5fY29uZmlnLmZhZGVPdXREZWxheTtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogb1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbkZ1bGxDb21ib0l0ZW1fZmFkZU91dFRpbWUodCwgZSkge1xuICAgIHZhciBpO1xuICAgIGlmICh0aGlzLl9pc0luaXRpYWxpemVkKSB7XG4gICAgICB2YXIgbyA9IG51bGwgIT09IChpID0gdGhpcy5nZXRGYWRlT3V0KCkpICYmIHZvaWQgMCAhPT0gaSA/IGkgOiB0aGlzLl9jb25maWcuZmFkZU91dDtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogb1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==