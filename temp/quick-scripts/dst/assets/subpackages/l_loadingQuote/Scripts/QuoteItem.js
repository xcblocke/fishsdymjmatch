
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_loadingQuote/Scripts/QuoteItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '135b7L9pBVArou4d3GIndSv', 'QuoteItem');
// subpackages/l_loadingQuote/Scripts/QuoteItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var _ = /\n?\s*—+/;
var QuoteItem = /** @class */ (function (_super) {
    __extends(QuoteItem, _super);
    function QuoteItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._label = null;
        _this._labelAuthor = null;
        return _this;
    }
    QuoteItem_1 = QuoteItem;
    QuoteItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var o = this.node.getChildByName("label");
        cc.isValid(o) && (this._label = o.getComponent(cc.Label));
        var a = this.node.getChildByName("labelAuthor");
        cc.isValid(a) && (this._labelAuthor = a.getComponent(cc.Label));
    };
    QuoteItem.prototype.setText = function (t) {
        var o = this.parseQuoteText(t), a = o.content, i = o.author;
        if (cc.isValid(this._label)) {
            this._label.string = "“ " + a + " ”";
            this._label._forceUpdateRenderData();
        }
        if (cc.isValid(this._labelAuthor))
            if (i) {
                this._labelAuthor.string = "——" + i;
                this._labelAuthor.node.active = true;
                this.updateAuthorPosition();
            }
            else
                this._labelAuthor.node.active = false;
    };
    QuoteItem.prototype.parseQuoteText = function (t) {
        if (!t)
            return {
                content: "",
                author: ""
            };
        var o = t.split(_);
        return o.length >= 2 ? {
            content: o[0].trim(),
            author: o[o.length - 1].trim()
        } : {
            content: t.trim(),
            author: ""
        };
    };
    QuoteItem.prototype.updateAuthorPosition = function () {
        if (cc.isValid(this._label) && cc.isValid(this._labelAuthor)) {
            var t = this._label.node, o = this._labelAuthor.node, i = t.y - t.height;
            o.y = i - QuoteItem_1.AUTHOR_MARGIN_TOP;
        }
    };
    var QuoteItem_1;
    QuoteItem.prefabUrl = "prefabs/QuoteItem";
    QuoteItem.bundleName = "l_loadingQuote";
    QuoteItem.AUTHOR_MARGIN_TOP = 7;
    QuoteItem = QuoteItem_1 = __decorate([
        mj.class
    ], QuoteItem);
    return QuoteItem;
}(BaseUI_1.default));
exports.default = QuoteItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xvYWRpbmdRdW90ZS9TY3JpcHRzL1F1b3RlSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQztBQUVuQjtJQUF1Qyw2QkFBTTtJQUE3QztRQUFBLHFFQWlEQztRQWhEQyxZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2Qsa0JBQVksR0FBRyxJQUFJLENBQUM7O0lBK0N0QixDQUFDO2tCQWpEb0IsU0FBUztJQU01QiwwQkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hELEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNELDJCQUFPLEdBQVAsVUFBUSxDQUFDO1FBQ1AsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFDNUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDZixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUN0QztRQUNELElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2FBQzdCOztnQkFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQy9DLENBQUM7SUFDRCxrQ0FBYyxHQUFkLFVBQWUsQ0FBQztRQUNkLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTztnQkFDYixPQUFPLEVBQUUsRUFBRTtnQkFDWCxNQUFNLEVBQUUsRUFBRTthQUNYLENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO1lBQ3BCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7U0FDL0IsQ0FBQyxDQUFDLENBQUM7WUFDRixPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRTtZQUNqQixNQUFNLEVBQUUsRUFBRTtTQUNYLENBQUM7SUFDSixDQUFDO0lBQ0Qsd0NBQW9CLEdBQXBCO1FBQ0UsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUM1RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFDdEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUMxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVMsQ0FBQyxpQkFBaUIsQ0FBQztTQUN2QztJQUNILENBQUM7O0lBN0NNLG1CQUFTLEdBQUcsbUJBQW1CLENBQUM7SUFDaEMsb0JBQVUsR0FBRyxnQkFBZ0IsQ0FBQztJQUM5QiwyQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFMVixTQUFTO1FBRDdCLEVBQUUsQ0FBQyxLQUFLO09BQ1ksU0FBUyxDQWlEN0I7SUFBRCxnQkFBQztDQWpERCxBQWlEQyxDQWpEc0MsZ0JBQU0sR0FpRDVDO2tCQWpEb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbnZhciBfID0gL1xcbj9cXHMq4oCUKy87XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1b3RlSXRlbSBleHRlbmRzIEJhc2VVSSB7XG4gIF9sYWJlbCA9IG51bGw7XG4gIF9sYWJlbEF1dGhvciA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvUXVvdGVJdGVtXCI7XG4gIHN0YXRpYyBidW5kbGVOYW1lID0gXCJsX2xvYWRpbmdRdW90ZVwiO1xuICBzdGF0aWMgQVVUSE9SX01BUkdJTl9UT1AgPSA3O1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdmFyIG8gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKTtcbiAgICBjYy5pc1ZhbGlkKG8pICYmICh0aGlzLl9sYWJlbCA9IG8uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKSk7XG4gICAgdmFyIGEgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbEF1dGhvclwiKTtcbiAgICBjYy5pc1ZhbGlkKGEpICYmICh0aGlzLl9sYWJlbEF1dGhvciA9IGEuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKSk7XG4gIH1cbiAgc2V0VGV4dCh0KSB7XG4gICAgdmFyIG8gPSB0aGlzLnBhcnNlUXVvdGVUZXh0KHQpLFxuICAgICAgYSA9IG8uY29udGVudCxcbiAgICAgIGkgPSBvLmF1dGhvcjtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9sYWJlbCkpIHtcbiAgICAgIHRoaXMuX2xhYmVsLnN0cmluZyA9IFwi4oCcIFwiICsgYSArIFwiIOKAnVwiO1xuICAgICAgdGhpcy5fbGFiZWwuX2ZvcmNlVXBkYXRlUmVuZGVyRGF0YSgpO1xuICAgIH1cbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9sYWJlbEF1dGhvcikpIGlmIChpKSB7XG4gICAgICB0aGlzLl9sYWJlbEF1dGhvci5zdHJpbmcgPSBcIuKAlOKAlFwiICsgaTtcbiAgICAgIHRoaXMuX2xhYmVsQXV0aG9yLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMudXBkYXRlQXV0aG9yUG9zaXRpb24oKTtcbiAgICB9IGVsc2UgdGhpcy5fbGFiZWxBdXRob3Iubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuICBwYXJzZVF1b3RlVGV4dCh0KSB7XG4gICAgaWYgKCF0KSByZXR1cm4ge1xuICAgICAgY29udGVudDogXCJcIixcbiAgICAgIGF1dGhvcjogXCJcIlxuICAgIH07XG4gICAgdmFyIG8gPSB0LnNwbGl0KF8pO1xuICAgIHJldHVybiBvLmxlbmd0aCA+PSAyID8ge1xuICAgICAgY29udGVudDogb1swXS50cmltKCksXG4gICAgICBhdXRob3I6IG9bby5sZW5ndGggLSAxXS50cmltKClcbiAgICB9IDoge1xuICAgICAgY29udGVudDogdC50cmltKCksXG4gICAgICBhdXRob3I6IFwiXCJcbiAgICB9O1xuICB9XG4gIHVwZGF0ZUF1dGhvclBvc2l0aW9uKCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX2xhYmVsKSAmJiBjYy5pc1ZhbGlkKHRoaXMuX2xhYmVsQXV0aG9yKSkge1xuICAgICAgdmFyIHQgPSB0aGlzLl9sYWJlbC5ub2RlLFxuICAgICAgICBvID0gdGhpcy5fbGFiZWxBdXRob3Iubm9kZSxcbiAgICAgICAgaSA9IHQueSAtIHQuaGVpZ2h0O1xuICAgICAgby55ID0gaSAtIFF1b3RlSXRlbS5BVVRIT1JfTUFSR0lOX1RPUDtcbiAgICB9XG4gIH1cbn0iXX0=