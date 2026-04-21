
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/InputTouchEnd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8bedlah4tLPqHg8xd+MDK7', 'InputTouchEnd');
// Scripts/InputTouchEnd.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var InputBaseTouchEnd_1 = require("./inputbase/InputBaseTouchEnd");
var ClearHelper_1 = require("./ClearHelper");
var InputTouchEnd = /** @class */ (function (_super) {
    __extends(InputTouchEnd, _super);
    function InputTouchEnd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTouchEnd.prototype.runTouchStartClear = function (t) {
        _super.prototype.runTouchStartClear.call(this, t);
        this.playClickAudio();
    };
    InputTouchEnd.prototype.playRankCardAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.SpecialTouch);
    };
    InputTouchEnd.prototype.playNormalAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Check1);
    };
    InputTouchEnd.prototype.getTouchTileObject = function () {
        var e = this.gameContext.touchData.tileId;
        return e ? this.gameContext.getTileMapObject().getTileObject(e) : null;
    };
    InputTouchEnd.prototype.playClickAudio = function () {
        var e = this.getTouchTileObject();
        if (e && e.type == TileTypeEnum_1.ETileType.RankCard) {
            this.playRankCardAudio();
        }
        else {
            this.playNormalAudio();
        }
    };
    InputTouchEnd.prototype.runSelectCardSuccess = function (t) {
        _super.prototype.runSelectCardSuccess.call(this, t);
        this.onSelectCardSuccess();
    };
    InputTouchEnd.prototype.runClear = function (t) {
        _super.prototype.runClear.call(this, t);
        ClearHelper_1.default.runClear(this.gameContext, t, this);
    };
    InputTouchEnd.prototype.excute = function (t) {
        _super.prototype.excute.call(this, t);
    };
    InputTouchEnd.prototype.onSelectCardSuccess = function () { };
    __decorate([
        mj.traitEvent("IptTchEnd_rankCardAud")
    ], InputTouchEnd.prototype, "playRankCardAudio", null);
    __decorate([
        mj.traitEvent("IptTchEnd_Success")
    ], InputTouchEnd.prototype, "onSelectCardSuccess", null);
    return InputTouchEnd;
}(InputBaseTouchEnd_1.default));
exports.default = InputTouchEnd;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0lucHV0VG91Y2hFbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlFQUFtRTtBQUNuRSxrRUFBOEQ7QUFDOUQsbUVBQThEO0FBQzlELDZDQUF3QztBQUN4QztJQUEyQyxpQ0FBaUI7SUFBNUQ7O0lBcUNBLENBQUM7SUFwQ0MsMENBQWtCLEdBQWxCLFVBQW1CLENBQUM7UUFDbEIsaUJBQU0sa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHlDQUFpQixHQUFqQjtRQUNFLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLHdCQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELHVDQUFlLEdBQWY7UUFDRSxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCwwQ0FBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDMUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN6RSxDQUFDO0lBQ0Qsc0NBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksd0JBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDckMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFDRCw0Q0FBb0IsR0FBcEIsVUFBcUIsQ0FBQztRQUNwQixpQkFBTSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDRCxnQ0FBUSxHQUFSLFVBQVMsQ0FBQztRQUNSLGlCQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdCLHFCQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCw4QkFBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCwyQ0FBbUIsR0FBbkIsY0FBdUIsQ0FBQztJQTlCeEI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDOzBEQUd0QztJQTRCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7NERBQ1g7SUFDMUIsb0JBQUM7Q0FyQ0QsQUFxQ0MsQ0FyQzBDLDJCQUFpQixHQXFDM0Q7a0JBckNvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCBJbnB1dEJhc2VUb3VjaEVuZCBmcm9tICcuL2lucHV0YmFzZS9JbnB1dEJhc2VUb3VjaEVuZCc7XG5pbXBvcnQgQ2xlYXJIZWxwZXIgZnJvbSAnLi9DbGVhckhlbHBlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFRvdWNoRW5kIGV4dGVuZHMgSW5wdXRCYXNlVG91Y2hFbmQge1xuICBydW5Ub3VjaFN0YXJ0Q2xlYXIodCkge1xuICAgIHN1cGVyLnJ1blRvdWNoU3RhcnRDbGVhci5jYWxsKHRoaXMsIHQpO1xuICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIklwdFRjaEVuZF9yYW5rQ2FyZEF1ZFwiKVxuICBwbGF5UmFua0NhcmRBdWRpbygpIHtcbiAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5TcGVjaWFsVG91Y2gpO1xuICB9XG4gIHBsYXlOb3JtYWxBdWRpbygpIHtcbiAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5DaGVjazEpO1xuICB9XG4gIGdldFRvdWNoVGlsZU9iamVjdCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2FtZUNvbnRleHQudG91Y2hEYXRhLnRpbGVJZDtcbiAgICByZXR1cm4gZSA/IHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3QoZSkgOiBudWxsO1xuICB9XG4gIHBsYXlDbGlja0F1ZGlvKCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRUb3VjaFRpbGVPYmplY3QoKTtcbiAgICBpZiAoZSAmJiBlLnR5cGUgPT0gRVRpbGVUeXBlLlJhbmtDYXJkKSB7XG4gICAgICB0aGlzLnBsYXlSYW5rQ2FyZEF1ZGlvKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxheU5vcm1hbEF1ZGlvKCk7XG4gICAgfVxuICB9XG4gIHJ1blNlbGVjdENhcmRTdWNjZXNzKHQpIHtcbiAgICBzdXBlci5ydW5TZWxlY3RDYXJkU3VjY2Vzcy5jYWxsKHRoaXMsIHQpO1xuICAgIHRoaXMub25TZWxlY3RDYXJkU3VjY2VzcygpO1xuICB9XG4gIHJ1bkNsZWFyKHQpIHtcbiAgICBzdXBlci5ydW5DbGVhci5jYWxsKHRoaXMsIHQpO1xuICAgIENsZWFySGVscGVyLnJ1bkNsZWFyKHRoaXMuZ2FtZUNvbnRleHQsIHQsIHRoaXMpO1xuICB9XG4gIGV4Y3V0ZSh0KSB7XG4gICAgc3VwZXIuZXhjdXRlLmNhbGwodGhpcywgdCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJJcHRUY2hFbmRfU3VjY2Vzc1wiKVxuICBvblNlbGVjdENhcmRTdWNjZXNzKCkge31cbn0iXX0=