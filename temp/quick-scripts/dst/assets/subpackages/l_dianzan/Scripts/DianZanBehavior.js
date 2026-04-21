
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dianzan/Scripts/DianZanBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1743vyLRZMC5y3OreVDmuY', 'DianZanBehavior');
// subpackages/l_dianzan/Scripts/DianZanBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DianZanBehavior = void 0;
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("../../../Scripts/base/GameBehaviorsBase");
var DianZanItem_1 = require("./DianZanItem");
var DianZanBehavior = /** @class */ (function (_super) {
    __extends(DianZanBehavior, _super);
    function DianZanBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DianZanBehavior.prototype.start = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var e, n, r, o, i, a, p, l, f, h, y, _, d, v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e = t.data;
                        n = e.tileId;
                        r = e.lastTileId;
                        if (!n || !r) {
                            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                            return [2 /*return*/];
                        }
                        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                        o = this.context.getTileNodeWorldPosition(n);
                        i = this.context.getTileNodeWorldPosition(r);
                        a = this.getScale(this.context.layoutScale);
                        return [4 /*yield*/, DianZanItem_1.default.createUI()];
                    case 1:
                        p = _a.sent();
                        return [4 /*yield*/, DianZanItem_1.default.createUI()];
                    case 2:
                        l = _a.sent();
                        f = this.context.gameView.effectNode;
                        p.parent = f;
                        h = f.convertToNodeSpaceAR(o);
                        p.position = this.getDianZanPosition(h);
                        l.parent = f;
                        y = f.convertToNodeSpaceAR(i);
                        l.position = this.getDianZanPosition(y);
                        _ = p.getComponent(DianZanItem_1.default);
                        d = l.getComponent(DianZanItem_1.default);
                        v = this.getAnimName();
                        this.playDianZanAni(_, d, v, a);
                        return [2 /*return*/];
                }
            });
        });
    };
    DianZanBehavior.prototype.getDianZanPosition = function (t) {
        return cc.v3(t.x, t.y, 0);
    };
    DianZanBehavior.prototype.getScale = function (t) {
        return t;
    };
    DianZanBehavior.prototype.getAnimName = function () {
        return "in";
    };
    DianZanBehavior.prototype.playDianZanAni = function (t, e, n, r) {
        t.setScale(r);
        e.setScale(r);
        t.startPlayAni(n);
        e.startPlayAni(n, function () { });
    };
    __decorate([
        mj.traitEvent("DianZanBhv_getPos")
    ], DianZanBehavior.prototype, "getDianZanPosition", null);
    __decorate([
        mj.traitEvent("DianZanBhv_getScale")
    ], DianZanBehavior.prototype, "getScale", null);
    __decorate([
        mj.traitEvent("DianZanBhv_getAniName")
    ], DianZanBehavior.prototype, "getAnimName", null);
    __decorate([
        mj.traitEvent("DianZanBhv_playAni")
    ], DianZanBehavior.prototype, "playDianZanAni", null);
    return DianZanBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.DianZanBehavior = DianZanBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RpYW56YW4vU2NyaXB0cy9EaWFuWmFuQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRkFBa0Y7QUFDbEYsNkVBQTRFO0FBQzVFLDZDQUF3QztBQUN4QztJQUFxQyxtQ0FBaUI7SUFBdEQ7O0lBZ0RBLENBQUM7SUEvQ08sK0JBQUssR0FBWCxVQUFZLENBQUM7Ozs7Ozt3QkFFWCxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDWCxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQzt3QkFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQzt3QkFDakIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTs0QkFDWixJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ25DLHNCQUFPO3lCQUNSO3dCQUNELElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDbkMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzdDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM3QyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUN4QyxxQkFBTSxxQkFBVyxDQUFDLFFBQVEsRUFBRSxFQUFBOzt3QkFBaEMsQ0FBQyxHQUFHLFNBQTRCLENBQUM7d0JBQzdCLHFCQUFNLHFCQUFXLENBQUMsUUFBUSxFQUFFLEVBQUE7O3dCQUFoQyxDQUFDLEdBQUcsU0FBNEIsQ0FBQzt3QkFDakMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQzt3QkFDckMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7d0JBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3hDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUM7d0JBQ2hDLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQzt3QkFDaEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDaEMsc0JBQU87Ozs7S0FDUjtJQUVELDRDQUFrQixHQUFsQixVQUFtQixDQUFDO1FBQ2xCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGtDQUFRLEdBQVIsVUFBUyxDQUFDO1FBQ1IsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxjQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFqQkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDOzZEQUdsQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzttREFHcEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7c0RBR3RDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO3lEQU1uQztJQUNILHNCQUFDO0NBaERELEFBZ0RDLENBaERvQyxxQ0FBaUIsR0FnRHJEO0FBaERZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvR2FtZUJlaGF2aW9yc0Jhc2UnO1xuaW1wb3J0IERpYW5aYW5JdGVtIGZyb20gJy4vRGlhblphbkl0ZW0nO1xuZXhwb3J0IGNsYXNzIERpYW5aYW5CZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgYXN5bmMgc3RhcnQodCkge1xuICAgIHZhciBlLCBuLCByLCBvLCBpLCBhLCBwLCBsLCBmLCBoLCB5LCBfLCBkLCB2O1xuICAgIGUgPSB0LmRhdGE7XG4gICAgbiA9IGUudGlsZUlkO1xuICAgIHIgPSBlLmxhc3RUaWxlSWQ7XG4gICAgaWYgKCFuIHx8ICFyKSB7XG4gICAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgIG8gPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVXb3JsZFBvc2l0aW9uKG4pO1xuICAgIGkgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVXb3JsZFBvc2l0aW9uKHIpO1xuICAgIGEgPSB0aGlzLmdldFNjYWxlKHRoaXMuY29udGV4dC5sYXlvdXRTY2FsZSk7XG4gICAgcCA9IGF3YWl0IERpYW5aYW5JdGVtLmNyZWF0ZVVJKCk7XG4gICAgbCA9IGF3YWl0IERpYW5aYW5JdGVtLmNyZWF0ZVVJKCk7XG4gICAgZiA9IHRoaXMuY29udGV4dC5nYW1lVmlldy5lZmZlY3ROb2RlO1xuICAgIHAucGFyZW50ID0gZjtcbiAgICBoID0gZi5jb252ZXJ0VG9Ob2RlU3BhY2VBUihvKTtcbiAgICBwLnBvc2l0aW9uID0gdGhpcy5nZXREaWFuWmFuUG9zaXRpb24oaCk7XG4gICAgbC5wYXJlbnQgPSBmO1xuICAgIHkgPSBmLmNvbnZlcnRUb05vZGVTcGFjZUFSKGkpO1xuICAgIGwucG9zaXRpb24gPSB0aGlzLmdldERpYW5aYW5Qb3NpdGlvbih5KTtcbiAgICBfID0gcC5nZXRDb21wb25lbnQoRGlhblphbkl0ZW0pO1xuICAgIGQgPSBsLmdldENvbXBvbmVudChEaWFuWmFuSXRlbSk7XG4gICAgdiA9IHRoaXMuZ2V0QW5pbU5hbWUoKTtcbiAgICB0aGlzLnBsYXlEaWFuWmFuQW5pKF8sIGQsIHYsIGEpO1xuICAgIHJldHVybjtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRpYW5aYW5CaHZfZ2V0UG9zXCIpXG4gIGdldERpYW5aYW5Qb3NpdGlvbih0KSB7XG4gICAgcmV0dXJuIGNjLnYzKHQueCwgdC55LCAwKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRpYW5aYW5CaHZfZ2V0U2NhbGVcIilcbiAgZ2V0U2NhbGUodCkge1xuICAgIHJldHVybiB0O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRGlhblphbkJodl9nZXRBbmlOYW1lXCIpXG4gIGdldEFuaW1OYW1lKCkge1xuICAgIHJldHVybiBcImluXCI7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEaWFuWmFuQmh2X3BsYXlBbmlcIilcbiAgcGxheURpYW5aYW5BbmkodCwgZSwgbiwgcikge1xuICAgIHQuc2V0U2NhbGUocik7XG4gICAgZS5zZXRTY2FsZShyKTtcbiAgICB0LnN0YXJ0UGxheUFuaShuKTtcbiAgICBlLnN0YXJ0UGxheUFuaShuLCBmdW5jdGlvbiAoKSB7fSk7XG4gIH1cbn0iXX0=