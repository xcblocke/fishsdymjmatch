
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daxiaonormal/Scripts/DaxiaoNormalTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f0faPr9QFBLr/eSKIP428M', 'DaxiaoNormalTrait');
// subpackages/l_daxiaonormal/Scripts/DaxiaoNormalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var DaxiaoNormalTrait = /** @class */ (function (_super) {
    __extends(DaxiaoNormalTrait, _super);
    function DaxiaoNormalTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DaxiaoNormalTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.localData.gameEndCount || (this.localData.gameEndCount = 0);
    };
    DaxiaoNormalTrait.prototype.getNeedCount = function () {
        return this._traitData.needCount || 6;
    };
    DaxiaoNormalTrait.prototype.onMainGameCtrl_getTile = function (t, e) {
        if (this.localData.gameEndCount < this.getNeedCount())
            e();
        else {
            this.localData.gameEndCount = -1;
            t.beforReturnVal = t.beforReturnVal + "," + TileTypeEnum_1.ETileType.DaxiaoCard;
            e({
                returnVal: t.beforReturnVal
            });
        }
    };
    DaxiaoNormalTrait.prototype.isTile2Mode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    DaxiaoNormalTrait.prototype.onDaxiaoCardType_getCount = function (t, e) {
        if (this.isTile2Mode())
            e();
        else {
            e({
                returnVal: this._traitData.count || 0,
                returnType: TraitCallbackReturnType.jump,
                isBreak: true
            });
        }
    };
    DaxiaoNormalTrait.prototype.onGsListener_onGameEnd = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal) {
            this.localData.gameEndCount = this.localData.gameEndCount + 1;
            e();
        }
        else
            e();
    };
    DaxiaoNormalTrait.prototype.onDaxiaoCardType_cenRange = function (t, e) {
        if (this.isTile2Mode()) {
            e();
        }
        else {
            e({
                returnVal: this._traitData.cenRange || [3, 3],
                isBreak: true
            });
        }
    };
    DaxiaoNormalTrait.prototype.onDaxiaoCardType_cInCenter = function (t, e) {
        if (this.isTile2Mode()) {
            e();
        }
        else {
            e({
                returnVal: this._traitData.cInCenter || false,
                isBreak: true
            });
        }
    };
    DaxiaoNormalTrait.traitKey = "DaxiaoNormal";
    DaxiaoNormalTrait = __decorate([
        mj.trait,
        mj.class("DaxiaoNormalTrait")
    ], DaxiaoNormalTrait);
    return DaxiaoNormalTrait;
}(Trait_1.default));
exports.default = DaxiaoNormalTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RheGlhb25vcm1hbC9TY3JpcHRzL0RheGlhb05vcm1hbFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYsaUZBQTZFO0FBQzdFLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFHakU7SUFBK0MscUNBQUs7SUFBcEQ7O0lBd0RBLENBQUM7SUF0REMsa0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0Qsd0NBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxrREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQUUsQ0FBQyxFQUFFLENBQUM7YUFBSztZQUM5RCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxjQUFjLEdBQUcsR0FBRyxHQUFHLHdCQUFTLENBQUMsVUFBVSxDQUFDO1lBQ2pFLENBQUMsQ0FBQztnQkFDQSxTQUFTLEVBQUUsQ0FBQyxDQUFDLGNBQWM7YUFDNUIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBQ0QsdUNBQVcsR0FBWDtRQUNFLE9BQU8sbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsV0FBVyxDQUFDO0lBQ2pGLENBQUM7SUFDRCxxREFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQUUsQ0FBQyxFQUFFLENBQUM7YUFBSztZQUMvQixDQUFDLENBQUM7Z0JBQ0EsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUM7Z0JBQ3JDLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxJQUFJO2dCQUN4QyxPQUFPLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNELGtEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLE1BQU0sRUFBRTtZQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDOUQsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxxREFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDdEIsQ0FBQyxFQUFFLENBQUM7U0FDTDthQUFNO1lBQ0wsQ0FBQyxDQUFDO2dCQUNBLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBQ0Qsc0RBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3RCLENBQUMsRUFBRSxDQUFDO1NBQ0w7YUFBTTtZQUNMLENBQUMsQ0FBQztnQkFDQSxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLElBQUksS0FBSztnQkFDN0MsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUF0RE0sMEJBQVEsR0FBRyxjQUFjLENBQUM7SUFEZCxpQkFBaUI7UUFGckMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO09BQ1QsaUJBQWlCLENBd0RyQztJQUFELHdCQUFDO0NBeERELEFBd0RDLENBeEQ4QyxlQUFLLEdBd0RuRDtrQkF4RG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJEYXhpYW9Ob3JtYWxUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF4aWFvTm9ybWFsVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRGF4aWFvTm9ybWFsXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5nYW1lRW5kQ291bnQgfHwgKHRoaXMubG9jYWxEYXRhLmdhbWVFbmRDb3VudCA9IDApO1xuICB9XG4gIGdldE5lZWRDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhaXREYXRhLm5lZWRDb3VudCB8fCA2O1xuICB9XG4gIG9uTWFpbkdhbWVDdHJsX2dldFRpbGUodCwgZSkge1xuICAgIGlmICh0aGlzLmxvY2FsRGF0YS5nYW1lRW5kQ291bnQgPCB0aGlzLmdldE5lZWRDb3VudCgpKSBlKCk7ZWxzZSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5nYW1lRW5kQ291bnQgPSAtMTtcbiAgICAgIHQuYmVmb3JSZXR1cm5WYWwgPSB0LmJlZm9yUmV0dXJuVmFsICsgXCIsXCIgKyBFVGlsZVR5cGUuRGF4aWFvQ2FyZDtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5WYWw6IHQuYmVmb3JSZXR1cm5WYWxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpc1RpbGUyTW9kZSgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWw7XG4gIH1cbiAgb25EYXhpYW9DYXJkVHlwZV9nZXRDb3VudCh0LCBlKSB7XG4gICAgaWYgKHRoaXMuaXNUaWxlMk1vZGUoKSkgZSgpO2Vsc2Uge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblZhbDogdGhpcy5fdHJhaXREYXRhLmNvdW50IHx8IDAsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBvbkdzTGlzdGVuZXJfb25HYW1lRW5kKHQsIGUpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuTm9ybWFsKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5nYW1lRW5kQ291bnQgPSB0aGlzLmxvY2FsRGF0YS5nYW1lRW5kQ291bnQgKyAxO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25EYXhpYW9DYXJkVHlwZV9jZW5SYW5nZSh0LCBlKSB7XG4gICAgaWYgKHRoaXMuaXNUaWxlMk1vZGUoKSkge1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLl90cmFpdERhdGEuY2VuUmFuZ2UgfHwgWzMsIDNdLFxuICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgb25EYXhpYW9DYXJkVHlwZV9jSW5DZW50ZXIodCwgZSkge1xuICAgIGlmICh0aGlzLmlzVGlsZTJNb2RlKCkpIHtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblZhbDogdGhpcy5fdHJhaXREYXRhLmNJbkNlbnRlciB8fCBmYWxzZSxcbiAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59Il19