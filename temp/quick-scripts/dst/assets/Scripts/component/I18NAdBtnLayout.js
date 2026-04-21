
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/component/I18NAdBtnLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f9deMUjcRN9IaM+9a74CWn', 'I18NAdBtnLayout');
// Scripts/component/I18NAdBtnLayout.ts

Object.defineProperty(exports, "__esModule", { value: true });
var I18NComponent_1 = require("./I18NComponent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var I18NAdBtnLayout = /** @class */ (function (_super) {
    __extends(I18NAdBtnLayout, _super);
    function I18NAdBtnLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._adIconNode = null;
        _this._label = null;
        _this.maxWidth = 200;
        _this.spacing = 24;
        _this._adIconWidth = 0;
        _this._i18nComponent = null;
        return _this;
    }
    I18NAdBtnLayout_1 = I18NAdBtnLayout;
    I18NAdBtnLayout.setupLayout = function (e, t, n, i, r) {
        if (r === void 0) { r = 24; }
        if (e) {
            var a = cc.find(t, e), l = cc.find(n, e);
            I18NAdBtnLayout_1.setupLayoutByNode(a, l, i, r);
        }
    };
    I18NAdBtnLayout.setupLayoutByNode = function (e, t, n, i) {
        if (n === void 0) { n = I18NAdBtnLayout_1.MAX_WIDTH_1; }
        if (i === void 0) { i = I18NAdBtnLayout_1.MARGIN; }
        if (e && t && cc.isValid(e) && cc.isValid(t)) {
            var r = t.getComponent(I18NAdBtnLayout_1);
            r || (r = t.addComponent(I18NAdBtnLayout_1));
            r.initComponents(e, t.getComponent(cc.Label), n, i);
        }
    };
    I18NAdBtnLayout.prototype.initComponents = function (e, t, o, n) {
        if (n === void 0) { n = 24; }
        var i, r = this;
        this._adIconNode = e;
        this._label = t;
        this.maxWidth = o;
        this.spacing = n;
        if (this._adIconNode && this._label) {
            this._adIconWidth = this._adIconNode.width;
            this._label.overflow = cc.Label.Overflow.NONE;
            var l = null === (i = this._adIconNode.parent) || void 0 === i ? void 0 : i.getComponent(cc.Layout);
            l && (l.enabled = false);
            this._i18nComponent = this._label.node.getComponent(I18NComponent_1.default);
            this._i18nComponent && this._i18nComponent.setOnUpdateTextCallback(function () {
                r.onTextUpdated();
            });
            this.node.activeInHierarchy && this.scheduleOnce(function () {
                r.updateLayout();
            }, 0);
        }
    };
    I18NAdBtnLayout.prototype.onTextUpdated = function () {
        var e = this;
        this.scheduleOnce(function () {
            e.updateLayout();
        }, 0);
    };
    I18NAdBtnLayout.prototype.updateLayout = function () {
        if (this._adIconNode && this._label) {
            var e = this._label.node.width;
            if (this._adIconWidth + this.spacing + e <= this.maxWidth) {
                this.layoutCenter(e);
            }
            else {
                this.layoutScale(e);
            }
        }
    };
    I18NAdBtnLayout.prototype.layoutCenter = function (e) {
        var t = -(this._adIconWidth + this.spacing + e) / 2;
        this._adIconNode.x = t + this._adIconWidth * this._adIconNode.anchorX;
        var o = t + this._adIconWidth + this.spacing, n = this._label.node.anchorX;
        this._label.node.x = o + e * n;
        this._label.node.scale = 1;
    };
    I18NAdBtnLayout.prototype.layoutScale = function (e) {
        var t = -this.maxWidth / 2;
        this._adIconNode.x = t + this._adIconWidth * this._adIconNode.anchorX;
        var o = (this.maxWidth - this._adIconWidth - this.spacing) / e, n = t + this._adIconWidth + this.spacing, i = e * o, r = this._label.node.anchorX;
        this._label.node.x = n + i * r;
        this._label.node.scale = o;
    };
    I18NAdBtnLayout.prototype.forceUpdate = function () {
        var e = this;
        this.scheduleOnce(function () {
            e.updateLayout();
        }, 0);
    };
    var I18NAdBtnLayout_1;
    I18NAdBtnLayout.MAX_WIDTH_1 = 564;
    I18NAdBtnLayout.MAX_WIDTH_2 = 500;
    I18NAdBtnLayout.MARGIN = 24;
    I18NAdBtnLayout = I18NAdBtnLayout_1 = __decorate([
        ccclass
    ], I18NAdBtnLayout);
    return I18NAdBtnLayout;
}(cc.Component));
exports.default = I18NAdBtnLayout;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvbXBvbmVudC9JMThOQWRCdG5MYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUN0QyxJQUFBLEtBR0YsRUFBRSxDQUFDLFVBQVUsRUFGZixPQUFPLGFBQUEsRUFDUCxRQUFRLGNBQ08sQ0FBQztBQUVsQjtJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQXFGQztRQXBGQyxpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsY0FBUSxHQUFHLEdBQUcsQ0FBQztRQUNmLGFBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixvQkFBYyxHQUFHLElBQUksQ0FBQzs7SUErRXhCLENBQUM7d0JBckZvQixlQUFlO0lBVTNCLDJCQUFXLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFNO1FBQU4sa0JBQUEsRUFBQSxNQUFNO1FBQ25DLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ25CLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQixpQkFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUNNLGlDQUFpQixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQStCLEVBQUUsQ0FBMEI7UUFBM0Qsa0JBQUEsRUFBQSxJQUFJLGlCQUFlLENBQUMsV0FBVztRQUFFLGtCQUFBLEVBQUEsSUFBSSxpQkFBZSxDQUFDLE1BQU07UUFDeEYsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUs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QUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QscUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ25CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7O0lBN0VNLDJCQUFXLEdBQUcsR0FBRyxDQUFDO0lBQ2xCLDJCQUFXLEdBQUcsR0FBRyxDQUFDO0lBQ2xCLHNCQUFNLEdBQUcsRUFBRSxDQUFDO0lBVEEsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXFGbkM7SUFBRCxzQkFBQztDQXJGRCxBQXFGQyxDQXJGNEMsRUFBRSxDQUFDLFNBQVMsR0FxRnhEO2tCQXJGb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJMThOQ29tcG9uZW50IGZyb20gJy4vSTE4TkNvbXBvbmVudCc7XG5jb25zdCB7XG4gIGNjY2xhc3MsXG4gIHByb3BlcnR5XG59ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJMThOQWRCdG5MYXlvdXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBfYWRJY29uTm9kZSA9IG51bGw7XG4gIF9sYWJlbCA9IG51bGw7XG4gIG1heFdpZHRoID0gMjAwO1xuICBzcGFjaW5nID0gMjQ7XG4gIF9hZEljb25XaWR0aCA9IDA7XG4gIF9pMThuQ29tcG9uZW50ID0gbnVsbDtcbiAgc3RhdGljIE1BWF9XSURUSF8xID0gNTY0O1xuICBzdGF0aWMgTUFYX1dJRFRIXzIgPSA1MDA7XG4gIHN0YXRpYyBNQVJHSU4gPSAyNDtcbiAgc3RhdGljIHNldHVwTGF5b3V0KGUsIHQsIG4sIGksIHIgPSAyNCkge1xuICAgIGlmIChlKSB7XG4gICAgICB2YXIgYSA9IGNjLmZpbmQodCwgZSksXG4gICAgICAgIGwgPSBjYy5maW5kKG4sIGUpO1xuICAgICAgSTE4TkFkQnRuTGF5b3V0LnNldHVwTGF5b3V0QnlOb2RlKGEsIGwsIGksIHIpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgc2V0dXBMYXlvdXRCeU5vZGUoZSwgdCwgbiA9IEkxOE5BZEJ0bkxheW91dC5NQVhfV0lEVEhfMSwgaSA9IEkxOE5BZEJ0bkxheW91dC5NQVJHSU4pIHtcbiAgICBpZiAoZSAmJiB0ICYmIGNjLmlzVmFsaWQoZSkgJiYgY2MuaXNWYWxpZCh0KSkge1xuICAgICAgdmFyIHIgPSB0LmdldENvbXBvbmVudChJMThOQWRCdG5MYXlvdXQpO1xuICAgICAgciB8fCAociA9IHQuYWRkQ29tcG9uZW50KEkxOE5BZEJ0bkxheW91dCkpO1xuICAgICAgci5pbml0Q29tcG9uZW50cyhlLCB0LmdldENvbXBvbmVudChjYy5MYWJlbCksIG4sIGkpO1xuICAgIH1cbiAgfVxuICBpbml0Q29tcG9uZW50cyhlLCB0LCBvLCBuID0gMjQpIHtcbiAgICB2YXIgaSxcbiAgICAgIHIgPSB0aGlzO1xuICAgIHRoaXMuX2FkSWNvbk5vZGUgPSBlO1xuICAgIHRoaXMuX2xhYmVsID0gdDtcbiAgICB0aGlzLm1heFdpZHRoID0gbztcbiAgICB0aGlzLnNwYWNpbmcgPSBuO1xuICAgIGlmICh0aGlzLl9hZEljb25Ob2RlICYmIHRoaXMuX2xhYmVsKSB7XG4gICAgICB0aGlzLl9hZEljb25XaWR0aCA9IHRoaXMuX2FkSWNvbk5vZGUud2lkdGg7XG4gICAgICB0aGlzLl9sYWJlbC5vdmVyZmxvdyA9IGNjLkxhYmVsLk92ZXJmbG93Lk5PTkU7XG4gICAgICB2YXIgbCA9IG51bGwgPT09IChpID0gdGhpcy5fYWRJY29uTm9kZS5wYXJlbnQpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XG4gICAgICBsICYmIChsLmVuYWJsZWQgPSBmYWxzZSk7XG4gICAgICB0aGlzLl9pMThuQ29tcG9uZW50ID0gdGhpcy5fbGFiZWwubm9kZS5nZXRDb21wb25lbnQoSTE4TkNvbXBvbmVudCk7XG4gICAgICB0aGlzLl9pMThuQ29tcG9uZW50ICYmIHRoaXMuX2kxOG5Db21wb25lbnQuc2V0T25VcGRhdGVUZXh0Q2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICByLm9uVGV4dFVwZGF0ZWQoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5ub2RlLmFjdGl2ZUluSGllcmFyY2h5ICYmIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgci51cGRhdGVMYXlvdXQoKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuICBvblRleHRVcGRhdGVkKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICBlLnVwZGF0ZUxheW91dCgpO1xuICAgIH0sIDApO1xuICB9XG4gIHVwZGF0ZUxheW91dCgpIHtcbiAgICBpZiAodGhpcy5fYWRJY29uTm9kZSAmJiB0aGlzLl9sYWJlbCkge1xuICAgICAgdmFyIGUgPSB0aGlzLl9sYWJlbC5ub2RlLndpZHRoO1xuICAgICAgaWYgKHRoaXMuX2FkSWNvbldpZHRoICsgdGhpcy5zcGFjaW5nICsgZSA8PSB0aGlzLm1heFdpZHRoKSB7XG4gICAgICAgIHRoaXMubGF5b3V0Q2VudGVyKGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sYXlvdXRTY2FsZShlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbGF5b3V0Q2VudGVyKGUpIHtcbiAgICB2YXIgdCA9IC0odGhpcy5fYWRJY29uV2lkdGggKyB0aGlzLnNwYWNpbmcgKyBlKSAvIDI7XG4gICAgdGhpcy5fYWRJY29uTm9kZS54ID0gdCArIHRoaXMuX2FkSWNvbldpZHRoICogdGhpcy5fYWRJY29uTm9kZS5hbmNob3JYO1xuICAgIHZhciBvID0gdCArIHRoaXMuX2FkSWNvbldpZHRoICsgdGhpcy5zcGFjaW5nLFxuICAgICAgbiA9IHRoaXMuX2xhYmVsLm5vZGUuYW5jaG9yWDtcbiAgICB0aGlzLl9sYWJlbC5ub2RlLnggPSBvICsgZSAqIG47XG4gICAgdGhpcy5fbGFiZWwubm9kZS5zY2FsZSA9IDE7XG4gIH1cbiAgbGF5b3V0U2NhbGUoZSkge1xuICAgIHZhciB0ID0gLXRoaXMubWF4V2lkdGggLyAyO1xuICAgIHRoaXMuX2FkSWNvbk5vZGUueCA9IHQgKyB0aGlzLl9hZEljb25XaWR0aCAqIHRoaXMuX2FkSWNvbk5vZGUuYW5jaG9yWDtcbiAgICB2YXIgbyA9ICh0aGlzLm1heFdpZHRoIC0gdGhpcy5fYWRJY29uV2lkdGggLSB0aGlzLnNwYWNpbmcpIC8gZSxcbiAgICAgIG4gPSB0ICsgdGhpcy5fYWRJY29uV2lkdGggKyB0aGlzLnNwYWNpbmcsXG4gICAgICBpID0gZSAqIG8sXG4gICAgICByID0gdGhpcy5fbGFiZWwubm9kZS5hbmNob3JYO1xuICAgIHRoaXMuX2xhYmVsLm5vZGUueCA9IG4gKyBpICogcjtcbiAgICB0aGlzLl9sYWJlbC5ub2RlLnNjYWxlID0gbztcbiAgfVxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgZS51cGRhdGVMYXlvdXQoKTtcbiAgICB9LCAwKTtcbiAgfVxufSJdfQ==