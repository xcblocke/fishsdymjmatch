
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_deviceInfo/Scripts/DeviceInfoTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23e44/V/GJA9KPoYNbFzRUf', 'DeviceInfoTrait');
// subpackages/l_deviceInfo/Scripts/DeviceInfoTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DeviceInfoTrait = /** @class */ (function (_super) {
    __extends(DeviceInfoTrait, _super);
    function DeviceInfoTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._clickCount = 0;
        _this._triggerClickCount = 12;
        _this._resetTimer = null;
        _this._clickTimeout = 500;
        _this._boundNode = null;
        return _this;
    }
    DeviceInfoTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DeviceInfoTrait.prototype.onLangSelVw_start = function (e, t) {
        var i = e.ins.node;
        this.bindTitleClick(i);
        t();
    };
    DeviceInfoTrait.prototype.bindTitleClick = function (e) {
        if (cc.isValid(e)) {
            var t = e.getChildByName("content");
            if (cc.isValid(t)) {
                var i = t.getChildByName("top_bg");
                if (cc.isValid(i)) {
                    var o = i.getChildByName("title_img");
                    if (cc.isValid(o)) {
                        this._clickCount = 0;
                        if (null !== this._resetTimer) {
                            clearTimeout(this._resetTimer);
                            this._resetTimer = null;
                        }
                        cc.isValid(this._boundNode) && this._boundNode.off(cc.Node.EventType.TOUCH_END, this.onTitleClick, this);
                        o.on(cc.Node.EventType.TOUCH_END, this.onTitleClick, this);
                        this._boundNode = o;
                    }
                }
            }
        }
    };
    DeviceInfoTrait.prototype.onTitleClick = function () {
        var e = this;
        if (null !== this._resetTimer) {
            clearTimeout(this._resetTimer);
            this._resetTimer = null;
        }
        this._clickCount++;
        if (this._clickCount >= this._triggerClickCount) {
            this._clickCount = 0;
            this.showDeviceInfoPanel();
        }
        else
            this._resetTimer = window['setTimeout'](function () {
                e._clickCount = 0;
                e._resetTimer = null;
            }, this._clickTimeout);
    };
    DeviceInfoTrait.prototype.showDeviceInfoPanel = function () {
        this.pushController("DeviceInfoPanelController", {});
    };
    DeviceInfoTrait.prototype.isShowPlanInfo = function () {
        return this._traitData.isShowPlanInfo;
    };
    DeviceInfoTrait.traitKey = "DeviceInfo";
    DeviceInfoTrait = __decorate([
        mj.trait,
        mj.class("DeviceInfoTrait")
    ], DeviceInfoTrait);
    return DeviceInfoTrait;
}(Trait_1.default));
exports.default = DeviceInfoTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RldmljZUluZm8vU2NyaXB0cy9EZXZpY2VJbmZvVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUE2QyxtQ0FBSztJQUFsRDtRQUFBLHFFQXlEQztRQXhEQyxpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQix3QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDeEIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsbUJBQWEsR0FBRyxHQUFHLENBQUM7UUFDcEIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7O0lBb0RwQixDQUFDO0lBbERDLGdDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCwyQ0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCx3Q0FBYyxHQUFkLFVBQWUsQ0FBQztRQUNkLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN0QyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFOzRCQUM3QixZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzRCQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzt5QkFDekI7d0JBQ0QsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3pHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzNELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO3FCQUNyQjtpQkFDRjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBQ0Qsc0NBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDN0IsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCOztZQUFNLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM3QyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0QsNkNBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQywyQkFBMkIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0Qsd0NBQWMsR0FBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7SUFDeEMsQ0FBQztJQWxETSx3QkFBUSxHQUFHLFlBQVksQ0FBQztJQU5aLGVBQWU7UUFGbkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO09BQ1AsZUFBZSxDQXlEbkM7SUFBRCxzQkFBQztDQXpERCxBQXlEQyxDQXpENEMsZUFBSyxHQXlEakQ7a0JBekRvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRGV2aWNlSW5mb1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXZpY2VJbmZvVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jbGlja0NvdW50ID0gMDtcbiAgX3RyaWdnZXJDbGlja0NvdW50ID0gMTI7XG4gIF9yZXNldFRpbWVyID0gbnVsbDtcbiAgX2NsaWNrVGltZW91dCA9IDUwMDtcbiAgX2JvdW5kTm9kZSA9IG51bGw7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRGV2aWNlSW5mb1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25MYW5nU2VsVndfc3RhcnQoZSwgdCkge1xuICAgIHZhciBpID0gZS5pbnMubm9kZTtcbiAgICB0aGlzLmJpbmRUaXRsZUNsaWNrKGkpO1xuICAgIHQoKTtcbiAgfVxuICBiaW5kVGl0bGVDbGljayhlKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgIHZhciB0ID0gZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XG4gICAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgICB2YXIgaSA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0b3BfYmdcIik7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGkpKSB7XG4gICAgICAgICAgdmFyIG8gPSBpLmdldENoaWxkQnlOYW1lKFwidGl0bGVfaW1nXCIpO1xuICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICAgICAgICB0aGlzLl9jbGlja0NvdW50ID0gMDtcbiAgICAgICAgICAgIGlmIChudWxsICE9PSB0aGlzLl9yZXNldFRpbWVyKSB7XG4gICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9yZXNldFRpbWVyKTtcbiAgICAgICAgICAgICAgdGhpcy5fcmVzZXRUaW1lciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5pc1ZhbGlkKHRoaXMuX2JvdW5kTm9kZSkgJiYgdGhpcy5fYm91bmROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25UaXRsZUNsaWNrLCB0aGlzKTtcbiAgICAgICAgICAgIG8ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVGl0bGVDbGljaywgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9ib3VuZE5vZGUgPSBvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBvblRpdGxlQ2xpY2soKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmIChudWxsICE9PSB0aGlzLl9yZXNldFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fcmVzZXRUaW1lcik7XG4gICAgICB0aGlzLl9yZXNldFRpbWVyID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fY2xpY2tDb3VudCsrO1xuICAgIGlmICh0aGlzLl9jbGlja0NvdW50ID49IHRoaXMuX3RyaWdnZXJDbGlja0NvdW50KSB7XG4gICAgICB0aGlzLl9jbGlja0NvdW50ID0gMDtcbiAgICAgIHRoaXMuc2hvd0RldmljZUluZm9QYW5lbCgpO1xuICAgIH0gZWxzZSB0aGlzLl9yZXNldFRpbWVyID0gd2luZG93WydzZXRUaW1lb3V0J10oZnVuY3Rpb24gKCkge1xuICAgICAgZS5fY2xpY2tDb3VudCA9IDA7XG4gICAgICBlLl9yZXNldFRpbWVyID0gbnVsbDtcbiAgICB9LCB0aGlzLl9jbGlja1RpbWVvdXQpO1xuICB9XG4gIHNob3dEZXZpY2VJbmZvUGFuZWwoKSB7XG4gICAgdGhpcy5wdXNoQ29udHJvbGxlcihcIkRldmljZUluZm9QYW5lbENvbnRyb2xsZXJcIiwge30pO1xuICB9XG4gIGlzU2hvd1BsYW5JbmZvKCkge1xuICAgIHJldHVybiB0aGlzLl90cmFpdERhdGEuaXNTaG93UGxhbkluZm87XG4gIH1cbn0iXX0=