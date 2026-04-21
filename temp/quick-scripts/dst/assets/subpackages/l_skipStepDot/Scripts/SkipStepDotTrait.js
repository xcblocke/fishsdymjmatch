
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_skipStepDot/Scripts/SkipStepDotTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84e3b65ehVNbpaWyxaXfWqP', 'SkipStepDotTrait');
// subpackages/l_skipStepDot/Scripts/SkipStepDotTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var SkipStepDotTrait = /** @class */ (function (_super) {
    __extends(SkipStepDotTrait, _super);
    function SkipStepDotTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isSkipDot = false;
        return _this;
    }
    SkipStepDotTrait.prototype.onLoad = function () {
        var r;
        _super.prototype.onLoad.call(this);
        this.registerEvent([{
                event: "DotGmClk_dot"
            }]);
        this._config = {
            percent: void 0 !== (null === (r = this._traitData) || void 0 === r ? void 0 : r.percent) ? this._traitData.percent : 0
        };
        var e = this.localData.isSkipDot;
        if (null == e || "" === e) {
            var i = 100 * Math.random();
            this.localData.isSkipDot = i >= this._config.percent;
        }
        this._isSkipDot = this.localData.isSkipDot;
    };
    SkipStepDotTrait.prototype.onGameTracker_recordStep = function (t, r) {
        if (this._isSkipDot) {
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            r();
        }
    };
    SkipStepDotTrait.prototype.onDotGmClk_dot = function (t, r) {
        if (this._isSkipDot) {
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            r();
        }
    };
    SkipStepDotTrait.traitKey = "SkipStepDot";
    SkipStepDotTrait = __decorate([
        mj.trait,
        mj.class("SkipStepDotTrait")
    ], SkipStepDotTrait);
    return SkipStepDotTrait;
}(Trait_1.default));
exports.default = SkipStepDotTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NraXBTdGVwRG90L1NjcmlwdHMvU2tpcFN0ZXBEb3RUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUE4QyxvQ0FBSztJQUFuRDtRQUFBLHFFQXVDQztRQXRDQyxnQkFBVSxHQUFHLEtBQUssQ0FBQzs7SUFzQ3JCLENBQUM7SUFwQ0MsaUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2xCLEtBQUssRUFBRSxjQUFjO2FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4SCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDdEQ7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO0lBQzdDLENBQUM7SUFDRCxtREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCx5Q0FBYyxHQUFkLFVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFwQ00seUJBQVEsR0FBRyxhQUFhLENBQUM7SUFGYixnQkFBZ0I7UUFGcEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO09BQ1IsZ0JBQWdCLENBdUNwQztJQUFELHVCQUFDO0NBdkNELEFBdUNDLENBdkM2QyxlQUFLLEdBdUNsRDtrQkF2Q29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlNraXBTdGVwRG90VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNraXBTdGVwRG90VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9pc1NraXBEb3QgPSBmYWxzZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJTa2lwU3RlcERvdFwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIHI7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFt7XG4gICAgICBldmVudDogXCJEb3RHbUNsa19kb3RcIlxuICAgIH1dKTtcbiAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICBwZXJjZW50OiB2b2lkIDAgIT09IChudWxsID09PSAociA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5wZXJjZW50KSA/IHRoaXMuX3RyYWl0RGF0YS5wZXJjZW50IDogMFxuICAgIH07XG4gICAgdmFyIGUgPSB0aGlzLmxvY2FsRGF0YS5pc1NraXBEb3Q7XG4gICAgaWYgKG51bGwgPT0gZSB8fCBcIlwiID09PSBlKSB7XG4gICAgICB2YXIgaSA9IDEwMCAqIE1hdGgucmFuZG9tKCk7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5pc1NraXBEb3QgPSBpID49IHRoaXMuX2NvbmZpZy5wZXJjZW50O1xuICAgIH1cbiAgICB0aGlzLl9pc1NraXBEb3QgPSB0aGlzLmxvY2FsRGF0YS5pc1NraXBEb3Q7XG4gIH1cbiAgb25HYW1lVHJhY2tlcl9yZWNvcmRTdGVwKHQsIHIpIHtcbiAgICBpZiAodGhpcy5faXNTa2lwRG90KSB7XG4gICAgICByKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcigpO1xuICAgIH1cbiAgfVxuICBvbkRvdEdtQ2xrX2RvdCh0LCByKSB7XG4gICAgaWYgKHRoaXMuX2lzU2tpcERvdCkge1xuICAgICAgcih7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIoKTtcbiAgICB9XG4gIH1cbn0iXX0=