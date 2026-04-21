
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/LockTipsView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a775f7CUGZF7YLITwZxq8Eq', 'LockTipsView');
// Scripts/LockTipsView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("./framework/ui/UIView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LockTipsView = /** @class */ (function (_super) {
    __extends(LockTipsView, _super);
    function LockTipsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._txtContent = null;
        return _this;
    }
    LockTipsView.prototype.onLoad = function () {
        var t;
        _super.prototype.onLoad.call(this);
        this._txtContent = null === (t = this.node.getChildByName("txt_content")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
    };
    LockTipsView.prototype.doAction = function (e) {
        if (e === void 0) { e = 2.73; }
        var t = this;
        cc.tween(this.node).set({
            opacity: 0,
            scale: 0.7
        }).to(0.17, {
            opacity: 255,
            scale: 1.05
        }, {
            easing: cc.easing.sineInOut
        }).to(0.1, {
            scale: 1
        }).delay(e).to(0.2, {
            opacity: 0
        }).call(function () {
            t.delegate.close();
        }).start();
    };
    LockTipsView.prototype.showTips = function (e, t, o) {
        if (o === void 0) { o = 2.73; }
        "string" != typeof e && (e += "");
        this._txtContent && (this._txtContent.string = e);
        var n = t || cc.v3(0, 0, 0);
        this.node.setPosition(n);
        this.doAction(o);
    };
    LockTipsView.prefabUrl = "prefabs/daily/LockTipsItem";
    LockTipsView = __decorate([
        mj.class
    ], LockTipsView);
    return LockTipsView;
}(UIView_1.default));
exports.default = LockTipsView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xvY2tUaXBzVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQ3JDLElBQUEsS0FHRixFQUFFLENBQUMsVUFBVSxFQUZmLE9BQU8sYUFBQSxFQUNQLFFBQVEsY0FDTyxDQUFDO0FBRWxCO0lBQTBDLGdDQUFNO0lBQWhEO1FBQUEscUVBaUNDO1FBaENDLGlCQUFXLEdBQUcsSUFBSSxDQUFDOztJQWdDckIsQ0FBQztJQTlCQyw2QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEksQ0FBQztJQUNELCtCQUFRLEdBQVIsVUFBUyxDQUFRO1FBQVIsa0JBQUEsRUFBQSxRQUFRO1FBQ2YsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ3RCLE9BQU8sRUFBRSxDQUFDO1lBQ1YsS0FBSyxFQUFFLEdBQUc7U0FDWCxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtZQUNWLE9BQU8sRUFBRSxHQUFHO1lBQ1osS0FBSyxFQUFFLElBQUk7U0FDWixFQUFFO1lBQ0QsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDO1NBQ1QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQ2xCLE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNOLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsK0JBQVEsR0FBUixVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBUTtRQUFSLGtCQUFBLEVBQUEsUUFBUTtRQUNyQixRQUFRLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBOUJNLHNCQUFTLEdBQUcsNEJBQTRCLENBQUM7SUFGN0IsWUFBWTtRQURoQyxFQUFFLENBQUMsS0FBSztPQUNZLFlBQVksQ0FpQ2hDO0lBQUQsbUJBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQ3lDLGdCQUFNLEdBaUMvQztrQkFqQ29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlWaWV3IGZyb20gJy4vZnJhbWV3b3JrL3VpL1VJVmlldyc7XG5jb25zdCB7XG4gIGNjY2xhc3MsXG4gIHByb3BlcnR5XG59ID0gY2MuX2RlY29yYXRvcjtcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9ja1RpcHNWaWV3IGV4dGVuZHMgVUlWaWV3IHtcbiAgX3R4dENvbnRlbnQgPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2RhaWx5L0xvY2tUaXBzSXRlbVwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIHQ7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fdHh0Q29udGVudCA9IG51bGwgPT09ICh0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidHh0X2NvbnRlbnRcIikpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgfVxuICBkb0FjdGlvbihlID0gMi43Mykge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnNldCh7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgc2NhbGU6IDAuN1xuICAgIH0pLnRvKDAuMTcsIHtcbiAgICAgIG9wYWNpdHk6IDI1NSxcbiAgICAgIHNjYWxlOiAxLjA1XG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluT3V0XG4gICAgfSkudG8oMC4xLCB7XG4gICAgICBzY2FsZTogMVxuICAgIH0pLmRlbGF5KGUpLnRvKDAuMiwge1xuICAgICAgb3BhY2l0eTogMFxuICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgdC5kZWxlZ2F0ZS5jbG9zZSgpO1xuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbiAgc2hvd1RpcHMoZSwgdCwgbyA9IDIuNzMpIHtcbiAgICBcInN0cmluZ1wiICE9IHR5cGVvZiBlICYmIChlICs9IFwiXCIpO1xuICAgIHRoaXMuX3R4dENvbnRlbnQgJiYgKHRoaXMuX3R4dENvbnRlbnQuc3RyaW5nID0gZSk7XG4gICAgdmFyIG4gPSB0IHx8IGNjLnYzKDAsIDAsIDApO1xuICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuKTtcbiAgICB0aGlzLmRvQWN0aW9uKG8pO1xuICB9XG59Il19