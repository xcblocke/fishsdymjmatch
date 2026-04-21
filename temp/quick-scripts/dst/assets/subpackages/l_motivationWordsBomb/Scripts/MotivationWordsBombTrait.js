
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_motivationWordsBomb/Scripts/MotivationWordsBombTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ff644fQGW1A26Kznnl7qHEo', 'MotivationWordsBombTrait');
// subpackages/l_motivationWordsBomb/Scripts/MotivationWordsBombTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var MotivationalWordsEffect_1 = require("../../../Scripts/MotivationalWordsEffect");
var MotivationalWordsEffectEffect_1 = require("../../../Scripts/MotivationalWordsEffectEffect");
var MotivationWordsBombTrait = /** @class */ (function (_super) {
    __extends(MotivationWordsBombTrait, _super);
    function MotivationWordsBombTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotivationWordsBombTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MotivationWordsBombTrait.prototype.onClrNormHlp_chkBombMotiv = function (t, o) {
        this.handleBombMotivationalWords(t);
        o({
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    MotivationWordsBombTrait.prototype.handleBombMotivationalWords = function (t) {
        var o = t.args[0], r = t.args[1], e = t.ins, i = e._gameContext, n = e._baseInput;
        if (i && n) {
            var a = i.motivationalWordsChecker.canShowMotivationalWords(), l = a.isShow, u = a.index;
            if (l && o && o.length >= 2) {
                var p = i.getGameData().getComboNum(), d = new MotivationalWordsEffect_1.MotivationalWordsEffect({
                    index: u,
                    comboNum: p,
                    tileId1: o[1],
                    tileId2: o[0]
                });
                n.pushEffect(d, BehaviorsEnum_1.EInsertType.Parallel, r, false);
                var v = new MotivationalWordsEffectEffect_1.MotivationalWordsEffectEffect({
                    index: u
                });
                n.pushEffect(v, BehaviorsEnum_1.EInsertType.Parallel, r, false);
            }
        }
    };
    MotivationWordsBombTrait.traitKey = "MotivationWordsBomb";
    MotivationWordsBombTrait = __decorate([
        mj.trait,
        mj.class("MotivationWordsBombTrait")
    ], MotivationWordsBombTrait);
    return MotivationWordsBombTrait;
}(Trait_1.default));
exports.default = MotivationWordsBombTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21vdGl2YXRpb25Xb3Jkc0JvbWIvU2NyaXB0cy9Nb3RpdmF0aW9uV29yZHNCb21iVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCx5RUFBc0U7QUFDdEUsb0ZBQW1GO0FBQ25GLGdHQUErRjtBQUcvRjtJQUFzRCw0Q0FBSztJQUEzRDs7SUFzQ0EsQ0FBQztJQXBDQyx5Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsNERBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUM7WUFDQSxVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMxQyxPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCw4REFBMkIsR0FBM0IsVUFBNEIsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNmLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNULENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUNsQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsd0JBQXdCLENBQUMsd0JBQXdCLEVBQUUsRUFDM0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQ1osQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFDbkMsQ0FBQyxHQUFHLElBQUksaURBQXVCLENBQUM7b0JBQzlCLEtBQUssRUFBRSxDQUFDO29CQUNSLFFBQVEsRUFBRSxDQUFDO29CQUNYLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNiLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNkLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxHQUFHLElBQUksNkRBQTZCLENBQUM7b0JBQ3hDLEtBQUssRUFBRSxDQUFDO2lCQUNULENBQUMsQ0FBQztnQkFDSCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDakQ7U0FDRjtJQUNILENBQUM7SUFwQ00saUNBQVEsR0FBRyxxQkFBcUIsQ0FBQztJQURyQix3QkFBd0I7UUFGNUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDO09BQ2hCLHdCQUF3QixDQXNDNUM7SUFBRCwrQkFBQztDQXRDRCxBQXNDQyxDQXRDcUQsZUFBSyxHQXNDMUQ7a0JBdENvQix3QkFBd0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgTW90aXZhdGlvbmFsV29yZHNFZmZlY3QgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL01vdGl2YXRpb25hbFdvcmRzRWZmZWN0JztcbmltcG9ydCB7IE1vdGl2YXRpb25hbFdvcmRzRWZmZWN0RWZmZWN0IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9Nb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdEVmZmVjdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk1vdGl2YXRpb25Xb3Jkc0JvbWJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW90aXZhdGlvbldvcmRzQm9tYlRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIk1vdGl2YXRpb25Xb3Jkc0JvbWJcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uQ2xyTm9ybUhscF9jaGtCb21iTW90aXYodCwgbykge1xuICAgIHRoaXMuaGFuZGxlQm9tYk1vdGl2YXRpb25hbFdvcmRzKHQpO1xuICAgIG8oe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgaXNCcmVhazogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIGhhbmRsZUJvbWJNb3RpdmF0aW9uYWxXb3Jkcyh0KSB7XG4gICAgdmFyIG8gPSB0LmFyZ3NbMF0sXG4gICAgICByID0gdC5hcmdzWzFdLFxuICAgICAgZSA9IHQuaW5zLFxuICAgICAgaSA9IGUuX2dhbWVDb250ZXh0LFxuICAgICAgbiA9IGUuX2Jhc2VJbnB1dDtcbiAgICBpZiAoaSAmJiBuKSB7XG4gICAgICB2YXIgYSA9IGkubW90aXZhdGlvbmFsV29yZHNDaGVja2VyLmNhblNob3dNb3RpdmF0aW9uYWxXb3JkcygpLFxuICAgICAgICBsID0gYS5pc1Nob3csXG4gICAgICAgIHUgPSBhLmluZGV4O1xuICAgICAgaWYgKGwgJiYgbyAmJiBvLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgIHZhciBwID0gaS5nZXRHYW1lRGF0YSgpLmdldENvbWJvTnVtKCksXG4gICAgICAgICAgZCA9IG5ldyBNb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdCh7XG4gICAgICAgICAgICBpbmRleDogdSxcbiAgICAgICAgICAgIGNvbWJvTnVtOiBwLFxuICAgICAgICAgICAgdGlsZUlkMTogb1sxXSxcbiAgICAgICAgICAgIHRpbGVJZDI6IG9bMF1cbiAgICAgICAgICB9KTtcbiAgICAgICAgbi5wdXNoRWZmZWN0KGQsIEVJbnNlcnRUeXBlLlBhcmFsbGVsLCByLCBmYWxzZSk7XG4gICAgICAgIHZhciB2ID0gbmV3IE1vdGl2YXRpb25hbFdvcmRzRWZmZWN0RWZmZWN0KHtcbiAgICAgICAgICBpbmRleDogdVxuICAgICAgICB9KTtcbiAgICAgICAgbi5wdXNoRWZmZWN0KHYsIEVJbnNlcnRUeXBlLlBhcmFsbGVsLCByLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19