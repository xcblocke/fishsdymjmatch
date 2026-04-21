
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2RemoveHitTipsBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '89731uoPvdNp63glULUkSaT', 'Tile2RemoveHitTipsBehavior');
// Scripts/base/Tile2RemoveHitTipsBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2RemoveHitTipsBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2RemoveHitTipsBehavior = /** @class */ (function (_super) {
    __extends(Tile2RemoveHitTipsBehavior, _super);
    function Tile2RemoveHitTipsBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2RemoveHitTipsBehavior.prototype.start = function (e) {
        this.removeHitTips(e);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2RemoveHitTipsBehavior.prototype.removeHitTips = function (e) {
        var t, o, n = this.context.getTileNodeMap(), i = e.data, r = i.tileId1, a = i.tileId2;
        r && (null === (t = n.get(r)) || void 0 === t || t.hidePropHint());
        a && (null === (o = n.get(a)) || void 0 === o || o.hidePropHint());
    };
    return Tile2RemoveHitTipsBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2RemoveHitTipsBehavior = Tile2RemoveHitTipsBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJSZW1vdmVIaXRUaXBzQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEUseURBQXdEO0FBQ3hEO0lBQWdELDhDQUFpQjtJQUFqRTs7SUFlQSxDQUFDO0lBZEMsMENBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsa0RBQWEsR0FBYixVQUFjLENBQUM7UUFDYixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQ2pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ2hCLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFDSCxpQ0FBQztBQUFELENBZkEsQUFlQyxDQWYrQyxxQ0FBaUIsR0FlaEU7QUFmWSxnRUFBMEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBUaWxlMlJlbW92ZUhpdFRpcHNCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoZSkge1xuICAgIHRoaXMucmVtb3ZlSGl0VGlwcyhlKTtcbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG4gIHJlbW92ZUhpdFRpcHMoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVNYXAoKSxcbiAgICAgIGkgPSBlLmRhdGEsXG4gICAgICByID0gaS50aWxlSWQxLFxuICAgICAgYSA9IGkudGlsZUlkMjtcbiAgICByICYmIChudWxsID09PSAodCA9IG4uZ2V0KHIpKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5oaWRlUHJvcEhpbnQoKSk7XG4gICAgYSAmJiAobnVsbCA9PT0gKG8gPSBuLmdldChhKSkgfHwgdm9pZCAwID09PSBvIHx8IG8uaGlkZVByb3BIaW50KCkpO1xuICB9XG59Il19