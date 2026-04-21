
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dynamicLib/Scripts/DynamicLibTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36fa6GyPYFJLbjSjUvz/gV+', 'DynamicLibTrait');
// subpackages/l_dynamicLib/Scripts/DynamicLibTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var LevelModel_1 = require("../../../Scripts/core/dynamicCurve/LevelModel");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var DynamicLibTrait = /** @class */ (function (_super) {
    __extends(DynamicLibTrait, _super);
    function DynamicLibTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._jsonName = "sample";
        _this._remoteBundleName = "r_board1";
        return _this;
    }
    DynamicLibTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.checkChange();
        this._jsonName = this._traitData.jsonName || "sample";
        this._remoteBundleName = this._traitData.remoteBundleName || "r_board1";
    };
    DynamicLibTrait.prototype.checkChange = function () {
        var t = JSON.stringify(this.traitData), e = CryptoJS.MD5(t).toString().toUpperCase();
        if (this.localData.libraryHash !== e) {
            this.localData.libraryHash = e;
            LevelModel_1.LevelModel.getInstance().clearLevelValues();
        }
    };
    DynamicLibTrait.prototype.onDCMgr_getLvPath = function (t, e) {
        var r = t.args[0], o = this.getLevelPath(r);
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: o
        });
    };
    DynamicLibTrait.prototype.getLevelPath = function () {
        return [["config/boards/dynamic/" + this._jsonName, "mainRes"], [this._jsonName, this._remoteBundleName]];
    };
    DynamicLibTrait.traitKey = "DynamicLib";
    DynamicLibTrait = __decorate([
        mj.trait,
        mj.class("DynamicLibTrait")
    ], DynamicLibTrait);
    return DynamicLibTrait;
}(Trait_1.default));
exports.default = DynamicLibTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2R5bmFtaWNMaWIvU2NyaXB0cy9EeW5hbWljTGliVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRFQUEyRTtBQUMzRSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQTZDLG1DQUFLO0lBQWxEO1FBQUEscUVBOEJDO1FBN0JDLGVBQVMsR0FBRyxRQUFRLENBQUM7UUFDckIsdUJBQWlCLEdBQUcsVUFBVSxDQUFDOztJQTRCakMsQ0FBQztJQTFCQyxnQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUM7UUFDdEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLElBQUksVUFBVSxDQUFDO0lBQzFFLENBQUM7SUFDRCxxQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQ3BDLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEtBQUssQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUMvQix1QkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBQ0QsMkNBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2YsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsT0FBTyxFQUFFLElBQUk7WUFDYixTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxzQ0FBWSxHQUFaO1FBQ0UsT0FBTyxDQUFDLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBMUJNLHdCQUFRLEdBQUcsWUFBWSxDQUFDO0lBSFosZUFBZTtRQUZuQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7T0FDUCxlQUFlLENBOEJuQztJQUFELHNCQUFDO0NBOUJELEFBOEJDLENBOUI0QyxlQUFLLEdBOEJqRDtrQkE5Qm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMZXZlbE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL2R5bmFtaWNDdXJ2ZS9MZXZlbE1vZGVsJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkR5bmFtaWNMaWJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHluYW1pY0xpYlRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfanNvbk5hbWUgPSBcInNhbXBsZVwiO1xuICBfcmVtb3RlQnVuZGxlTmFtZSA9IFwicl9ib2FyZDFcIjtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJEeW5hbWljTGliXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmNoZWNrQ2hhbmdlKCk7XG4gICAgdGhpcy5fanNvbk5hbWUgPSB0aGlzLl90cmFpdERhdGEuanNvbk5hbWUgfHwgXCJzYW1wbGVcIjtcbiAgICB0aGlzLl9yZW1vdGVCdW5kbGVOYW1lID0gdGhpcy5fdHJhaXREYXRhLnJlbW90ZUJ1bmRsZU5hbWUgfHwgXCJyX2JvYXJkMVwiO1xuICB9XG4gIGNoZWNrQ2hhbmdlKCkge1xuICAgIHZhciB0ID0gSlNPTi5zdHJpbmdpZnkodGhpcy50cmFpdERhdGEpLFxuICAgICAgZSA9IENyeXB0b0pTLk1ENSh0KS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCk7XG4gICAgaWYgKHRoaXMubG9jYWxEYXRhLmxpYnJhcnlIYXNoICE9PSBlKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5saWJyYXJ5SGFzaCA9IGU7XG4gICAgICBMZXZlbE1vZGVsLmdldEluc3RhbmNlKCkuY2xlYXJMZXZlbFZhbHVlcygpO1xuICAgIH1cbiAgfVxuICBvbkRDTWdyX2dldEx2UGF0aCh0LCBlKSB7XG4gICAgdmFyIHIgPSB0LmFyZ3NbMF0sXG4gICAgICBvID0gdGhpcy5nZXRMZXZlbFBhdGgocik7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVmFsOiBvXG4gICAgfSk7XG4gIH1cbiAgZ2V0TGV2ZWxQYXRoKCkge1xuICAgIHJldHVybiBbW1wiY29uZmlnL2JvYXJkcy9keW5hbWljL1wiICsgdGhpcy5fanNvbk5hbWUsIFwibWFpblJlc1wiXSwgW3RoaXMuX2pzb25OYW1lLCB0aGlzLl9yZW1vdGVCdW5kbGVOYW1lXV07XG4gIH1cbn0iXX0=