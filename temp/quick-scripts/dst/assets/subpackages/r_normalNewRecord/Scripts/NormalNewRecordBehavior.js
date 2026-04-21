
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_normalNewRecord/Scripts/NormalNewRecordBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05b18vxoLxDO5kbdKAZmuhx', 'NormalNewRecordBehavior');
// subpackages/r_normalNewRecord/Scripts/NormalNewRecordBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameBehaviorsBase_1 = require("../../../Scripts/base/GameBehaviorsBase");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var NormalNewRecordBehavior = /** @class */ (function (_super) {
    __extends(NormalNewRecordBehavior, _super);
    function NormalNewRecordBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalNewRecordBehavior.prototype.start = function () {
        this.showClearLayerWords();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    NormalNewRecordBehavior.prototype.showClearLayerWords = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.ClassicBreakRecord);
        var e = BaseSpine_1.default.create("spine/gameplay_newRecord", "in", 1, null, true, "r_normalNewRecord");
        e.node.setPosition(0, 180, 0);
        this.context.gameView.nodeTopEffectRoot.addChild(e.node, 999);
    };
    return NormalNewRecordBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.default = NormalNewRecordBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX25vcm1hbE5ld1JlY29yZC9TY3JpcHRzL05vcm1hbE5ld1JlY29yZEJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRkFBa0Y7QUFDbEYsd0ZBQWtGO0FBQ2xGLDZFQUE0RTtBQUM1RSx5RUFBb0U7QUFDcEU7SUFBcUQsMkNBQWlCO0lBQXRFOztJQVdBLENBQUM7SUFWQyx1Q0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxxREFBbUIsR0FBbkI7UUFDRSxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDL0YsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQVhBLEFBV0MsQ0FYb0QscUNBQWlCLEdBV3JFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvR2FtZUJlaGF2aW9yc0Jhc2UnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vcm1hbE5ld1JlY29yZEJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydCgpIHtcbiAgICB0aGlzLnNob3dDbGVhckxheWVyV29yZHMoKTtcbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG4gIHNob3dDbGVhckxheWVyV29yZHMoKSB7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRUF1ZGlvSUQuQ2xhc3NpY0JyZWFrUmVjb3JkKTtcbiAgICB2YXIgZSA9IEJhc2VTcGluZS5jcmVhdGUoXCJzcGluZS9nYW1lcGxheV9uZXdSZWNvcmRcIiwgXCJpblwiLCAxLCBudWxsLCB0cnVlLCBcInJfbm9ybWFsTmV3UmVjb3JkXCIpO1xuICAgIGUubm9kZS5zZXRQb3NpdGlvbigwLCAxODAsIDApO1xuICAgIHRoaXMuY29udGV4dC5nYW1lVmlldy5ub2RlVG9wRWZmZWN0Um9vdC5hZGRDaGlsZChlLm5vZGUsIDk5OSk7XG4gIH1cbn0iXX0=