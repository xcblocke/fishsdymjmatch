
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2CapabilityExtractRegistry.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5d5f0NtfFAe5qJgR91bbbz', 'Tile2CapabilityExtractRegistry');
// Scripts/Tile2CapabilityExtractRegistry.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Tile2CapabilityExtractRegistry = /** @class */ (function () {
    function Tile2CapabilityExtractRegistry() {
    }
    Tile2CapabilityExtractRegistry.setFromConfig = function (e) {
        if (e && e.enabled && e.bundle && e.offsetPath && e.levelDataPath && e.levelFileConfigPath && e.jsonPathPrefix) {
            this._config = e;
        }
        else {
            this._config = null;
        }
    };
    Tile2CapabilityExtractRegistry.getConfig = function () {
        return this._config;
    };
    Tile2CapabilityExtractRegistry.isEnabled = function () {
        return null != this._config && true === this._config.enabled;
    };
    Tile2CapabilityExtractRegistry._config = null;
    return Tile2CapabilityExtractRegistry;
}());
exports.default = Tile2CapabilityExtractRegistry;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyQ2FwYWJpbGl0eUV4dHJhY3RSZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQWVBLENBQUM7SUFiUSw0Q0FBYSxHQUFwQixVQUFxQixDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDLG1CQUFtQixJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUU7WUFDOUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDbEI7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUNNLHdDQUFTLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDTSx3Q0FBUyxHQUFoQjtRQUNFLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQy9ELENBQUM7SUFiTSxzQ0FBTyxHQUFHLElBQUksQ0FBQztJQWN4QixxQ0FBQztDQWZELEFBZUMsSUFBQTtrQkFmb0IsOEJBQThCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJDYXBhYmlsaXR5RXh0cmFjdFJlZ2lzdHJ5IHtcbiAgc3RhdGljIF9jb25maWcgPSBudWxsO1xuICBzdGF0aWMgc2V0RnJvbUNvbmZpZyhlKSB7XG4gICAgaWYgKGUgJiYgZS5lbmFibGVkICYmIGUuYnVuZGxlICYmIGUub2Zmc2V0UGF0aCAmJiBlLmxldmVsRGF0YVBhdGggJiYgZS5sZXZlbEZpbGVDb25maWdQYXRoICYmIGUuanNvblBhdGhQcmVmaXgpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IG51bGw7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBzdGF0aWMgaXNFbmFibGVkKCkge1xuICAgIHJldHVybiBudWxsICE9IHRoaXMuX2NvbmZpZyAmJiB0cnVlID09PSB0aGlzLl9jb25maWcuZW5hYmxlZDtcbiAgfVxufSJdfQ==