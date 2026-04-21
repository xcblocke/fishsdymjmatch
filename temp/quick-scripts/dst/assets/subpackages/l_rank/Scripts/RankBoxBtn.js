
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/RankBoxBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '122b0x0BctE5KxvqQtMQSr7', 'RankBoxBtn');
// subpackages/l_rank/Scripts/RankBoxBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var RankModel_1 = require("./RankModel");
var RankBoxBtn = /** @class */ (function (_super) {
    __extends(RankBoxBtn, _super);
    function RankBoxBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rankNum = 1;
        return _this;
    }
    RankBoxBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node.children[0], this.onBoxClick.bind(this));
    };
    RankBoxBtn.prototype.setRankNum = function (t) {
        this._rankNum = t;
    };
    RankBoxBtn.prototype.getRankNum = function () {
        return this._rankNum;
    };
    RankBoxBtn.prototype.getConfigReward = function () {
        return RankModel_1.default.getInstance().getRewardIdByRank(this._rankNum);
    };
    RankBoxBtn.prototype.onBoxClick = function () { };
    RankBoxBtn.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    RankBoxBtn.prefabUrl = "prefabs/rank/buttons/Rank1BoxBtn";
    __decorate([
        mj.traitEvent("RankBoxBtn_boxClk")
    ], RankBoxBtn.prototype, "onBoxClick", null);
    RankBoxBtn = __decorate([
        mj.class
    ], RankBoxBtn);
    return RankBoxBtn;
}(BaseUI_1.default));
exports.default = RankBoxBtn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9SYW5rQm94QnRuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQseUNBQW9DO0FBRXBDO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBcUJDO1FBcEJDLGNBQVEsR0FBRyxDQUFDLENBQUM7O0lBb0JmLENBQUM7SUFsQkMsMkJBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFDRCwrQkFBVSxHQUFWLFVBQVcsQ0FBQztRQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDRCwrQkFBVSxHQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxvQ0FBZSxHQUFmO1FBQ0UsT0FBTyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsK0JBQVUsR0FBVixjQUFjLENBQUM7SUFDZiw4QkFBUyxHQUFUO1FBQ0UsaUJBQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBbEJNLG9CQUFTLEdBQUcsa0NBQWtDLENBQUM7SUFldEQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO2dEQUNwQjtJQWpCSSxVQUFVO1FBRDlCLEVBQUUsQ0FBQyxLQUFLO09BQ1ksVUFBVSxDQXFCOUI7SUFBRCxpQkFBQztDQXJCRCxBQXFCQyxDQXJCdUMsZ0JBQU0sR0FxQjdDO2tCQXJCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmltcG9ydCBSYW5rTW9kZWwgZnJvbSAnLi9SYW5rTW9kZWwnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rQm94QnRuIGV4dGVuZHMgQmFzZVVJIHtcbiAgX3JhbmtOdW0gPSAxO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL3JhbmsvYnV0dG9ucy9SYW5rMUJveEJ0blwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMubm9kZS5jaGlsZHJlblswXSwgdGhpcy5vbkJveENsaWNrLmJpbmQodGhpcykpO1xuICB9XG4gIHNldFJhbmtOdW0odCkge1xuICAgIHRoaXMuX3JhbmtOdW0gPSB0O1xuICB9XG4gIGdldFJhbmtOdW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmtOdW07XG4gIH1cbiAgZ2V0Q29uZmlnUmV3YXJkKCkge1xuICAgIHJldHVybiBSYW5rTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRSZXdhcmRJZEJ5UmFuayh0aGlzLl9yYW5rTnVtKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtCb3hCdG5fYm94Q2xrXCIpXG4gIG9uQm94Q2xpY2soKSB7fVxuICBvbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gIH1cbn0iXX0=