
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2NengliPaths/Scripts/Tile2NengliPathsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c73ceB55l5GZJIRV/frNbpB', 'Tile2NengliPathsTrait');
// subpackages/l_tile2NengliPaths/Scripts/Tile2NengliPathsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Tile2CapabilityExtractRegistry_1 = require("../../../Scripts/Tile2CapabilityExtractRegistry");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2NengliPathsTrait = /** @class */ (function (_super) {
    __extends(Tile2NengliPathsTrait, _super);
    function Tile2NengliPathsTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bundleName = "mainRes";
        _this.traitFolder = "trait4";
        return _this;
    }
    Tile2NengliPathsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.bundleName = this._traitData.bundleName || "mainRes";
        this.traitFolder = this._traitData.traitFolder || "trait4";
        var e = this.traitFolder, r = this.bundleName;
        this.configPath = ["byteData/" + e + "/level_file_config", r];
        this.offsetPath = ["byteData/" + e + "/level_data_offsets", r];
        this.levelDataPath = ["byteData/" + e + "/level_data", r];
        this.jsonPath = ["config/boards/" + e + "/", r];
        Tile2CapabilityExtractRegistry_1.default.setFromConfig({
            enabled: true,
            bundle: r,
            offsetPath: this.offsetPath[0],
            levelDataPath: this.levelDataPath[0],
            levelFileConfigPath: this.configPath[0],
            jsonPathPrefix: this.jsonPath[0]
        });
    };
    Tile2NengliPathsTrait.prototype.isTile2CapabilityMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal && Tile2CapabilityExtractRegistry_1.default.isEnabled();
    };
    Tile2NengliPathsTrait.prototype.onExtNormLv_getConfigPath = function (t, e) {
        if (this.isTile2CapabilityMode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.configPath
            });
        }
        else {
            e();
        }
    };
    Tile2NengliPathsTrait.prototype.onExtNormLv_getOffsetPath = function (t, e) {
        if (this.isTile2CapabilityMode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.offsetPath
            });
        }
        else {
            e();
        }
    };
    Tile2NengliPathsTrait.prototype.onExtNormLv_getLevDataPath = function (t, e) {
        if (this.isTile2CapabilityMode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.levelDataPath
            });
        }
        else {
            e();
        }
    };
    Tile2NengliPathsTrait.prototype.onExtNormLv_getJsonPath = function (t, e) {
        if (this.isTile2CapabilityMode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.jsonPath
            });
        }
        else {
            e();
        }
    };
    Tile2NengliPathsTrait.traitKey = "Tile2NengliPaths";
    Tile2NengliPathsTrait = __decorate([
        mj.trait,
        mj.class("Tile2NengliPathsTrait")
    ], Tile2NengliPathsTrait);
    return Tile2NengliPathsTrait;
}(Trait_1.default));
exports.default = Tile2NengliPathsTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyTmVuZ2xpUGF0aHMvU2NyaXB0cy9UaWxlMk5lbmdsaVBhdGhzVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtHQUE2RjtBQUM3Rix3RkFBb0Y7QUFDcEYsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUNqRSw4RUFBd0Y7QUFHeEY7SUFBbUQseUNBQUs7SUFBeEQ7UUFBQSxxRUFzRUM7UUFyRUMsZ0JBQVUsR0FBRyxTQUFTLENBQUM7UUFDdkIsaUJBQVcsR0FBRyxRQUFRLENBQUM7O0lBb0V6QixDQUFDO0lBbEVDLHNDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDO1FBQzNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQ3RCLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoRCx3Q0FBOEIsQ0FBQyxhQUFhLENBQUM7WUFDM0MsT0FBTyxFQUFFLElBQUk7WUFDYixNQUFNLEVBQUUsQ0FBQztZQUNULFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM5QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDcEMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsY0FBYyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ2pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxxREFBcUIsR0FBckI7UUFDRSxPQUFPLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLFdBQVcsSUFBSSx3Q0FBOEIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvSCxDQUFDO0lBQ0QseURBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUU7WUFDaEMsQ0FBQyxDQUFDO2dCQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxPQUFPLEVBQUUsSUFBSTtnQkFDYixTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVU7YUFDM0IsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QseURBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUU7WUFDaEMsQ0FBQyxDQUFDO2dCQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxPQUFPLEVBQUUsSUFBSTtnQkFDYixTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVU7YUFDM0IsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QsMERBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUU7WUFDaEMsQ0FBQyxDQUFDO2dCQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxPQUFPLEVBQUUsSUFBSTtnQkFDYixTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWE7YUFDOUIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QsdURBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUU7WUFDaEMsQ0FBQyxDQUFDO2dCQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxPQUFPLEVBQUUsSUFBSTtnQkFDYixTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDekIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBbEVNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFIbEIscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQXNFekM7SUFBRCw0QkFBQztDQXRFRCxBQXNFQyxDQXRFa0QsZUFBSyxHQXNFdkQ7a0JBdEVvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGlsZTJDYXBhYmlsaXR5RXh0cmFjdFJlZ2lzdHJ5IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvVGlsZTJDYXBhYmlsaXR5RXh0cmFjdFJlZ2lzdHJ5JztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGUyTmVuZ2xpUGF0aHNUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJOZW5nbGlQYXRoc1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBidW5kbGVOYW1lID0gXCJtYWluUmVzXCI7XG4gIHRyYWl0Rm9sZGVyID0gXCJ0cmFpdDRcIjtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlMk5lbmdsaVBhdGhzXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmJ1bmRsZU5hbWUgPSB0aGlzLl90cmFpdERhdGEuYnVuZGxlTmFtZSB8fCBcIm1haW5SZXNcIjtcbiAgICB0aGlzLnRyYWl0Rm9sZGVyID0gdGhpcy5fdHJhaXREYXRhLnRyYWl0Rm9sZGVyIHx8IFwidHJhaXQ0XCI7XG4gICAgdmFyIGUgPSB0aGlzLnRyYWl0Rm9sZGVyLFxuICAgICAgciA9IHRoaXMuYnVuZGxlTmFtZTtcbiAgICB0aGlzLmNvbmZpZ1BhdGggPSBbXCJieXRlRGF0YS9cIiArIGUgKyBcIi9sZXZlbF9maWxlX2NvbmZpZ1wiLCByXTtcbiAgICB0aGlzLm9mZnNldFBhdGggPSBbXCJieXRlRGF0YS9cIiArIGUgKyBcIi9sZXZlbF9kYXRhX29mZnNldHNcIiwgcl07XG4gICAgdGhpcy5sZXZlbERhdGFQYXRoID0gW1wiYnl0ZURhdGEvXCIgKyBlICsgXCIvbGV2ZWxfZGF0YVwiLCByXTtcbiAgICB0aGlzLmpzb25QYXRoID0gW1wiY29uZmlnL2JvYXJkcy9cIiArIGUgKyBcIi9cIiwgcl07XG4gICAgVGlsZTJDYXBhYmlsaXR5RXh0cmFjdFJlZ2lzdHJ5LnNldEZyb21Db25maWcoe1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIGJ1bmRsZTogcixcbiAgICAgIG9mZnNldFBhdGg6IHRoaXMub2Zmc2V0UGF0aFswXSxcbiAgICAgIGxldmVsRGF0YVBhdGg6IHRoaXMubGV2ZWxEYXRhUGF0aFswXSxcbiAgICAgIGxldmVsRmlsZUNvbmZpZ1BhdGg6IHRoaXMuY29uZmlnUGF0aFswXSxcbiAgICAgIGpzb25QYXRoUHJlZml4OiB0aGlzLmpzb25QYXRoWzBdXG4gICAgfSk7XG4gIH1cbiAgaXNUaWxlMkNhcGFiaWxpdHlNb2RlKCkge1xuICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCAmJiBUaWxlMkNhcGFiaWxpdHlFeHRyYWN0UmVnaXN0cnkuaXNFbmFibGVkKCk7XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0Q29uZmlnUGF0aCh0LCBlKSB7XG4gICAgaWYgKHRoaXMuaXNUaWxlMkNhcGFiaWxpdHlNb2RlKCkpIHtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogdGhpcy5jb25maWdQYXRoXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkV4dE5vcm1Mdl9nZXRPZmZzZXRQYXRoKHQsIGUpIHtcbiAgICBpZiAodGhpcy5pc1RpbGUyQ2FwYWJpbGl0eU1vZGUoKSkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLm9mZnNldFBhdGhcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uRXh0Tm9ybUx2X2dldExldkRhdGFQYXRoKHQsIGUpIHtcbiAgICBpZiAodGhpcy5pc1RpbGUyQ2FwYWJpbGl0eU1vZGUoKSkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLmxldmVsRGF0YVBhdGhcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uRXh0Tm9ybUx2X2dldEpzb25QYXRoKHQsIGUpIHtcbiAgICBpZiAodGhpcy5pc1RpbGUyQ2FwYWJpbGl0eU1vZGUoKSkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLmpzb25QYXRoXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==