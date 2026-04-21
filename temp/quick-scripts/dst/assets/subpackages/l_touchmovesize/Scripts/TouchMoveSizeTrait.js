
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_touchmovesize/Scripts/TouchMoveSizeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10bf3uxKrNIBZ51Jxu0BUOU', 'TouchMoveSizeTrait');
// subpackages/l_touchmovesize/Scripts/TouchMoveSizeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var TouchMoveSizeTrait = /** @class */ (function (_super) {
    __extends(TouchMoveSizeTrait, _super);
    function TouchMoveSizeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TouchMoveSizeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TouchMoveSizeTrait.prototype.onTileSelector_exMultiple = function (t, e) {
        t.ins;
        var r, o, i, n, a, l, c = this._traitData.multiple || 1.5;
        if (null === (r = this._traitData) || void 0 === r ? void 0 : r.isUseMemLimit) {
            var p = (null === (o = this._traitData) || void 0 === o ? void 0 : o.allMemoryRange) || [5, 11], f = Number(null !== (i = p[0]) && void 0 !== i ? i : 5), s = Number(null !== (n = p[1]) && void 0 !== n ? n : 11), d = Number(null !== (l = null === (a = LoginModel_1.default.getInstance()) || void 0 === a ? void 0 : a.allMemory) && void 0 !== l ? l : 0);
            if (!(d > 1024 * f && d < 1024 * s)) {
                e();
                return;
            }
        }
        e({
            returnVal: c,
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    TouchMoveSizeTrait.traitKey = "TouchMoveSize";
    TouchMoveSizeTrait = __decorate([
        mj.trait,
        mj.class("TouchMoveSizeTrait")
    ], TouchMoveSizeTrait);
    return TouchMoveSizeTrait;
}(Trait_1.default));
exports.default = TouchMoveSizeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RvdWNobW92ZXNpemUvU2NyaXB0cy9Ub3VjaE1vdmVTaXplVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCwrRUFBMEU7QUFHMUU7SUFBZ0Qsc0NBQUs7SUFBckQ7O0lBOEJBLENBQUM7SUE1QkMsbUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHNEQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ04sSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDO1FBQ3RDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFO1lBQzdFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQzdGLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDdkQsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUN4RCxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsb0JBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osT0FBTzthQUNSO1NBQ0Y7UUFDRCxDQUFDLENBQUM7WUFDQSxTQUFTLEVBQUUsQ0FBQztZQUNaLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQzFDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTVCTSwyQkFBUSxHQUFHLGVBQWUsQ0FBQztJQURmLGtCQUFrQjtRQUZ0QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0E4QnRDO0lBQUQseUJBQUM7Q0E5QkQsQUE4QkMsQ0E5QitDLGVBQUssR0E4QnBEO2tCQTlCb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBMb2dpbk1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvbG9naW4vbW9kZWwvTG9naW5Nb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRvdWNoTW92ZVNpemVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2hNb3ZlU2l6ZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRvdWNoTW92ZVNpemVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uVGlsZVNlbGVjdG9yX2V4TXVsdGlwbGUodCwgZSkge1xuICAgIHQuaW5zO1xuICAgIHZhciByLFxuICAgICAgbyxcbiAgICAgIGksXG4gICAgICBuLFxuICAgICAgYSxcbiAgICAgIGwsXG4gICAgICBjID0gdGhpcy5fdHJhaXREYXRhLm11bHRpcGxlIHx8IDEuNTtcbiAgICBpZiAobnVsbCA9PT0gKHIgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuaXNVc2VNZW1MaW1pdCkge1xuICAgICAgdmFyIHAgPSAobnVsbCA9PT0gKG8gPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uYWxsTWVtb3J5UmFuZ2UpIHx8IFs1LCAxMV0sXG4gICAgICAgIGYgPSBOdW1iZXIobnVsbCAhPT0gKGkgPSBwWzBdKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogNSksXG4gICAgICAgIHMgPSBOdW1iZXIobnVsbCAhPT0gKG4gPSBwWzFdKSAmJiB2b2lkIDAgIT09IG4gPyBuIDogMTEpLFxuICAgICAgICBkID0gTnVtYmVyKG51bGwgIT09IChsID0gbnVsbCA9PT0gKGEgPSBMb2dpbk1vZGVsLmdldEluc3RhbmNlKCkpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuYWxsTWVtb3J5KSAmJiB2b2lkIDAgIT09IGwgPyBsIDogMCk7XG4gICAgICBpZiAoIShkID4gMTAyNCAqIGYgJiYgZCA8IDEwMjQgKiBzKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgZSh7XG4gICAgICByZXR1cm5WYWw6IGMsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbn0iXX0=