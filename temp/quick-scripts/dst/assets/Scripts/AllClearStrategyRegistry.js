
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/AllClearStrategyRegistry.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb764BUYllFLI1IZDxdkDJe', 'AllClearStrategyRegistry');
// Scripts/AllClearStrategyRegistry.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AllClearStrategyRegistry = void 0;
var AllClearStrategyRegistry = /** @class */ (function () {
    function AllClearStrategyRegistry() {
    }
    AllClearStrategyRegistry.register = function (e, t) {
        this._map.set(e, t);
    };
    AllClearStrategyRegistry.get = function (e) {
        var t;
        return null !== (t = this._map.get(e)) && void 0 !== t ? t : null;
    };
    AllClearStrategyRegistry.getOrDefault = function (e) {
        var t, o;
        return null !== (o = null !== (t = this._map.get(e)) && void 0 !== t ? t : this._map.get(1)) && void 0 !== o ? o : null;
    };
    AllClearStrategyRegistry.has = function (e) {
        return this._map.has(e);
    };
    AllClearStrategyRegistry._map = new Map();
    return AllClearStrategyRegistry;
}());
exports.AllClearStrategyRegistry = AllClearStrategyRegistry;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FsbENsZWFyU3RyYXRlZ3lSZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFnQkEsQ0FBQztJQWRRLGlDQUFRLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDTSw0QkFBRyxHQUFWLFVBQVcsQ0FBQztRQUNWLElBQUksQ0FBQyxDQUFDO1FBQ04sT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3BFLENBQUM7SUFDTSxxQ0FBWSxHQUFuQixVQUFvQixDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDMUgsQ0FBQztJQUNNLDRCQUFHLEdBQVYsVUFBVyxDQUFDO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBZE0sNkJBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBZTFCLCtCQUFDO0NBaEJELEFBZ0JDLElBQUE7QUFoQlksNERBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFsbENsZWFyU3RyYXRlZ3lSZWdpc3RyeSB7XG4gIHN0YXRpYyBfbWFwID0gbmV3IE1hcCgpO1xuICBzdGF0aWMgcmVnaXN0ZXIoZSwgdCkge1xuICAgIHRoaXMuX21hcC5zZXQoZSwgdCk7XG4gIH1cbiAgc3RhdGljIGdldChlKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gdGhpcy5fbWFwLmdldChlKSkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IG51bGw7XG4gIH1cbiAgc3RhdGljIGdldE9yRGVmYXVsdChlKSB7XG4gICAgdmFyIHQsIG87XG4gICAgcmV0dXJuIG51bGwgIT09IChvID0gbnVsbCAhPT0gKHQgPSB0aGlzLl9tYXAuZ2V0KGUpKSAmJiB2b2lkIDAgIT09IHQgPyB0IDogdGhpcy5fbWFwLmdldCgxKSkgJiYgdm9pZCAwICE9PSBvID8gbyA6IG51bGw7XG4gIH1cbiAgc3RhdGljIGhhcyhlKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcC5oYXMoZSk7XG4gIH1cbn0iXX0=