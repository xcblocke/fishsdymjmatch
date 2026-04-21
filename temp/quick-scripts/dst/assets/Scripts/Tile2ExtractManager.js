
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2ExtractManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0505RhkvBPa6CQ8kJt5o6D', 'Tile2ExtractManager');
// Scripts/Tile2ExtractManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("./core/extractQuestion/ExtractTool");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var ExtractChain_1 = require("./core/extractTile2/ExtractChain");
var Tile2CapabilityExtractRegistry_1 = require("./Tile2CapabilityExtractRegistry");
var Tile2DynamicStrategy_1 = require("./Tile2DynamicStrategy");
var Tile2FixedStrategy_1 = require("./Tile2FixedStrategy");
var Tile2HardStrategy_1 = require("./Tile2HardStrategy");
var Tile2StaticStrategy_1 = require("./Tile2StaticStrategy");
var Tile2StaticLevelTypeStrategy_1 = require("./Tile2StaticLevelTypeStrategy");
var Tile2FixedRandomStrategy_1 = require("./Tile2FixedRandomStrategy");
var Tile2ExtractManager = /** @class */ (function () {
    function Tile2ExtractManager() {
        this._isInit = false;
        this._chain = new ExtractChain_1.default();
        this._chain.register(new Tile2FixedStrategy_1.default());
        this._chain.register(new Tile2FixedRandomStrategy_1.default());
        this._chain.register(new Tile2HardStrategy_1.default());
        this._chain.register(new Tile2DynamicStrategy_1.default());
        this._chain.register(new Tile2StaticLevelTypeStrategy_1.default());
        this._chain.register(new Tile2StaticStrategy_1.default());
    }
    Tile2ExtractManager_1 = Tile2ExtractManager;
    Object.defineProperty(Tile2ExtractManager.prototype, "chain", {
        get: function () {
            return this._chain;
        },
        enumerable: false,
        configurable: true
    });
    Tile2ExtractManager.getInstance = function () {
        this._instance || (this._instance = new Tile2ExtractManager_1());
        return this._instance;
    };
    Tile2ExtractManager.prototype.initData = function () {
        var e = this;
        if (this._isInit)
            return Promise.resolve();
        var t = function t() {
            return e._chain.initAll().then(function () {
                e._chain.resort();
                e._isInit = true;
            });
        };
        return Tile2CapabilityExtractRegistry_1.default.isEnabled() ? ExtractTool_1.default.getInstance().initData(GameTypeEnums_1.MjGameType.Tile2Normal).then(function () {
            return t();
        }) : t();
    };
    Tile2ExtractManager.prototype.getContentData = function (e) {
        return this._chain.execute({
            gameData: e
        }).then(function (e) {
            return e;
        });
    };
    var Tile2ExtractManager_1;
    Tile2ExtractManager._instance = null;
    __decorate([
        mj.traitEvent("T2ExtMgr_getCont")
    ], Tile2ExtractManager.prototype, "getContentData", null);
    Tile2ExtractManager = Tile2ExtractManager_1 = __decorate([
        mj.class("Tile2ExtractManager")
    ], Tile2ExtractManager);
    return Tile2ExtractManager;
}());
exports.default = Tile2ExtractManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyRXh0cmFjdE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCx5RUFBcUU7QUFDckUsaUVBQTREO0FBQzVELG1GQUE4RTtBQUM5RSwrREFBMEQ7QUFDMUQsMkRBQXNEO0FBQ3RELHlEQUFvRDtBQUNwRCw2REFBd0Q7QUFDeEQsK0VBQTBFO0FBQzFFLHVFQUFrRTtBQUVsRTtJQU9FO1FBTkEsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsSUFBSSxzQkFBWSxFQUFFLENBQUM7UUFNMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSw0QkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxrQ0FBd0IsRUFBRSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSwyQkFBaUIsRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSw4QkFBb0IsRUFBRSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxzQ0FBNEIsRUFBRSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSw2QkFBbUIsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs0QkFka0IsbUJBQW1CO0lBSXRDLHNCQUFJLHNDQUFLO2FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFTTSwrQkFBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0Qsc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDaEIsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFDRixPQUFPLHdDQUE4QixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxxQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQywwQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNsSCxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVELDRDQUFjLEdBQWQsVUFBZSxDQUFDO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUN6QixRQUFRLEVBQUUsQ0FBQztTQUNaLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2pCLE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztJQXBDTSw2QkFBUyxHQUFHLElBQUksQ0FBQztJQThCeEI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDOzZEQU9qQztJQXZDa0IsbUJBQW1CO1FBRHZDLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0F3Q3ZDO0lBQUQsMEJBQUM7Q0F4Q0QsQUF3Q0MsSUFBQTtrQkF4Q29CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHRyYWN0VG9vbCBmcm9tICcuL2NvcmUvZXh0cmFjdFF1ZXN0aW9uL0V4dHJhY3RUb29sJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IEV4dHJhY3RDaGFpbiBmcm9tICcuL2NvcmUvZXh0cmFjdFRpbGUyL0V4dHJhY3RDaGFpbic7XG5pbXBvcnQgVGlsZTJDYXBhYmlsaXR5RXh0cmFjdFJlZ2lzdHJ5IGZyb20gJy4vVGlsZTJDYXBhYmlsaXR5RXh0cmFjdFJlZ2lzdHJ5JztcbmltcG9ydCBUaWxlMkR5bmFtaWNTdHJhdGVneSBmcm9tICcuL1RpbGUyRHluYW1pY1N0cmF0ZWd5JztcbmltcG9ydCBUaWxlMkZpeGVkU3RyYXRlZ3kgZnJvbSAnLi9UaWxlMkZpeGVkU3RyYXRlZ3knO1xuaW1wb3J0IFRpbGUySGFyZFN0cmF0ZWd5IGZyb20gJy4vVGlsZTJIYXJkU3RyYXRlZ3knO1xuaW1wb3J0IFRpbGUyU3RhdGljU3RyYXRlZ3kgZnJvbSAnLi9UaWxlMlN0YXRpY1N0cmF0ZWd5JztcbmltcG9ydCBUaWxlMlN0YXRpY0xldmVsVHlwZVN0cmF0ZWd5IGZyb20gJy4vVGlsZTJTdGF0aWNMZXZlbFR5cGVTdHJhdGVneSc7XG5pbXBvcnQgVGlsZTJGaXhlZFJhbmRvbVN0cmF0ZWd5IGZyb20gJy4vVGlsZTJGaXhlZFJhbmRvbVN0cmF0ZWd5JztcbkBtai5jbGFzcyhcIlRpbGUyRXh0cmFjdE1hbmFnZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyRXh0cmFjdE1hbmFnZXIge1xuICBfaXNJbml0ID0gZmFsc2U7XG4gIF9jaGFpbiA9IG5ldyBFeHRyYWN0Q2hhaW4oKTtcbiAgc3RhdGljIF9pbnN0YW5jZSA9IG51bGw7XG4gIGdldCBjaGFpbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhaW47XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fY2hhaW4ucmVnaXN0ZXIobmV3IFRpbGUyRml4ZWRTdHJhdGVneSgpKTtcbiAgICB0aGlzLl9jaGFpbi5yZWdpc3RlcihuZXcgVGlsZTJGaXhlZFJhbmRvbVN0cmF0ZWd5KCkpO1xuICAgIHRoaXMuX2NoYWluLnJlZ2lzdGVyKG5ldyBUaWxlMkhhcmRTdHJhdGVneSgpKTtcbiAgICB0aGlzLl9jaGFpbi5yZWdpc3RlcihuZXcgVGlsZTJEeW5hbWljU3RyYXRlZ3koKSk7XG4gICAgdGhpcy5fY2hhaW4ucmVnaXN0ZXIobmV3IFRpbGUyU3RhdGljTGV2ZWxUeXBlU3RyYXRlZ3koKSk7XG4gICAgdGhpcy5fY2hhaW4ucmVnaXN0ZXIobmV3IFRpbGUyU3RhdGljU3RyYXRlZ3koKSk7XG4gIH1cbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyBUaWxlMkV4dHJhY3RNYW5hZ2VyKCkpO1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuICBpbml0RGF0YSgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX2lzSW5pdCkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHZhciB0ID0gZnVuY3Rpb24gdCgpIHtcbiAgICAgIHJldHVybiBlLl9jaGFpbi5pbml0QWxsKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUuX2NoYWluLnJlc29ydCgpO1xuICAgICAgICBlLl9pc0luaXQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gVGlsZTJDYXBhYmlsaXR5RXh0cmFjdFJlZ2lzdHJ5LmlzRW5hYmxlZCgpID8gRXh0cmFjdFRvb2wuZ2V0SW5zdGFuY2UoKS5pbml0RGF0YShNakdhbWVUeXBlLlRpbGUyTm9ybWFsKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0KCk7XG4gICAgfSkgOiB0KCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMkV4dE1ncl9nZXRDb250XCIpXG4gIGdldENvbnRlbnREYXRhKGUpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhaW4uZXhlY3V0ZSh7XG4gICAgICBnYW1lRGF0YTogZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlO1xuICAgIH0pO1xuICB9XG59Il19