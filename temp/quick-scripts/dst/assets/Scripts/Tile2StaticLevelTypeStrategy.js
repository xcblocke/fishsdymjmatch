
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2StaticLevelTypeStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aebf2WBjNRBj6PJzBkRNAhK', 'Tile2StaticLevelTypeStrategy');
// Scripts/Tile2StaticLevelTypeStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("./core/extractQuestion/ExtractTool");
var ResManager_1 = require("./framework/manager/ResManager");
var Tile2BaseStrategy_1 = require("./Tile2BaseStrategy");
var Tile2StaticLevelTypeStrategy = /** @class */ (function (_super) {
    __extends(Tile2StaticLevelTypeStrategy, _super);
    function Tile2StaticLevelTypeStrategy() {
        var _this = _super.call(this) || this;
        _this.name = "Tile2StaticLvType";
        _this.priority = 70;
        _this._config = null;
        if (!_this.localData.progressMap || !Object.keys(_this.localData.progressMap).length) {
            _this.localData.progressMap = {};
            _this.localData.progressMap = _this.localData.progressMap;
        }
        return _this;
    }
    Tile2StaticLevelTypeStrategy_1 = Tile2StaticLevelTypeStrategy;
    Tile2StaticLevelTypeStrategy.prototype.getPriority = function () {
        return 70;
    };
    Tile2StaticLevelTypeStrategy.prototype.getConfig = function () {
        return {
            bundle: "mainRes"
        };
    };
    Tile2StaticLevelTypeStrategy.prototype.getFileForType = function () {
        return null;
    };
    Tile2StaticLevelTypeStrategy.prototype.getEasyFileName = function () {
        return null;
    };
    Tile2StaticLevelTypeStrategy.prototype.getNormalFileName = function () {
        return null;
    };
    Tile2StaticLevelTypeStrategy.prototype.getHardFileName = function () {
        return null;
    };
    Tile2StaticLevelTypeStrategy.prototype.filterPool = function (e) {
        return e;
    };
    Tile2StaticLevelTypeStrategy.prototype.makeProgressKey = function (e) {
        return e;
    };
    Tile2StaticLevelTypeStrategy.prototype.init = function () {
        this.priority = this.getPriority();
        this._config = this.getConfig();
        return Promise.resolve();
    };
    Tile2StaticLevelTypeStrategy.prototype.canHandle = function (e) {
        var t = e.gameData.getLevelId();
        if (!t)
            return false;
        var o = ExtractTool_1.default.getInstance().getLevelType(t);
        return !(o <= 0 || !this.resolveFileName(o));
    };
    Tile2StaticLevelTypeStrategy.prototype.extract = function (e) {
        var t = this, n = this.getConfig();
        if (!n)
            return Promise.resolve(null);
        var i = e.gameData.getLevelId(), r = ExtractTool_1.default.getInstance().getLevelType(i);
        if (r <= 0)
            return Promise.resolve(null);
        var l = n.bundle || "mainRes", s = this.resolveFileName(r);
        if (!s)
            return Promise.resolve(null);
        var c = l + "|" + s, u = Tile2StaticLevelTypeStrategy_1, p = u._dataCache.get(c);
        if (p)
            return Promise.resolve(this.doExtract(p, c, s, i, r));
        var f = "tile2LevelData/static/" + s;
        return this.loadFile(f, l, c).then(function () {
            var e = u._dataCache.get(c);
            return t.doExtract(e, c, s, i, r);
        });
    };
    Tile2StaticLevelTypeStrategy.prototype.resolveFileName = function (e) {
        return this.getFileForType(e) || (1 === e ? this.getEasyFileName() : 2 === e ? this.getNormalFileName() : 3 === e || 4 === e ? this.getHardFileName() : null);
    };
    Tile2StaticLevelTypeStrategy.prototype.loadFile = function (e, t, n) {
        return ResManager_1.resManager.loadRes(e, cc.JsonAsset, t).then(function (e) {
            var t = Array.isArray(e.json) ? e.json : [];
            Tile2StaticLevelTypeStrategy_1._dataCache.set(n, t);
            e.decRef();
        }).catch(function (e) {
            console.error("[关卡抽取 Tile2类型题库] 加载失败: " + n, e);
        });
    };
    Tile2StaticLevelTypeStrategy.prototype.doExtract = function (e, t, o, n, i) {
        if (!e || 0 === e.length)
            return null;
        var r = this.filterPool(e, i, t, n), a = r && r.length > 0 ? r : null;
        if (!a)
            return null;
        var l = this.makeProgressKey(t), s = this.localData.progressMap || {}, c = (s[l] || 0) % a.length, u = a[c];
        if (!u || !u.content)
            return null;
        var p = (c + 1) % a.length;
        s[l] = p;
        this.localData.progressMap = s;
        return {
            content: u.content,
            index: u.index.toString(),
            slover: u.solver,
            tileNum: u.tile_num,
            libName: o
        };
    };
    var Tile2StaticLevelTypeStrategy_1;
    Tile2StaticLevelTypeStrategy._dataCache = new Map();
    __decorate([
        mj.traitEvent("T2StaLvT_priority")
    ], Tile2StaticLevelTypeStrategy.prototype, "getPriority", null);
    __decorate([
        mj.traitEvent("T2StaLvT_config")
    ], Tile2StaticLevelTypeStrategy.prototype, "getConfig", null);
    __decorate([
        mj.traitEvent("T2StaLvT_getFile")
    ], Tile2StaticLevelTypeStrategy.prototype, "getFileForType", null);
    __decorate([
        mj.traitEvent("T2StaLvT_easyFile")
    ], Tile2StaticLevelTypeStrategy.prototype, "getEasyFileName", null);
    __decorate([
        mj.traitEvent("T2StaLvT_normFile")
    ], Tile2StaticLevelTypeStrategy.prototype, "getNormalFileName", null);
    __decorate([
        mj.traitEvent("T2StaLvT_hardFile")
    ], Tile2StaticLevelTypeStrategy.prototype, "getHardFileName", null);
    __decorate([
        mj.traitEvent("T2StaLvT_filterPool")
    ], Tile2StaticLevelTypeStrategy.prototype, "filterPool", null);
    Tile2StaticLevelTypeStrategy = Tile2StaticLevelTypeStrategy_1 = __decorate([
        mj.class("Tile2StaLvTypeStrategy")
    ], Tile2StaticLevelTypeStrategy);
    return Tile2StaticLevelTypeStrategy;
}(Tile2BaseStrategy_1.default));
exports.default = Tile2StaticLevelTypeStrategy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyU3RhdGljTGV2ZWxUeXBlU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCw2REFBNEQ7QUFDNUQseURBQW9EO0FBRXBEO0lBQTBELGdEQUFpQjtJQUt6RTtRQUFBLFlBQ0UsaUJBQU8sU0FLUjtRQVZELFVBQUksR0FBRyxtQkFBbUIsQ0FBQztRQUMzQixjQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsYUFBTyxHQUFHLElBQUksQ0FBQztRQUliLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDbEYsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO1NBQ3pEOztJQUNILENBQUM7cUNBWGtCLDRCQUE0QjtJQWEvQyxrREFBVyxHQUFYO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsZ0RBQVMsR0FBVDtRQUNFLE9BQU87WUFDTCxNQUFNLEVBQUUsU0FBUztTQUNsQixDQUFDO0lBQ0osQ0FBQztJQUVELHFEQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxzREFBZSxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsd0RBQWlCLEdBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsc0RBQWUsR0FBZjtRQUNFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGlEQUFVLEdBQVYsVUFBVyxDQUFDO1FBQ1YsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0Qsc0RBQWUs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UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO3lFQUdsQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQzt1RUFHbEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7a0VBR3BDO0lBekNrQiw0QkFBNEI7UUFEaEQsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztPQUNkLDRCQUE0QixDQTZHaEQ7SUFBRCxtQ0FBQztDQTdHRCxBQTZHQyxDQTdHeUQsMkJBQWlCLEdBNkcxRTtrQkE3R29CLDRCQUE0QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHRyYWN0VG9vbCBmcm9tICcuL2NvcmUvZXh0cmFjdFF1ZXN0aW9uL0V4dHJhY3RUb29sJztcbmltcG9ydCB7IHJlc01hbmFnZXIgfSBmcm9tICcuL2ZyYW1ld29yay9tYW5hZ2VyL1Jlc01hbmFnZXInO1xuaW1wb3J0IFRpbGUyQmFzZVN0cmF0ZWd5IGZyb20gJy4vVGlsZTJCYXNlU3RyYXRlZ3knO1xuQG1qLmNsYXNzKFwiVGlsZTJTdGFMdlR5cGVTdHJhdGVneVwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJTdGF0aWNMZXZlbFR5cGVTdHJhdGVneSBleHRlbmRzIFRpbGUyQmFzZVN0cmF0ZWd5IHtcbiAgbmFtZSA9IFwiVGlsZTJTdGF0aWNMdlR5cGVcIjtcbiAgcHJpb3JpdHkgPSA3MDtcbiAgX2NvbmZpZyA9IG51bGw7XG4gIHN0YXRpYyBfZGF0YUNhY2hlID0gbmV3IE1hcCgpO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghdGhpcy5sb2NhbERhdGEucHJvZ3Jlc3NNYXAgfHwgIU9iamVjdC5rZXlzKHRoaXMubG9jYWxEYXRhLnByb2dyZXNzTWFwKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnByb2dyZXNzTWFwID0ge307XG4gICAgICB0aGlzLmxvY2FsRGF0YS5wcm9ncmVzc01hcCA9IHRoaXMubG9jYWxEYXRhLnByb2dyZXNzTWFwO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyU3RhTHZUX3ByaW9yaXR5XCIpXG4gIGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiA3MDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyU3RhTHZUX2NvbmZpZ1wiKVxuICBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJ1bmRsZTogXCJtYWluUmVzXCJcbiAgICB9O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJTdGFMdlRfZ2V0RmlsZVwiKVxuICBnZXRGaWxlRm9yVHlwZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyU3RhTHZUX2Vhc3lGaWxlXCIpXG4gIGdldEVhc3lGaWxlTmFtZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyU3RhTHZUX25vcm1GaWxlXCIpXG4gIGdldE5vcm1hbEZpbGVOYW1lKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJTdGFMdlRfaGFyZEZpbGVcIilcbiAgZ2V0SGFyZEZpbGVOYW1lKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJTdGFMdlRfZmlsdGVyUG9vbFwiKVxuICBmaWx0ZXJQb29sKGUpIHtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBtYWtlUHJvZ3Jlc3NLZXkoZSkge1xuICAgIHJldHVybiBlO1xuICB9XG4gIGluaXQoKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHRoaXMuZ2V0UHJpb3JpdHkoKTtcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLmdldENvbmZpZygpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuICBjYW5IYW5kbGUoZSkge1xuICAgIHZhciB0ID0gZS5nYW1lRGF0YS5nZXRMZXZlbElkKCk7XG4gICAgaWYgKCF0KSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIG8gPSBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmdldExldmVsVHlwZSh0KTtcbiAgICByZXR1cm4gIShvIDw9IDAgfHwgIXRoaXMucmVzb2x2ZUZpbGVOYW1lKG8pKTtcbiAgfVxuICBleHRyYWN0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBuID0gdGhpcy5nZXRDb25maWcoKTtcbiAgICBpZiAoIW4pIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgdmFyIGkgPSBlLmdhbWVEYXRhLmdldExldmVsSWQoKSxcbiAgICAgIHIgPSBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmdldExldmVsVHlwZShpKTtcbiAgICBpZiAociA8PSAwKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgIHZhciBsID0gbi5idW5kbGUgfHwgXCJtYWluUmVzXCIsXG4gICAgICBzID0gdGhpcy5yZXNvbHZlRmlsZU5hbWUocik7XG4gICAgaWYgKCFzKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgIHZhciBjID0gbCArIFwifFwiICsgcyxcbiAgICAgIHUgPSBUaWxlMlN0YXRpY0xldmVsVHlwZVN0cmF0ZWd5LFxuICAgICAgcCA9IHUuX2RhdGFDYWNoZS5nZXQoYyk7XG4gICAgaWYgKHApIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5kb0V4dHJhY3QocCwgYywgcywgaSwgcikpO1xuICAgIHZhciBmID0gXCJ0aWxlMkxldmVsRGF0YS9zdGF0aWMvXCIgKyBzO1xuICAgIHJldHVybiB0aGlzLmxvYWRGaWxlKGYsIGwsIGMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGUgPSB1Ll9kYXRhQ2FjaGUuZ2V0KGMpO1xuICAgICAgcmV0dXJuIHQuZG9FeHRyYWN0KGUsIGMsIHMsIGksIHIpO1xuICAgIH0pO1xuICB9XG4gIHJlc29sdmVGaWxlTmFtZShlKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RmlsZUZvclR5cGUoZSkgfHwgKDEgPT09IGUgPyB0aGlzLmdldEVhc3lGaWxlTmFtZSgpIDogMiA9PT0gZSA/IHRoaXMuZ2V0Tm9ybWFsRmlsZU5hbWUoKSA6IDMgPT09IGUgfHwgNCA9PT0gZSA/IHRoaXMuZ2V0SGFyZEZpbGVOYW1lKCkgOiBudWxsKTtcbiAgfVxuICBsb2FkRmlsZShlLCB0LCBuKSB7XG4gICAgcmV0dXJuIHJlc01hbmFnZXIubG9hZFJlcyhlLCBjYy5Kc29uQXNzZXQsIHQpLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gQXJyYXkuaXNBcnJheShlLmpzb24pID8gZS5qc29uIDogW107XG4gICAgICBUaWxlMlN0YXRpY0xldmVsVHlwZVN0cmF0ZWd5Ll9kYXRhQ2FjaGUuc2V0KG4sIHQpO1xuICAgICAgZS5kZWNSZWYoKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIlvlhbPljaHmir3lj5YgVGlsZTLnsbvlnovpopjlupNdIOWKoOi9veWksei0pTogXCIgKyBuLCBlKTtcbiAgICB9KTtcbiAgfVxuICBkb0V4dHJhY3QoZSwgdCwgbywgbiwgaSkge1xuICAgIGlmICghZSB8fCAwID09PSBlLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHIgPSB0aGlzLmZpbHRlclBvb2woZSwgaSwgdCwgbiksXG4gICAgICBhID0gciAmJiByLmxlbmd0aCA+IDAgPyByIDogbnVsbDtcbiAgICBpZiAoIWEpIHJldHVybiBudWxsO1xuICAgIHZhciBsID0gdGhpcy5tYWtlUHJvZ3Jlc3NLZXkodCksXG4gICAgICBzID0gdGhpcy5sb2NhbERhdGEucHJvZ3Jlc3NNYXAgfHwge30sXG4gICAgICBjID0gKHNbbF0gfHwgMCkgJSBhLmxlbmd0aCxcbiAgICAgIHUgPSBhW2NdO1xuICAgIGlmICghdSB8fCAhdS5jb250ZW50KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgcCA9IChjICsgMSkgJSBhLmxlbmd0aDtcbiAgICBzW2xdID0gcDtcbiAgICB0aGlzLmxvY2FsRGF0YS5wcm9ncmVzc01hcCA9IHM7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRlbnQ6IHUuY29udGVudCxcbiAgICAgIGluZGV4OiB1LmluZGV4LnRvU3RyaW5nKCksXG4gICAgICBzbG92ZXI6IHUuc29sdmVyLFxuICAgICAgdGlsZU51bTogdS50aWxlX251bSxcbiAgICAgIGxpYk5hbWU6IG9cbiAgICB9O1xuICB9XG59Il19