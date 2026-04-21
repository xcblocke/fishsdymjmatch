
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hallRankBtnSkin/Scripts/HallRankBtnSkinTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ed7f0sJQrBGu4gAVRyvRMak', 'HallRankBtnSkinTrait');
// subpackages/l_hallRankBtnSkin/Scripts/HallRankBtnSkinTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var HallRankBtnSkinTrait = /** @class */ (function (_super) {
    __extends(HallRankBtnSkinTrait, _super);
    function HallRankBtnSkinTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallRankBtnSkinTrait.prototype.onHallRankBLockTt_crtBtnSp = function (t, n) {
        var e = t.ins, r = t.args[0];
        if (!cc.isValid(e._rankUnopenSpine) && cc.isValid(r)) {
            var i = BaseSpine_1.default.create("spine/main_enter_locked", "init", -1, null, false, "l_hallRankBtnSkin");
            i.node.parent = r;
            i.node.position = cc.v3(0, 0, 0);
            i.node.setSiblingIndex(0);
            e._rankUnopenSpine = i;
            n({
                returnType: TraitCallbackReturnType.jump
            });
        }
        else
            n();
    };
    HallRankBtnSkinTrait.prototype.onRankBtn_initComp = function (t, n) {
        var e = t.ins;
        if (cc.isValid(e) && cc.isValid(e.node)) {
            var r = cc.find("bg/down", e.node), i = cc.find("bg/up", e.node), o = BaseSpine_1.default.refreshWithNode(r, "spine/main_enter_unlock", "l_hallRankBtnSkin");
            o.setAnimation("init_down", -1, null, false);
            o.attachNode("hook_photo", function () {
                return e._cardSprNode;
            });
            BaseSpine_1.default.refreshWithNode(i, "spine/main_enter_unlock", "l_hallRankBtnSkin").setAnimation("init_up", -1, null, false);
            n({
                returnType: TraitCallbackReturnType.jump
            });
        }
        else
            n();
    };
    HallRankBtnSkinTrait.traitKey = "HallRankBtnSkin";
    HallRankBtnSkinTrait = __decorate([
        mj.trait,
        mj.class("HallRankBtnSkinTrait")
    ], HallRankBtnSkinTrait);
    return HallRankBtnSkinTrait;
}(Trait_1.default));
exports.default = HallRankBtnSkinTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhbGxSYW5rQnRuU2tpbi9TY3JpcHRzL0hhbGxSYW5rQnRuU2tpblRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QseUVBQW9FO0FBR3BFO0lBQWtELHdDQUFLO0lBQXZEOztJQWdDQSxDQUFDO0lBOUJDLHlEQUEwQixHQUExQixVQUEyQixDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNYLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxNQUFNLENBQUMseUJBQXlCLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztZQUNsRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDO2dCQUNBLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxJQUFJO2FBQ3pDLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELGlEQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDaEMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDNUIsQ0FBQyxHQUFHLG1CQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSx5QkFBeUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1lBQ25GLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRTtnQkFDekIsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsbUJBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLHlCQUF5QixFQUFFLG1CQUFtQixDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEgsQ0FBQyxDQUFDO2dCQUNBLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxJQUFJO2FBQ3pDLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQTlCTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0FnQ3hDO0lBQUQsMkJBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ2lELGVBQUssR0FnQ3REO2tCQWhDb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkhhbGxSYW5rQnRuU2tpblRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsUmFua0J0blNraW5UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJIYWxsUmFua0J0blNraW5cIjtcbiAgb25IYWxsUmFua0JMb2NrVHRfY3J0QnRuU3AodCwgbikge1xuICAgIHZhciBlID0gdC5pbnMsXG4gICAgICByID0gdC5hcmdzWzBdO1xuICAgIGlmICghY2MuaXNWYWxpZChlLl9yYW5rVW5vcGVuU3BpbmUpICYmIGNjLmlzVmFsaWQocikpIHtcbiAgICAgIHZhciBpID0gQmFzZVNwaW5lLmNyZWF0ZShcInNwaW5lL21haW5fZW50ZXJfbG9ja2VkXCIsIFwiaW5pdFwiLCAtMSwgbnVsbCwgZmFsc2UsIFwibF9oYWxsUmFua0J0blNraW5cIik7XG4gICAgICBpLm5vZGUucGFyZW50ID0gcjtcbiAgICAgIGkubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuICAgICAgaS5ub2RlLnNldFNpYmxpbmdJbmRleCgwKTtcbiAgICAgIGUuX3JhbmtVbm9wZW5TcGluZSA9IGk7XG4gICAgICBuKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcFxuICAgICAgfSk7XG4gICAgfSBlbHNlIG4oKTtcbiAgfVxuICBvblJhbmtCdG5faW5pdENvbXAodCwgbikge1xuICAgIHZhciBlID0gdC5pbnM7XG4gICAgaWYgKGNjLmlzVmFsaWQoZSkgJiYgY2MuaXNWYWxpZChlLm5vZGUpKSB7XG4gICAgICB2YXIgciA9IGNjLmZpbmQoXCJiZy9kb3duXCIsIGUubm9kZSksXG4gICAgICAgIGkgPSBjYy5maW5kKFwiYmcvdXBcIiwgZS5ub2RlKSxcbiAgICAgICAgbyA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUociwgXCJzcGluZS9tYWluX2VudGVyX3VubG9ja1wiLCBcImxfaGFsbFJhbmtCdG5Ta2luXCIpO1xuICAgICAgby5zZXRBbmltYXRpb24oXCJpbml0X2Rvd25cIiwgLTEsIG51bGwsIGZhbHNlKTtcbiAgICAgIG8uYXR0YWNoTm9kZShcImhvb2tfcGhvdG9cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZS5fY2FyZFNwck5vZGU7XG4gICAgICB9KTtcbiAgICAgIEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUoaSwgXCJzcGluZS9tYWluX2VudGVyX3VubG9ja1wiLCBcImxfaGFsbFJhbmtCdG5Ta2luXCIpLnNldEFuaW1hdGlvbihcImluaXRfdXBcIiwgLTEsIG51bGwsIGZhbHNlKTtcbiAgICAgIG4oe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wXG4gICAgICB9KTtcbiAgICB9IGVsc2UgbigpO1xuICB9XG59Il19