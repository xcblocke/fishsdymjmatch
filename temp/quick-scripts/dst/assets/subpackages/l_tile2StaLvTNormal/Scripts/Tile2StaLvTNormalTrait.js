
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2StaLvTNormal/Scripts/Tile2StaLvTNormalTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c3870iFTdCx6Vty0o4eaDl', 'Tile2StaLvTNormalTrait');
// subpackages/l_tile2StaLvTNormal/Scripts/Tile2StaLvTNormalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2StaLvTNormalTrait = /** @class */ (function (_super) {
    __extends(Tile2StaLvTNormalTrait, _super);
    function Tile2StaLvTNormalTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2StaLvTNormalTrait.prototype.isSupportMode = function (t) {
        return t === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    Tile2StaLvTNormalTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._fileName = this._traitData.fileName || "";
    };
    Tile2StaLvTNormalTrait.prototype.onT2StaLvT_normFile = function (t, e) {
        if (this.checkGameMode() && this._fileName) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this._fileName
            });
        }
        else {
            e();
        }
    };
    Tile2StaLvTNormalTrait.traitKey = "Tile2StaLvTNormal";
    Tile2StaLvTNormalTrait = __decorate([
        mj.trait,
        mj.class("Tile2StaLvTNormalTrait")
    ], Tile2StaLvTNormalTrait);
    return Tile2StaLvTNormalTrait;
}(ExtractTrait_1.default));
exports.default = Tile2StaLvTNormalTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyU3RhTHZUTm9ybWFsL1NjcmlwdHMvVGlsZTJTdGFMdlROb3JtYWxUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBQ3pELHdGQUFvRjtBQUNwRiw4RUFBd0Y7QUFHeEY7SUFBb0QsMENBQVk7SUFBaEU7O0lBb0JBLENBQUM7SUFsQkMsOENBQWEsR0FBYixVQUFjLENBQUM7UUFDYixPQUFPLENBQUMsS0FBSywwQkFBVSxDQUFDLFdBQVcsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsdUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUNELG9EQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzFDLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQzFCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQWxCTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBRG5CLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0FvQjFDO0lBQUQsNkJBQUM7Q0FwQkQsQUFvQkMsQ0FwQm1ELHNCQUFZLEdBb0IvRDtrQkFwQm9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHRyYWN0VHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9FeHRyYWN0VHJhaXQnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGUyU3RhTHZUTm9ybWFsVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyU3RhTHZUTm9ybWFsVHJhaXQgZXh0ZW5kcyBFeHRyYWN0VHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRpbGUyU3RhTHZUTm9ybWFsXCI7XG4gIGlzU3VwcG9ydE1vZGUodCkge1xuICAgIHJldHVybiB0ID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9maWxlTmFtZSA9IHRoaXMuX3RyYWl0RGF0YS5maWxlTmFtZSB8fCBcIlwiO1xuICB9XG4gIG9uVDJTdGFMdlRfbm9ybUZpbGUodCwgZSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSAmJiB0aGlzLl9maWxlTmFtZSkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLl9maWxlTmFtZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbn0iXX0=