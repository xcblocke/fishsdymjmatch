
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_baseClearEffectReplace/Scripts/BaseClearEffectReplaceTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3e1aEInexBs6YI4w18gSt8', 'BaseClearEffectReplaceTrait');
// subpackages/r_baseClearEffectReplace/Scripts/BaseClearEffectReplaceTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var BaseClearEffectReplaceTrait = /** @class */ (function (_super) {
    __extends(BaseClearEffectReplaceTrait, _super);
    function BaseClearEffectReplaceTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        _this._gameType = GameTypeEnums_1.MjGameType.None;
        _this._config = {};
        return _this;
    }
    BaseClearEffectReplaceTrait.prototype.onLoad = function () {
        var e, r, a;
        _super.prototype.onLoad.call(this);
        this._config = {
            resBundle: (null === (e = this.traitData) || void 0 === e ? void 0 : e.resBundle) || "r_baseClearEffectReplace",
            skeletonPath: (null === (r = this.traitData) || void 0 === r ? void 0 : r.skeletonPath) || "spine/gameplay_elimination_a",
            animName: (null === (a = this.traitData) || void 0 === a ? void 0 : a.animName) || "in"
        };
    };
    BaseClearEffectReplaceTrait.prototype.loadSpineResource = function (t) {
        var e = this, r = this._config, a = r.resBundle, n = r.skeletonPath;
        if (a && n) {
            var i = t;
            if (i && "function" == typeof i.loadRes) {
                this._currSkData = null;
                i.loadRes(n, sp.SkeletonData, a).then(function (t) {
                    var r = Array.isArray(t) ? t[0] : t;
                    e._currSkData = r || null;
                }).catch(function () {
                    e._currSkData = null;
                });
            }
        }
    };
    BaseClearEffectReplaceTrait.prototype.isGameTypeEnabled = function () {
        return true;
    };
    BaseClearEffectReplaceTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var r, a, n, i;
        try {
            this._gameType = (null === (a = null === (r = t.ins) || void 0 === r ? void 0 : r._context) || void 0 === a ? void 0 : a.gameType) || GameTypeEnums_1.MjGameType.None;
            var o = null === (i = null === (n = t.ins) || void 0 === n ? void 0 : n.context) || void 0 === i ? void 0 : i.gameCtr;
            this.loadSpineResource(o);
        }
        catch (t) { }
        e();
    };
    BaseClearEffectReplaceTrait.prototype.onClearEffBhv_changeSkd = function (t, e) {
        try {
            var r = t.args[0], a = this._currSkData;
            a && cc.isValid(a) && r && r.skeletonData !== a && this.isGameTypeEnabled(this._gameType) && (r.skeletonData = a);
        }
        catch (t) { }
        e();
    };
    BaseClearEffectReplaceTrait.prototype.onClearEffBhv_getAnimName = function (t, e) {
        try {
            if (this._currSkData && cc.isValid(this._currSkData) && this.isGameTypeEnabled(this._gameType)) {
                var r = this._config.animName || "in";
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.jump,
                    returnVal: r
                });
                return;
            }
            e();
        }
        catch (t) {
            e();
        }
    };
    BaseClearEffectReplaceTrait.traitKey = "BaseClearEffectReplace";
    BaseClearEffectReplaceTrait = __decorate([
        mj.trait,
        mj.class("BaseClearEffectReplaceTrait")
    ], BaseClearEffectReplaceTrait);
    return BaseClearEffectReplaceTrait;
}(Trait_1.default));
exports.default = BaseClearEffectReplaceTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2Jhc2VDbGVhckVmZmVjdFJlcGxhY2UvU2NyaXB0cy9CYXNlQ2xlYXJFZmZlY3RSZXBsYWNlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsd0ZBQW9GO0FBR3BGO0lBQXlELCtDQUFLO0lBQTlEO1FBQUEscUVBbUVDO1FBbEVDLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGVBQVMsR0FBRywwQkFBVSxDQUFDLElBQUksQ0FBQztRQUM1QixhQUFPLEdBQUcsRUFBRSxDQUFDOztJQWdFZixDQUFDO0lBOURDLDRDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsU0FBUyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksMEJBQTBCO1lBQy9HLFlBQVksRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLDhCQUE4QjtZQUN6SCxRQUFRLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMs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QUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbkg7UUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO1FBQ2QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsK0RBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUk7WUFDRixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDOUYsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO2dCQUN0QyxDQUFDLENBQUM7b0JBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLElBQUk7b0JBQ3hDLFNBQVMsRUFBRSxDQUFDO2lCQUNiLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7WUFDRCxDQUFDLEVBQUUsQ0FBQztTQUNMO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQTlETSxvQ0FBUSxHQUFHLHdCQUF3QixDQUFDO0lBSnhCLDJCQUEyQjtRQUYvQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUM7T0FDbkIsMkJBQTJCLENBbUUvQztJQUFELGtDQUFDO0NBbkVELEFBbUVDLENBbkV3RCxlQUFLLEdBbUU3RDtrQkFuRW9CLDJCQUEyQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQmFzZUNsZWFyRWZmZWN0UmVwbGFjZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQ2xlYXJFZmZlY3RSZXBsYWNlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jdXJyU2tEYXRhID0gbnVsbDtcbiAgX2dhbWVUeXBlID0gTWpHYW1lVHlwZS5Ob25lO1xuICBfY29uZmlnID0ge307XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQmFzZUNsZWFyRWZmZWN0UmVwbGFjZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIHIsIGE7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgcmVzQnVuZGxlOiAobnVsbCA9PT0gKGUgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5yZXNCdW5kbGUpIHx8IFwicl9iYXNlQ2xlYXJFZmZlY3RSZXBsYWNlXCIsXG4gICAgICBza2VsZXRvblBhdGg6IChudWxsID09PSAociA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLnNrZWxldG9uUGF0aCkgfHwgXCJzcGluZS9nYW1lcGxheV9lbGltaW5hdGlvbl9hXCIsXG4gICAgICBhbmltTmFtZTogKG51bGwgPT09IChhID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuYW5pbU5hbWUpIHx8IFwiaW5cIlxuICAgIH07XG4gIH1cbiAgbG9hZFNwaW5lUmVzb3VyY2UodCkge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIHIgPSB0aGlzLl9jb25maWcsXG4gICAgICBhID0gci5yZXNCdW5kbGUsXG4gICAgICBuID0gci5za2VsZXRvblBhdGg7XG4gICAgaWYgKGEgJiYgbikge1xuICAgICAgdmFyIGkgPSB0O1xuICAgICAgaWYgKGkgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBpLmxvYWRSZXMpIHtcbiAgICAgICAgdGhpcy5fY3VyclNrRGF0YSA9IG51bGw7XG4gICAgICAgIGkubG9hZFJlcyhuLCBzcC5Ta2VsZXRvbkRhdGEsIGEpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICB2YXIgciA9IEFycmF5LmlzQXJyYXkodCkgPyB0WzBdIDogdDtcbiAgICAgICAgICBlLl9jdXJyU2tEYXRhID0gciB8fCBudWxsO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZS5fY3VyclNrRGF0YSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpc0dhbWVUeXBlRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBvbkluaXRWaWV3Qmh2X2NydFRscyh0LCBlKSB7XG4gICAgdmFyIHIsIGEsIG4sIGk7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX2dhbWVUeXBlID0gKG51bGwgPT09IChhID0gbnVsbCA9PT0gKHIgPSB0LmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5fY29udGV4dCkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5nYW1lVHlwZSkgfHwgTWpHYW1lVHlwZS5Ob25lO1xuICAgICAgdmFyIG8gPSBudWxsID09PSAoaSA9IG51bGwgPT09IChuID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uY29udGV4dCkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5nYW1lQ3RyO1xuICAgICAgdGhpcy5sb2FkU3BpbmVSZXNvdXJjZShvKTtcbiAgICB9IGNhdGNoICh0KSB7fVxuICAgIGUoKTtcbiAgfVxuICBvbkNsZWFyRWZmQmh2X2NoYW5nZVNrZCh0LCBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciByID0gdC5hcmdzWzBdLFxuICAgICAgICBhID0gdGhpcy5fY3VyclNrRGF0YTtcbiAgICAgIGEgJiYgY2MuaXNWYWxpZChhKSAmJiByICYmIHIuc2tlbGV0b25EYXRhICE9PSBhICYmIHRoaXMuaXNHYW1lVHlwZUVuYWJsZWQodGhpcy5fZ2FtZVR5cGUpICYmIChyLnNrZWxldG9uRGF0YSA9IGEpO1xuICAgIH0gY2F0Y2ggKHQpIHt9XG4gICAgZSgpO1xuICB9XG4gIG9uQ2xlYXJFZmZCaHZfZ2V0QW5pbU5hbWUodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5fY3VyclNrRGF0YSAmJiBjYy5pc1ZhbGlkKHRoaXMuX2N1cnJTa0RhdGEpICYmIHRoaXMuaXNHYW1lVHlwZUVuYWJsZWQodGhpcy5fZ2FtZVR5cGUpKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5fY29uZmlnLmFuaW1OYW1lIHx8IFwiaW5cIjtcbiAgICAgICAgZSh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcCxcbiAgICAgICAgICByZXR1cm5WYWw6IHJcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG59Il19