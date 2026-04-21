
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_rankMotivation/Scripts/RankMotivationUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb4f6BmgUVFNLI1IyDexZcn', 'RankMotivationUI');
// subpackages/r_rankMotivation/Scripts/RankMotivationUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var RankMotivationUI = /** @class */ (function (_super) {
    __extends(RankMotivationUI, _super);
    function RankMotivationUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._titleNode = null;
        _this._timeNode = null;
        _this._desc = null;
        return _this;
    }
    RankMotivationUI.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    RankMotivationUI.prototype.updateUI = function (t, e, o) {
        this.node.getComponent(cc.Widget).updateAlignment();
        t.parent = this._titleNode;
        t.setPosition(0, 0, 0);
        e.parent = this._timeNode;
        e.setPosition(0, 0, 0);
        var n = I18NStrings_1.default.get("LeaderBoard_rank_1", "<color=#f5e8c4>You climbed an amazing </c><outline color=#602e0b width=3><color=#ffd04b><size=38>13</size></color></outline><color=#f5e8c4> sports up the leaderboard</c>").replace("{0}", String(o));
        this._desc.getComponent(cc.RichText).string = n;
    };
    RankMotivationUI.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    RankMotivationUI.bundleName = "r_rankMotivation";
    RankMotivationUI.prefabUrl = "prefabs/rankMotivation";
    __decorate([
        mj.node("titleNode")
    ], RankMotivationUI.prototype, "_titleNode", void 0);
    __decorate([
        mj.node("timeNode")
    ], RankMotivationUI.prototype, "_timeNode", void 0);
    __decorate([
        mj.node("desc")
    ], RankMotivationUI.prototype, "_desc", void 0);
    RankMotivationUI = __decorate([
        mj.class
    ], RankMotivationUI);
    return RankMotivationUI;
}(BaseUI_1.default));
exports.default = RankMotivationUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3JhbmtNb3RpdmF0aW9uL1NjcmlwdHMvUmFua01vdGl2YXRpb25VSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQXNFO0FBQ3RFLCtEQUEwRDtBQUUxRDtJQUE4QyxvQ0FBTTtJQUFwRDtRQUFBLHFFQXdCQztRQXRCQyxnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFFL0IsZUFBUyxHQUFlLElBQUksQ0FBQztRQUU3QixXQUFLLEdBQVcsSUFBSSxDQUFDOztJQWtCdkIsQ0FBQztJQWZDLGlDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxtQ0FBUSxHQUFSLFVBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BELENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSwyS0FBMkssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDclAsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELG9DQUFTLEdBQVQ7UUFDRSxpQkFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFoQk0sMkJBQVUsR0FBRyxrQkFBa0IsQ0FBQztJQUNoQywwQkFBUyxHQUFHLHdCQUF3QixDQUFDO0lBTjVDO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7d0RBQ1U7SUFFL0I7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzt1REFDUztJQUU3QjtRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO21EQUNLO0lBTkYsZ0JBQWdCO1FBRHBDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksZ0JBQWdCLENBd0JwQztJQUFELHVCQUFDO0NBeEJELEFBd0JDLENBeEI2QyxnQkFBTSxHQXdCbkQ7a0JBeEJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmtNb3RpdmF0aW9uVUkgZXh0ZW5kcyBCYXNlVUkge1xuICBAbWoubm9kZShcInRpdGxlTm9kZVwiKVxuICBfdGl0bGVOb2RlOiBcInRpdGxlTm9kZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJ0aW1lTm9kZVwiKVxuICBfdGltZU5vZGU6IFwidGltZU5vZGVcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiZGVzY1wiKVxuICBfZGVzYzogXCJkZXNjXCIgPSBudWxsO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IFwicl9yYW5rTW90aXZhdGlvblwiO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL3JhbmtNb3RpdmF0aW9uXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICB1cGRhdGVVSSh0LCBlLCBvKSB7XG4gICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgIHQucGFyZW50ID0gdGhpcy5fdGl0bGVOb2RlO1xuICAgIHQuc2V0UG9zaXRpb24oMCwgMCwgMCk7XG4gICAgZS5wYXJlbnQgPSB0aGlzLl90aW1lTm9kZTtcbiAgICBlLnNldFBvc2l0aW9uKDAsIDAsIDApO1xuICAgIHZhciBuID0gSTE4TlN0cmluZ3MuZ2V0KFwiTGVhZGVyQm9hcmRfcmFua18xXCIsIFwiPGNvbG9yPSNmNWU4YzQ+WW91IGNsaW1iZWQgYW4gYW1hemluZyA8L2M+PG91dGxpbmUgY29sb3I9IzYwMmUwYiB3aWR0aD0zPjxjb2xvcj0jZmZkMDRiPjxzaXplPTM4PjEzPC9zaXplPjwvY29sb3I+PC9vdXRsaW5lPjxjb2xvcj0jZjVlOGM0PiBzcG9ydHMgdXAgdGhlIGxlYWRlcmJvYXJkPC9jPlwiKS5yZXBsYWNlKFwiezB9XCIsIFN0cmluZyhvKSk7XG4gICAgdGhpcy5fZGVzYy5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLnN0cmluZyA9IG47XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHN1cGVyLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICB9XG59Il19