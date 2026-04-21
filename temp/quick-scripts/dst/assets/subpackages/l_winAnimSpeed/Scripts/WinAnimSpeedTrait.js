
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_winAnimSpeed/Scripts/WinAnimSpeedTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb3b4jnw15IwbV7fgJ93io+', 'WinAnimSpeedTrait');
// subpackages/l_winAnimSpeed/Scripts/WinAnimSpeedTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WinAnimSpeedTrait = /** @class */ (function (_super) {
    __extends(WinAnimSpeedTrait, _super);
    function WinAnimSpeedTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WinAnimSpeedTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinAnimSpeedTrait.prototype.onWinVw_onLoad = function (t, e) {
        this.setViewAnimSpeed(t, "WinView");
        e();
    };
    WinAnimSpeedTrait.prototype.onDCWinVw_onLoad = function (t, e) {
        this.setViewAnimSpeed(t, "DailyChallengeWinView");
        e();
    };
    WinAnimSpeedTrait.prototype.onTLWinVw_onLoad = function (t, e) {
        this.setViewAnimSpeed(t, "TravelWinView");
        e();
    };
    WinAnimSpeedTrait.prototype.setViewAnimSpeed = function (t) {
        var e, n = t.ins;
        if (n && cc.isValid(n.node)) {
            var i = 1 / ((null === (e = this._traitData) || void 0 === e ? void 0 : e.speedRate) || 1.5);
            "function" == typeof n.setAnimSpeedRate && n.setAnimSpeedRate(i);
        }
    };
    WinAnimSpeedTrait.traitKey = "WinAnimSpeed";
    WinAnimSpeedTrait = __decorate([
        mj.trait,
        mj.class("WinAnimSpeedTrait")
    ], WinAnimSpeedTrait);
    return WinAnimSpeedTrait;
}(Trait_1.default));
exports.default = WinAnimSpeedTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dpbkFuaW1TcGVlZC9TY3JpcHRzL1dpbkFuaW1TcGVlZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBK0MscUNBQUs7SUFBcEQ7O0lBeUJBLENBQUM7SUF2QkMsa0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDBDQUFjLEdBQWQsVUFBZSxDQUFDLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDRDQUFnQixHQUFoQixVQUFpQixDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFDbEQsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsNENBQWdCLEdBQWhCLFVBQWlCLENBQUMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsNENBQWdCLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDWixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQzdGLFVBQVUsSUFBSSxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEU7SUFDSCxDQUFDO0lBdkJNLDBCQUFRLEdBQUcsY0FBYyxDQUFDO0lBRGQsaUJBQWlCO1FBRnJDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztPQUNULGlCQUFpQixDQXlCckM7SUFBRCx3QkFBQztDQXpCRCxBQXlCQyxDQXpCOEMsZUFBSyxHQXlCbkQ7a0JBekJvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJXaW5BbmltU3BlZWRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luQW5pbVNwZWVkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiV2luQW5pbVNwZWVkXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbldpblZ3X29uTG9hZCh0LCBlKSB7XG4gICAgdGhpcy5zZXRWaWV3QW5pbVNwZWVkKHQsIFwiV2luVmlld1wiKTtcbiAgICBlKCk7XG4gIH1cbiAgb25EQ1dpblZ3X29uTG9hZCh0LCBlKSB7XG4gICAgdGhpcy5zZXRWaWV3QW5pbVNwZWVkKHQsIFwiRGFpbHlDaGFsbGVuZ2VXaW5WaWV3XCIpO1xuICAgIGUoKTtcbiAgfVxuICBvblRMV2luVndfb25Mb2FkKHQsIGUpIHtcbiAgICB0aGlzLnNldFZpZXdBbmltU3BlZWQodCwgXCJUcmF2ZWxXaW5WaWV3XCIpO1xuICAgIGUoKTtcbiAgfVxuICBzZXRWaWV3QW5pbVNwZWVkKHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIG4gPSB0LmlucztcbiAgICBpZiAobiAmJiBjYy5pc1ZhbGlkKG4ubm9kZSkpIHtcbiAgICAgIHZhciBpID0gMSAvICgobnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuc3BlZWRSYXRlKSB8fCAxLjUpO1xuICAgICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBuLnNldEFuaW1TcGVlZFJhdGUgJiYgbi5zZXRBbmltU3BlZWRSYXRlKGkpO1xuICAgIH1cbiAgfVxufSJdfQ==