
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_journey/Scripts/TravelActiveOneTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ef1ebFt3JLQJXAskE0hZOt', 'TravelActiveOneTrait');
// subpackages/l_journey/Scripts/TravelActiveOneTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelActiveOneTrait = /** @class */ (function (_super) {
    __extends(TravelActiveOneTrait, _super);
    function TravelActiveOneTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelActiveOneTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.isLocalEmpty(this.localData.lastShowTime) && (this.localData.lastShowTime = -1);
        this.isLocalEmpty(this.localData.lastShowSession) && (this.localData.lastShowSession = -1);
    };
    TravelActiveOneTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    TravelActiveOneTrait.prototype.onJourney_CanShowActiveVw = function (t, e) {
        e({
            returnVal: t.beforReturnVal && this.canShowActiveView(t.ins)
        });
    };
    TravelActiveOneTrait.prototype.canShowActiveView = function (t) {
        if (t.curSession != this.localData.lastShowSession) {
            this.localData.lastShowSession = t.curSession;
            this.localData.lastShowTime = Date.now();
            return true;
        }
        if (this.isSameDay(this.localData.lastShowTime, Date.now()))
            return false;
        this.localData.lastShowTime = Date.now();
        this.localData.lastShowSession = t.curSession;
        return true;
    };
    TravelActiveOneTrait.prototype.isSameDay = function (t, e) {
        if (t < 0 || e < 0)
            return false;
        var r = new Date(t), o = new Date(e);
        return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth() && r.getDate() === o.getDate();
    };
    TravelActiveOneTrait.traitKey = "TravelActiveOne";
    TravelActiveOneTrait = __decorate([
        mj.trait,
        mj.class("TravelActiveOneTrait")
    ], TravelActiveOneTrait);
    return TravelActiveOneTrait;
}(Trait_1.default));
exports.default = TravelActiveOneTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2pvdXJuZXkvU2NyaXB0cy9UcmF2ZWxBY3RpdmVPbmVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQWtELHdDQUFLO0lBQXZEOztJQWdDQSxDQUFDO0lBOUJDLHFDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBQ0QsMkNBQVksR0FBWixVQUFhLENBQUM7UUFDWixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0Qsd0RBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQztZQUNBLFNBQVMsRUFBRSxDQUFDLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1NBQzdELENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxnREFBaUIsR0FBakIsVUFBa0IsQ0FBQztRQUNqQixJQUFJLENBQUMsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDekMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUMxRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCx3Q0FBUyxHQUFULFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDakIsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0csQ0FBQztJQTlCTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0FnQ3hDO0lBQUQsMkJBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ2lELGVBQUssR0FnQ3REO2tCQWhDb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVHJhdmVsQWN0aXZlT25lVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYXZlbEFjdGl2ZU9uZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRyYXZlbEFjdGl2ZU9uZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdFNob3dUaW1lKSAmJiAodGhpcy5sb2NhbERhdGEubGFzdFNob3dUaW1lID0gLTEpO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxhc3RTaG93U2Vzc2lvbikgJiYgKHRoaXMubG9jYWxEYXRhLmxhc3RTaG93U2Vzc2lvbiA9IC0xKTtcbiAgfVxuICBpc0xvY2FsRW1wdHkodCkge1xuICAgIHJldHVybiBudWxsID09IHQgfHwgXCJcIiA9PT0gdDtcbiAgfVxuICBvbkpvdXJuZXlfQ2FuU2hvd0FjdGl2ZVZ3KHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblZhbDogdC5iZWZvclJldHVyblZhbCAmJiB0aGlzLmNhblNob3dBY3RpdmVWaWV3KHQuaW5zKVxuICAgIH0pO1xuICB9XG4gIGNhblNob3dBY3RpdmVWaWV3KHQpIHtcbiAgICBpZiAodC5jdXJTZXNzaW9uICE9IHRoaXMubG9jYWxEYXRhLmxhc3RTaG93U2Vzc2lvbikge1xuICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFNob3dTZXNzaW9uID0gdC5jdXJTZXNzaW9uO1xuICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFNob3dUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1NhbWVEYXkodGhpcy5sb2NhbERhdGEubGFzdFNob3dUaW1lLCBEYXRlLm5vdygpKSkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RTaG93VGltZSA9IERhdGUubm93KCk7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdFNob3dTZXNzaW9uID0gdC5jdXJTZXNzaW9uO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlzU2FtZURheSh0LCBlKSB7XG4gICAgaWYgKHQgPCAwIHx8IGUgPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHIgPSBuZXcgRGF0ZSh0KSxcbiAgICAgIG8gPSBuZXcgRGF0ZShlKTtcbiAgICByZXR1cm4gci5nZXRGdWxsWWVhcigpID09PSBvLmdldEZ1bGxZZWFyKCkgJiYgci5nZXRNb250aCgpID09PSBvLmdldE1vbnRoKCkgJiYgci5nZXREYXRlKCkgPT09IG8uZ2V0RGF0ZSgpO1xuICB9XG59Il19