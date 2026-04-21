"use strict";
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