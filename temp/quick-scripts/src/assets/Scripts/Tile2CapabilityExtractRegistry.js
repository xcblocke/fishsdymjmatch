"use strict";
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