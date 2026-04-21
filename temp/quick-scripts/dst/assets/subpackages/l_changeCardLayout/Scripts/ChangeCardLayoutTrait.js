
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_changeCardLayout/Scripts/ChangeCardLayoutTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '567f1R732lJZrsmENpxsxdP', 'ChangeCardLayoutTrait');
// subpackages/l_changeCardLayout/Scripts/ChangeCardLayoutTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ChangeCardLayoutTrait = /** @class */ (function (_super) {
    __extends(ChangeCardLayoutTrait, _super);
    function ChangeCardLayoutTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChangeCardLayoutTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ChangeCardLayoutTrait.prototype.getGmCardSpaceOffset = function () {
        return null;
    };
    ChangeCardLayoutTrait.prototype.onMainGameCtrl_crtCardLyt = function (t, r) {
        var e = t.beforReturnVal;
        if (e) {
            var a = this._traitData.cardSpaceOffset;
            this.getGmCardSpaceOffset();
            if (a && 2 === a.length) {
                var n = [e.cardSpace[0] + a[0], e.cardSpace[1] + a[1]], i = Object.assign(Object.assign({}, e), {
                    cardSpace: n
                });
                r({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: i
                });
            }
            else
                r();
        }
        else
            r();
    };
    ChangeCardLayoutTrait.traitKey = "ChangeCardLayout";
    ChangeCardLayoutTrait = __decorate([
        mj.trait,
        mj.class("ChangeCardLayoutTrait")
    ], ChangeCardLayoutTrait);
    return ChangeCardLayoutTrait;
}(Trait_1.default));
exports.default = ChangeCardLayoutTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NoYW5nZUNhcmRMYXlvdXQvU2NyaXB0cy9DaGFuZ2VDYXJkTGF5b3V0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFHeEY7SUFBbUQseUNBQUs7SUFBeEQ7O0lBMEJBLENBQUM7SUF4QkMsc0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELG9EQUFvQixHQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELHlEQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7WUFDeEMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDcEQsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7b0JBQ3RDLFNBQVMsRUFBRSxDQUFDO2lCQUNiLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUM7b0JBQ0EsT0FBTyxFQUFFLElBQUk7b0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07b0JBQzFDLFNBQVMsRUFBRSxDQUFDO2lCQUNiLENBQUMsQ0FBQzthQUNKOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXhCTSw4QkFBUSxHQUFHLGtCQUFrQixDQUFDO0lBRGxCLHFCQUFxQjtRQUZ6QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixxQkFBcUIsQ0EwQnpDO0lBQUQsNEJBQUM7Q0ExQkQsQUEwQkMsQ0ExQmtELGVBQUssR0EwQnZEO2tCQTFCb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2hhbmdlQ2FyZExheW91dFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VDYXJkTGF5b3V0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2hhbmdlQ2FyZExheW91dFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgZ2V0R21DYXJkU3BhY2VPZmZzZXQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfY3J0Q2FyZEx5dCh0LCByKSB7XG4gICAgdmFyIGUgPSB0LmJlZm9yUmV0dXJuVmFsO1xuICAgIGlmIChlKSB7XG4gICAgICB2YXIgYSA9IHRoaXMuX3RyYWl0RGF0YS5jYXJkU3BhY2VPZmZzZXQ7XG4gICAgICB0aGlzLmdldEdtQ2FyZFNwYWNlT2Zmc2V0KCk7XG4gICAgICBpZiAoYSAmJiAyID09PSBhLmxlbmd0aCkge1xuICAgICAgICB2YXIgbiA9IFtlLmNhcmRTcGFjZVswXSArIGFbMF0sIGUuY2FyZFNwYWNlWzFdICsgYVsxXV0sXG4gICAgICAgICAgaSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZSksIHtcbiAgICAgICAgICAgIGNhcmRTcGFjZTogblxuICAgICAgICAgIH0pO1xuICAgICAgICByKHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICByZXR1cm5WYWw6IGlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgcigpO1xuICAgIH0gZWxzZSByKCk7XG4gIH1cbn0iXX0=