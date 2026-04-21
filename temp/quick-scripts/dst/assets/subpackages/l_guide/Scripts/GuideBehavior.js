
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_guide/Scripts/GuideBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '56730ibi1VNJrXTV/DNS5ew', 'GuideBehavior');
// subpackages/l_guide/Scripts/GuideBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("../../../Scripts/base/GameBehaviorsBase");
var GuideUI_1 = require("./GuideUI");
var GuideBehavior = /** @class */ (function (_super) {
    __extends(GuideBehavior, _super);
    function GuideBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._behaviorKey = "GuideBehavior";
        return _this;
    }
    GuideBehavior.prototype.finishGuide = function () { };
    GuideBehavior.prototype.start = function (t) {
        var e = this, i = this.context.gameView.guideRootNode, n = i.guideUI, o = i.getChildByName("guideNode"), a = this.context.getTileNodeMap().get(t.data.tileId), s = this.context.gameView.topRootNode, p = this.context.gameView.bottomRootNode, u = s.getChildByName("btnBack"), l = s.getChildByName("btnSettings");
        if (a && !t.data.finishGuide) {
            p.active = false;
            u.active = false;
            l.active = false;
            var d = a.layerNode.convertToWorldSpaceAR(a.info.tileObject.getPosition());
            if (o) {
                n.setGuidePosition(t.data.tileId, d, t.data.showHand);
                n.setText(t.data.text, t.data.guideStep);
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
            }
            else
                GuideUI_1.default.createUI().then(function (o) {
                    o.parent = e.context.gameView.guideRootNode;
                    o.name = "guideNode";
                    n = o.getComponent(GuideUI_1.default);
                    i.guideUI = n;
                    n.setGuidePosition(t.data.tileId, d, t.data.showHand);
                    n.setText(t.data.text, t.data.guideStep);
                    e.finish(GameInputEnum_1.EBehaviorEnum.Success);
                });
        }
        else {
            if (o) {
                o.destroy();
                i.guideUI = null;
            }
            this.finishGuide();
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
            l.active = true;
        }
    };
    __decorate([
        mj.traitEvent("GuideBhv_finish")
    ], GuideBehavior.prototype, "finishGuide", null);
    __decorate([
        mj.traitEvent("GuideBhv_start")
    ], GuideBehavior.prototype, "start", null);
    return GuideBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.default = GuideBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2d1aWRlL1NjcmlwdHMvR3VpZGVCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUZBQWtGO0FBQ2xGLDZFQUE0RTtBQUM1RSxxQ0FBZ0M7QUFDaEM7SUFBMkMsaUNBQWlCO0lBQTVEO1FBQUEscUVBMkNDO1FBMUNDLGtCQUFZLEdBQUcsZUFBZSxDQUFDOztJQTBDakMsQ0FBQztJQXhDQyxtQ0FBVyxHQUFYLGNBQWUsQ0FBQztJQUVoQiw2QkFBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLElBQUksRUFDVixDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUN2QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFDakMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQ3BELENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQ3JDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUMvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzVCLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUMzRSxJQUFJLENBQUMsRUFBRTtnQkFDTCxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RELENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3BDOztnQkFBTSxpQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ3hDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO29CQUM1QyxDQUFDLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztvQkFDckIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsaUJBQU8sQ0FBQyxDQUFDO29CQUM1QixDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztvQkFDZCxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3RELENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDekMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsRUFBRTtnQkFDTCxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDbEI7WUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQXZDRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUM7b0RBQ2pCO0lBRWhCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQzs4Q0FzQy9CO0lBQ0gsb0JBQUM7Q0EzQ0QsQUEyQ0MsQ0EzQzBDLHFDQUFpQixHQTJDM0Q7a0JBM0NvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvR2FtZUJlaGF2aW9yc0Jhc2UnO1xuaW1wb3J0IEd1aWRlVUkgZnJvbSAnLi9HdWlkZVVJJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1aWRlQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIF9iZWhhdmlvcktleSA9IFwiR3VpZGVCZWhhdmlvclwiO1xuICBAbWoudHJhaXRFdmVudChcIkd1aWRlQmh2X2ZpbmlzaFwiKVxuICBmaW5pc2hHdWlkZSgpIHt9XG4gIEBtai50cmFpdEV2ZW50KFwiR3VpZGVCaHZfc3RhcnRcIilcbiAgc3RhcnQodCkge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIGkgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcuZ3VpZGVSb290Tm9kZSxcbiAgICAgIG4gPSBpLmd1aWRlVUksXG4gICAgICBvID0gaS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlTm9kZVwiKSxcbiAgICAgIGEgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVNYXAoKS5nZXQodC5kYXRhLnRpbGVJZCksXG4gICAgICBzID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3LnRvcFJvb3ROb2RlLFxuICAgICAgcCA9IHRoaXMuY29udGV4dC5nYW1lVmlldy5ib3R0b21Sb290Tm9kZSxcbiAgICAgIHUgPSBzLmdldENoaWxkQnlOYW1lKFwiYnRuQmFja1wiKSxcbiAgICAgIGwgPSBzLmdldENoaWxkQnlOYW1lKFwiYnRuU2V0dGluZ3NcIik7XG4gICAgaWYgKGEgJiYgIXQuZGF0YS5maW5pc2hHdWlkZSkge1xuICAgICAgcC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHUuYWN0aXZlID0gZmFsc2U7XG4gICAgICBsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdmFyIGQgPSBhLmxheWVyTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoYS5pbmZvLnRpbGVPYmplY3QuZ2V0UG9zaXRpb24oKSk7XG4gICAgICBpZiAobykge1xuICAgICAgICBuLnNldEd1aWRlUG9zaXRpb24odC5kYXRhLnRpbGVJZCwgZCwgdC5kYXRhLnNob3dIYW5kKTtcbiAgICAgICAgbi5zZXRUZXh0KHQuZGF0YS50ZXh0LCB0LmRhdGEuZ3VpZGVTdGVwKTtcbiAgICAgICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICAgIH0gZWxzZSBHdWlkZVVJLmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAobykge1xuICAgICAgICBvLnBhcmVudCA9IGUuY29udGV4dC5nYW1lVmlldy5ndWlkZVJvb3ROb2RlO1xuICAgICAgICBvLm5hbWUgPSBcImd1aWRlTm9kZVwiO1xuICAgICAgICBuID0gby5nZXRDb21wb25lbnQoR3VpZGVVSSk7XG4gICAgICAgIGkuZ3VpZGVVSSA9IG47XG4gICAgICAgIG4uc2V0R3VpZGVQb3NpdGlvbih0LmRhdGEudGlsZUlkLCBkLCB0LmRhdGEuc2hvd0hhbmQpO1xuICAgICAgICBuLnNldFRleHQodC5kYXRhLnRleHQsIHQuZGF0YS5ndWlkZVN0ZXApO1xuICAgICAgICBlLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChvKSB7XG4gICAgICAgIG8uZGVzdHJveSgpO1xuICAgICAgICBpLmd1aWRlVUkgPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5maW5pc2hHdWlkZSgpO1xuICAgICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICAgIGwuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn0iXX0=