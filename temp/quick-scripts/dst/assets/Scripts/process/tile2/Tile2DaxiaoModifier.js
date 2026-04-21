
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tile2/Tile2DaxiaoModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4a1e50QGfVLvLSlvyBFmOW1', 'Tile2DaxiaoModifier');
// Scripts/process/tile2/Tile2DaxiaoModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../../BaseCoreObject");
var CollectInterfact_1 = require("../../constant/CollectInterfact");
var Tile2DaxiaoModifier = /** @class */ (function (_super) {
    __extends(Tile2DaxiaoModifier, _super);
    function Tile2DaxiaoModifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2DaxiaoModifier.prototype.modifyDaxiaoCard = function (e, t) {
        var o, n;
        try {
            for (var i = __values(t), a = i.next(); !a.done; a = i.next()) {
                var s = a.value, c = [s.tileId1, s.tileId2];
                this._context.tile2SlotBarModifier.clear([c], CollectInterfact_1.ECollectFrom.FromDaxiao);
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
    return Tile2DaxiaoModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = Tile2DaxiaoModifier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZTIvVGlsZTJEYXhpYW9Nb2RpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBQ3RELG9FQUErRDtBQUMvRDtJQUFpRCx1Q0FBYztJQUEvRDs7SUFxQkEsQ0FBQztJQXBCQyw4Q0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsK0JBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN4RTtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO0lBQ0gsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsQ0FyQmdELCtCQUFjLEdBcUI5RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZUNvcmVPYmplY3QnO1xuaW1wb3J0IHsgRUNvbGxlY3RGcm9tIH0gZnJvbSAnLi4vLi4vY29uc3RhbnQvQ29sbGVjdEludGVyZmFjdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMkRheGlhb01vZGlmaWVyIGV4dGVuZHMgQmFzZUNvcmVPYmplY3Qge1xuICBtb2RpZnlEYXhpYW9DYXJkKGUsIHQpIHtcbiAgICB2YXIgbywgbjtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaSA9IF9fdmFsdWVzKHQpLCBhID0gaS5uZXh0KCk7ICFhLmRvbmU7IGEgPSBpLm5leHQoKSkge1xuICAgICAgICB2YXIgcyA9IGEudmFsdWUsXG4gICAgICAgICAgYyA9IFtzLnRpbGVJZDEsIHMudGlsZUlkMl07XG4gICAgICAgIHRoaXMuX2NvbnRleHQudGlsZTJTbG90QmFyTW9kaWZpZXIuY2xlYXIoW2NdLCBFQ29sbGVjdEZyb20uRnJvbURheGlhbyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGEgJiYgIWEuZG9uZSAmJiAobiA9IGkucmV0dXJuKSAmJiBuLmNhbGwoaSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=