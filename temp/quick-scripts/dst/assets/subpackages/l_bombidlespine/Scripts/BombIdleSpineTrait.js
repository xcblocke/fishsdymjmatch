
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_bombidlespine/Scripts/BombIdleSpineTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eec8epSGCFBz7FA6P+1HmSB', 'BombIdleSpineTrait');
// subpackages/l_bombidlespine/Scripts/BombIdleSpineTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BombIdleSpineTrait = /** @class */ (function (_super) {
    __extends(BombIdleSpineTrait, _super);
    function BombIdleSpineTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BombIdleSpineTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BombIdleSpineTrait.prototype.getAnimType = function () {
        return this._traitData.animType || 1;
    };
    BombIdleSpineTrait.prototype.onBombCardNode_crtImgCard = function (e, t) {
        var r = e.ins, n = e.beforReturnVal;
        n.active = false;
        var i = n.getChildByName("BombIdleSpine");
        if (!i || !cc.isValid(i)) {
            (i = new cc.Node()).name = "BombIdleSpine";
            n.parent.addChild(i);
            i.zIndex = n.zIndex;
        }
        i.scale = 1 * r.info.tileObject.layoutScale;
        if (1 == this.getAnimType()) {
            var o = "spine/bomb1/gameplay_Lightningcard", a = "l_bombidlespine";
            BaseSpine_1.default.refreshWithNode(i, o, a).setAnimation("in", -1, null, false);
        }
        else {
            o = "spine/bomb2/gameplay_Lightningcard", a = "l_bombidlespine";
            BaseSpine_1.default.refreshWithNode(i, o, a).setAnimation("in", -1, null, false);
        }
        t({
            returnType: TraitCallbackReturnType.jump
        });
    };
    BombIdleSpineTrait.traitKey = "BombIdleSpine";
    BombIdleSpineTrait = __decorate([
        mj.trait,
        mj.class("BombIdleSpineTrait")
    ], BombIdleSpineTrait);
    return BombIdleSpineTrait;
}(Trait_1.default));
exports.default = BombIdleSpineTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JvbWJpZGxlc3BpbmUvU2NyaXB0cy9Cb21iSWRsZVNwaW5lVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCx5RUFBb0U7QUFHcEU7SUFBZ0Qsc0NBQUs7SUFBckQ7O0lBK0JBLENBQUM7SUE3QkMsbUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHdDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0Qsc0RBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUM7UUFDdkIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN4QixDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7WUFDM0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQ3JCO1FBQ0QsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsR0FBRyxvQ0FBb0MsRUFDMUMsQ0FBQyxHQUFHLGlCQUFpQixDQUFDO1lBQ3hCLG1CQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEU7YUFBTTtZQUNMLENBQUMsR0FBRyxvQ0FBb0MsRUFBRSxDQUFDLEdBQUcsaUJBQWlCLENBQUM7WUFDaEUsbUJBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN4RTtRQUNELENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxJQUFJO1NBQ3pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUE3Qk0sMkJBQVEsR0FBRyxlQUFlLENBQUM7SUFEZixrQkFBa0I7UUFGdEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO09BQ1Ysa0JBQWtCLENBK0J0QztJQUFELHlCQUFDO0NBL0JELEFBK0JDLENBL0IrQyxlQUFLLEdBK0JwRDtrQkEvQm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJCb21iSWRsZVNwaW5lVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvbWJJZGxlU3BpbmVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJCb21iSWRsZVNwaW5lXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBnZXRBbmltVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhaXREYXRhLmFuaW1UeXBlIHx8IDE7XG4gIH1cbiAgb25Cb21iQ2FyZE5vZGVfY3J0SW1nQ2FyZChlLCB0KSB7XG4gICAgdmFyIHIgPSBlLmlucyxcbiAgICAgIG4gPSBlLmJlZm9yUmV0dXJuVmFsO1xuICAgIG4uYWN0aXZlID0gZmFsc2U7XG4gICAgdmFyIGkgPSBuLmdldENoaWxkQnlOYW1lKFwiQm9tYklkbGVTcGluZVwiKTtcbiAgICBpZiAoIWkgfHwgIWNjLmlzVmFsaWQoaSkpIHtcbiAgICAgIChpID0gbmV3IGNjLk5vZGUoKSkubmFtZSA9IFwiQm9tYklkbGVTcGluZVwiO1xuICAgICAgbi5wYXJlbnQuYWRkQ2hpbGQoaSk7XG4gICAgICBpLnpJbmRleCA9IG4uekluZGV4O1xuICAgIH1cbiAgICBpLnNjYWxlID0gMSAqIHIuaW5mby50aWxlT2JqZWN0LmxheW91dFNjYWxlO1xuICAgIGlmICgxID09IHRoaXMuZ2V0QW5pbVR5cGUoKSkge1xuICAgICAgdmFyIG8gPSBcInNwaW5lL2JvbWIxL2dhbWVwbGF5X0xpZ2h0bmluZ2NhcmRcIixcbiAgICAgICAgYSA9IFwibF9ib21iaWRsZXNwaW5lXCI7XG4gICAgICBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKGksIG8sIGEpLnNldEFuaW1hdGlvbihcImluXCIsIC0xLCBudWxsLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG8gPSBcInNwaW5lL2JvbWIyL2dhbWVwbGF5X0xpZ2h0bmluZ2NhcmRcIiwgYSA9IFwibF9ib21iaWRsZXNwaW5lXCI7XG4gICAgICBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKGksIG8sIGEpLnNldEFuaW1hdGlvbihcImluXCIsIC0xLCBudWxsLCBmYWxzZSk7XG4gICAgfVxuICAgIHQoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcFxuICAgIH0pO1xuICB9XG59Il19