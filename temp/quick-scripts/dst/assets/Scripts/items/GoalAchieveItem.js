
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/items/GoalAchieveItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1047eUVFZB/qe+GblfkmWj', 'GoalAchieveItem');
// Scripts/items/GoalAchieveItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../framework/ui/BaseUI");
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var I18NStrings_1 = require("../framework/data/I18NStrings");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GoalAchieveItem = /** @class */ (function (_super) {
    __extends(GoalAchieveItem, _super);
    function GoalAchieveItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._spineAnim = null;
        _this._tileLbl = null;
        return _this;
    }
    GoalAchieveItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._tileLbl = GameUtils_1.default.getSpineAttachedComponent(this._spineAnim, "hook_text", "tile", cc.Label);
        I18NStrings_1.default.setText(this._tileLbl.node, "Goal achieved", "Journey_Level_Done");
        this._tileLbl && this._tileLbl.node && (this._tileLbl.node.opacity = 0);
    };
    GoalAchieveItem.prototype.playAnimation = function (e) {
        GameUtils_1.default.playSpine(this._spineAnim, "in", false, function () { });
        this.playTextAnimation(e);
    };
    GoalAchieveItem.prototype.playTextAnimation = function (e) {
        var t = this;
        if (this._tileLbl && this._tileLbl.node) {
            cc.tween(this._tileLbl.node).to(0.16, {
                opacity: 255
            }, {
                easing: "cubicIn"
            }).delay(0.57).to(0.1, {
                opacity: 0
            }, {
                easing: "circOut"
            }).call(function () {
                t.node.destroy();
                null == e || e();
            }).start();
        }
        else {
            null == e || e();
        }
    };
    GoalAchieveItem.prototype.playSound = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Goals);
    };
    GoalAchieveItem.prefabUrl = "prefabs/effects/EffectGoalAchieve";
    GoalAchieveItem.bundleName = "mainRes";
    __decorate([
        mj.component("spin", sp.Skeleton)
    ], GoalAchieveItem.prototype, "_spineAnim", void 0);
    GoalAchieveItem = __decorate([
        mj.class
    ], GoalAchieveItem);
    return GoalAchieveItem;
}(BaseUI_1.default));
exports.default = GoalAchieveItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2l0ZW1zL0dvYWxBY2hpZXZlSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBQzVDLDhEQUF5RDtBQUN6RCw2REFBd0Q7QUFDeEQsMEVBQW9FO0FBRXBFO0lBQTZDLG1DQUFNO0lBQW5EO1FBQUEscUVBc0NDO1FBcENDLGdCQUFVLEdBQVcsSUFBSSxDQUFDO1FBQzFCLGNBQVEsR0FBRyxJQUFJLENBQUM7O0lBbUNsQixDQUFDO0lBaENDLGdDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BHLHFCQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNELHVDQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ2IsbUJBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCwyQ0FBaUIsR0FBakIsVUFBa0IsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDdkMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3BDLE9BQU8sRUFBRSxHQUFHO2FBQ2IsRUFBRTtnQkFDRCxNQUFNLEVBQUUsU0FBUzthQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3JCLE9BQU8sRUFBRSxDQUFDO2FBQ1gsRUFBRTtnQkFDRCxNQUFNLEVBQUUsU0FBUzthQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNOLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDWjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFDRCxtQ0FBUyxHQUFUO1FBQ0UsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsd0JBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBakNNLHlCQUFTLEdBQUcsbUNBQW1DLENBQUM7SUFDaEQsMEJBQVUsR0FBRyxTQUFTLENBQUM7SUFIOUI7UUFEQyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDO3VEQUNSO0lBRlAsZUFBZTtRQURuQyxFQUFFLENBQUMsS0FBSztPQUNZLGVBQWUsQ0FzQ25DO0lBQUQsc0JBQUM7Q0F0Q0QsQUFzQ0MsQ0F0QzRDLGdCQUFNLEdBc0NsRDtrQkF0Q29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29hbEFjaGlldmVJdGVtIGV4dGVuZHMgQmFzZVVJIHtcbiAgQG1qLmNvbXBvbmVudChcInNwaW5cIiwgc3AuU2tlbGV0b24pXG4gIF9zcGluZUFuaW06IFwic3BpblwiID0gbnVsbDtcbiAgX3RpbGVMYmwgPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2VmZmVjdHMvRWZmZWN0R29hbEFjaGlldmVcIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcIm1haW5SZXNcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3RpbGVMYmwgPSBHYW1lVXRpbHMuZ2V0U3BpbmVBdHRhY2hlZENvbXBvbmVudCh0aGlzLl9zcGluZUFuaW0sIFwiaG9va190ZXh0XCIsIFwidGlsZVwiLCBjYy5MYWJlbCk7XG4gICAgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLl90aWxlTGJsLm5vZGUsIFwiR29hbCBhY2hpZXZlZFwiLCBcIkpvdXJuZXlfTGV2ZWxfRG9uZVwiKTtcbiAgICB0aGlzLl90aWxlTGJsICYmIHRoaXMuX3RpbGVMYmwubm9kZSAmJiAodGhpcy5fdGlsZUxibC5ub2RlLm9wYWNpdHkgPSAwKTtcbiAgfVxuICBwbGF5QW5pbWF0aW9uKGUpIHtcbiAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuX3NwaW5lQW5pbSwgXCJpblwiLCBmYWxzZSwgZnVuY3Rpb24gKCkge30pO1xuICAgIHRoaXMucGxheVRleHRBbmltYXRpb24oZSk7XG4gIH1cbiAgcGxheVRleHRBbmltYXRpb24oZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAodGhpcy5fdGlsZUxibCAmJiB0aGlzLl90aWxlTGJsLm5vZGUpIHtcbiAgICAgIGNjLnR3ZWVuKHRoaXMuX3RpbGVMYmwubm9kZSkudG8oMC4xNiwge1xuICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcImN1YmljSW5cIlxuICAgICAgfSkuZGVsYXkoMC41NykudG8oMC4xLCB7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcImNpcmNPdXRcIlxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIG51bGwgPT0gZSB8fCBlKCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBudWxsID09IGUgfHwgZSgpO1xuICAgIH1cbiAgfVxuICBwbGF5U291bmQoKSB7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRUF1ZGlvSUQuR29hbHMpO1xuICB9XG59Il19