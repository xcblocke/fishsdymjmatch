
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_propInit/Scripts/PropLockTipView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a79d0ZoXgNEOKmqs/qkNTzA', 'PropLockTipView');
// subpackages/l_propInit/Scripts/PropLockTipView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PropLockTipView = /** @class */ (function (_super) {
    __extends(PropLockTipView, _super);
    function PropLockTipView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contentNode = null;
        _this.tipNode = null;
        return _this;
    }
    PropLockTipView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.contentNode = this.node.getChildByName("Content");
        this.tipNode = this.contentNode.getChildByName("Tip");
    };
    PropLockTipView.prototype.doAction = function (t) {
        if (t === void 0) { t = 2.73; }
        var e = this;
        this.node.stopActionByTag(10000);
        cc.tween(this.node).tag(10000).set({
            opacity: 0,
            scale: 0.7
        }).to(0.17, {
            opacity: 255,
            scale: 1.05
        }, {
            easing: cc.easing.sineInOut
        }).to(0.1, {
            scale: 1
        }).delay(t).to(0.2, {
            opacity: 0
        }).call(function () {
            e.delegate.close();
        }).start();
    };
    PropLockTipView.prototype.showTips = function (t, e, r) {
        if (r === void 0) { r = 2.73; }
        "string" != typeof t && (t += "");
        cc.isValid(this.tipNode) && (this.tipNode.getComponent(cc.Label).string = t);
        var o = e || cc.v3(0, 0, 0);
        this.contentNode.setPosition(o);
        this.doAction(r);
    };
    PropLockTipView.prefabUrl = "prefabs/PropLockTip";
    PropLockTipView = __decorate([
        mj.class
    ], PropLockTipView);
    return PropLockTipView;
}(UIView_1.default));
exports.default = PropLockTipView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Byb3BJbml0L1NjcmlwdHMvUHJvcExvY2tUaXBWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDcEQsSUFBQSxLQUdGLEVBQUUsQ0FBQyxVQUFVLEVBRmYsT0FBTyxhQUFBLEVBQ1AsUUFBUSxjQUNPLENBQUM7QUFFbEI7SUFBNkMsbUNBQU07SUFBbkQ7UUFBQSxxRUFtQ0M7UUFsQ0MsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsYUFBTyxHQUFHLElBQUksQ0FBQzs7SUFpQ2pCLENBQUM7SUEvQkMsZ0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCxrQ0FBUSxHQUFSLFVBQVMsQ0FBUTtRQUFSLGtCQUFBLEVBQUEsUUFBUTtRQUNmLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDakMsT0FBTyxFQUFFLENBQUM7WUFDVixLQUFLLEVBQUUsR0FBRztTQUNYLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFO1lBQ1YsT0FBTyxFQUFFLEdBQUc7WUFDWixLQUFLLEVBQUUsSUFBSTtTQUNaLEVBQUU7WUFDRCxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQ1QsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDbEIsT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ04sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxrQ0FBUSxHQUFSLFVBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFRO1FBQVIsa0JBQUEsRUFBQSxRQUFRO1FBQ3JCLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNsQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUEvQk0seUJBQVMsR0FBRyxxQkFBcUIsQ0FBQztJQUh0QixlQUFlO1FBRG5DLEVBQUUsQ0FBQyxLQUFLO09BQ1ksZUFBZSxDQW1DbkM7SUFBRCxzQkFBQztDQW5DRCxBQW1DQyxDQW5DNEMsZ0JBQU0sR0FtQ2xEO2tCQW5Db0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVZpZXcgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvVUlWaWV3JztcbmNvbnN0IHtcbiAgY2NjbGFzcyxcbiAgcHJvcGVydHlcbn0gPSBjYy5fZGVjb3JhdG9yO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wTG9ja1RpcFZpZXcgZXh0ZW5kcyBVSVZpZXcge1xuICBjb250ZW50Tm9kZSA9IG51bGw7XG4gIHRpcE5vZGUgPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL1Byb3BMb2NrVGlwXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmNvbnRlbnROb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ29udGVudFwiKTtcbiAgICB0aGlzLnRpcE5vZGUgPSB0aGlzLmNvbnRlbnROb2RlLmdldENoaWxkQnlOYW1lKFwiVGlwXCIpO1xuICB9XG4gIGRvQWN0aW9uKHQgPSAyLjczKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMubm9kZS5zdG9wQWN0aW9uQnlUYWcoMTAwMDApO1xuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudGFnKDEwMDAwKS5zZXQoe1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHNjYWxlOiAwLjdcbiAgICB9KS50bygwLjE3LCB7XG4gICAgICBvcGFjaXR5OiAyNTUsXG4gICAgICBzY2FsZTogMS4wNVxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbk91dFxuICAgIH0pLnRvKDAuMSwge1xuICAgICAgc2NhbGU6IDFcbiAgICB9KS5kZWxheSh0KS50bygwLjIsIHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUuZGVsZWdhdGUuY2xvc2UoKTtcbiAgICB9KS5zdGFydCgpO1xuICB9XG4gIHNob3dUaXBzKHQsIGUsIHIgPSAyLjczKSB7XG4gICAgXCJzdHJpbmdcIiAhPSB0eXBlb2YgdCAmJiAodCArPSBcIlwiKTtcbiAgICBjYy5pc1ZhbGlkKHRoaXMudGlwTm9kZSkgJiYgKHRoaXMudGlwTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHQpO1xuICAgIHZhciBvID0gZSB8fCBjYy52MygwLCAwLCAwKTtcbiAgICB0aGlzLmNvbnRlbnROb2RlLnNldFBvc2l0aW9uKG8pO1xuICAgIHRoaXMuZG9BY3Rpb24ocik7XG4gIH1cbn0iXX0=