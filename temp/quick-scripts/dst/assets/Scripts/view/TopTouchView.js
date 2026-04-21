
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/view/TopTouchView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '919afsaempLp4hS3PrBQE4j', 'TopTouchView');
// Scripts/view/TopTouchView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../Config");
var UIView_1 = require("../framework/ui/UIView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TopTouchView = /** @class */ (function (_super) {
    __extends(TopTouchView, _super);
    function TopTouchView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopTouchView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerTouchEvent(this.onTouchStart.bind(this), this.onTouchMove.bind(this), this.onTouchEnd.bind(this), this.onTouchCancel.bind(this));
    };
    TopTouchView.prototype.onTouchStart = function (e, t) {
        this.touchStartEvent(e, t);
        mj.EventManager.emit(Config_1.EVT_MSG_KEY_EVENT_TOP_TOUCH_START, e, t);
        return false;
    };
    TopTouchView.prototype.onTouchMove = function (e, t) {
        mj.EventManager.emit(Config_1.EVT_MSG_KEY_EVENT_TOP_TOUCH_MOVE, e, t);
    };
    TopTouchView.prototype.onTouchEnd = function (e, t) {
        mj.EventManager.emit(Config_1.EVT_MSG_KEY_EVENT_TOP_TOUCH_END, e, t);
    };
    TopTouchView.prototype.onTouchCancel = function (e, t) {
        mj.EventManager.emit(Config_1.EVT_MSG_KEY_EVENT_TOP_TOUCH_CANCEL, e, t);
    };
    TopTouchView.prototype.touchStartEvent = function () { };
    TopTouchView.prefabUrl = "prefabs/common/TopTouch";
    __decorate([
        mj.traitEvent("TopTouchView_start")
    ], TopTouchView.prototype, "touchStartEvent", null);
    TopTouchView = __decorate([
        mj.class
    ], TopTouchView);
    return TopTouchView;
}(UIView_1.default));
exports.default = TopTouchView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3ZpZXcvVG9wVG91Y2hWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBcUs7QUFDckssaURBQTRDO0FBQ3RDLElBQUEsS0FHRixFQUFFLENBQUMsVUFBVSxFQUZmLE9BQU8sYUFBQSxFQUNQLFFBQVEsY0FDTyxDQUFDO0FBRWxCO0lBQTBDLGdDQUFNO0lBQWhEOztJQXNCQSxDQUFDO0lBcEJDLDZCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hKLENBQUM7SUFDRCxtQ0FBWSxHQUFaLFVBQWEsQ0FBQyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQixFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQywwQ0FBaUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0Qsa0NBQVcsR0FBWCxVQUFZLENBQUMsRUFBRSxDQUFDO1FBQ2QsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMseUNBQWdDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCxpQ0FBVSxHQUFWLFVBQVcsQ0FBQyxFQUFFLENBQUM7UUFDYixFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx3Q0FBK0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUNELG9DQUFhLEdBQWIsVUFBYyxDQUFDLEVBQUUsQ0FBQztRQUNoQixFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQywyQ0FBa0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELHNDQUFlLEdBQWYsY0FBbUIsQ0FBQztJQXBCYixzQkFBUyxHQUFHLHlCQUF5QixDQUFDO0lBb0I3QztRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7dURBQ2hCO0lBckJELFlBQVk7UUFEaEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxZQUFZLENBc0JoQztJQUFELG1CQUFDO0NBdEJELEFBc0JDLENBdEJ5QyxnQkFBTSxHQXNCL0M7a0JBdEJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVZUX01TR19LRVlfRVZFTlRfVE9QX1RPVUNIX1NUQVJULCBFVlRfTVNHX0tFWV9FVkVOVF9UT1BfVE9VQ0hfTU9WRSwgRVZUX01TR19LRVlfRVZFTlRfVE9QX1RPVUNIX0VORCwgRVZUX01TR19LRVlfRVZFTlRfVE9QX1RPVUNIX0NBTkNFTCB9IGZyb20gJy4uL0NvbmZpZyc7XG5pbXBvcnQgVUlWaWV3IGZyb20gJy4uL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuY29uc3Qge1xuICBjY2NsYXNzLFxuICBwcm9wZXJ0eVxufSA9IGNjLl9kZWNvcmF0b3I7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcFRvdWNoVmlldyBleHRlbmRzIFVJVmlldyB7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvY29tbW9uL1RvcFRvdWNoXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnJlZ2lzdGVyVG91Y2hFdmVudCh0aGlzLm9uVG91Y2hTdGFydC5iaW5kKHRoaXMpLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcyksIHRoaXMub25Ub3VjaEVuZC5iaW5kKHRoaXMpLCB0aGlzLm9uVG91Y2hDYW5jZWwuYmluZCh0aGlzKSk7XG4gIH1cbiAgb25Ub3VjaFN0YXJ0KGUsIHQpIHtcbiAgICB0aGlzLnRvdWNoU3RhcnRFdmVudChlLCB0KTtcbiAgICBtai5FdmVudE1hbmFnZXIuZW1pdChFVlRfTVNHX0tFWV9FVkVOVF9UT1BfVE9VQ0hfU1RBUlQsIGUsIHQpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBvblRvdWNoTW92ZShlLCB0KSB7XG4gICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRVZUX01TR19LRVlfRVZFTlRfVE9QX1RPVUNIX01PVkUsIGUsIHQpO1xuICB9XG4gIG9uVG91Y2hFbmQoZSwgdCkge1xuICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVWVF9NU0dfS0VZX0VWRU5UX1RPUF9UT1VDSF9FTkQsIGUsIHQpO1xuICB9XG4gIG9uVG91Y2hDYW5jZWwoZSwgdCkge1xuICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVWVF9NU0dfS0VZX0VWRU5UX1RPUF9UT1VDSF9DQU5DRUwsIGUsIHQpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVG9wVG91Y2hWaWV3X3N0YXJ0XCIpXG4gIHRvdWNoU3RhcnRFdmVudCgpIHt9XG59Il19