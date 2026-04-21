
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classic/Scripts/HighestScoreItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88192joRstEPbcOs++cfXAD', 'HighestScoreItem');
// subpackages/l_classic/Scripts/HighestScoreItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var HighestScoreItem = /** @class */ (function (_super) {
    __extends(HighestScoreItem, _super);
    function HighestScoreItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this._currentMaxScore = 0;
        return _this;
    }
    HighestScoreItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    HighestScoreItem.prototype.updateScore = function (t) {
        if (cc.isValid(this.scoreLabel)) {
            this._currentMaxScore = t;
            this.scoreLabel.string = t.toString();
        }
    };
    HighestScoreItem.prototype.getCurrentMaxScore = function () {
        return this._currentMaxScore;
    };
    HighestScoreItem.prototype.checkAndUpdate = function (t, e) {
        var n = Math.max(t, e);
        if (n > this._currentMaxScore) {
            this.updateScore(n);
            return true;
        }
        return false;
    };
    HighestScoreItem.prototype.reset = function (t) {
        this.updateScore(t);
    };
    HighestScoreItem.prefabUrl = "prefabs/HighestScoreItem";
    HighestScoreItem.bundleName = "l_classic";
    __decorate([
        mj.component("label", cc.Label)
    ], HighestScoreItem.prototype, "scoreLabel", void 0);
    HighestScoreItem = __decorate([
        mj.class
    ], HighestScoreItem);
    return HighestScoreItem;
}(BaseUI_1.default));
exports.default = HighestScoreItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWMvU2NyaXB0cy9IaWdoZXN0U2NvcmVJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFFMUQ7SUFBOEMsb0NBQU07SUFBcEQ7UUFBQSxxRUE2QkM7UUEzQkMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0Isc0JBQWdCLEdBQUcsQ0FBQyxDQUFDOztJQTBCdkIsQ0FBQztJQXZCQyxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsc0NBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUNELDZDQUFrQixHQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFDRCx5Q0FBYyxHQUFkLFVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELGdDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBeEJNLDBCQUFTLEdBQUcsMEJBQTBCLENBQUM7SUFDdkMsMkJBQVUsR0FBRyxXQUFXLENBQUM7SUFIaEM7UUFEQyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO3dEQUNMO0lBRlIsZ0JBQWdCO1FBRHBDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksZ0JBQWdCLENBNkJwQztJQUFELHVCQUFDO0NBN0JELEFBNkJDLENBN0I2QyxnQkFBTSxHQTZCbkQ7a0JBN0JvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpZ2hlc3RTY29yZUl0ZW0gZXh0ZW5kcyBCYXNlVUkge1xuICBAbWouY29tcG9uZW50KFwibGFiZWxcIiwgY2MuTGFiZWwpXG4gIHNjb3JlTGFiZWw6IFwibGFiZWxcIiA9IG51bGw7XG4gIF9jdXJyZW50TWF4U2NvcmUgPSAwO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL0hpZ2hlc3RTY29yZUl0ZW1cIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcImxfY2xhc3NpY1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgdXBkYXRlU2NvcmUodCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuc2NvcmVMYWJlbCkpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRNYXhTY29yZSA9IHQ7XG4gICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gdC50b1N0cmluZygpO1xuICAgIH1cbiAgfVxuICBnZXRDdXJyZW50TWF4U2NvcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRNYXhTY29yZTtcbiAgfVxuICBjaGVja0FuZFVwZGF0ZSh0LCBlKSB7XG4gICAgdmFyIG4gPSBNYXRoLm1heCh0LCBlKTtcbiAgICBpZiAobiA+IHRoaXMuX2N1cnJlbnRNYXhTY29yZSkge1xuICAgICAgdGhpcy51cGRhdGVTY29yZShuKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmVzZXQodCkge1xuICAgIHRoaXMudXBkYXRlU2NvcmUodCk7XG4gIH1cbn0iXX0=