
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/base/ui/LowPriorityModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38599sTgydCXIshMvK10NU7', 'LowPriorityModel');
// Scripts/gamePlay/base/ui/LowPriorityModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("../../../framework/data/Model");
var LowPriorityModel = /** @class */ (function (_super) {
    __extends(LowPriorityModel, _super);
    function LowPriorityModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowPriorityModel.prototype.saveToLocal = function (e) {
        if (e) {
            this.localData.lowPriorityBundle || (this.localData.lowPriorityBundle = {});
            this.localData.lowPriorityBundle[e] = 1;
            this.localData.lowPriorityBundle = this.localData.lowPriorityBundle;
        }
    };
    LowPriorityModel.prototype.isHasDownloaded = function (e) {
        return !!e && !!this.localData.lowPriorityBundle && 1 === this.localData.lowPriorityBundle[e];
    };
    LowPriorityModel.prototype.removeFromLocal = function (e) {
        if (e && this.localData.lowPriorityBundle) {
            delete this.localData.lowPriorityBundle[e];
            this.localData.lowPriorityBundle = this.localData.lowPriorityBundle;
        }
    };
    LowPriorityModel.prototype.clearAllDownloadedFlags = function () {
        if (this.localData.lowPriorityBundle) {
            this.localData.lowPriorityBundle = {};
            this.localData.lowPriorityBundle = this.localData.lowPriorityBundle;
        }
    };
    LowPriorityModel = __decorate([
        mj.class("LowPriorityModel")
    ], LowPriorityModel);
    return LowPriorityModel;
}(Model_1.default));
exports.default = LowPriorityModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvTG93UHJpb3JpdHlNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBRWxEO0lBQThDLG9DQUFLO0lBQW5EOztJQXVCQSxDQUFDO0lBdEJDLHNDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUM7U0FDckU7SUFDSCxDQUFDO0lBQ0QsMENBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFDRCwwQ0FBZSxHQUFmLFVBQWdCLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUM7U0FDckU7SUFDSCxDQUFDO0lBQ0Qsa0RBQXVCLEdBQXZCO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFO1lBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztTQUNyRTtJQUNILENBQUM7SUF0QmtCLGdCQUFnQjtRQURwQyxFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO09BQ1IsZ0JBQWdCLENBdUJwQztJQUFELHVCQUFDO0NBdkJELEFBdUJDLENBdkI2QyxlQUFLLEdBdUJsRDtrQkF2Qm9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RlbCBmcm9tICcuLi8uLi8uLi9mcmFtZXdvcmsvZGF0YS9Nb2RlbCc7XG5AbWouY2xhc3MoXCJMb3dQcmlvcml0eU1vZGVsXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb3dQcmlvcml0eU1vZGVsIGV4dGVuZHMgTW9kZWwge1xuICBzYXZlVG9Mb2NhbChlKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmxvd1ByaW9yaXR5QnVuZGxlIHx8ICh0aGlzLmxvY2FsRGF0YS5sb3dQcmlvcml0eUJ1bmRsZSA9IHt9KTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmxvd1ByaW9yaXR5QnVuZGxlW2VdID0gMTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmxvd1ByaW9yaXR5QnVuZGxlID0gdGhpcy5sb2NhbERhdGEubG93UHJpb3JpdHlCdW5kbGU7XG4gICAgfVxuICB9XG4gIGlzSGFzRG93bmxvYWRlZChlKSB7XG4gICAgcmV0dXJuICEhZSAmJiAhIXRoaXMubG9jYWxEYXRhLmxvd1ByaW9yaXR5QnVuZGxlICYmIDEgPT09IHRoaXMubG9jYWxEYXRhLmxvd1ByaW9yaXR5QnVuZGxlW2VdO1xuICB9XG4gIHJlbW92ZUZyb21Mb2NhbChlKSB7XG4gICAgaWYgKGUgJiYgdGhpcy5sb2NhbERhdGEubG93UHJpb3JpdHlCdW5kbGUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmxvY2FsRGF0YS5sb3dQcmlvcml0eUJ1bmRsZVtlXTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmxvd1ByaW9yaXR5QnVuZGxlID0gdGhpcy5sb2NhbERhdGEubG93UHJpb3JpdHlCdW5kbGU7XG4gICAgfVxuICB9XG4gIGNsZWFyQWxsRG93bmxvYWRlZEZsYWdzKCkge1xuICAgIGlmICh0aGlzLmxvY2FsRGF0YS5sb3dQcmlvcml0eUJ1bmRsZSkge1xuICAgICAgdGhpcy5sb2NhbERhdGEubG93UHJpb3JpdHlCdW5kbGUgPSB7fTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmxvd1ByaW9yaXR5QnVuZGxlID0gdGhpcy5sb2NhbERhdGEubG93UHJpb3JpdHlCdW5kbGU7XG4gICAgfVxuICB9XG59Il19