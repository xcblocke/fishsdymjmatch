
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tileTypes/DaxiaoModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a3cb5gAgRLnZMiVaSqqUm0', 'DaxiaoModifier');
// Scripts/process/tileTypes/DaxiaoModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../../BaseCoreObject");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var DaxiaoModifier = /** @class */ (function (_super) {
    __extends(DaxiaoModifier, _super);
    function DaxiaoModifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DaxiaoModifier.prototype.modifyDaxiaoCard = function (e, t) {
        var o, n;
        try {
            for (var i = __values(t), a = i.next(); !a.done; a = i.next()) {
                var s = a.value;
                this._context.getTileMapObject().selcectTileId(s.tileId1, true);
                this._context.getTileMapObject().selcectTileId(s.tileId2, true);
                this._context.clearModifier.modifyClear(e, GameTypeEnums_1.EMergeType.Daxiao);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (n = i.return) && n.call(i);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
    };
    return DaxiaoModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = DaxiaoModifier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZVR5cGVzL0RheGlhb01vZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQsNkVBQXlFO0FBQ3pFO0lBQTRDLGtDQUFjO0lBQTFEOztJQXNCQSxDQUFDO0lBckJDLHlDQUFnQixHQUFoQixVQUFpQixDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsMEJBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMvRDtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO0lBQ0gsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0F0QkEsQUFzQkMsQ0F0QjJDLCtCQUFjLEdBc0J6RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZUNvcmVPYmplY3QnO1xuaW1wb3J0IHsgRU1lcmdlVHlwZSB9IGZyb20gJy4uLy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF4aWFvTW9kaWZpZXIgZXh0ZW5kcyBCYXNlQ29yZU9iamVjdCB7XG4gIG1vZGlmeURheGlhb0NhcmQoZSwgdCkge1xuICAgIHZhciBvLCBuO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXModCksIGEgPSBpLm5leHQoKTsgIWEuZG9uZTsgYSA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gYS52YWx1ZTtcbiAgICAgICAgdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuc2VsY2VjdFRpbGVJZChzLnRpbGVJZDEsIHRydWUpO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5zZWxjZWN0VGlsZUlkKHMudGlsZUlkMiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuY2xlYXJNb2RpZmllci5tb2RpZnlDbGVhcihlLCBFTWVyZ2VUeXBlLkRheGlhbyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGEgJiYgIWEuZG9uZSAmJiAobiA9IGkucmV0dXJuKSAmJiBuLmNhbGwoaSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=