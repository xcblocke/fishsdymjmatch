
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_coldInterAdDelayCD/Scripts/ColdInterAdDelayCDTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '44ea1n6nSFCSY2o6zJ3KH8r', 'ColdInterAdDelayCDTrait');
// subpackages/l_coldInterAdDelayCD/Scripts/ColdInterAdDelayCDTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ColdInterAdDelayCDTrait = /** @class */ (function (_super) {
    __extends(ColdInterAdDelayCDTrait, _super);
    function ColdInterAdDelayCDTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._coldStartFreeTime = 70000;
        return _this;
    }
    ColdInterAdDelayCDTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.coldStartFreeTime) && (this._coldStartFreeTime = 1000 * this._traitData.coldStartFreeTime);
    };
    ColdInterAdDelayCDTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var r = UserModel_1.default.getInstance().getAppStartTime(), o = Date.now() - r;
            if (o < this._coldStartFreeTime) {
                Math.ceil((this._coldStartFreeTime - o) / 1000);
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
    ColdInterAdDelayCDTrait.traitKey = "ColdInterAdDelayCD";
    ColdInterAdDelayCDTrait = __decorate([
        mj.trait,
        mj.class("ColdInterAdDelayCDTrait")
    ], ColdInterAdDelayCDTrait);
    return ColdInterAdDelayCDTrait;
}(Trait_1.default));
exports.default = ColdInterAdDelayCDTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NvbGRJbnRlckFkRGVsYXlDRC9TY3JpcHRzL0NvbGRJbnRlckFkRGVsYXlDRFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUNqRSx3RkFBb0Y7QUFHcEY7SUFBcUQsMkNBQUs7SUFBMUQ7UUFBQSxxRUFzQkM7UUFyQkMsd0JBQWtCLEdBQUcsS0FBSyxDQUFDOztJQXFCN0IsQ0FBQztJQW5CQyx3Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JLLENBQUM7SUFDRCxvREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDdkUsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFDL0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFO2dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUNoRCxDQUFDLENBQUM7b0JBQ0EsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLE9BQU8sRUFBRSxJQUFJO29CQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2lCQUMzQyxDQUFDLENBQUM7YUFDSjs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFuQk0sZ0NBQVEsR0FBRyxvQkFBb0IsQ0FBQztJQUZwQix1QkFBdUI7UUFGM0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO09BQ2YsdUJBQXVCLENBc0IzQztJQUFELDhCQUFDO0NBdEJELEFBc0JDLENBdEJvRCxlQUFLLEdBc0J6RDtrQkF0Qm9CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNvbGRJbnRlckFkRGVsYXlDRFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xkSW50ZXJBZERlbGF5Q0RUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2NvbGRTdGFydEZyZWVUaW1lID0gNzAwMDA7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ29sZEludGVyQWREZWxheUNEXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZTtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB2b2lkIDAgIT09IChudWxsID09PSAoZSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5jb2xkU3RhcnRGcmVlVGltZSkgJiYgKHRoaXMuX2NvbGRTdGFydEZyZWVUaW1lID0gMTAwMCAqIHRoaXMuX3RyYWl0RGF0YS5jb2xkU3RhcnRGcmVlVGltZSk7XG4gIH1cbiAgb25BZE1ncl9jaGtJbnRlckFkKHQsIGUpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgdmFyIHIgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRBcHBTdGFydFRpbWUoKSxcbiAgICAgICAgbyA9IERhdGUubm93KCkgLSByO1xuICAgICAgaWYgKG8gPCB0aGlzLl9jb2xkU3RhcnRGcmVlVGltZSkge1xuICAgICAgICBNYXRoLmNlaWwoKHRoaXMuX2NvbGRTdGFydEZyZWVUaW1lIC0gbykgLyAxMDAwKTtcbiAgICAgICAgZSh7XG4gICAgICAgICAgcmV0dXJuVmFsOiBmYWxzZSxcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==