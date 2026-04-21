
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile4Guide/Scripts/Tile4GuideMask.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1124ywc75BvZGw122UhA3f', 'Tile4GuideMask');
// subpackages/l_tile4Guide/Scripts/Tile4GuideMask.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TILE4_SLOT_FULL_WARN_NODE = void 0;
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
exports.TILE4_SLOT_FULL_WARN_NODE = "tile4SlotFullWarn";
var Tile4GuideMask = /** @class */ (function (_super) {
    __extends(Tile4GuideMask, _super);
    function Tile4GuideMask() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._slotZIndex = -1;
        _this._slotSiblingIndex = -1;
        _this._richNode = null;
        _this._delayTime = 0.5;
        _this._canClose = false;
        return _this;
    }
    Tile4GuideMask.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node.getChildByName("mask"), this.onClickClose.bind(this));
        this._richNode = this.node.getChildByName("nodeTip").getChildByName("labelDesc");
        this._richNode.on(cc.Node.EventType.SIZE_CHANGED, this._updateFontSize, this);
        this._updateFontSize();
        this._delayClose();
    };
    Tile4GuideMask.prototype._delayClose = function () {
        var e = this;
        cc.tween(this.node).delay(this._delayTime).call(function () {
            e._canClose = true;
        }).start();
    };
    Tile4GuideMask.prototype._updateFontSize = function () {
        if (this._richNode.getContentSize().height > 100) {
            this._richNode.getComponent(cc.RichText).fontSize = 48;
        }
        else {
            this._richNode.getComponent(cc.RichText).fontSize = 62;
        }
    };
    Tile4GuideMask.prototype.setCloseCallback = function (e, t, i) {
        this._slotZIndex = e;
        this._slotSiblingIndex = t;
        this._onClose = i;
    };
    Tile4GuideMask.prototype.onClickClose = function () {
        if (this._canClose) {
            this.node.destroy();
            this._onClose && this._onClose(this._slotZIndex, this._slotSiblingIndex);
        }
    };
    Tile4GuideMask.prototype.onDestroy = function () {
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
        this._onClose = null;
    };
    Tile4GuideMask.prefabUrl = "prefabs/Tile4GuideMask";
    Tile4GuideMask.bundleName = "l_tile4Guide";
    Tile4GuideMask = __decorate([
        mj.class
    ], Tile4GuideMask);
    return Tile4GuideMask;
}(BaseUI_1.default));
exports.default = Tile4GuideMask;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGU0R3VpZGUvU2NyaXB0cy9UaWxlNEd1aWRlTWFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMvQyxRQUFBLHlCQUF5QixHQUFHLG1CQUFtQixDQUFDO0FBRTNEO0lBQTRDLGtDQUFNO0lBQWxEO1FBQUEscUVBNENDO1FBM0NDLGlCQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakIsdUJBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVSxHQUFHLEdBQUcsQ0FBQztRQUNqQixlQUFTLEdBQUcsS0FBSyxDQUFDOztJQXVDcEIsQ0FBQztJQXBDQywrQkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0Qsb0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzlDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELHdDQUFlLEdBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtZQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUN4RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDeEQ7SUFDSCxDQUFDO0lBQ0QseUNBQWdCLEdBQWhCLFVBQWlCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxxQ0FBWSxHQUFaO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDO0lBQ0Qsa0NBQVMsR0FBVDtRQUNFLGlCQUFNLFNBQVMsSUFBSSxpQkFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFyQ00sd0JBQVMsR0FBRyx3QkFBd0IsQ0FBQztJQUNyQyx5QkFBVSxHQUFHLGNBQWMsQ0FBQztJQVBoQixjQUFjO1FBRGxDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksY0FBYyxDQTRDbEM7SUFBRCxxQkFBQztDQTVDRCxBQTRDQyxDQTVDMkMsZ0JBQU0sR0E0Q2pEO2tCQTVDb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmV4cG9ydCB2YXIgVElMRTRfU0xPVF9GVUxMX1dBUk5fTk9ERSA9IFwidGlsZTRTbG90RnVsbFdhcm5cIjtcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTRHdWlkZU1hc2sgZXh0ZW5kcyBCYXNlVUkge1xuICBfc2xvdFpJbmRleCA9IC0xO1xuICBfc2xvdFNpYmxpbmdJbmRleCA9IC0xO1xuICBfcmljaE5vZGUgPSBudWxsO1xuICBfZGVsYXlUaW1lID0gMC41O1xuICBfY2FuQ2xvc2UgPSBmYWxzZTtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9UaWxlNEd1aWRlTWFza1wiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IFwibF90aWxlNEd1aWRlXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibWFza1wiKSwgdGhpcy5vbkNsaWNrQ2xvc2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5fcmljaE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlVGlwXCIpLmdldENoaWxkQnlOYW1lKFwibGFiZWxEZXNjXCIpO1xuICAgIHRoaXMuX3JpY2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy5fdXBkYXRlRm9udFNpemUsIHRoaXMpO1xuICAgIHRoaXMuX3VwZGF0ZUZvbnRTaXplKCk7XG4gICAgdGhpcy5fZGVsYXlDbG9zZSgpO1xuICB9XG4gIF9kZWxheUNsb3NlKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUpLmRlbGF5KHRoaXMuX2RlbGF5VGltZSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICBlLl9jYW5DbG9zZSA9IHRydWU7XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICBfdXBkYXRlRm9udFNpemUoKSB7XG4gICAgaWYgKHRoaXMuX3JpY2hOb2RlLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0ID4gMTAwKSB7XG4gICAgICB0aGlzLl9yaWNoTm9kZS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLmZvbnRTaXplID0gNDg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JpY2hOb2RlLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuZm9udFNpemUgPSA2MjtcbiAgICB9XG4gIH1cbiAgc2V0Q2xvc2VDYWxsYmFjayhlLCB0LCBpKSB7XG4gICAgdGhpcy5fc2xvdFpJbmRleCA9IGU7XG4gICAgdGhpcy5fc2xvdFNpYmxpbmdJbmRleCA9IHQ7XG4gICAgdGhpcy5fb25DbG9zZSA9IGk7XG4gIH1cbiAgb25DbGlja0Nsb3NlKCkge1xuICAgIGlmICh0aGlzLl9jYW5DbG9zZSkge1xuICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX29uQ2xvc2UgJiYgdGhpcy5fb25DbG9zZSh0aGlzLl9zbG90WkluZGV4LCB0aGlzLl9zbG90U2libGluZ0luZGV4KTtcbiAgICB9XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHN1cGVyLm9uRGVzdHJveSAmJiBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9vbkNsb3NlID0gbnVsbDtcbiAgfVxufSJdfQ==