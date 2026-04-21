
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_guide/Scripts/GuideUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '61031QfGgZEGoFP8rormy93', 'GuideUI');
// subpackages/l_guide/Scripts/GuideUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var GuideUI = /** @class */ (function (_super) {
    __extends(GuideUI, _super);
    function GuideUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._showHand = false;
        return _this;
    }
    GuideUI.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._nodeHand = this.node.getChildByName("nodeHand");
        this._btnSkip = cc.find("skip/btnSkip", this.node);
        this._nodeTip = cc.find("nodeTip", this.node);
        this._text = cc.find("nodeTip/labelDesc1", this.node).getComponent(cc.RichText);
        this._handSpine = cc.find("nodeHand/guidehand", this.node).getComponent(sp.Skeleton);
        this._btnSkip.active = true;
        this._nodeHand.active = false;
        this.playSkipAppearAni();
        this.playTipAppearAni();
        this.OnButtonClick(this._btnSkip, this.onSkip.bind(this));
    };
    GuideUI.prototype.setText = function (t) {
        t && (this._text.string = t);
    };
    GuideUI.prototype.setGuidePosition = function (t, e, i) {
        var n = this;
        if (this._showHand != i || this._tileId != t) {
            this._showHand = i;
            if (i) {
                this._nodeHand.active = true;
                this.playHandSpi();
            }
            var o = this.node.parent.convertToNodeSpaceAR(e);
            this._tileId !== t && (this._tileId = t);
            cc.Tween.stopAllByTarget(this._nodeHand);
            if (i) {
                this._nodeHand.opacity = 255;
                cc.tween(this._nodeHand).to(0.23, {
                    position: o
                }).call(function () {
                    n._nodeHand.setPosition(o);
                }).start();
            }
            else
                this._nodeHand.opacity = 0;
        }
    };
    GuideUI.prototype.setShowHand = function (t) {
        this._nodeHand.active = t;
    };
    GuideUI.prototype.playHandSpi = function () {
        var t = this;
        GameUtils_1.default.playSpine(this._handSpine, "in", false, function () {
            GameUtils_1.default.playSpine(t._handSpine, "init", true);
        });
    };
    GuideUI.prototype.onSkip = function () { };
    GuideUI.prototype.playTipAppearAni = function () {
        var t = this._nodeTip, e = this._text ? this._text.node : null;
        if (cc.isValid(t)) {
            t.active = true;
            t.scaleX = 1;
            t.scaleY = 0.5;
            cc.Tween.stopAllByTarget(t);
            if (cc.isValid(e)) {
                e.opacity = 0;
                cc.Tween.stopAllByTarget(e);
            }
            cc.tween(t).to(0.33, {
                scaleY: 1
            }, {
                easing: "backOut"
            }).start();
            cc.isValid(e) && cc.tween(e).to(0.16, {
                opacity: 255
            }, {
                easing: "sineInOut"
            }).start();
        }
    };
    GuideUI.prototype.playSkipAppearAni = function () {
        var t = this._btnSkip;
        if (cc.isValid(t)) {
            t.scale = 0;
            t.opacity = 0;
            cc.Tween.stopAllByTarget(t);
            cc.tween(t).parallel(cc.tween().to(0.23, {
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
    GuideUI.prototype.playTextAnim = function (t) {
        var e = this._nodeTip, i = this._text, n = i ? i.node : null;
        if (cc.isValid(e) && cc.isValid(n)) {
            cc.Tween.stopAllByTarget(n);
            cc.Tween.stopAllByTarget(e);
            if ("switch" !== t.type) {
                if ("hide" === t.type) {
                    var o = false;
                    n.opacity < 255 && (n.opacity = 255);
                    e.opacity < 255 && (e.opacity = 255);
                    cc.tween(n).to(0.16, {
                        opacity: 0
                    }, {
                        easing: "circOut"
                    }).call(function () {
                        if (!o) {
                            o = true;
                            (null == t ? void 0 : t.cb) && t.cb();
                        }
                    }).start();
                    cc.tween(e).to(0.16, {
                        opacity: 0
                    }, {
                        easing: "circOut"
                    }).start();
                }
            }
            else
                cc.tween(n).to(0.16, {
                    opacity: 0
                }, {
                    easing: "circOut"
                }).call(function () {
                    n.opacity = 0;
                }).to(0.16, {
                    opacity: 255
                }, {
                    easing: "sineInOut"
                }).call(function () {
                    (null == t ? void 0 : t.cb) && t.cb();
                }).start();
        }
        else
            (null == t ? void 0 : t.cb) && t.cb();
    };
    GuideUI.prototype.getNodeHand = function () {
        return this._nodeHand;
    };
    GuideUI.prototype.getHandSpine = function () {
        return this._handSpine;
    };
    GuideUI.prefabUrl = "prefabs/ui/GLMahjongGuideView";
    GuideUI.bundleName = "mainRes";
    __decorate([
        mj.traitEvent("GuideUI_onLoad")
    ], GuideUI.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("GuideUI_setText")
    ], GuideUI.prototype, "setText", null);
    __decorate([
        mj.traitEvent("GuideUI_playHandSpi")
    ], GuideUI.prototype, "playHandSpi", null);
    __decorate([
        mj.traitEvent("GuideUI_skip")
    ], GuideUI.prototype, "onSkip", null);
    GuideUI = __decorate([
        mj.class
    ], GuideUI);
    return GuideUI;
}(BaseUI_1.default));
exports.default = GuideUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2d1aWRlL1NjcmlwdHMvR3VpZGVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQXVFO0FBQ3ZFLCtEQUEwRDtBQUUxRDtJQUFxQywyQkFBTTtJQUEzQztRQUFBLHFFQWlKQztRQWhKQyxlQUFTLEdBQUcsS0FBSyxDQUFDOztJQWdKcEIsQ0FBQztJQTVJQyx3QkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FB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QUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCw4QkFBWSxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUE5SU0saUJBQVMsR0FBRywrQkFBK0IsQ0FBQztJQUM1QyxrQkFBVSxHQUFHLFNBQVMsQ0FBQztJQUU5QjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7eUNBYS9CO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDOzBDQUdoQztJQTBCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7OENBTXBDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQzt5Q0FDbkI7SUF0RFEsT0FBTztRQUQzQixFQUFFLENBQUMsS0FBSztPQUNZLE9BQU8sQ0FpSjNCO0lBQUQsY0FBQztDQWpKRCxBQWlKQyxDQWpKb0MsZ0JBQU0sR0FpSjFDO2tCQWpKb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1aWRlVUkgZXh0ZW5kcyBCYXNlVUkge1xuICBfc2hvd0hhbmQgPSBmYWxzZTtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy91aS9HTE1haGpvbmdHdWlkZVZpZXdcIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcIm1haW5SZXNcIjtcbiAgQG1qLnRyYWl0RXZlbnQoXCJHdWlkZVVJX29uTG9hZFwiKVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fbm9kZUhhbmQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlSGFuZFwiKTtcbiAgICB0aGlzLl9idG5Ta2lwID0gY2MuZmluZChcInNraXAvYnRuU2tpcFwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX25vZGVUaXAgPSBjYy5maW5kKFwibm9kZVRpcFwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX3RleHQgPSBjYy5maW5kKFwibm9kZVRpcC9sYWJlbERlc2MxXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KTtcbiAgICB0aGlzLl9oYW5kU3BpbmUgPSBjYy5maW5kKFwibm9kZUhhbmQvZ3VpZGVoYW5kXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICB0aGlzLl9idG5Ta2lwLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fbm9kZUhhbmQuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5wbGF5U2tpcEFwcGVhckFuaSgpO1xuICAgIHRoaXMucGxheVRpcEFwcGVhckFuaSgpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9idG5Ta2lwLCB0aGlzLm9uU2tpcC5iaW5kKHRoaXMpKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkd1aWRlVUlfc2V0VGV4dFwiKVxuICBzZXRUZXh0KHQpIHtcbiAgICB0ICYmICh0aGlzLl90ZXh0LnN0cmluZyA9IHQpO1xuICB9XG4gIHNldEd1aWRlUG9zaXRpb24odCwgZSwgaSkge1xuICAgIHZhciBuID0gdGhpcztcbiAgICBpZiAodGhpcy5fc2hvd0hhbmQgIT0gaSB8fCB0aGlzLl90aWxlSWQgIT0gdCkge1xuICAgICAgdGhpcy5fc2hvd0hhbmQgPSBpO1xuICAgICAgaWYgKGkpIHtcbiAgICAgICAgdGhpcy5fbm9kZUhhbmQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wbGF5SGFuZFNwaSgpO1xuICAgICAgfVxuICAgICAgdmFyIG8gPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGUpO1xuICAgICAgdGhpcy5fdGlsZUlkICE9PSB0ICYmICh0aGlzLl90aWxlSWQgPSB0KTtcbiAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLl9ub2RlSGFuZCk7XG4gICAgICBpZiAoaSkge1xuICAgICAgICB0aGlzLl9ub2RlSGFuZC5vcGFjaXR5ID0gMjU1O1xuICAgICAgICBjYy50d2Vlbih0aGlzLl9ub2RlSGFuZCkudG8oMC4yMywge1xuICAgICAgICAgIHBvc2l0aW9uOiBvXG4gICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG4uX25vZGVIYW5kLnNldFBvc2l0aW9uKG8pO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgfSBlbHNlIHRoaXMuX25vZGVIYW5kLm9wYWNpdHkgPSAwO1xuICAgIH1cbiAgfVxuICBzZXRTaG93SGFuZCh0KSB7XG4gICAgdGhpcy5fbm9kZUhhbmQuYWN0aXZlID0gdDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkd1aWRlVUlfcGxheUhhbmRTcGlcIilcbiAgcGxheUhhbmRTcGkoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIEdhbWVVdGlscy5wbGF5U3BpbmUodGhpcy5faGFuZFNwaW5lLCBcImluXCIsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHQuX2hhbmRTcGluZSwgXCJpbml0XCIsIHRydWUpO1xuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiR3VpZGVVSV9za2lwXCIpXG4gIG9uU2tpcCgpIHt9XG4gIHBsYXlUaXBBcHBlYXJBbmkoKSB7XG4gICAgdmFyIHQgPSB0aGlzLl9ub2RlVGlwLFxuICAgICAgZSA9IHRoaXMuX3RleHQgPyB0aGlzLl90ZXh0Lm5vZGUgOiBudWxsO1xuICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICB0LmFjdGl2ZSA9IHRydWU7XG4gICAgICB0LnNjYWxlWCA9IDE7XG4gICAgICB0LnNjYWxlWSA9IDAuNTtcbiAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0KTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgIGUub3BhY2l0eSA9IDA7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChlKTtcbiAgICAgIH1cbiAgICAgIGNjLnR3ZWVuKHQpLnRvKDAuMzMsIHtcbiAgICAgICAgc2NhbGVZOiAxXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICBjYy5pc1ZhbGlkKGUpICYmIGNjLnR3ZWVuKGUpLnRvKDAuMTYsIHtcbiAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJzaW5lSW5PdXRcIlxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgcGxheVNraXBBcHBlYXJBbmkoKSB7XG4gICAgdmFyIHQgPSB0aGlzLl9idG5Ta2lwO1xuICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICB0LnNjYWxlID0gMDtcbiAgICAgIHQub3BhY2l0eSA9IDA7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodCk7XG4gICAgICBjYy50d2Vlbih0KS5wYXJhbGxlbChjYy50d2VlbigpLnRvKDAuMjMsIHtcbiAgICAgICAgc2NhbGU6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgfSksIGNjLnR3ZWVuKCkudG8oMC4xNiwge1xuICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcImNpcmNPdXRcIlxuICAgICAgfSkpLnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIHBsYXlUZXh0QW5pbSh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLl9ub2RlVGlwLFxuICAgICAgaSA9IHRoaXMuX3RleHQsXG4gICAgICBuID0gaSA/IGkubm9kZSA6IG51bGw7XG4gICAgaWYgKGNjLmlzVmFsaWQoZSkgJiYgY2MuaXNWYWxpZChuKSkge1xuICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG4pO1xuICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGUpO1xuICAgICAgaWYgKFwic3dpdGNoXCIgIT09IHQudHlwZSkge1xuICAgICAgICBpZiAoXCJoaWRlXCIgPT09IHQudHlwZSkge1xuICAgICAgICAgIHZhciBvID0gZmFsc2U7XG4gICAgICAgICAgbi5vcGFjaXR5IDwgMjU1ICYmIChuLm9wYWNpdHkgPSAyNTUpO1xuICAgICAgICAgIGUub3BhY2l0eSA8IDI1NSAmJiAoZS5vcGFjaXR5ID0gMjU1KTtcbiAgICAgICAgICBjYy50d2VlbihuKS50bygwLjE2LCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZWFzaW5nOiBcImNpcmNPdXRcIlxuICAgICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFvKSB7XG4gICAgICAgICAgICAgIG8gPSB0cnVlO1xuICAgICAgICAgICAgICAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5jYikgJiYgdC5jYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgY2MudHdlZW4oZSkudG8oMC4xNiwge1xuICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGVhc2luZzogXCJjaXJjT3V0XCJcbiAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgY2MudHdlZW4obikudG8oMC4xNiwge1xuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJjaXJjT3V0XCJcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBuLm9wYWNpdHkgPSAwO1xuICAgICAgfSkudG8oMC4xNiwge1xuICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInNpbmVJbk91dFwiXG4gICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuY2IpICYmIHQuY2IoKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSBlbHNlIChudWxsID09IHQgPyB2b2lkIDAgOiB0LmNiKSAmJiB0LmNiKCk7XG4gIH1cbiAgZ2V0Tm9kZUhhbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vZGVIYW5kO1xuICB9XG4gIGdldEhhbmRTcGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFuZFNwaW5lO1xuICB9XG59Il19