
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_chestAdShow/Scripts/ChestAdShowTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64b8f+DKSFLR5YaTF41n3X5', 'ChestAdShowTrait');
// subpackages/l_chestAdShow/Scripts/ChestAdShowTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ChestAdShowTrait = /** @class */ (function (_super) {
    __extends(ChestAdShowTrait, _super);
    function ChestAdShowTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChestAdShowTrait.prototype.onChest_AdClkShow = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    ChestAdShowTrait.prototype.onChest_AdClose = function (t, e) {
        var r, o, n = t.ins;
        if (cc.isValid(n) && n.showAdRewards && "function" == typeof n.showAdRewards) {
            var i = null !== (o = null === (r = this.traitData) || void 0 === r ? void 0 : r.showAnim) && void 0 !== o && o;
            n.showAdRewards(i);
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    ChestAdShowTrait.traitKey = "ChestAdShow";
    ChestAdShowTrait = __decorate([
        mj.trait,
        mj.class("ChestAdShowTrait")
    ], ChestAdShowTrait);
    return ChestAdShowTrait;
}(Trait_1.default));
exports.default = ChestAdShowTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NoZXN0QWRTaG93L1NjcmlwdHMvQ2hlc3RBZFNob3dUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQThDLG9DQUFLO0lBQW5EOztJQXFCQSxDQUFDO0lBbkJDLDRDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUM7WUFDQSxPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCwwQ0FBZSxHQUFmLFVBQWdCLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNaLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxJQUFJLFVBQVUsSUFBSSxPQUFPLENBQUMsQ0FBQyxhQUFhLEVBQUU7WUFDNUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEgsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDM0MsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBbkJNLHlCQUFRLEdBQUcsYUFBYSxDQUFDO0lBRGIsZ0JBQWdCO1FBRnBDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztPQUNSLGdCQUFnQixDQXFCcEM7SUFBRCx1QkFBQztDQXJCRCxBQXFCQyxDQXJCNkMsZUFBSyxHQXFCbEQ7a0JBckJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDaGVzdEFkU2hvd1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVzdEFkU2hvd1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNoZXN0QWRTaG93XCI7XG4gIG9uQ2hlc3RfQWRDbGtTaG93KHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICB9KTtcbiAgfVxuICBvbkNoZXN0X0FkQ2xvc2UodCwgZSkge1xuICAgIHZhciByLFxuICAgICAgbyxcbiAgICAgIG4gPSB0LmlucztcbiAgICBpZiAoY2MuaXNWYWxpZChuKSAmJiBuLnNob3dBZFJld2FyZHMgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBuLnNob3dBZFJld2FyZHMpIHtcbiAgICAgIHZhciBpID0gbnVsbCAhPT0gKG8gPSBudWxsID09PSAociA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLnNob3dBbmltKSAmJiB2b2lkIDAgIT09IG8gJiYgbztcbiAgICAgIG4uc2hvd0FkUmV3YXJkcyhpKTtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=