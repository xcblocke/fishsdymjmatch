
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_interAdCD/Scripts/InterAdCDTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a03e73rxj9H4aji1y+CSB1V', 'InterAdCDTrait');
// subpackages/l_interAdCD/Scripts/InterAdCDTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var InterAdCDTrait = /** @class */ (function (_super) {
    __extends(InterAdCDTrait, _super);
    function InterAdCDTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._lastPlayTime = 0;
        _this._cdTime = 70000;
        return _this;
    }
    InterAdCDTrait.prototype.onLoad = function () {
        var e = this;
        _super.prototype.onLoad.call(this);
        this._cdTime = 1000 * this._traitData.cdTime;
        setTimeout(function () {
            e.initLastPlayTimestamp(Date.now());
        }, 0);
    };
    InterAdCDTrait.prototype.initLastPlayTimestamp = function (t) {
        this._lastPlayTime = t;
    };
    InterAdCDTrait.prototype.onAdMgr_interAdClose = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this._lastPlayTime = Date.now();
            e();
        }
        else
            e();
    };
    InterAdCDTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.getCDTime();
            if (0 !== this._lastPlayTime) {
                var r = Date.now() - this._lastPlayTime, i = this.getCDTime();
                if (r < i) {
                    Math.ceil((i - r) / 1000);
                    e({
                        returnVal: false,
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    InterAdCDTrait.prototype.getCDTime = function () {
        return this._cdTime;
    };
    InterAdCDTrait.prototype.getLastPlayTime = function () {
        return this._lastPlayTime;
    };
    InterAdCDTrait.prototype.getRemainingCD = function () {
        if (0 === this._lastPlayTime)
            return 0;
        var t = Date.now() - this._lastPlayTime, e = this.getCDTime();
        return Math.max(0, e - t);
    };
    InterAdCDTrait.prototype.adjustLastPlayTime = function (t) {
        this._lastPlayTime = t;
    };
    InterAdCDTrait.prototype.updateLastPlayTime = function (t) {
        this._lastPlayTime = t;
    };
    InterAdCDTrait.traitKey = "InterAdCD";
    __decorate([
        mj.traitEvent("InterAdCD_initPlayTime")
    ], InterAdCDTrait.prototype, "initLastPlayTimestamp", null);
    __decorate([
        mj.traitEvent("InterAdCD_getCDTime")
    ], InterAdCDTrait.prototype, "getCDTime", null);
    InterAdCDTrait = __decorate([
        mj.trait,
        mj.class("InterAdCDTrait")
    ], InterAdCDTrait);
    return InterAdCDTrait;
}(Trait_1.default));
exports.default = InterAdCDTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ludGVyQWRDRC9TY3JpcHRzL0ludGVyQWRDRFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RixzRUFBaUU7QUFHakU7SUFBNEMsa0NBQUs7SUFBakQ7UUFBQSxxRUEwREM7UUF6REMsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsYUFBTyxHQUFHLEtBQUssQ0FBQzs7SUF3RGxCLENBQUM7SUF0REMsK0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDN0MsVUFBVSxDQUFDO1lBQ1QsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRCw4Q0FBcUIsR0FBckIsVUFBc0IsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0QsNkNBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsMkNBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUM1QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFDckMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNULElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7b0JBQzFCLENBQUMsQ0FBQzt3QkFDQSxTQUFTLEVBQUUsS0FBSzt3QkFDaEIsT0FBTyxFQUFFLElBQUk7d0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07cUJBQzNDLENBQUMsQ0FBQztpQkFDSjs7b0JBQU0sQ0FBQyxFQUFFLENBQUM7YUFDWjs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCxrQ0FBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDRCx3Q0FBZSxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRCx1Q0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLGFBQWE7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFDckMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsMkNBQWtCLEdBQWxCLFVBQW1CLENBQUM7UUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELDJDQUFrQixHQUFsQixVQUFtQixDQUFDO1FBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUF0RE0sdUJBQVEsR0FBRyxXQUFXLENBQUM7SUFVOUI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOytEQUd2QztJQXlCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7bURBR3BDO0lBMUNrQixjQUFjO1FBRmxDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztPQUNOLGNBQWMsQ0EwRGxDO0lBQUQscUJBQUM7Q0ExREQsQUEwREMsQ0ExRDJDLGVBQUssR0EwRGhEO2tCQTFEb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkludGVyQWRDRFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlckFkQ0RUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2xhc3RQbGF5VGltZSA9IDA7XG4gIF9jZFRpbWUgPSA3MDAwMDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJJbnRlckFkQ0RcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9jZFRpbWUgPSAxMDAwICogdGhpcy5fdHJhaXREYXRhLmNkVGltZTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGUuaW5pdExhc3RQbGF5VGltZXN0YW1wKERhdGUubm93KCkpO1xuICAgIH0sIDApO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSW50ZXJBZENEX2luaXRQbGF5VGltZVwiKVxuICBpbml0TGFzdFBsYXlUaW1lc3RhbXAodCkge1xuICAgIHRoaXMuX2xhc3RQbGF5VGltZSA9IHQ7XG4gIH1cbiAgb25BZE1ncl9pbnRlckFkQ2xvc2UodCwgZSkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICB0aGlzLl9sYXN0UGxheVRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25BZE1ncl9jaGtJbnRlckFkKHQsIGUpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgdGhpcy5nZXRDRFRpbWUoKTtcbiAgICAgIGlmICgwICE9PSB0aGlzLl9sYXN0UGxheVRpbWUpIHtcbiAgICAgICAgdmFyIHIgPSBEYXRlLm5vdygpIC0gdGhpcy5fbGFzdFBsYXlUaW1lLFxuICAgICAgICAgIGkgPSB0aGlzLmdldENEVGltZSgpO1xuICAgICAgICBpZiAociA8IGkpIHtcbiAgICAgICAgICBNYXRoLmNlaWwoKGkgLSByKSAvIDEwMDApO1xuICAgICAgICAgIGUoe1xuICAgICAgICAgICAgcmV0dXJuVmFsOiBmYWxzZSxcbiAgICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGUoKTtcbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkludGVyQWRDRF9nZXRDRFRpbWVcIilcbiAgZ2V0Q0RUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9jZFRpbWU7XG4gIH1cbiAgZ2V0TGFzdFBsYXlUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9sYXN0UGxheVRpbWU7XG4gIH1cbiAgZ2V0UmVtYWluaW5nQ0QoKSB7XG4gICAgaWYgKDAgPT09IHRoaXMuX2xhc3RQbGF5VGltZSkgcmV0dXJuIDA7XG4gICAgdmFyIHQgPSBEYXRlLm5vdygpIC0gdGhpcy5fbGFzdFBsYXlUaW1lLFxuICAgICAgZSA9IHRoaXMuZ2V0Q0RUaW1lKCk7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIGUgLSB0KTtcbiAgfVxuICBhZGp1c3RMYXN0UGxheVRpbWUodCkge1xuICAgIHRoaXMuX2xhc3RQbGF5VGltZSA9IHQ7XG4gIH1cbiAgdXBkYXRlTGFzdFBsYXlUaW1lKHQpIHtcbiAgICB0aGlzLl9sYXN0UGxheVRpbWUgPSB0O1xuICB9XG59Il19