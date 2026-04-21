
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankSynXingyun/Scripts/RankSynBoxTipsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a34926dxFA1KYSmYVDUa3j', 'RankSynBoxTipsTrait');
// subpackages/l_rankSynXingyun/Scripts/RankSynBoxTipsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RankSynBoxTipsTrait = /** @class */ (function (_super) {
    __extends(RankSynBoxTipsTrait, _super);
    function RankSynBoxTipsTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rankViewUpBgNode = null;
        _this.rankViewDownBgNode = null;
        _this.rankViewScrollRootNode = null;
        _this.rankIntroViewIns = null;
        return _this;
    }
    RankSynBoxTipsTrait.prototype.isTouchInRankViewUpDown = function (t) {
        if (!cc.isValid(this.rankViewUpBgNode) || !cc.isValid(this.rankViewDownBgNode))
            return false;
        var e = this.rankViewUpBgNode.getBoundingBoxToWorld(), r = this.rankViewDownBgNode.getBoundingBoxToWorld(), n = t.getLocation();
        return e.contains(n) || r.contains(n);
    };
    RankSynBoxTipsTrait.prototype.hasRankIntroView = function () {
        return cc.isValid(this.rankIntroViewIns);
    };
    RankSynBoxTipsTrait.prototype.onRankBoxTips_touchStart = function (t, e) {
        var r = t.args[0];
        if (this.isTouchInRankViewUpDown(r) || this.hasRankIntroView()) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    RankSynBoxTipsTrait.prototype.onRankVw_show = function (t, e) {
        this.rankViewUpBgNode = t.ins._upBgNode;
        this.rankViewDownBgNode = t.ins._downBgNode;
        this.rankViewScrollRootNode = t.ins._contentNode;
        e();
    };
    RankSynBoxTipsTrait.prototype.onRankIntroVw_show = function (t, e) {
        this.rankIntroViewIns = t.ins;
        e();
    };
    RankSynBoxTipsTrait.prototype.onRankVw_getTipsParent = function (t, e) {
        if (cc.isValid(this.rankViewScrollRootNode)) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: this.rankViewScrollRootNode
            });
        }
        else {
            e();
        }
    };
    RankSynBoxTipsTrait.traitKey = "RankSynBoxTips";
    RankSynBoxTipsTrait = __decorate([
        mj.trait,
        mj.class("RankSynBoxTipsTrait")
    ], RankSynBoxTipsTrait);
    return RankSynBoxTipsTrait;
}(Trait_1.default));
exports.default = RankSynBoxTipsTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtTeW5YaW5neXVuL1NjcmlwdHMvUmFua1N5bkJveFRpcHNUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQWlELHVDQUFLO0lBQXREO1FBQUEscUVBZ0RDO1FBL0NDLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4Qix3QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDMUIsNEJBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLHNCQUFnQixHQUFHLElBQUksQ0FBQzs7SUE0QzFCLENBQUM7SUExQ0MscURBQXVCLEdBQXZCLFVBQXdCLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzdGLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxFQUNuRCxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixFQUFFLEVBQ25ELENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEIsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELDhDQUFnQixHQUFoQjtRQUNFLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsc0RBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUU7WUFDOUQsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQzNDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUNELDJDQUFhLEdBQWIsVUFBYyxDQUFDLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQzVDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUNqRCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxnREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDOUIsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Qsb0RBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRTtZQUMzQyxDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQzFDLFNBQVMsRUFBRSxJQUFJLENBQUMsc0JBQXNCO2FBQ3ZDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQTFDTSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBTGhCLG1CQUFtQjtRQUZ2QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0FnRHZDO0lBQUQsMEJBQUM7Q0FoREQsQUFnREMsQ0FoRGdELGVBQUssR0FnRHJEO2tCQWhEb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUmFua1N5bkJveFRpcHNUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua1N5bkJveFRpcHNUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgcmFua1ZpZXdVcEJnTm9kZSA9IG51bGw7XG4gIHJhbmtWaWV3RG93bkJnTm9kZSA9IG51bGw7XG4gIHJhbmtWaWV3U2Nyb2xsUm9vdE5vZGUgPSBudWxsO1xuICByYW5rSW50cm9WaWV3SW5zID0gbnVsbDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJSYW5rU3luQm94VGlwc1wiO1xuICBpc1RvdWNoSW5SYW5rVmlld1VwRG93bih0KSB7XG4gICAgaWYgKCFjYy5pc1ZhbGlkKHRoaXMucmFua1ZpZXdVcEJnTm9kZSkgfHwgIWNjLmlzVmFsaWQodGhpcy5yYW5rVmlld0Rvd25CZ05vZGUpKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGUgPSB0aGlzLnJhbmtWaWV3VXBCZ05vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCksXG4gICAgICByID0gdGhpcy5yYW5rVmlld0Rvd25CZ05vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCksXG4gICAgICBuID0gdC5nZXRMb2NhdGlvbigpO1xuICAgIHJldHVybiBlLmNvbnRhaW5zKG4pIHx8IHIuY29udGFpbnMobik7XG4gIH1cbiAgaGFzUmFua0ludHJvVmlldygpIHtcbiAgICByZXR1cm4gY2MuaXNWYWxpZCh0aGlzLnJhbmtJbnRyb1ZpZXdJbnMpO1xuICB9XG4gIG9uUmFua0JveFRpcHNfdG91Y2hTdGFydCh0LCBlKSB7XG4gICAgdmFyIHIgPSB0LmFyZ3NbMF07XG4gICAgaWYgKHRoaXMuaXNUb3VjaEluUmFua1ZpZXdVcERvd24ocikgfHwgdGhpcy5oYXNSYW5rSW50cm9WaWV3KCkpIHtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uUmFua1Z3X3Nob3codCwgZSkge1xuICAgIHRoaXMucmFua1ZpZXdVcEJnTm9kZSA9IHQuaW5zLl91cEJnTm9kZTtcbiAgICB0aGlzLnJhbmtWaWV3RG93bkJnTm9kZSA9IHQuaW5zLl9kb3duQmdOb2RlO1xuICAgIHRoaXMucmFua1ZpZXdTY3JvbGxSb290Tm9kZSA9IHQuaW5zLl9jb250ZW50Tm9kZTtcbiAgICBlKCk7XG4gIH1cbiAgb25SYW5rSW50cm9Wd19zaG93KHQsIGUpIHtcbiAgICB0aGlzLnJhbmtJbnRyb1ZpZXdJbnMgPSB0LmlucztcbiAgICBlKCk7XG4gIH1cbiAgb25SYW5rVndfZ2V0VGlwc1BhcmVudCh0LCBlKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5yYW5rVmlld1Njcm9sbFJvb3ROb2RlKSkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLnJhbmtWaWV3U2Nyb2xsUm9vdE5vZGVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG59Il19