
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2UsAdReviveLimit/Scripts/Tile2UsAdReviveLimitTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3b6f2ilDlBYo22fP853WhL', 'Tile2UsAdReviveLimitTrait');
// subpackages/l_tile2UsAdReviveLimit/Scripts/Tile2UsAdReviveLimitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2UsAdReviveLimitTrait = /** @class */ (function (_super) {
    __extends(Tile2UsAdReviveLimitTrait, _super);
    function Tile2UsAdReviveLimitTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._maxAdReviveUs = 2;
        return _this;
    }
    Tile2UsAdReviveLimitTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        var r = null !== (e = this._traitData) && void 0 !== e ? e : {};
        void 0 !== r.maxAdReviveUs && (this._maxAdReviveUs = r.maxAdReviveUs);
    };
    Tile2UsAdReviveLimitTrait.prototype._isUS = function () {
        var t;
        return "US" === (null !== (t = LoginModel_1.default.getInstance().countryIso) && void 0 !== t ? t : "").toUpperCase();
    };
    Tile2UsAdReviveLimitTrait.prototype.onT2FailAdRevi_getMaxCnt = function (t, e) {
        if (this._isUS()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: this._maxAdReviveUs
            });
        }
        else {
            e();
        }
    };
    Tile2UsAdReviveLimitTrait.traitKey = "Tile2UsAdReviveLimit";
    Tile2UsAdReviveLimitTrait = __decorate([
        mj.trait,
        mj.class("Tile2UsAdReviveLimitTrait")
    ], Tile2UsAdReviveLimitTrait);
    return Tile2UsAdReviveLimitTrait;
}(Trait_1.default));
exports.default = Tile2UsAdReviveLimitTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyVXNBZFJldml2ZUxpbWl0L1NjcmlwdHMvVGlsZTJVc0FkUmV2aXZlTGltaXRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0VBQTBFO0FBQzFFLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFHeEY7SUFBdUQsNkNBQUs7SUFBNUQ7UUFBQSxxRUF1QkM7UUF0QkMsb0JBQWMsR0FBRyxDQUFDLENBQUM7O0lBc0JyQixDQUFDO0lBcEJDLDBDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2hFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBQ0QseUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04sT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsb0JBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUcsQ0FBQztJQUNELDREQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNoQixDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLElBQUk7Z0JBQ3hDLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYzthQUMvQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFwQk0sa0NBQVEsR0FBRyxzQkFBc0IsQ0FBQztJQUZ0Qix5QkFBeUI7UUFGN0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDO09BQ2pCLHlCQUF5QixDQXVCN0M7SUFBRCxnQ0FBQztDQXZCRCxBQXVCQyxDQXZCc0QsZUFBSyxHQXVCM0Q7a0JBdkJvQix5QkFBeUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9naW5Nb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2xvZ2luL21vZGVsL0xvZ2luTW9kZWwnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGlsZTJVc0FkUmV2aXZlTGltaXRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJVc0FkUmV2aXZlTGltaXRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX21heEFkUmV2aXZlVXMgPSAyO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRpbGUyVXNBZFJldml2ZUxpbWl0XCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZTtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB2YXIgciA9IG51bGwgIT09IChlID0gdGhpcy5fdHJhaXREYXRhKSAmJiB2b2lkIDAgIT09IGUgPyBlIDoge307XG4gICAgdm9pZCAwICE9PSByLm1heEFkUmV2aXZlVXMgJiYgKHRoaXMuX21heEFkUmV2aXZlVXMgPSByLm1heEFkUmV2aXZlVXMpO1xuICB9XG4gIF9pc1VTKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiBcIlVTXCIgPT09IChudWxsICE9PSAodCA9IExvZ2luTW9kZWwuZ2V0SW5zdGFuY2UoKS5jb3VudHJ5SXNvKSAmJiB2b2lkIDAgIT09IHQgPyB0IDogXCJcIikudG9VcHBlckNhc2UoKTtcbiAgfVxuICBvblQyRmFpbEFkUmV2aV9nZXRNYXhDbnQodCwgZSkge1xuICAgIGlmICh0aGlzLl9pc1VTKCkpIHtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMuX21heEFkUmV2aXZlVXNcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG59Il19