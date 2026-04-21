
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_materialCard/Scripts/MaterialCard101Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87f3b9h85FL2Yy+gi/4jX/r', 'MaterialCard101Trait');
// subpackages/l_materialCard/Scripts/MaterialCard101Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ClassicMaterialCardBaseTrait_1 = require("./ClassicMaterialCardBaseTrait");
var MaterialCard101Trait = /** @class */ (function (_super) {
    __extends(MaterialCard101Trait, _super);
    function MaterialCard101Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._interval = 1;
        return _this;
    }
    MaterialCard101Trait_1 = MaterialCard101Trait;
    MaterialCard101Trait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._interval = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.interval) && void 0 !== r ? r : 1;
    };
    MaterialCard101Trait.prototype.onChgBatchAnimBhv_start = function (t, e) {
        var a, i, o;
        try {
            if (!this.isClassicMode()) {
                e();
                return;
            }
            var l = null === (a = t.args) || void 0 === a ? void 0 : a[0], n = null !== (o = null === (i = null == l ? void 0 : l.data) || void 0 === i ? void 0 : i.batchId) && void 0 !== o ? o : 0;
            if (0 === n) {
                e();
                return;
            }
            if (n % this._interval == 0) {
                this.switchToNextMaterialCard();
                this.getCurMaterialCard();
                var s = t.ins;
                this.refreshExistingCards(null == s ? void 0 : s.context);
            }
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard101Trait_1.traitKey + "] 波次切换处理失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var MaterialCard101Trait_1;
    MaterialCard101Trait.traitKey = "MaterialCard101";
    MaterialCard101Trait = MaterialCard101Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard101Trait")
    ], MaterialCard101Trait);
    return MaterialCard101Trait;
}(ClassicMaterialCardBaseTrait_1.default));
exports.default = MaterialCard101Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGVyaWFsQ2FyZC9TY3JpcHRzL01hdGVyaWFsQ2FyZDEwMVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrRUFBMEU7QUFHMUU7SUFBa0Qsd0NBQTRCO0lBQTlFO1FBQUEscUVBaUNDO1FBaENDLGVBQVMsR0FBRyxDQUFDLENBQUM7O0lBZ0NoQixDQUFDOzZCQWpDb0Isb0JBQW9CO0lBR3ZDLHFDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0gsQ0FBQztJQUNELHNEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osSUFBSTtZQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7Z0JBQ3pCLENBQUMsRUFBRSxDQUFDO2dCQUNKLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMzRCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdILElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDWCxDQUFDLEVBQUUsQ0FBQztnQkFDSixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUNkLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzNEO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDTDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsc0JBQW9CLENBQUMsUUFBUSxHQUFHLGNBQWMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN2RyxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQzs7SUE5Qk0sNkJBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQUZqQixvQkFBb0I7UUFGeEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBaUN4QztJQUFELDJCQUFDO0NBakNELEFBaUNDLENBakNpRCxzQ0FBNEIsR0FpQzdFO2tCQWpDb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsYXNzaWNNYXRlcmlhbENhcmRCYXNlVHJhaXQgZnJvbSAnLi9DbGFzc2ljTWF0ZXJpYWxDYXJkQmFzZVRyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTWF0ZXJpYWxDYXJkMTAxVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGVyaWFsQ2FyZDEwMVRyYWl0IGV4dGVuZHMgQ2xhc3NpY01hdGVyaWFsQ2FyZEJhc2VUcmFpdCB7XG4gIF9pbnRlcnZhbCA9IDE7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTWF0ZXJpYWxDYXJkMTAxXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZSwgcjtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGwgIT09IChyID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuaW50ZXJ2YWwpICYmIHZvaWQgMCAhPT0gciA/IHIgOiAxO1xuICB9XG4gIG9uQ2hnQmF0Y2hBbmltQmh2X3N0YXJ0KHQsIGUpIHtcbiAgICB2YXIgYSwgaSwgbztcbiAgICB0cnkge1xuICAgICAgaWYgKCF0aGlzLmlzQ2xhc3NpY01vZGUoKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBsID0gbnVsbCA9PT0gKGEgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGFbMF0sXG4gICAgICAgIG4gPSBudWxsICE9PSAobyA9IG51bGwgPT09IChpID0gbnVsbCA9PSBsID8gdm9pZCAwIDogbC5kYXRhKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmJhdGNoSWQpICYmIHZvaWQgMCAhPT0gbyA/IG8gOiAwO1xuICAgICAgaWYgKDAgPT09IG4pIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobiAlIHRoaXMuX2ludGVydmFsID09IDApIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hUb05leHRNYXRlcmlhbENhcmQoKTtcbiAgICAgICAgdGhpcy5nZXRDdXJNYXRlcmlhbENhcmQoKTtcbiAgICAgICAgdmFyIHMgPSB0LmlucztcbiAgICAgICAgdGhpcy5yZWZyZXNoRXhpc3RpbmdDYXJkcyhudWxsID09IHMgPyB2b2lkIDAgOiBzLmNvbnRleHQpO1xuICAgICAgfVxuICAgICAgZSgpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBNYXRlcmlhbENhcmQxMDFUcmFpdC50cmFpdEtleSArIFwiXSDms6LmrKHliIfmjaLlpITnkIblpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==