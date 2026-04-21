
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ClassicExtractTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'afa97TQlWxJU5S+pAezdRcG', 'ClassicExtractTool');
// Scripts/ClassicExtractTool.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicExtractTool = void 0;
var IClassicExtractTypes_1 = require("./IClassicExtractTypes");
var ClassicLevelRepository_1 = require("./core/extractClassic/ClassicLevelRepository");
var SwimlaneStrategy_1 = require("./SwimlaneStrategy");
var ClassicExtractTool = /** @class */ (function () {
    function ClassicExtractTool() {
    }
    ClassicExtractTool_1 = ClassicExtractTool;
    ClassicExtractTool.getInstance = function () {
        ClassicExtractTool_1._instance || (ClassicExtractTool_1._instance = new ClassicExtractTool_1());
        return ClassicExtractTool_1._instance;
    };
    ClassicExtractTool.prototype.init = function () {
        return ClassicLevelRepository_1.ClassicLevelRepository.getInstance().init();
    };
    ClassicExtractTool.prototype.extractInitial = function () {
        var e = this;
        return this.init().then(function () {
            var t = ClassicLevelRepository_1.ClassicLevelRepository.getInstance(), o = t.getRandomInitialLevel();
            o || (o = t.getAllInitialLevels()[0]);
            var n = e._buildResult(o, IClassicExtractTypes_1.EDifficultyType.Simple);
            n.libName = t.getLibName(t.getInitialPath());
            return n;
        });
    };
    ClassicExtractTool.prototype.extractSwimlane = function (e) {
        var t = e.getScore(), o = e.getMaxScore(), n = e.getNextBatchId(), i = e.getSwimlaneTimeSeconds(), r = e.getSwimlaneRotationCount(), l = SwimlaneStrategy_1.SwimlaneStrategy.getInstance().selectDifficultyType(t, o, i, n, r), s = l.difficultyType;
        l.rotationUsed && e.incrementSwimlaneRotationCount();
        return this.extractByDifficulty(s);
    };
    ClassicExtractTool.prototype.extractByDifficulty = function (e) {
        var t = this;
        return this.init().then(function () {
            var o = ClassicLevelRepository_1.ClassicLevelRepository.getInstance(), n = t._getLevelByDifficulty(e), i = t._buildResult(n, e);
            i.libName = o.getLibName(o.getLoopPath());
            return i;
        });
    };
    ClassicExtractTool.prototype._getLevelByDifficulty = function (e) {
        var t = ClassicLevelRepository_1.ClassicLevelRepository.getInstance(), o = IClassicExtractTypes_1.DIFFICULTY_LAYER_MAP[e], n = t.getRandomLoopLevelByLayers(o);
        n || (n = t.getAllLoopLevels()[0]);
        return n;
    };
    ClassicExtractTool.prototype._buildResult = function (e, t) {
        return {
            levelStr: e.Content,
            index: e.Index,
            difficultyType: t,
            layer: e.Layer
        };
    };
    var ClassicExtractTool_1;
    ClassicExtractTool = ClassicExtractTool_1 = __decorate([
        mj.class("ClassicExtractTool")
    ], ClassicExtractTool);
    return ClassicExtractTool;
}());
exports.ClassicExtractTool = ClassicExtractTool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NsYXNzaWNFeHRyYWN0VG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUErRTtBQUMvRSx1RkFBc0Y7QUFDdEYsdURBQXNEO0FBRXREO0lBQUE7SUF1REEsQ0FBQzsyQkF2RFksa0JBQWtCO0lBQ3RCLDhCQUFXLEdBQWxCO1FBQ0Usb0JBQWtCLENBQUMsU0FBUyxJQUFJLENBQUMsb0JBQWtCLENBQUMsU0FBUyxHQUFHLElBQUksb0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBQzFGLE9BQU8sb0JBQWtCLENBQUMsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxpQ0FBSSxHQUFKO1FBQ0UsT0FBTywrQ0FBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsMkNBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsR0FBRywrQ0FBc0IsQ0FBQyxXQUFXLEVBQUUsRUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLHNDQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEQsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsNENBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUNsQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUN0QixDQUFDLEdBQUcsQ0FBQyxDQUFDLHNCQUFzQixFQUFFLEVBQzlCLENBQUMsR0FBRyxDQUFDLENBQUMsd0JBQXdCLEVBQUUsRUFDaEMsQ0FBQyxHQUFHLG1DQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDdEUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUM7UUFDdkIsQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsOEJBQThCLEVBQUUsQ0FBQztRQUNyRCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsZ0RBQW1CLEdBQW5CLFVBQW9CLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxHQUFHLCtDQUFzQixDQUFDLFdBQVcsRUFBRSxFQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUM5QixDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsa0RBQXFCLEdBQXJCLFVBQXNCLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsK0NBQXNCLENBQUMsV0FBVyxFQUFFLEVBQzFDLENBQUMsR0FBRywyQ0FBb0IsQ0FBQyxDQUFDLENBQUMsRUFDM0IsQ0FBQyxHQUFHLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCx5Q0FBWSxHQUFaLFVBQWEsQ0FBQyxFQUFFLENBQUM7UUFDZixPQUFPO1lBQ0wsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPO1lBQ25CLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSztZQUNkLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSztTQUNmLENBQUM7SUFDSixDQUFDOztJQXREVSxrQkFBa0I7UUFEOUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztPQUNsQixrQkFBa0IsQ0F1RDlCO0lBQUQseUJBQUM7Q0F2REQsQUF1REMsSUFBQTtBQXZEWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFRGlmZmljdWx0eVR5cGUsIERJRkZJQ1VMVFlfTEFZRVJfTUFQIH0gZnJvbSAnLi9JQ2xhc3NpY0V4dHJhY3RUeXBlcyc7XG5pbXBvcnQgeyBDbGFzc2ljTGV2ZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi9jb3JlL2V4dHJhY3RDbGFzc2ljL0NsYXNzaWNMZXZlbFJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3dpbWxhbmVTdHJhdGVneSB9IGZyb20gJy4vU3dpbWxhbmVTdHJhdGVneSc7XG5AbWouY2xhc3MoXCJDbGFzc2ljRXh0cmFjdFRvb2xcIilcbmV4cG9ydCBjbGFzcyBDbGFzc2ljRXh0cmFjdFRvb2wge1xuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgQ2xhc3NpY0V4dHJhY3RUb29sLl9pbnN0YW5jZSB8fCAoQ2xhc3NpY0V4dHJhY3RUb29sLl9pbnN0YW5jZSA9IG5ldyBDbGFzc2ljRXh0cmFjdFRvb2woKSk7XG4gICAgcmV0dXJuIENsYXNzaWNFeHRyYWN0VG9vbC5faW5zdGFuY2U7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICByZXR1cm4gQ2xhc3NpY0xldmVsUmVwb3NpdG9yeS5nZXRJbnN0YW5jZSgpLmluaXQoKTtcbiAgfVxuICBleHRyYWN0SW5pdGlhbCgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHQgPSBDbGFzc2ljTGV2ZWxSZXBvc2l0b3J5LmdldEluc3RhbmNlKCksXG4gICAgICAgIG8gPSB0LmdldFJhbmRvbUluaXRpYWxMZXZlbCgpO1xuICAgICAgbyB8fCAobyA9IHQuZ2V0QWxsSW5pdGlhbExldmVscygpWzBdKTtcbiAgICAgIHZhciBuID0gZS5fYnVpbGRSZXN1bHQobywgRURpZmZpY3VsdHlUeXBlLlNpbXBsZSk7XG4gICAgICBuLmxpYk5hbWUgPSB0LmdldExpYk5hbWUodC5nZXRJbml0aWFsUGF0aCgpKTtcbiAgICAgIHJldHVybiBuO1xuICAgIH0pO1xuICB9XG4gIGV4dHJhY3RTd2ltbGFuZShlKSB7XG4gICAgdmFyIHQgPSBlLmdldFNjb3JlKCksXG4gICAgICBvID0gZS5nZXRNYXhTY29yZSgpLFxuICAgICAgbiA9IGUuZ2V0TmV4dEJhdGNoSWQoKSxcbiAgICAgIGkgPSBlLmdldFN3aW1sYW5lVGltZVNlY29uZHMoKSxcbiAgICAgIHIgPSBlLmdldFN3aW1sYW5lUm90YXRpb25Db3VudCgpLFxuICAgICAgbCA9IFN3aW1sYW5lU3RyYXRlZ3kuZ2V0SW5zdGFuY2UoKS5zZWxlY3REaWZmaWN1bHR5VHlwZSh0LCBvLCBpLCBuLCByKSxcbiAgICAgIHMgPSBsLmRpZmZpY3VsdHlUeXBlO1xuICAgIGwucm90YXRpb25Vc2VkICYmIGUuaW5jcmVtZW50U3dpbWxhbmVSb3RhdGlvbkNvdW50KCk7XG4gICAgcmV0dXJuIHRoaXMuZXh0cmFjdEJ5RGlmZmljdWx0eShzKTtcbiAgfVxuICBleHRyYWN0QnlEaWZmaWN1bHR5KGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG8gPSBDbGFzc2ljTGV2ZWxSZXBvc2l0b3J5LmdldEluc3RhbmNlKCksXG4gICAgICAgIG4gPSB0Ll9nZXRMZXZlbEJ5RGlmZmljdWx0eShlKSxcbiAgICAgICAgaSA9IHQuX2J1aWxkUmVzdWx0KG4sIGUpO1xuICAgICAgaS5saWJOYW1lID0gby5nZXRMaWJOYW1lKG8uZ2V0TG9vcFBhdGgoKSk7XG4gICAgICByZXR1cm4gaTtcbiAgICB9KTtcbiAgfVxuICBfZ2V0TGV2ZWxCeURpZmZpY3VsdHkoZSkge1xuICAgIHZhciB0ID0gQ2xhc3NpY0xldmVsUmVwb3NpdG9yeS5nZXRJbnN0YW5jZSgpLFxuICAgICAgbyA9IERJRkZJQ1VMVFlfTEFZRVJfTUFQW2VdLFxuICAgICAgbiA9IHQuZ2V0UmFuZG9tTG9vcExldmVsQnlMYXllcnMobyk7XG4gICAgbiB8fCAobiA9IHQuZ2V0QWxsTG9vcExldmVscygpWzBdKTtcbiAgICByZXR1cm4gbjtcbiAgfVxuICBfYnVpbGRSZXN1bHQoZSwgdCkge1xuICAgIHJldHVybiB7XG4gICAgICBsZXZlbFN0cjogZS5Db250ZW50LFxuICAgICAgaW5kZXg6IGUuSW5kZXgsXG4gICAgICBkaWZmaWN1bHR5VHlwZTogdCxcbiAgICAgIGxheWVyOiBlLkxheWVyXG4gICAgfTtcbiAgfVxufSJdfQ==