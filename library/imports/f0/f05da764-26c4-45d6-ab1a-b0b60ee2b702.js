"use strict";
cc._RF.push(module, 'f05dadkJsRF1qsasLYO4rcC', 'GLMahjongButtonColor');
// Scripts/GLMahjongButtonColor.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GLMahjongButtonColor = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GLMahjongButtonColor = /** @class */ (function (_super) {
    __extends(GLMahjongButtonColor, _super);
    function GLMahjongButtonColor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.grayBrightness = 210;
        _this.duration = 0.1;
        _this.originalColor = cc.Color.WHITE;
        _this.button = null;
        _this.originalChildColors = new Map();
        return _this;
    }
    GLMahjongButtonColor.prototype.onLoad = function () {
        this.button || (this.button = this.getComponent(cc.Button));
        if (this.button) {
            this.originalColor = this.node.color.clone();
            this.saveChildrenColors(this.node);
            this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }
    };
    GLMahjongButtonColor.prototype.saveChildrenColors = function (e) {
        var t = this;
        e.children.forEach(function (e) {
            if (cc.isValid(e)) {
                t.originalChildColors.set(e, e.color.clone());
                t.saveChildrenColors(e);
            }
        });
    };
    GLMahjongButtonColor.prototype.onTouchStart = function () {
        if (this.button.interactable) {
            var e = cc.color(this.grayBrightness, this.grayBrightness, this.grayBrightness, 255);
            cc.tween(this.node).to(this.duration, {
                color: e
            }).start();
            this.applyGrayToChildren(this.node, e);
        }
    };
    GLMahjongButtonColor.prototype.applyGrayToChildren = function (e, t) {
        var o = this;
        e.children.forEach(function (e) {
            if (cc.isValid(e)) {
                cc.tween(e).to(o.duration, {
                    color: t
                }).start();
                o.applyGrayToChildren(e, t);
            }
        });
    };
    GLMahjongButtonColor.prototype.onTouchEnd = function () {
        cc.Tween.stopAllByTarget(this.node);
        this.node.color = this.originalColor.clone();
        this.restoreChildrenColors(this.node);
    };
    GLMahjongButtonColor.prototype.restoreChildrenColors = function (e) {
        var t = this;
        e.children.forEach(function (e) {
            if (cc.isValid(e)) {
                cc.Tween.stopAllByTarget(e);
                var o = t.originalChildColors.get(e);
                o && (e.color = o.clone());
                t.restoreChildrenColors(e);
            }
        });
    };
    GLMahjongButtonColor.prototype.onDestroy = function () {
        if (this.node) {
            this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }
        this.originalChildColors.clear();
    };
    GLMahjongButtonColor = __decorate([
        ccclass
    ], GLMahjongButtonColor);
    return GLMahjongButtonColor;
}(cc.Component));
exports.GLMahjongButtonColor = GLMahjongButtonColor;

cc._RF.pop();