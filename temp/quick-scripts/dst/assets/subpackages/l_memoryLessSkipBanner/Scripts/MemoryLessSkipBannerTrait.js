
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_memoryLessSkipBanner/Scripts/MemoryLessSkipBannerTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27f44K0zzZDNLDdRR6Rd8bF', 'MemoryLessSkipBannerTrait');
// subpackages/l_memoryLessSkipBanner/Scripts/MemoryLessSkipBannerTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var MemoryLessSkipBannerTrait = /** @class */ (function (_super) {
    __extends(MemoryLessSkipBannerTrait, _super);
    function MemoryLessSkipBannerTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isLowMemoryDevice = false;
        _this._memoryThresholdGB = 7;
        return _this;
    }
    MemoryLessSkipBannerTrait.prototype.onLoad = function () {
        var r;
        _super.prototype.onLoad.call(this);
        this._memoryThresholdGB = (null === (r = this._traitData) || void 0 === r ? void 0 : r.memoryThresholdGB) || 7;
        this._checkDeviceMemory();
    };
    MemoryLessSkipBannerTrait.prototype._checkDeviceMemory = function () {
        try {
            var e = mj.sdk.getDeviceInfo(), r = null == e ? void 0 : e.all_memory;
            if (r) {
                Number(r) / 1024 < this._memoryThresholdGB && (this._isLowMemoryDevice = true);
            }
        }
        catch (e) { }
    };
    MemoryLessSkipBannerTrait.prototype.onAdMgr_showBanner = function (e, r) {
        if (this._isLowMemoryDevice) {
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            r();
        }
    };
    MemoryLessSkipBannerTrait.traitKey = "MemoryLessSkipBanner";
    MemoryLessSkipBannerTrait = __decorate([
        mj.trait,
        mj.class("MemoryLessSkipBannerTrait")
    ], MemoryLessSkipBannerTrait);
    return MemoryLessSkipBannerTrait;
}(Trait_1.default));
exports.default = MemoryLessSkipBannerTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21lbW9yeUxlc3NTa2lwQmFubmVyL1NjcmlwdHMvTWVtb3J5TGVzc1NraXBCYW5uZXJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUF1RCw2Q0FBSztJQUE1RDtRQUFBLHFFQTZCQztRQTVCQyx3QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0Isd0JBQWtCLEdBQUcsQ0FBQyxDQUFDOztJQTJCekIsQ0FBQztJQXpCQywwQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9HLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCxzREFBa0IsR0FBbEI7UUFDRSxJQUFJO1lBQ0YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsRUFDNUIsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxFQUFFO2dCQUNMLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ2hGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO0lBQ2hCLENBQUM7SUFDRCxzREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2FBQzNDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQXpCTSxrQ0FBUSxHQUFHLHNCQUFzQixDQUFDO0lBSHRCLHlCQUF5QjtRQUY3QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUM7T0FDakIseUJBQXlCLENBNkI3QztJQUFELGdDQUFDO0NBN0JELEFBNkJDLENBN0JzRCxlQUFLLEdBNkIzRDtrQkE3Qm9CLHlCQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk1lbW9yeUxlc3NTa2lwQmFubmVyVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbW9yeUxlc3NTa2lwQmFubmVyVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9pc0xvd01lbW9yeURldmljZSA9IGZhbHNlO1xuICBfbWVtb3J5VGhyZXNob2xkR0IgPSA3O1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIk1lbW9yeUxlc3NTa2lwQmFubmVyXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgcjtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9tZW1vcnlUaHJlc2hvbGRHQiA9IChudWxsID09PSAociA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5tZW1vcnlUaHJlc2hvbGRHQikgfHwgNztcbiAgICB0aGlzLl9jaGVja0RldmljZU1lbW9yeSgpO1xuICB9XG4gIF9jaGVja0RldmljZU1lbW9yeSgpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGUgPSBtai5zZGsuZ2V0RGV2aWNlSW5mbygpLFxuICAgICAgICByID0gbnVsbCA9PSBlID8gdm9pZCAwIDogZS5hbGxfbWVtb3J5O1xuICAgICAgaWYgKHIpIHtcbiAgICAgICAgTnVtYmVyKHIpIC8gMTAyNCA8IHRoaXMuX21lbW9yeVRocmVzaG9sZEdCICYmICh0aGlzLl9pc0xvd01lbW9yeURldmljZSA9IHRydWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgb25BZE1ncl9zaG93QmFubmVyKGUsIHIpIHtcbiAgICBpZiAodGhpcy5faXNMb3dNZW1vcnlEZXZpY2UpIHtcbiAgICAgIHIoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByKCk7XG4gICAgfVxuICB9XG59Il19