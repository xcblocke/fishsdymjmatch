
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_flowFailPopup/Scripts/FlowFailPopupTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '11557GyfFBOhbKwtrs7ieae', 'FlowFailPopupTrait');
// subpackages/l_flowFailPopup/Scripts/FlowFailPopupTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var FlowFailPopupTrait = /** @class */ (function (_super) {
    __extends(FlowFailPopupTrait, _super);
    function FlowFailPopupTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlowFailPopupTrait.prototype.onLoad = function () {
        var a, e, i;
        _super.prototype.onLoad.call(this);
        this._introLevels = null !== (a = this._traitData.introLevels) && void 0 !== a ? a : 10;
        this._defaultStage = null !== (e = this._traitData.defaultStage) && void 0 !== e ? e : 2;
        this._initialStage = null !== (i = this._traitData.initialStage) && void 0 !== i ? i : this._defaultStage;
        if (void 0 === this.localData.ffpShown || null === this.localData.ffpShown) {
            this.localData.ffpShown = false;
            this.localData.ffpShown = this.localData.ffpShown;
        }
        if (!this.localData.ffpStage) {
            this.localData.ffpStage = this._defaultStage;
            this.localData.ffpStage = this.localData.ffpStage;
        }
    };
    FlowFailPopupTrait.prototype.onTile2FailVw_show = function (t, a) {
        if (!this.localData.ffpShown && UserModel_1.default.getInstance().isGuideFinished()) {
            this.localData.ffpShown = true;
            this.localData.ffpShown = this.localData.ffpShown;
        }
        a();
    };
    FlowFailPopupTrait.prototype._shouldBlockDynamic = function (t) {
        return !(!UserModel_1.default.getInstance().isGuideFinished() || t > 0 && t <= this._introLevels + 1 || this.localData.ffpShown);
    };
    FlowFailPopupTrait.prototype.onT2DynStr_isDyn = function (t, a) {
        var e, i, o = t.args[0], l = (null === (i = null === (e = null == o ? void 0 : o.gameData) || void 0 === e ? void 0 : e.getLevelId) || void 0 === i ? void 0 : i.call(e)) || 0;
        if (this._shouldBlockDynamic(l)) {
            a({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: false
            });
        }
        else {
            a();
        }
    };
    FlowFailPopupTrait.prototype.onT2DynStr_extract = function (t, a) {
        var e, i, o = t.args[0], l = (null === (i = null === (e = null == o ? void 0 : o.gameData) || void 0 === e ? void 0 : e.getLevelId) || void 0 === i ? void 0 : i.call(e)) || 0;
        if (this._shouldBlockDynamic(l)) {
            a({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: Promise.resolve(null)
            });
        }
        else {
            a();
        }
    };
    FlowFailPopupTrait.prototype.onFlwLv_getAbilStg = function (t, a) {
        var e = t.args[0] || 0;
        if (e > 0 && e <= this._introLevels) {
            this.localData.ffpShown = false;
            this.localData.ffpShown = this.localData.ffpShown;
            a();
        }
        else if (e !== this._introLevels + 1) {
            this._evaluateFailPopup();
            var i = this.localData.ffpStage || this._defaultStage;
            a({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: i - 1
            });
        }
        else {
            this.localData.ffpStage = this._initialStage;
            this.localData.ffpStage = this.localData.ffpStage;
            this.localData.ffpShown = false;
            this.localData.ffpShown = this.localData.ffpShown;
            a({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this._initialStage - 1
            });
        }
    };
    FlowFailPopupTrait.prototype._evaluateFailPopup = function () {
        this.localData.ffpShown;
        this.localData.ffpShown = false;
        this.localData.ffpShown = this.localData.ffpShown;
        this.localData.ffpStage || this._defaultStage;
        var t = this._defaultStage;
        this.localData.ffpStage = t;
        this.localData.ffpStage = this.localData.ffpStage;
    };
    FlowFailPopupTrait.traitKey = "FlowFailPopup";
    FlowFailPopupTrait = __decorate([
        mj.trait,
        mj.class("FlowFailPopupTrait")
    ], FlowFailPopupTrait);
    return FlowFailPopupTrait;
}(Trait_1.default));
exports.default = FlowFailPopupTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Zsb3dGYWlsUG9wdXAvU2NyaXB0cy9GbG93RmFpbFBvcHVwVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsc0VBQWlFO0FBR2pFO0lBQWdELHNDQUFLO0lBQXJEOztJQTRGQSxDQUFDO0lBMUZDLG1DQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDeEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDMUcsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDMUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdB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IiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkZsb3dGYWlsUG9wdXBUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvd0ZhaWxQb3B1cFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkZsb3dGYWlsUG9wdXBcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBhLCBlLCBpO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2ludHJvTGV2ZWxzID0gbnVsbCAhPT0gKGEgPSB0aGlzLl90cmFpdERhdGEuaW50cm9MZXZlbHMpICYmIHZvaWQgMCAhPT0gYSA/IGEgOiAxMDtcbiAgICB0aGlzLl9kZWZhdWx0U3RhZ2UgPSBudWxsICE9PSAoZSA9IHRoaXMuX3RyYWl0RGF0YS5kZWZhdWx0U3RhZ2UpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiAyO1xuICAgIHRoaXMuX2luaXRpYWxTdGFnZSA9IG51bGwgIT09IChpID0gdGhpcy5fdHJhaXREYXRhLmluaXRpYWxTdGFnZSkgJiYgdm9pZCAwICE9PSBpID8gaSA6IHRoaXMuX2RlZmF1bHRTdGFnZTtcbiAgICBpZiAodm9pZCAwID09PSB0aGlzLmxvY2FsRGF0YS5mZnBTaG93biB8fCBudWxsID09PSB0aGlzLmxvY2FsRGF0YS5mZnBTaG93bikge1xuICAgICAgdGhpcy5sb2NhbERhdGEuZmZwU2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmZmcFNob3duID0gdGhpcy5sb2NhbERhdGEuZmZwU2hvd247XG4gICAgfVxuICAgIGlmICghdGhpcy5sb2NhbERhdGEuZmZwU3RhZ2UpIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmZmcFN0YWdlID0gdGhpcy5fZGVmYXVsdFN0YWdlO1xuICAgICAgdGhpcy5sb2NhbERhdGEuZmZwU3RhZ2UgPSB0aGlzLmxvY2FsRGF0YS5mZnBTdGFnZTtcbiAgICB9XG4gIH1cbiAgb25UaWxlMkZhaWxWd19zaG93KHQsIGEpIHtcbiAgICBpZiAoIXRoaXMubG9jYWxEYXRhLmZmcFNob3duICYmIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzR3VpZGVGaW5pc2hlZCgpKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5mZnBTaG93biA9IHRydWU7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5mZnBTaG93biA9IHRoaXMubG9jYWxEYXRhLmZmcFNob3duO1xuICAgIH1cbiAgICBhKCk7XG4gIH1cbiAgX3Nob3VsZEJsb2NrRHluYW1pYyh0KSB7XG4gICAgcmV0dXJuICEoIVVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzR3VpZGVGaW5pc2hlZCgpIHx8IHQgPiAwICYmIHQgPD0gdGhpcy5faW50cm9MZXZlbHMgKyAxIHx8IHRoaXMubG9jYWxEYXRhLmZmcFNob3duKTtcbiAgfVxuICBvblQyRHluU3RyX2lzRHluKHQsIGEpIHtcbiAgICB2YXIgZSxcbiAgICAgIGksXG4gICAgICBvID0gdC5hcmdzWzBdLFxuICAgICAgbCA9IChudWxsID09PSAoaSA9IG51bGwgPT09IChlID0gbnVsbCA9PSBvID8gdm9pZCAwIDogby5nYW1lRGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nZXRMZXZlbElkKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmNhbGwoZSkpIHx8IDA7XG4gICAgaWYgKHRoaXMuX3Nob3VsZEJsb2NrRHluYW1pYyhsKSkge1xuICAgICAgYSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGEoKTtcbiAgICB9XG4gIH1cbiAgb25UMkR5blN0cl9leHRyYWN0KHQsIGEpIHtcbiAgICB2YXIgZSxcbiAgICAgIGksXG4gICAgICBvID0gdC5hcmdzWzBdLFxuICAgICAgbCA9IChudWxsID09PSAoaSA9IG51bGwgPT09IChlID0gbnVsbCA9PSBvID8gdm9pZCAwIDogby5nYW1lRGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nZXRMZXZlbElkKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmNhbGwoZSkpIHx8IDA7XG4gICAgaWYgKHRoaXMuX3Nob3VsZEJsb2NrRHluYW1pYyhsKSkge1xuICAgICAgYSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiBQcm9taXNlLnJlc29sdmUobnVsbClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhKCk7XG4gICAgfVxuICB9XG4gIG9uRmx3THZfZ2V0QWJpbFN0Zyh0LCBhKSB7XG4gICAgdmFyIGUgPSB0LmFyZ3NbMF0gfHwgMDtcbiAgICBpZiAoZSA+IDAgJiYgZSA8PSB0aGlzLl9pbnRyb0xldmVscykge1xuICAgICAgdGhpcy5sb2NhbERhdGEuZmZwU2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmZmcFNob3duID0gdGhpcy5sb2NhbERhdGEuZmZwU2hvd247XG4gICAgICBhKCk7XG4gICAgfSBlbHNlIGlmIChlICE9PSB0aGlzLl9pbnRyb0xldmVscyArIDEpIHtcbiAgICAgIHRoaXMuX2V2YWx1YXRlRmFpbFBvcHVwKCk7XG4gICAgICB2YXIgaSA9IHRoaXMubG9jYWxEYXRhLmZmcFN0YWdlIHx8IHRoaXMuX2RlZmF1bHRTdGFnZTtcbiAgICAgIGEoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogaSAtIDFcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5mZnBTdGFnZSA9IHRoaXMuX2luaXRpYWxTdGFnZTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmZmcFN0YWdlID0gdGhpcy5sb2NhbERhdGEuZmZwU3RhZ2U7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5mZnBTaG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5sb2NhbERhdGEuZmZwU2hvd24gPSB0aGlzLmxvY2FsRGF0YS5mZnBTaG93bjtcbiAgICAgIGEoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogdGhpcy5faW5pdGlhbFN0YWdlIC0gMVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIF9ldmFsdWF0ZUZhaWxQb3B1cCgpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5mZnBTaG93bjtcbiAgICB0aGlzLmxvY2FsRGF0YS5mZnBTaG93biA9IGZhbHNlO1xuICAgIHRoaXMubG9jYWxEYXRhLmZmcFNob3duID0gdGhpcy5sb2NhbERhdGEuZmZwU2hvd247XG4gICAgdGhpcy5sb2NhbERhdGEuZmZwU3RhZ2UgfHwgdGhpcy5fZGVmYXVsdFN0YWdlO1xuICAgIHZhciB0ID0gdGhpcy5fZGVmYXVsdFN0YWdlO1xuICAgIHRoaXMubG9jYWxEYXRhLmZmcFN0YWdlID0gdDtcbiAgICB0aGlzLmxvY2FsRGF0YS5mZnBTdGFnZSA9IHRoaXMubG9jYWxEYXRhLmZmcFN0YWdlO1xuICB9XG59Il19