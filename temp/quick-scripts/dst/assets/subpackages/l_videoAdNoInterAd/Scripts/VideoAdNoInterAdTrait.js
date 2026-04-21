
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_videoAdNoInterAd/Scripts/VideoAdNoInterAdTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5a8exWdQxJtKTDXbYLdx+/', 'VideoAdNoInterAdTrait');
// subpackages/l_videoAdNoInterAd/Scripts/VideoAdNoInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var VideoAdNoInterAdTrait = /** @class */ (function (_super) {
    __extends(VideoAdNoInterAdTrait, _super);
    function VideoAdNoInterAdTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._videoAdSuccessTime = 0;
        _this._protectionDuration = 90000;
        return _this;
    }
    VideoAdNoInterAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._protectionDuration = 1000 * this._traitData.protectionDuration;
    };
    VideoAdNoInterAdTrait.prototype.onAdMgr_videoSuccess = function (t, e) {
        this._videoAdSuccessTime = Date.now();
        e();
    };
    VideoAdNoInterAdTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        if (0 !== this._videoAdSuccessTime) {
            var r = Date.now() - this._videoAdSuccessTime;
            if (r < this._protectionDuration) {
                Math.ceil((this._protectionDuration - r) / 1000);
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
    };
    VideoAdNoInterAdTrait.traitKey = "VideoAdNoInterAd";
    VideoAdNoInterAdTrait = __decorate([
        mj.trait,
        mj.class("VideoAdNoInterAdTrait")
    ], VideoAdNoInterAdTrait);
    return VideoAdNoInterAdTrait;
}(Trait_1.default));
exports.default = VideoAdNoInterAdTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3ZpZGVvQWROb0ludGVyQWQvU2NyaXB0cy9WaWRlb0FkTm9JbnRlckFkVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFHeEY7SUFBbUQseUNBQUs7SUFBeEQ7UUFBQSxxRUF5QkM7UUF4QkMseUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLHlCQUFtQixHQUFHLEtBQUssQ0FBQzs7SUF1QjlCLENBQUM7SUFyQkMsc0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDO0lBQ3ZFLENBQUM7SUFDRCxvREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN0QyxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxrREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQ2xDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDOUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFO2dCQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLENBQUM7b0JBQ0EsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLE9BQU8sRUFBRSxJQUFJO29CQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2lCQUMzQyxDQUFDLENBQUM7YUFDSjs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFyQk0sOEJBQVEsR0FBRyxrQkFBa0IsQ0FBQztJQUhsQixxQkFBcUI7UUFGekMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO09BQ2IscUJBQXFCLENBeUJ6QztJQUFELDRCQUFDO0NBekJELEFBeUJDLENBekJrRCxlQUFLLEdBeUJ2RDtrQkF6Qm9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlZpZGVvQWROb0ludGVyQWRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW9BZE5vSW50ZXJBZFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfdmlkZW9BZFN1Y2Nlc3NUaW1lID0gMDtcbiAgX3Byb3RlY3Rpb25EdXJhdGlvbiA9IDkwMDAwO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlZpZGVvQWROb0ludGVyQWRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3Byb3RlY3Rpb25EdXJhdGlvbiA9IDEwMDAgKiB0aGlzLl90cmFpdERhdGEucHJvdGVjdGlvbkR1cmF0aW9uO1xuICB9XG4gIG9uQWRNZ3JfdmlkZW9TdWNjZXNzKHQsIGUpIHtcbiAgICB0aGlzLl92aWRlb0FkU3VjY2Vzc1RpbWUgPSBEYXRlLm5vdygpO1xuICAgIGUoKTtcbiAgfVxuICBvbkFkTWdyX2Noa0ludGVyQWQodCwgZSkge1xuICAgIGlmICgwICE9PSB0aGlzLl92aWRlb0FkU3VjY2Vzc1RpbWUpIHtcbiAgICAgIHZhciByID0gRGF0ZS5ub3coKSAtIHRoaXMuX3ZpZGVvQWRTdWNjZXNzVGltZTtcbiAgICAgIGlmIChyIDwgdGhpcy5fcHJvdGVjdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgIE1hdGguY2VpbCgodGhpcy5fcHJvdGVjdGlvbkR1cmF0aW9uIC0gcikgLyAxMDAwKTtcbiAgICAgICAgZSh7XG4gICAgICAgICAgcmV0dXJuVmFsOiBmYWxzZSxcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==