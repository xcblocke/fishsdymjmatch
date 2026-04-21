
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_changeBaseCardByLan/Scripts/ChangeBaseCardHardTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d87eH5p2pIw6YeWannQLgt', 'ChangeBaseCardHardTrait');
// subpackages/r_changeBaseCardByLan/Scripts/ChangeBaseCardHardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ChangeBaseCardHardTrait = /** @class */ (function (_super) {
    __extends(ChangeBaseCardHardTrait, _super);
    function ChangeBaseCardHardTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._randomOnHard = false;
        return _this;
    }
    ChangeBaseCardHardTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        this._randomOnHard = (null === (e = this._traitData) || void 0 === e ? void 0 : e.randomOnHard) || false;
    };
    ChangeBaseCardHardTrait.prototype.onChCardByLanTt_isHardRd = function (t, e) {
        if (this._randomOnHard) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    ChangeBaseCardHardTrait.traitKey = "ChangeBaseCardHard";
    ChangeBaseCardHardTrait = __decorate([
        mj.trait,
        mj.class("ChangeBaseCardHardTrait")
    ], ChangeBaseCardHardTrait);
    return ChangeBaseCardHardTrait;
}(Trait_1.default));
exports.default = ChangeBaseCardHardTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NoYW5nZUJhc2VDYXJkQnlMYW4vU2NyaXB0cy9DaGFuZ2VCYXNlQ2FyZEhhcmRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUFxRCwyQ0FBSztJQUExRDtRQUFBLHFFQW1CQztRQWxCQyxtQkFBYSxHQUFHLEtBQUssQ0FBQzs7SUFrQnhCLENBQUM7SUFoQkMsd0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDO0lBQzNHLENBQUM7SUFDRCwwREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBaEJNLGdDQUFRLEdBQUcsb0JBQW9CLENBQUM7SUFGcEIsdUJBQXVCO1FBRjNDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztPQUNmLHVCQUF1QixDQW1CM0M7SUFBRCw4QkFBQztDQW5CRCxBQW1CQyxDQW5Cb0QsZUFBSyxHQW1CekQ7a0JBbkJvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDaGFuZ2VCYXNlQ2FyZEhhcmRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlQmFzZUNhcmRIYXJkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9yYW5kb21PbkhhcmQgPSBmYWxzZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDaGFuZ2VCYXNlQ2FyZEhhcmRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3JhbmRvbU9uSGFyZCA9IChudWxsID09PSAoZSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5yYW5kb21PbkhhcmQpIHx8IGZhbHNlO1xuICB9XG4gIG9uQ2hDYXJkQnlMYW5UdF9pc0hhcmRSZCh0LCBlKSB7XG4gICAgaWYgKHRoaXMuX3JhbmRvbU9uSGFyZCkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==