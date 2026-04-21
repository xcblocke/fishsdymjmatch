
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classic/Scripts/StageRightItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '544e9uMh5pLHKl8KqhulVLR', 'StageRightItem');
// subpackages/l_classic/Scripts/StageRightItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var StageRightItem = /** @class */ (function (_super) {
    __extends(StageRightItem, _super);
    function StageRightItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stageLabel = null;
        _this._currentStage = 1;
        return _this;
    }
    StageRightItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    StageRightItem.prototype.updateStage = function (t) {
        if (cc.isValid(this.stageLabel)) {
            this._currentStage = t;
            var e = I18NStrings_1.default.get("classic_stage", "Stage"), n = I18NStrings_1.default.stringFormat(e + " {0}", t);
            this.stageLabel.string = n;
        }
    };
    StageRightItem.prototype.getCurrentStage = function () {
        return this._currentStage;
    };
    StageRightItem.prototype.checkAndUpdate = function (t) {
        if (t !== this._currentStage) {
            this.updateStage(t);
            return true;
        }
        return false;
    };
    StageRightItem.prefabUrl = "prefabs/StageRightItem";
    StageRightItem.bundleName = "l_classic";
    __decorate([
        mj.component("label", cc.Label)
    ], StageRightItem.prototype, "stageLabel", void 0);
    StageRightItem = __decorate([
        mj.class
    ], StageRightItem);
    return StageRightItem;
}(BaseUI_1.default));
exports.default = StageRightItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWMvU2NyaXB0cy9TdGFnZVJpZ2h0SXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELDJFQUFzRTtBQUV0RTtJQUE0QyxrQ0FBTTtJQUFsRDtRQUFBLHFFQTJCQztRQXpCQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixtQkFBYSxHQUFHLENBQUMsQ0FBQzs7SUF3QnBCLENBQUM7SUFyQkMsK0JBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELG9DQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsR0FBRyxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLEVBQy9DLENBQUMsR0FBRyxxQkFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFDRCx3Q0FBZSxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRCx1Q0FBYyxHQUFkLFVBQWUsQ0FBQztRQUNkLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBdEJNLHdCQUFTLEdBQUcsd0JBQXdCLENBQUM7SUFDckMseUJBQVUsR0FBRyxXQUFXLENBQUM7SUFIaEM7UUFEQyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNMO0lBRlIsY0FBYztRQURsQyxFQUFFLENBQUMsS0FBSztPQUNZLGNBQWMsQ0EyQmxDO0lBQUQscUJBQUM7Q0EzQkQsQUEyQkMsQ0EzQjJDLGdCQUFNLEdBMkJqRDtrQkEzQm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWdlUmlnaHRJdGVtIGV4dGVuZHMgQmFzZVVJIHtcbiAgQG1qLmNvbXBvbmVudChcImxhYmVsXCIsIGNjLkxhYmVsKVxuICBzdGFnZUxhYmVsOiBcImxhYmVsXCIgPSBudWxsO1xuICBfY3VycmVudFN0YWdlID0gMTtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9TdGFnZVJpZ2h0SXRlbVwiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IFwibF9jbGFzc2ljXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICB1cGRhdGVTdGFnZSh0KSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5zdGFnZUxhYmVsKSkge1xuICAgICAgdGhpcy5fY3VycmVudFN0YWdlID0gdDtcbiAgICAgIHZhciBlID0gSTE4TlN0cmluZ3MuZ2V0KFwiY2xhc3NpY19zdGFnZVwiLCBcIlN0YWdlXCIpLFxuICAgICAgICBuID0gSTE4TlN0cmluZ3Muc3RyaW5nRm9ybWF0KGUgKyBcIiB7MH1cIiwgdCk7XG4gICAgICB0aGlzLnN0YWdlTGFiZWwuc3RyaW5nID0gbjtcbiAgICB9XG4gIH1cbiAgZ2V0Q3VycmVudFN0YWdlKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50U3RhZ2U7XG4gIH1cbiAgY2hlY2tBbmRVcGRhdGUodCkge1xuICAgIGlmICh0ICE9PSB0aGlzLl9jdXJyZW50U3RhZ2UpIHtcbiAgICAgIHRoaXMudXBkYXRlU3RhZ2UodCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59Il19