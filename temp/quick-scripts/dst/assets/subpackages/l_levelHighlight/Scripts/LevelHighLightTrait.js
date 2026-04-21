
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_levelHighlight/Scripts/LevelHighLightTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47312kmU21BRq3x87yG/BQq', 'LevelHighLightTrait');
// subpackages/l_levelHighlight/Scripts/LevelHighLightTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var LevelHighLightTrait = /** @class */ (function (_super) {
    __extends(LevelHighLightTrait, _super);
    function LevelHighLightTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._enabledLevels = [];
        return _this;
    }
    LevelHighLightTrait_1 = LevelHighLightTrait;
    LevelHighLightTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        this._enabledLevels = (null === (e = this._traitData) || void 0 === e ? void 0 : e.levels) || [1, 2];
        this.localData.hasManuallySet || (this.localData.hasManuallySet = 0);
        this.localData.isSetInitHighlight || (this.localData.isSetInitHighlight = 0);
    };
    LevelHighLightTrait.prototype.onUISetDlg_onLckHLClk = function (t, e) {
        this.localData.hasManuallySet = 1;
        e();
    };
    LevelHighLightTrait.prototype.onIptSetLv_setData = function (t, e) {
        try {
            var r = t.args[0];
            if (!r) {
                e();
                return;
            }
            var a = r.levelId, o = UserModel_1.default.getInstance();
            if (0 === this.localData.isSetInitHighlight) {
                this.localData.isSetInitHighlight = 1;
                this.localData.isLockHighlightEnabled = o.isLockHighlightEnabled();
            }
            if (1 === this.localData.hasManuallySet) {
                e();
                return;
            }
            if (this._enabledLevels.includes(a)) {
                o.setLockHighlightEnabled(true);
            }
            else {
                o.setLockHighlightEnabled(this.localData.isLockHighlightEnabled);
            }
            e();
        }
        catch (t) {
            console.error("[" + LevelHighLightTrait_1.traitKey + "] 处理关卡设置事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var LevelHighLightTrait_1;
    LevelHighLightTrait.traitKey = "LevelHighLight";
    LevelHighLightTrait = LevelHighLightTrait_1 = __decorate([
        mj.trait,
        mj.class("LevelHighLightTrait")
    ], LevelHighLightTrait);
    return LevelHighLightTrait;
}(Trait_1.default));
exports.default = LevelHighLightTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xldmVsSGlnaGxpZ2h0L1NjcmlwdHMvTGV2ZWxIaWdoTGlnaHRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUdqRTtJQUFpRCx1Q0FBSztJQUF0RDtRQUFBLHFFQTBDQztRQXpDQyxvQkFBYyxHQUFHLEVBQUUsQ0FBQzs7SUF5Q3RCLENBQUM7NEJBMUNvQixtQkFBbUI7SUFHdEMsb0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBQ0QsbURBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxnREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDTixDQUFDLEVBQUUsQ0FBQztnQkFDSixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUNmLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixHQUFHLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQ3BFO1lBQ0QsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUU7Z0JBQ3ZDLENBQUMsRUFBRSxDQUFDO2dCQUNKLE9BQU87YUFDUjtZQUNELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25DLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQztpQkFBTTtnQkFDTCxDQUFDLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2FBQ2xFO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDTDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcscUJBQW1CLENBQUMsUUFBUSxHQUFHLGdCQUFnQixHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hHLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDOztJQXZDTSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBRmhCLG1CQUFtQjtRQUZ2QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0EwQ3ZDO0lBQUQsMEJBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQ2dELGVBQUssR0EwQ3JEO2tCQTFDb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkxldmVsSGlnaExpZ2h0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsSGlnaExpZ2h0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9lbmFibGVkTGV2ZWxzID0gW107XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTGV2ZWxIaWdoTGlnaHRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2VuYWJsZWRMZXZlbHMgPSAobnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUubGV2ZWxzKSB8fCBbMSwgMl07XG4gICAgdGhpcy5sb2NhbERhdGEuaGFzTWFudWFsbHlTZXQgfHwgKHRoaXMubG9jYWxEYXRhLmhhc01hbnVhbGx5U2V0ID0gMCk7XG4gICAgdGhpcy5sb2NhbERhdGEuaXNTZXRJbml0SGlnaGxpZ2h0IHx8ICh0aGlzLmxvY2FsRGF0YS5pc1NldEluaXRIaWdobGlnaHQgPSAwKTtcbiAgfVxuICBvblVJU2V0RGxnX29uTGNrSExDbGsodCwgZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLmhhc01hbnVhbGx5U2V0ID0gMTtcbiAgICBlKCk7XG4gIH1cbiAgb25JcHRTZXRMdl9zZXREYXRhKHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHIgPSB0LmFyZ3NbMF07XG4gICAgICBpZiAoIXIpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgYSA9IHIubGV2ZWxJZCxcbiAgICAgICAgbyA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgICAgaWYgKDAgPT09IHRoaXMubG9jYWxEYXRhLmlzU2V0SW5pdEhpZ2hsaWdodCkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5pc1NldEluaXRIaWdobGlnaHQgPSAxO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5pc0xvY2tIaWdobGlnaHRFbmFibGVkID0gby5pc0xvY2tIaWdobGlnaHRFbmFibGVkKCk7XG4gICAgICB9XG4gICAgICBpZiAoMSA9PT0gdGhpcy5sb2NhbERhdGEuaGFzTWFudWFsbHlTZXQpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fZW5hYmxlZExldmVscy5pbmNsdWRlcyhhKSkge1xuICAgICAgICBvLnNldExvY2tIaWdobGlnaHRFbmFibGVkKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgby5zZXRMb2NrSGlnaGxpZ2h0RW5hYmxlZCh0aGlzLmxvY2FsRGF0YS5pc0xvY2tIaWdobGlnaHRFbmFibGVkKTtcbiAgICAgIH1cbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgTGV2ZWxIaWdoTGlnaHRUcmFpdC50cmFpdEtleSArIFwiXSDlpITnkIblhbPljaHorr7nva7kuovku7blpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==