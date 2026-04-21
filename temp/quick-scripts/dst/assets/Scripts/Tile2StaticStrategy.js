
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2StaticStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6449aG8BSdETZPEzGW91s7l', 'Tile2StaticStrategy');
// Scripts/Tile2StaticStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ResManager_1 = require("./framework/manager/ResManager");
var Tile2BaseStrategy_1 = require("./Tile2BaseStrategy");
var Tile2StaticStrategy = /** @class */ (function (_super) {
    __extends(Tile2StaticStrategy, _super);
    function Tile2StaticStrategy() {
        var _this = _super.call(this) || this;
        _this.name = "Tile2Static";
        _this.priority = 20;
        if (null == _this.localData.progressMap) {
            _this.localData.progressMap = {};
            _this.localData.progressMap = _this.localData.progressMap;
        }
        null == _this.localData.dataPath && (_this.localData.dataPath = "");
        return _this;
    }
    Tile2StaticStrategy_1 = Tile2StaticStrategy;
    Tile2StaticStrategy.prototype.makeCacheKey = function (e, t) {
        return t + "_" + e;
    };
    Tile2StaticStrategy.prototype.getDataPath = function () {
        return ["tile2LevelData/static/tile2_static1", "mainRes"];
    };
    Tile2StaticStrategy.prototype.getPriority = function () {
        return 20;
    };
    Tile2StaticStrategy.prototype.canHandle = function () {
        return true;
    };
    Tile2StaticStrategy.prototype.init = function () {
        this.priority = this.getPriority();
        var e = __read(this.getDataPath(), 2), t = e[0], n = e[1], i = this.makeCacheKey(t, n);
        if (this.localData.dataPath !== t) {
            this.localData.dataPath = t;
            var r = this.localData.progressMap || {};
            r[i] = 0;
            this.localData.progressMap = r;
            Tile2StaticStrategy_1._dataCache.delete(i);
        }
        return Tile2StaticStrategy_1._dataCache.has(i) ? Promise.resolve() : this.loadDataForKey(t, n, i);
    };
    Tile2StaticStrategy.prototype.loadDataForKey = function (e, t, n) {
        return new Promise(function (i) {
            ResManager_1.resManager.loadRes(e, cc.JsonAsset, t).then(function (e) {
                var t = e.json;
                Array.isArray(t) && Tile2StaticStrategy_1._dataCache.set(n, t);
                e.decRef();
                i();
            }).catch(function (e) {
                console.error("[关卡抽取 Tile2静态题库]加载失败: " + n, e);
                i();
            });
        });
    };
    Tile2StaticStrategy.prototype.doExtract = function (e, t, o) {
        if (!e || 0 === e.length)
            return null;
        var n = this.localData.progressMap || {}, i = (n[t] || 0) % e.length, r = e[i];
        if (!r || !r.content)
            return null;
        n[t] = (i + 1) % e.length;
        this.localData.progressMap = n;
        return {
            content: r.content,
            index: r.index.toString(),
            slover: r.solver,
            tileNum: r.tile_num,
            libName: o
        };
    };
    Tile2StaticStrategy.prototype.extract = function () {
        var e = this, t = __read(this.getDataPath(), 2), n = t[0], i = t[1], r = this.makeCacheKey(n, i), l = n.split("/").pop() || this.name, s = Tile2StaticStrategy_1._dataCache.get(r);
        return s ? Promise.resolve(this.doExtract(s, r, l)) : this.loadDataForKey(n, i, r).then(function () {
            var t = Tile2StaticStrategy_1._dataCache.get(r);
            return e.doExtract(t, r, l);
        });
    };
    var Tile2StaticStrategy_1;
    Tile2StaticStrategy._dataCache = new Map();
    __decorate([
        mj.traitEvent("T2StaStr_dataPath")
    ], Tile2StaticStrategy.prototype, "getDataPath", null);
    __decorate([
        mj.traitEvent("T2StaStr_priority")
    ], Tile2StaticStrategy.prototype, "getPriority", null);
    __decorate([
        mj.traitEvent("T2StaStr_extract")
    ], Tile2StaticStrategy.prototype, "extract", null);
    Tile2StaticStrategy = Tile2StaticStrategy_1 = __decorate([
        mj.class("Tile2StaticStrategy")
    ], Tile2StaticStrategy);
    return Tile2StaticStrategy;
}(Tile2BaseStrategy_1.default));
exports.default = Tile2StaticStrategy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyU3RhdGljU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUE0RDtBQUM1RCx5REFBb0Q7QUFFcEQ7SUFBaUQsdUNBQWlCO0lBSWhFO1FBQUEsWUFDRSxpQkFBTyxTQU1SO1FBVkQsVUFBSSxHQUFHLGFBQWEsQ0FBQztRQUNyQixjQUFRLEdBQUcsRUFBRSxDQUFDO1FBSVosSUFBSSxJQUFJLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDdEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUM7O0lBQ3BFLENBQUM7NEJBWGtCLG1CQUFtQjtJQVl0QywwQ0FBWSxHQUFaLFVBQWEsQ0FBQyxFQUFFLENBQUM7UUFDZixPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0UsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsdUNBQVMsR0FBVDtRQUNFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELGtDQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUNu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QyxrQkFBa0IsQ0FBQztzREFhakM7SUFuRmtCLG1CQUFtQjtRQUR2QyxFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBb0Z2QztJQUFELDBCQUFDO0NBcEZELEFBb0ZDLENBcEZnRCwyQkFBaUIsR0FvRmpFO2tCQXBGb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzTWFuYWdlciB9IGZyb20gJy4vZnJhbWV3b3JrL21hbmFnZXIvUmVzTWFuYWdlcic7XG5pbXBvcnQgVGlsZTJCYXNlU3RyYXRlZ3kgZnJvbSAnLi9UaWxlMkJhc2VTdHJhdGVneSc7XG5AbWouY2xhc3MoXCJUaWxlMlN0YXRpY1N0cmF0ZWd5XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMlN0YXRpY1N0cmF0ZWd5IGV4dGVuZHMgVGlsZTJCYXNlU3RyYXRlZ3kge1xuICBuYW1lID0gXCJUaWxlMlN0YXRpY1wiO1xuICBwcmlvcml0eSA9IDIwO1xuICBzdGF0aWMgX2RhdGFDYWNoZSA9IG5ldyBNYXAoKTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAobnVsbCA9PSB0aGlzLmxvY2FsRGF0YS5wcm9ncmVzc01hcCkge1xuICAgICAgdGhpcy5sb2NhbERhdGEucHJvZ3Jlc3NNYXAgPSB7fTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnByb2dyZXNzTWFwID0gdGhpcy5sb2NhbERhdGEucHJvZ3Jlc3NNYXA7XG4gICAgfVxuICAgIG51bGwgPT0gdGhpcy5sb2NhbERhdGEuZGF0YVBhdGggJiYgKHRoaXMubG9jYWxEYXRhLmRhdGFQYXRoID0gXCJcIik7XG4gIH1cbiAgbWFrZUNhY2hlS2V5KGUsIHQpIHtcbiAgICByZXR1cm4gdCArIFwiX1wiICsgZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyU3RhU3RyX2RhdGFQYXRoXCIpXG4gIGdldERhdGFQYXRoKCkge1xuICAgIHJldHVybiBbXCJ0aWxlMkxldmVsRGF0YS9zdGF0aWMvdGlsZTJfc3RhdGljMVwiLCBcIm1haW5SZXNcIl07XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMlN0YVN0cl9wcmlvcml0eVwiKVxuICBnZXRQcmlvcml0eSgpIHtcbiAgICByZXR1cm4gMjA7XG4gIH1cbiAgY2FuSGFuZGxlKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGluaXQoKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHRoaXMuZ2V0UHJpb3JpdHkoKTtcbiAgICB2YXIgZSA9IF9fcmVhZCh0aGlzLmdldERhdGFQYXRoKCksIDIpLFxuICAgICAgdCA9IGVbMF0sXG4gICAgICBuID0gZVsxXSxcbiAgICAgIGkgPSB0aGlzLm1ha2VDYWNoZUtleSh0LCBuKTtcbiAgICBpZiAodGhpcy5sb2NhbERhdGEuZGF0YVBhdGggIT09IHQpIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmRhdGFQYXRoID0gdDtcbiAgICAgIHZhciByID0gdGhpcy5sb2NhbERhdGEucHJvZ3Jlc3NNYXAgfHwge307XG4gICAgICByW2ldID0gMDtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnByb2dyZXNzTWFwID0gcjtcbiAgICAgIFRpbGUyU3RhdGljU3RyYXRlZ3kuX2RhdGFDYWNoZS5kZWxldGUoaSk7XG4gICAgfVxuICAgIHJldHVybiBUaWxlMlN0YXRpY1N0cmF0ZWd5Ll9kYXRhQ2FjaGUuaGFzKGkpID8gUHJvbWlzZS5yZXNvbHZlKCkgOiB0aGlzLmxvYWREYXRhRm9yS2V5KHQsIG4sIGkpO1xuICB9XG4gIGxvYWREYXRhRm9yS2V5KGUsIHQsIG4pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJlc01hbmFnZXIubG9hZFJlcyhlLCBjYy5Kc29uQXNzZXQsIHQpLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSBlLmpzb247XG4gICAgICAgIEFycmF5LmlzQXJyYXkodCkgJiYgVGlsZTJTdGF0aWNTdHJhdGVneS5fZGF0YUNhY2hlLnNldChuLCB0KTtcbiAgICAgICAgZS5kZWNSZWYoKTtcbiAgICAgICAgaSgpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlvlhbPljaHmir3lj5YgVGlsZTLpnZnmgIHpopjlupNd5Yqg6L295aSx6LSlOiBcIiArIG4sIGUpO1xuICAgICAgICBpKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBkb0V4dHJhY3QoZSwgdCwgbykge1xuICAgIGlmICghZSB8fCAwID09PSBlLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG4gPSB0aGlzLmxvY2FsRGF0YS5wcm9ncmVzc01hcCB8fCB7fSxcbiAgICAgIGkgPSAoblt0XSB8fCAwKSAlIGUubGVuZ3RoLFxuICAgICAgciA9IGVbaV07XG4gICAgaWYgKCFyIHx8ICFyLmNvbnRlbnQpIHJldHVybiBudWxsO1xuICAgIG5bdF0gPSAoaSArIDEpICUgZS5sZW5ndGg7XG4gICAgdGhpcy5sb2NhbERhdGEucHJvZ3Jlc3NNYXAgPSBuO1xuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50OiByLmNvbnRlbnQsXG4gICAgICBpbmRleDogci5pbmRleC50b1N0cmluZygpLFxuICAgICAgc2xvdmVyOiByLnNvbHZlcixcbiAgICAgIHRpbGVOdW06IHIudGlsZV9udW0sXG4gICAgICBsaWJOYW1lOiBvXG4gICAgfTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyU3RhU3RyX2V4dHJhY3RcIilcbiAgZXh0cmFjdCgpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICB0ID0gX19yZWFkKHRoaXMuZ2V0RGF0YVBhdGgoKSwgMiksXG4gICAgICBuID0gdFswXSxcbiAgICAgIGkgPSB0WzFdLFxuICAgICAgciA9IHRoaXMubWFrZUNhY2hlS2V5KG4sIGkpLFxuICAgICAgbCA9IG4uc3BsaXQoXCIvXCIpLnBvcCgpIHx8IHRoaXMubmFtZSxcbiAgICAgIHMgPSBUaWxlMlN0YXRpY1N0cmF0ZWd5Ll9kYXRhQ2FjaGUuZ2V0KHIpO1xuICAgIHJldHVybiBzID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZG9FeHRyYWN0KHMsIHIsIGwpKSA6IHRoaXMubG9hZERhdGFGb3JLZXkobiwgaSwgcikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdCA9IFRpbGUyU3RhdGljU3RyYXRlZ3kuX2RhdGFDYWNoZS5nZXQocik7XG4gICAgICByZXR1cm4gZS5kb0V4dHJhY3QodCwgciwgbCk7XG4gICAgfSk7XG4gIH1cbn0iXX0=