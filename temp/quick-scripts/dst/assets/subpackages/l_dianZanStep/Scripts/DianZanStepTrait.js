
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dianZanStep/Scripts/DianZanStepTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '573f2N5DhlKo5miKU1TkGD1', 'DianZanStepTrait');
// subpackages/l_dianZanStep/Scripts/DianZanStepTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DianZanStepTrait = /** @class */ (function (_super) {
    __extends(DianZanStepTrait, _super);
    function DianZanStepTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        _this._currentMatchDelta = 0;
        _this._triggerDianZan = false;
        return _this;
    }
    Object.defineProperty(DianZanStepTrait.prototype, "bundleName", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.spineBundle) || "l_dianZanStep";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanStepTrait.prototype, "matchNum", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.matchNum) || 1;
        },
        enumerable: false,
        configurable: true
    });
    DianZanStepTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var r, i;
        this.loadSpine(null === (i = null === (r = t.ins) || void 0 === r ? void 0 : r.context) || void 0 === i ? void 0 : i.gameCtr);
        e();
    };
    DianZanStepTrait.prototype.loadSpine = function (t) {
        var e, r = this;
        if (t && "function" == typeof t.loadRes) {
            var i = (null === (e = this.traitData) || void 0 === e ? void 0 : e.spinePath) || "spine/gamplay_doubleLikes";
            this._currSkData = null;
            t.loadRes(i, sp.SkeletonData, this.bundleName).then(function (t) {
                var e = Array.isArray(t) ? t[0] : t;
                r._currSkData = e || null;
            }).catch(function () {
                r._currSkData = null;
            });
        }
    };
    DianZanStepTrait.prototype.checkBeforeMatchNum = function (t) {
        return t === this.matchNum;
    };
    DianZanStepTrait.prototype.onDianZanTt_checkDZ = function (t, e) {
        var r, i, n = t.ins, a = null !== (r = n._beforeClearMatchNum) && void 0 !== r ? r : 0, c = null !== (i = n._afterClearMatchNum) && void 0 !== i ? i : 0;
        if (this.checkBeforeMatchNum(a)) {
            this._currentMatchDelta = c - a;
            this._triggerDianZan = this._currentMatchDelta >= 1;
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: this._triggerDianZan
            });
        }
        else {
            this._triggerDianZan = false;
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: false
            });
        }
    };
    DianZanStepTrait.prototype.onDianZanItem_initComp = function (t, e) {
        var r;
        if (this._triggerDianZan) {
            var i = null === (r = t.ins) || void 0 === r ? void 0 : r._spineAnim, n = this._currSkData;
            if (n && i && i.skeletonData !== n) {
                i.clearTracks();
                i.setToSetupPose();
                i.skeletonData = n;
            }
            e();
        }
        else
            e();
    };
    DianZanStepTrait.prototype.onDianZanBhv_getAniName = function (t, e) {
        if (this._triggerDianZan) {
            if (this._currSkData) {
                var r = "in_" + this._currentMatchDelta;
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.jump,
                    returnVal: r
                });
            }
            else
                e();
        }
        else
            e();
    };
    DianZanStepTrait.traitKey = "DianZanStep";
    DianZanStepTrait = __decorate([
        mj.trait,
        mj.class("DianZanStepTrait")
    ], DianZanStepTrait);
    return DianZanStepTrait;
}(Trait_1.default));
exports.default = DianZanStepTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RpYW5aYW5TdGVwL1NjcmlwdHMvRGlhblphblN0ZXBUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQXdGO0FBQ3hGLGdFQUEyRDtBQUczRDtJQUE4QyxvQ0FBSztJQUFuRDtRQUFBLHFFQW1GQztRQWxGQyxpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQix3QkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDdkIscUJBQWUsR0FBRyxLQUFLLENBQUM7O0lBZ0YxQixDQUFDO0lBOUVDLHNCQUFJLHdDQUFVO2FBQWQ7WUFDRSxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxlQUFlLENBQUM7UUFDckcsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxzQ0FBUTthQUFaO1lBQ0UsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BGLENBQUM7OztPQUFBO0lBQ0QsK0NBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxD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cEM7SUFBRCx1QkFBQztDQW5GRCxBQW1GQyxDQW5GNkMsZUFBSyxHQW1GbEQ7a0JBbkZvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJEaWFuWmFuU3RlcFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFuWmFuU3RlcFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY3VyclNrRGF0YSA9IG51bGw7XG4gIF9jdXJyZW50TWF0Y2hEZWx0YSA9IDA7XG4gIF90cmlnZ2VyRGlhblphbiA9IGZhbHNlO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkRpYW5aYW5TdGVwXCI7XG4gIGdldCBidW5kbGVOYW1lKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiAobnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5zcGluZUJ1bmRsZSkgfHwgXCJsX2RpYW5aYW5TdGVwXCI7XG4gIH1cbiAgZ2V0IG1hdGNoTnVtKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiAobnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5tYXRjaE51bSkgfHwgMTtcbiAgfVxuICBvbkluaXRWaWV3Qmh2X2NydFRscyh0LCBlKSB7XG4gICAgdmFyIHIsIGk7XG4gICAgdGhpcy5sb2FkU3BpbmUobnVsbCA9PT0gKGkgPSBudWxsID09PSAociA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmNvbnRleHQpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2FtZUN0cik7XG4gICAgZSgpO1xuICB9XG4gIGxvYWRTcGluZSh0KSB7XG4gICAgdmFyIGUsXG4gICAgICByID0gdGhpcztcbiAgICBpZiAodCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQubG9hZFJlcykge1xuICAgICAgdmFyIGkgPSAobnVsbCA9PT0gKGUgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5zcGluZVBhdGgpIHx8IFwic3BpbmUvZ2FtcGxheV9kb3VibGVMaWtlc1wiO1xuICAgICAgdGhpcy5fY3VyclNrRGF0YSA9IG51bGw7XG4gICAgICB0LmxvYWRSZXMoaSwgc3AuU2tlbGV0b25EYXRhLCB0aGlzLmJ1bmRsZU5hbWUpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSBBcnJheS5pc0FycmF5KHQpID8gdFswXSA6IHQ7XG4gICAgICAgIHIuX2N1cnJTa0RhdGEgPSBlIHx8IG51bGw7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHIuX2N1cnJTa0RhdGEgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGNoZWNrQmVmb3JlTWF0Y2hOdW0odCkge1xuICAgIHJldHVybiB0ID09PSB0aGlzLm1hdGNoTnVtO1xuICB9XG4gIG9uRGlhblphblR0X2NoZWNrRFoodCwgZSkge1xuICAgIHZhciByLFxuICAgICAgaSxcbiAgICAgIG4gPSB0LmlucyxcbiAgICAgIGEgPSBudWxsICE9PSAociA9IG4uX2JlZm9yZUNsZWFyTWF0Y2hOdW0pICYmIHZvaWQgMCAhPT0gciA/IHIgOiAwLFxuICAgICAgYyA9IG51bGwgIT09IChpID0gbi5fYWZ0ZXJDbGVhck1hdGNoTnVtKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogMDtcbiAgICBpZiAodGhpcy5jaGVja0JlZm9yZU1hdGNoTnVtKGEpKSB7XG4gICAgICB0aGlzLl9jdXJyZW50TWF0Y2hEZWx0YSA9IGMgLSBhO1xuICAgICAgdGhpcy5fdHJpZ2dlckRpYW5aYW4gPSB0aGlzLl9jdXJyZW50TWF0Y2hEZWx0YSA+PSAxO1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICAgIHJldHVyblZhbDogdGhpcy5fdHJpZ2dlckRpYW5aYW5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90cmlnZ2VyRGlhblphbiA9IGZhbHNlO1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICAgIHJldHVyblZhbDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBvbkRpYW5aYW5JdGVtX2luaXRDb21wKHQsIGUpIHtcbiAgICB2YXIgcjtcbiAgICBpZiAodGhpcy5fdHJpZ2dlckRpYW5aYW4pIHtcbiAgICAgIHZhciBpID0gbnVsbCA9PT0gKHIgPSB0LmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5fc3BpbmVBbmltLFxuICAgICAgICBuID0gdGhpcy5fY3VyclNrRGF0YTtcbiAgICAgIGlmIChuICYmIGkgJiYgaS5za2VsZXRvbkRhdGEgIT09IG4pIHtcbiAgICAgICAgaS5jbGVhclRyYWNrcygpO1xuICAgICAgICBpLnNldFRvU2V0dXBQb3NlKCk7XG4gICAgICAgIGkuc2tlbGV0b25EYXRhID0gbjtcbiAgICAgIH1cbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uRGlhblphbkJodl9nZXRBbmlOYW1lKHQsIGUpIHtcbiAgICBpZiAodGhpcy5fdHJpZ2dlckRpYW5aYW4pIHtcbiAgICAgIGlmICh0aGlzLl9jdXJyU2tEYXRhKSB7XG4gICAgICAgIHZhciByID0gXCJpbl9cIiArIHRoaXMuX2N1cnJlbnRNYXRjaERlbHRhO1xuICAgICAgICBlKHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICAgICAgcmV0dXJuVmFsOiByXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19