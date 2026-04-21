
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/view/TipsView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '804b36TlYBPH5jD/MHCbTkN', 'TipsView');
// Scripts/view/TipsView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../framework/ui/UIView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TipsView = /** @class */ (function (_super) {
    __extends(TipsView, _super);
    function TipsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._bg = null;
        _this._label1 = null;
        _this._label2 = null;
        _this._pos1 = null;
        _this._pos2 = null;
        return _this;
    }
    TipsView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._bg = this.node.getChildByName("bg1");
        this._label1 = this._bg.getChildByName("label1");
        this._label2 = this._bg.getChildByName("label2");
        this._label1.opacity = 0;
        this._label2.opacity = 0;
        this._pos1 = this._bg.position;
        this._pos2 = this._bg.position;
        this._bg.opacity = 0;
    };
    TipsView.prototype.doAction = function (e) {
        e.stopAllActions();
        e.runAction(cc.sequence(cc.delayTime(0.1), cc.spawn(cc.fadeOut(0.5), cc.moveBy(0.5, 0, 200))));
    };
    TipsView.prototype.showTips = function (e, t) {
        var o = this;
        this._label1.opacity = 255;
        this._label2.opacity = 0;
        this._bg.position = t || this._pos1;
        this._bg.opacity = 255;
        "string" != typeof e && (e += "");
        this._label1.getComponent(cc.Label).string = "" + e;
        this.scheduleOnce(function () {
            o.updateBgSize(o._label1);
        }, 0);
        this.doAction(this._bg);
    };
    TipsView.prototype.showRichTips = function (e, t) {
        var o = this;
        this._label1.opacity = 0;
        this._label2.opacity = 255;
        this._bg.position = t || this._pos2;
        this._bg.opacity = 255;
        this._label2.getComponent(cc.RichText).string = "" + e;
        this.scheduleOnce(function () {
            o.updateBgSize(o._label2);
        }, 0);
        this.doAction(this._bg);
    };
    TipsView.prototype.updateBgSize = function (e) {
        if (cc.isValid(e) && cc.isValid(this._bg)) {
            var t = e.getContentSize();
            this._bg.setContentSize(t.width + 20, t.height + 16);
        }
    };
    TipsView.prefabUrl = "prefabs/common/Tips";
    __decorate([
        mj.traitEvent("TipsView_updateBgSize")
    ], TipsView.prototype, "updateBgSize", null);
    TipsView = __decorate([
        mj.class
    ], TipsView);
    return TipsView;
}(UIView_1.default));
exports.default = TipsView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3ZpZXcvVGlwc1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUN0QyxJQUFBLEtBR0YsRUFBRSxDQUFDLFVBQVUsRUFGZixPQUFPLGFBQUEsRUFDUCxRQUFRLGNBQ08sQ0FBQztBQUVsQjtJQUFzQyw0QkFBTTtJQUE1QztRQUFBLHFFQXNEQztRQXJEQyxTQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ1gsYUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsV0FBSyxHQUFHLElBQUksQ0FBQzs7SUFpRGYsQ0FBQztJQS9DQyx5QkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNELDJCQUFRLEdBQVIsVUFBUyxDQUFDO1FBQ1IsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUNELDJCQUFRLEdBQVIsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsK0JBQVksR0FBWixVQUFhLENBQUMsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztJQS9DTSxrQkFBUyxHQUFHLHFCQUFxQixDQUFDO0lBMEN6QztRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7Z0RBTXRDO0lBckRrQixRQUFRO1FBRDVCLEVBQUUsQ0FBQyxLQUFLO09BQ1ksUUFBUSxDQXNENUI7SUFBRCxlQUFDO0NBdERELEFBc0RDLENBdERxQyxnQkFBTSxHQXNEM0M7a0JBdERvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJVmlldyBmcm9tICcuLi9mcmFtZXdvcmsvdWkvVUlWaWV3JztcbmNvbnN0IHtcbiAgY2NjbGFzcyxcbiAgcHJvcGVydHlcbn0gPSBjYy5fZGVjb3JhdG9yO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXBzVmlldyBleHRlbmRzIFVJVmlldyB7XG4gIF9iZyA9IG51bGw7XG4gIF9sYWJlbDEgPSBudWxsO1xuICBfbGFiZWwyID0gbnVsbDtcbiAgX3BvczEgPSBudWxsO1xuICBfcG9zMiA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvY29tbW9uL1RpcHNcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2JnID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmcxXCIpO1xuICAgIHRoaXMuX2xhYmVsMSA9IHRoaXMuX2JnLmdldENoaWxkQnlOYW1lKFwibGFiZWwxXCIpO1xuICAgIHRoaXMuX2xhYmVsMiA9IHRoaXMuX2JnLmdldENoaWxkQnlOYW1lKFwibGFiZWwyXCIpO1xuICAgIHRoaXMuX2xhYmVsMS5vcGFjaXR5ID0gMDtcbiAgICB0aGlzLl9sYWJlbDIub3BhY2l0eSA9IDA7XG4gICAgdGhpcy5fcG9zMSA9IHRoaXMuX2JnLnBvc2l0aW9uO1xuICAgIHRoaXMuX3BvczIgPSB0aGlzLl9iZy5wb3NpdGlvbjtcbiAgICB0aGlzLl9iZy5vcGFjaXR5ID0gMDtcbiAgfVxuICBkb0FjdGlvbihlKSB7XG4gICAgZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgIGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjEpLCBjYy5zcGF3bihjYy5mYWRlT3V0KDAuNSksIGNjLm1vdmVCeSgwLjUsIDAsIDIwMCkpKSk7XG4gIH1cbiAgc2hvd1RpcHMoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcztcbiAgICB0aGlzLl9sYWJlbDEub3BhY2l0eSA9IDI1NTtcbiAgICB0aGlzLl9sYWJlbDIub3BhY2l0eSA9IDA7XG4gICAgdGhpcy5fYmcucG9zaXRpb24gPSB0IHx8IHRoaXMuX3BvczE7XG4gICAgdGhpcy5fYmcub3BhY2l0eSA9IDI1NTtcbiAgICBcInN0cmluZ1wiICE9IHR5cGVvZiBlICYmIChlICs9IFwiXCIpO1xuICAgIHRoaXMuX2xhYmVsMS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyBlO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIG8udXBkYXRlQmdTaXplKG8uX2xhYmVsMSk7XG4gICAgfSwgMCk7XG4gICAgdGhpcy5kb0FjdGlvbih0aGlzLl9iZyk7XG4gIH1cbiAgc2hvd1JpY2hUaXBzKGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgdGhpcy5fbGFiZWwxLm9wYWNpdHkgPSAwO1xuICAgIHRoaXMuX2xhYmVsMi5vcGFjaXR5ID0gMjU1O1xuICAgIHRoaXMuX2JnLnBvc2l0aW9uID0gdCB8fCB0aGlzLl9wb3MyO1xuICAgIHRoaXMuX2JnLm9wYWNpdHkgPSAyNTU7XG4gICAgdGhpcy5fbGFiZWwyLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gXCJcIiArIGU7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgby51cGRhdGVCZ1NpemUoby5fbGFiZWwyKTtcbiAgICB9LCAwKTtcbiAgICB0aGlzLmRvQWN0aW9uKHRoaXMuX2JnKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpcHNWaWV3X3VwZGF0ZUJnU2l6ZVwiKVxuICB1cGRhdGVCZ1NpemUoZSkge1xuICAgIGlmIChjYy5pc1ZhbGlkKGUpICYmIGNjLmlzVmFsaWQodGhpcy5fYmcpKSB7XG4gICAgICB2YXIgdCA9IGUuZ2V0Q29udGVudFNpemUoKTtcbiAgICAgIHRoaXMuX2JnLnNldENvbnRlbnRTaXplKHQud2lkdGggKyAyMCwgdC5oZWlnaHQgKyAxNik7XG4gICAgfVxuICB9XG59Il19