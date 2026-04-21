
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_closedaxiaobylayercount/Scripts/CloseDaxiaoByLayerCountTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a0aa/w+0ZLIJ4H3NCIFwXp', 'CloseDaxiaoByLayerCountTrait');
// subpackages/l_closedaxiaobylayercount/Scripts/CloseDaxiaoByLayerCountTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CloseDaxiaoByLayerCountTrait = /** @class */ (function (_super) {
    __extends(CloseDaxiaoByLayerCountTrait, _super);
    function CloseDaxiaoByLayerCountTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloseDaxiaoByLayerCountTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CloseDaxiaoByLayerCountTrait.prototype.onDaxiaoCardType_isGen = function (t, e) {
        var r;
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Tile2Normal) {
            var o = t.args[0], n = this._traitData.maxLayerIndex || 999;
            if (((null === (r = null == o ? void 0 : o.getTileMapObject()) || void 0 === r ? void 0 : r.maxLayerIndex) + 1 || 0) >= n) {
                e({
                    returnVal: false,
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    CloseDaxiaoByLayerCountTrait.traitKey = "CloseDaxiaoByLayerCount";
    CloseDaxiaoByLayerCountTrait = __decorate([
        mj.trait,
        mj.class("CloseDaxiaoByLayerCountTrait")
    ], CloseDaxiaoByLayerCountTrait);
    return CloseDaxiaoByLayerCountTrait;
}(Trait_1.default));
exports.default = CloseDaxiaoByLayerCountTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Nsb3NlZGF4aWFvYnlsYXllcmNvdW50L1NjcmlwdHMvQ2xvc2VEYXhpYW9CeUxheWVyQ291bnRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFHakU7SUFBMEQsZ0RBQUs7SUFBL0Q7O0lBcUJBLENBQUM7SUFuQkMsNkNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDZEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsV0FBVyxFQUFFO1lBQzNFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2YsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxJQUFJLEdBQUcsQ0FBQztZQUMzQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pILENBQUMsQ0FBQztvQkFDQSxTQUFTLEVBQUUsS0FBSztvQkFDaEIsT0FBTyxFQUFFLElBQUk7b0JBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQzNDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLENBQUMsRUFBRSxDQUFDO2FBQ0w7U0FDRjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFuQk0scUNBQVEsR0FBRyx5QkFBeUIsQ0FBQztJQUR6Qiw0QkFBNEI7UUFGaEQsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDO09BQ3BCLDRCQUE0QixDQXFCaEQ7SUFBRCxtQ0FBQztDQXJCRCxBQXFCQyxDQXJCeUQsZUFBSyxHQXFCOUQ7a0JBckJvQiw0QkFBNEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDbG9zZURheGlhb0J5TGF5ZXJDb3VudFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9zZURheGlhb0J5TGF5ZXJDb3VudFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNsb3NlRGF4aWFvQnlMYXllckNvdW50XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkRheGlhb0NhcmRUeXBlX2lzR2VuKHQsIGUpIHtcbiAgICB2YXIgcjtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwpIHtcbiAgICAgIHZhciBvID0gdC5hcmdzWzBdLFxuICAgICAgICBuID0gdGhpcy5fdHJhaXREYXRhLm1heExheWVySW5kZXggfHwgOTk5O1xuICAgICAgaWYgKCgobnVsbCA9PT0gKHIgPSBudWxsID09IG8gPyB2b2lkIDAgOiBvLmdldFRpbGVNYXBPYmplY3QoKSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5tYXhMYXllckluZGV4KSArIDEgfHwgMCkgPj0gbikge1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5WYWw6IGZhbHNlLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=