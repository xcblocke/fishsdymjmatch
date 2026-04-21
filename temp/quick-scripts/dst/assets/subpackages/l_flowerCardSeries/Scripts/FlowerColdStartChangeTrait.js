
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_flowerCardSeries/Scripts/FlowerColdStartChangeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d6dfCwSuBCVITjAx/QIvbJ', 'FlowerColdStartChangeTrait');
// subpackages/l_flowerCardSeries/Scripts/FlowerColdStartChangeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FlowerColdStartChangeTrait = /** @class */ (function (_super) {
    __extends(FlowerColdStartChangeTrait, _super);
    function FlowerColdStartChangeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        _this._cdMilliseconds = 0;
        _this._shouldChange = false;
        return _this;
    }
    FlowerColdStartChangeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
        "number" == typeof this._config.cdHours && this._config.cdHours > 0 && (this._cdMilliseconds = 3600000 * this._config.cdHours);
        this.localData.lastChangeTime || (this.localData.lastChangeTime = Date.now());
        this.checkCDTime();
    };
    FlowerColdStartChangeTrait.prototype.checkCDTime = function () {
        var e = Date.now(), t = this.localData.lastChangeTime;
        if (e - t >= this._cdMilliseconds) {
            this._shouldChange = true;
            this._cdMilliseconds;
        }
        else {
            this._shouldChange = false;
            ((this._cdMilliseconds - (e - t)) / 3600000).toFixed(1);
        }
        this.localData.lastChangeTime = e;
    };
    FlowerColdStartChangeTrait.prototype.onFlowerCS_shouldKeep = function (e, t) {
        if (this._shouldChange) {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        else {
            t();
        }
    };
    FlowerColdStartChangeTrait.traitKey = "FlowerColdStartChange";
    FlowerColdStartChangeTrait = __decorate([
        mj.trait,
        mj.class("FlowerColdStartChangeTrait")
    ], FlowerColdStartChangeTrait);
    return FlowerColdStartChangeTrait;
}(Trait_1.default));
exports.default = FlowerColdStartChangeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Zsb3dlckNhcmRTZXJpZXMvU2NyaXB0cy9GbG93ZXJDb2xkU3RhcnRDaGFuZ2VUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUF3RCw4Q0FBSztJQUE3RDtRQUFBLHFFQW1DQztRQWxDQyxhQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IscUJBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsbUJBQWEsR0FBRyxLQUFLLENBQUM7O0lBZ0N4QixDQUFDO0lBOUJDLDJDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFDckMsUUFBUSxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvSCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsZ0RBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFDaEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDdEI7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCwwREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFLEtBQUs7YUFDakIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBOUJNLG1DQUFRLEdBQUcsdUJBQXVCLENBQUM7SUFKdkIsMEJBQTBCO1FBRjlDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztPQUNsQiwwQkFBMEIsQ0FtQzlDO0lBQUQsaUNBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQ3VELGVBQUssR0FtQzVEO2tCQW5Db0IsMEJBQTBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRmxvd2VyQ29sZFN0YXJ0Q2hhbmdlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb3dlckNvbGRTdGFydENoYW5nZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY29uZmlnID0ge307XG4gIF9jZE1pbGxpc2Vjb25kcyA9IDA7XG4gIF9zaG91bGRDaGFuZ2UgPSBmYWxzZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGbG93ZXJDb2xkU3RhcnRDaGFuZ2VcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX3RyYWl0RGF0YSB8fCB7fTtcbiAgICBcIm51bWJlclwiID09IHR5cGVvZiB0aGlzLl9jb25maWcuY2RIb3VycyAmJiB0aGlzLl9jb25maWcuY2RIb3VycyA+IDAgJiYgKHRoaXMuX2NkTWlsbGlzZWNvbmRzID0gMzYwMDAwMCAqIHRoaXMuX2NvbmZpZy5jZEhvdXJzKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0Q2hhbmdlVGltZSB8fCAodGhpcy5sb2NhbERhdGEubGFzdENoYW5nZVRpbWUgPSBEYXRlLm5vdygpKTtcbiAgICB0aGlzLmNoZWNrQ0RUaW1lKCk7XG4gIH1cbiAgY2hlY2tDRFRpbWUoKSB7XG4gICAgdmFyIGUgPSBEYXRlLm5vdygpLFxuICAgICAgdCA9IHRoaXMubG9jYWxEYXRhLmxhc3RDaGFuZ2VUaW1lO1xuICAgIGlmIChlIC0gdCA+PSB0aGlzLl9jZE1pbGxpc2Vjb25kcykge1xuICAgICAgdGhpcy5fc2hvdWxkQ2hhbmdlID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2NkTWlsbGlzZWNvbmRzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zaG91bGRDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICgodGhpcy5fY2RNaWxsaXNlY29uZHMgLSAoZSAtIHQpKSAvIDM2MDAwMDApLnRvRml4ZWQoMSk7XG4gICAgfVxuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RDaGFuZ2VUaW1lID0gZTtcbiAgfVxuICBvbkZsb3dlckNTX3Nob3VsZEtlZXAoZSwgdCkge1xuICAgIGlmICh0aGlzLl9zaG91bGRDaGFuZ2UpIHtcbiAgICAgIHQoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG59Il19