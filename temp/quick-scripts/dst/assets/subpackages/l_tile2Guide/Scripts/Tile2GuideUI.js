
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2Guide/Scripts/Tile2GuideUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1672r3KJxAa7xt2Y8zn0cA', 'Tile2GuideUI');
// subpackages/l_tile2Guide/Scripts/Tile2GuideUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var Tile2GuideUI = /** @class */ (function (_super) {
    __extends(Tile2GuideUI, _super);
    function Tile2GuideUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._showHand = false;
        return _this;
    }
    Tile2GuideUI.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._nodeHand = this.node.getChildByName("nodeHand");
        this._btnSkip = cc.find("skip/btnSkip", this.node);
        this._nodeTip = cc.find("nodeTip", this.node);
        this._text = cc.find("nodeTip/labelDesc1", this.node).getComponent(cc.RichText);
        this._handSpine = cc.find("nodeHand/guidehand", this.node).getComponent(sp.Skeleton);
        this._btnSkip.active = false;
        this._nodeHand.active = false;
        cc.isValid(this._nodeTip) && (this._nodeTip.active = false);
        this.OnButtonClick(this._btnSkip, this.onSkip.bind(this));
    };
    Tile2GuideUI.prototype.setText = function (e, t) {
        var i = this._nodeTip, o = this._text, a = !(null == e || "" === String(e).trim());
        if (cc.isValid(i))
            if (a) {
                i.active = true;
                o.string = e;
                if (t > 0) {
                    this.playTextAnim({
                        type: "switch"
                    });
                }
                else {
                    this.playTipAppearAni();
                }
            }
            else {
                cc.Tween.stopAllByTarget(i);
                cc.isValid(null == o ? void 0 : o.node) && cc.Tween.stopAllByTarget(o.node);
                i.active = false;
                o && (o.string = "");
            }
    };
    Tile2GuideUI.prototype.setGuidePosition = function (e, t, i) {
        var o = this;
        if (this._showHand != i || this._tileId != e) {
            this._showHand = i;
            if (i) {
                this._nodeHand.active = true;
                this.playHandSpi();
            }
            var a = this.node.parent.convertToNodeSpaceAR(t);
            this._tileId !== e && (this._tileId = e);
            cc.Tween.stopAllByTarget(this._nodeHand);
            if (i) {
                this._nodeHand.opacity = 255;
                cc.tween(this._nodeHand).to(0.23, {
                    position: a
                }).call(function () {
                    cc.isValid(o._nodeHand) && o._nodeHand.setPosition(a);
                }).start();
            }
            else
                this._nodeHand.opacity = 0;
        }
    };
    Tile2GuideUI.prototype.setShowHand = function (e) {
        this._nodeHand.active = e;
    };
    Tile2GuideUI.prototype.setTipPos = function (e) {
        var t = this._nodeTip;
        if (cc.isValid(t)) {
            var i = t.getComponent(cc.Widget);
            i && (i.enabled = false);
            t.setPosition(e.x, e.y);
        }
    };
    Tile2GuideUI.prototype.setShowSkip = function (e) {
        if (cc.isValid(this._btnSkip))
            if (e && !this._btnSkip.active) {
                this._btnSkip.active = true;
                this.playSkipAppearAni();
            }
            else
                e || (this._btnSkip.active = false);
    };
    Tile2GuideUI.prototype.playHandSpi = function () {
        var e = this;
        GameUtils_1.default.playSpine(this._handSpine, "in", false, function () {
            GameUtils_1.default.playSpine(e._handSpine, "init", true);
        });
    };
    Tile2GuideUI.prototype.onSkip = function () { };
    Tile2GuideUI.prototype.playTipAppearAni = function () {
        var e = this._nodeTip, t = this._text ? this._text.node : null;
        if (cc.isValid(e)) {
            e.active = true;
            e.scaleX = 1;
            e.scaleY = 0.5;
            cc.Tween.stopAllByTarget(e);
            if (cc.isValid(t)) {
                t.opacity = 0;
                cc.Tween.stopAllByTarget(t);
            }
            cc.tween(e).to(0.33, {
                scaleY: 1
            }, {
                easing: "backOut"
            }).start();
            cc.isValid(t) && cc.tween(t).to(0.16, {
                opacity: 255
            }, {
                easing: "sineInOut"
            }).start();
        }
    };
    Tile2GuideUI.prototype.playSkipAppearAni = function () {
        var e = this._btnSkip;
        if (cc.isValid(e)) {
            e.scale = 0;
            e.opacity = 0;
            cc.Tween.stopAllByTarget(e);
            cc.tween(e).parallel(cc.tween().to(0.23, {
                scale: 1
            }, {
                easing: "backOut"
            }), cc.tween().to(0.16, {
                opacity: 255
            }, {
                easing: "circOut"
            })).start();
        }
    };
    Tile2GuideUI.prototype.playTextAnim = function (e) {
        var t = this._nodeTip, i = this._text, o = i ? i.node : null;
        if (cc.isValid(t) && cc.isValid(o)) {
            cc.Tween.stopAllByTarget(o);
            cc.Tween.stopAllByTarget(t);
            if ("switch" !== e.type) {
                if ("hide" === e.type) {
                    var a = false;
                    o.opacity < 255 && (o.opacity = 255);
                    t.opacity < 255 && (t.opacity = 255);
                    cc.tween(o).to(0.16, {
                        opacity: 0
                    }, {
                        easing: "circOut"
                    }).call(function () {
                        if (!a) {
                            a = true;
                            (null == e ? void 0 : e.cb) && e.cb();
                        }
                    }).start();
                    cc.tween(t).to(0.16, {
                        opacity: 0
                    }, {
                        easing: "circOut"
                    }).start();
                }
            }
            else
                cc.tween(o).to(0.16, {
                    opacity: 0
                }, {
                    easing: "circOut"
                }).call(function () {
                    o.opacity = 0;
                }).to(0.16, {
                    opacity: 255
                }, {
                    easing: "sineInOut"
                }).call(function () {
                    (null == e ? void 0 : e.cb) && e.cb();
                }).start();
        }
        else
            (null == e ? void 0 : e.cb) && e.cb();
    };
    Tile2GuideUI.prototype.getNodeHand = function () {
        return this._nodeHand;
    };
    Tile2GuideUI.prototype.getHandSpine = function () {
        return this._handSpine;
    };
    Tile2GuideUI.prefabUrl = "prefabs/ui/Tile2GuideView";
    Tile2GuideUI.bundleName = "mainRes";
    __decorate([
        mj.traitEvent("Tile2GuideUI_onLoad")
    ], Tile2GuideUI.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("Tile2GuideUI_setText")
    ], Tile2GuideUI.prototype, "setText", null);
    __decorate([
        mj.traitEvent("Tile2GuideUI_playHandSpi")
    ], Tile2GuideUI.prototype, "playHandSpi", null);
    __decorate([
        mj.traitEvent("Tile2GuideUI_skip")
    ], Tile2GuideUI.prototype, "onSkip", null);
    Tile2GuideUI = __decorate([
        mj.class
    ], Tile2GuideUI);
    return Tile2GuideUI;
}(BaseUI_1.default));
exports.default = Tile2GuideUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyR3VpZGUvU2NyaXB0cy9UaWxlMkd1aWRlVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRFQUF1RTtBQUN2RSwrREFBMEQ7QUFFMUQ7SUFBMEMsZ0NBQU07SUFBaEQ7UUFBQSxxRUFnTEM7UUEvS0MsZUFBUyxHQUFHLEtBQUssQ0FBQzs7SUErS3BCLENBQUM7SUEzS0MsNkJBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FB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LENBZ0xoQztJQUFELG1CQUFDO0NBaExELEFBZ0xDLENBaEx5QyxnQkFBTSxHQWdML0M7a0JBaExvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbmltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJHdWlkZVVJIGV4dGVuZHMgQmFzZVVJIHtcbiAgX3Nob3dIYW5kID0gZmFsc2U7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvdWkvVGlsZTJHdWlkZVZpZXdcIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcIm1haW5SZXNcIjtcbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMkd1aWRlVUlfb25Mb2FkXCIpXG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9ub2RlSGFuZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVIYW5kXCIpO1xuICAgIHRoaXMuX2J0blNraXAgPSBjYy5maW5kKFwic2tpcC9idG5Ta2lwXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5fbm9kZVRpcCA9IGNjLmZpbmQoXCJub2RlVGlwXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5fdGV4dCA9IGNjLmZpbmQoXCJub2RlVGlwL2xhYmVsRGVzYzFcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpO1xuICAgIHRoaXMuX2hhbmRTcGluZSA9IGNjLmZpbmQoXCJub2RlSGFuZC9ndWlkZWhhbmRcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgIHRoaXMuX2J0blNraXAuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5fbm9kZUhhbmQuYWN0aXZlID0gZmFsc2U7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl9ub2RlVGlwKSAmJiAodGhpcy5fbm9kZVRpcC5hY3RpdmUgPSBmYWxzZSk7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX2J0blNraXAsIHRoaXMub25Ta2lwLmJpbmQodGhpcykpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJHdWlkZVVJX3NldFRleHRcIilcbiAgc2V0VGV4dChlLCB0KSB7XG4gICAgdmFyIGkgPSB0aGlzLl9ub2RlVGlwLFxuICAgICAgbyA9IHRoaXMuX3RleHQsXG4gICAgICBhID0gIShudWxsID09IGUgfHwgXCJcIiA9PT0gU3RyaW5nKGUpLnRyaW0oKSk7XG4gICAgaWYgKGNjLmlzVmFsaWQoaSkpIGlmIChhKSB7XG4gICAgICBpLmFjdGl2ZSA9IHRydWU7XG4gICAgICBvLnN0cmluZyA9IGU7XG4gICAgICBpZiAodCA+IDApIHtcbiAgICAgICAgdGhpcy5wbGF5VGV4dEFuaW0oe1xuICAgICAgICAgIHR5cGU6IFwic3dpdGNoXCJcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBsYXlUaXBBcHBlYXJBbmkoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGkpO1xuICAgICAgY2MuaXNWYWxpZChudWxsID09IG8gPyB2b2lkIDAgOiBvLm5vZGUpICYmIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChvLm5vZGUpO1xuICAgICAgaS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIG8gJiYgKG8uc3RyaW5nID0gXCJcIik7XG4gICAgfVxuICB9XG4gIHNldEd1aWRlUG9zaXRpb24oZSwgdCwgaSkge1xuICAgIHZhciBvID0gdGhpcztcbiAgICBpZiAodGhpcy5fc2hvd0hhbmQgIT0gaSB8fCB0aGlzLl90aWxlSWQgIT0gZSkge1xuICAgICAgdGhpcy5fc2hvd0hhbmQgPSBpO1xuICAgICAgaWYgKGkpIHtcbiAgICAgICAgdGhpcy5fbm9kZUhhbmQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wbGF5SGFuZFNwaSgpO1xuICAgICAgfVxuICAgICAgdmFyIGEgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHQpO1xuICAgICAgdGhpcy5fdGlsZUlkICE9PSBlICYmICh0aGlzLl90aWxlSWQgPSBlKTtcbiAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLl9ub2RlSGFuZCk7XG4gICAgICBpZiAoaSkge1xuICAgICAgICB0aGlzLl9ub2RlSGFuZC5vcGFjaXR5ID0gMjU1O1xuICAgICAgICBjYy50d2Vlbih0aGlzLl9ub2RlSGFuZCkudG8oMC4yMywge1xuICAgICAgICAgIHBvc2l0aW9uOiBhXG4gICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNjLmlzVmFsaWQoby5fbm9kZUhhbmQpICYmIG8uX25vZGVIYW5kLnNldFBvc2l0aW9uKGEpO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgfSBlbHNlIHRoaXMuX25vZGVIYW5kLm9wYWNpdHkgPSAwO1xuICAgIH1cbiAgfVxuICBzZXRTaG93SGFuZChlKSB7XG4gICAgdGhpcy5fbm9kZUhhbmQuYWN0aXZlID0gZTtcbiAgfVxuICBzZXRUaXBQb3MoZSkge1xuICAgIHZhciB0ID0gdGhpcy5fbm9kZVRpcDtcbiAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgdmFyIGkgPSB0LmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgICAgaSAmJiAoaS5lbmFibGVkID0gZmFsc2UpO1xuICAgICAgdC5zZXRQb3NpdGlvbihlLngsIGUueSk7XG4gICAgfVxuICB9XG4gIHNldFNob3dTa2lwKGUpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9idG5Ta2lwKSkgaWYgKGUgJiYgIXRoaXMuX2J0blNraXAuYWN0aXZlKSB7XG4gICAgICB0aGlzLl9idG5Ta2lwLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnBsYXlTa2lwQXBwZWFyQW5pKCk7XG4gICAgfSBlbHNlIGUgfHwgKHRoaXMuX2J0blNraXAuYWN0aXZlID0gZmFsc2UpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJHdWlkZVVJX3BsYXlIYW5kU3BpXCIpXG4gIHBsYXlIYW5kU3BpKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuX2hhbmRTcGluZSwgXCJpblwiLCBmYWxzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZShlLl9oYW5kU3BpbmUsIFwiaW5pdFwiLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGUyR3VpZGVVSV9za2lwXCIpXG4gIG9uU2tpcCgpIHt9XG4gIHBsYXlUaXBBcHBlYXJBbmkoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9ub2RlVGlwLFxuICAgICAgdCA9IHRoaXMuX3RleHQgPyB0aGlzLl90ZXh0Lm5vZGUgOiBudWxsO1xuICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICBlLmFjdGl2ZSA9IHRydWU7XG4gICAgICBlLnNjYWxlWCA9IDE7XG4gICAgICBlLnNjYWxlWSA9IDAuNTtcbiAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChlKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICAgIHQub3BhY2l0eSA9IDA7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0KTtcbiAgICAgIH1cbiAgICAgIGNjLnR3ZWVuKGUpLnRvKDAuMzMsIHtcbiAgICAgICAgc2NhbGVZOiAxXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICBjYy5pc1ZhbGlkKHQpICYmIGNjLnR3ZWVuKHQpLnRvKDAuMTYsIHtcbiAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJzaW5lSW5PdXRcIlxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgcGxheVNraXBBcHBlYXJBbmkoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9idG5Ta2lwO1xuICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICBlLnNjYWxlID0gMDtcbiAgICAgIGUub3BhY2l0eSA9IDA7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoZSk7XG4gICAgICBjYy50d2VlbihlKS5wYXJhbGxlbChjYy50d2VlbigpLnRvKDAuMjMsIHtcbiAgICAgICAgc2NhbGU6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgfSksIGNjLnR3ZWVuKCkudG8oMC4xNiwge1xuICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcImNpcmNPdXRcIlxuICAgICAgfSkpLnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIHBsYXlUZXh0QW5pbShlKSB7XG4gICAgdmFyIHQgPSB0aGlzLl9ub2RlVGlwLFxuICAgICAgaSA9IHRoaXMuX3RleHQsXG4gICAgICBvID0gaSA/IGkubm9kZSA6IG51bGw7XG4gICAgaWYgKGNjLmlzVmFsaWQodCkgJiYgY2MuaXNWYWxpZChvKSkge1xuICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG8pO1xuICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHQpO1xuICAgICAgaWYgKFwic3dpdGNoXCIgIT09IGUudHlwZSkge1xuICAgICAgICBpZiAoXCJoaWRlXCIgPT09IGUudHlwZSkge1xuICAgICAgICAgIHZhciBhID0gZmFsc2U7XG4gICAgICAgICAgby5vcGFjaXR5IDwgMjU1ICYmIChvLm9wYWNpdHkgPSAyNTUpO1xuICAgICAgICAgIHQub3BhY2l0eSA8IDI1NSAmJiAodC5vcGFjaXR5ID0gMjU1KTtcbiAgICAgICAgICBjYy50d2VlbihvKS50bygwLjE2LCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZWFzaW5nOiBcImNpcmNPdXRcIlxuICAgICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFhKSB7XG4gICAgICAgICAgICAgIGEgPSB0cnVlO1xuICAgICAgICAgICAgICAobnVsbCA9PSBlID8gdm9pZCAwIDogZS5jYikgJiYgZS5jYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgY2MudHdlZW4odCkudG8oMC4xNiwge1xuICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGVhc2luZzogXCJjaXJjT3V0XCJcbiAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgY2MudHdlZW4obykudG8oMC4xNiwge1xuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJjaXJjT3V0XCJcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBvLm9wYWNpdHkgPSAwO1xuICAgICAgfSkudG8oMC4xNiwge1xuICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInNpbmVJbk91dFwiXG4gICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuY2IpICYmIGUuY2IoKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSBlbHNlIChudWxsID09IGUgPyB2b2lkIDAgOiBlLmNiKSAmJiBlLmNiKCk7XG4gIH1cbiAgZ2V0Tm9kZUhhbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vZGVIYW5kO1xuICB9XG4gIGdldEhhbmRTcGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFuZFNwaW5lO1xuICB9XG59Il19