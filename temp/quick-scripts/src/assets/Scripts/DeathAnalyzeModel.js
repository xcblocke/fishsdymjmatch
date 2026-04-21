"use strict";
cc._RF.push(module, 'bada3xQAlpMupT92VFi3G/c', 'DeathAnalyzeModel');
// Scripts/DeathAnalyzeModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("./framework/data/Model");
var DeathAnalyzeModel = /** @class */ (function (_super) {
    __extends(DeathAnalyzeModel, _super);
    function DeathAnalyzeModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeathAnalyzeModel.prototype.saveDeath = function (e, t, o) {
        this.localData[e] = [t, o.map(function (e) {
                return e.tiles;
            })];
    };
    DeathAnalyzeModel.prototype.getDeath = function (e, t) {
        try {
            var o = this.localData[e];
            return null != o && void 0 !== o && "" !== o && Array.isArray(o) ? 2 !== o.length ? null : o[0] !== t ? null : {
                levelOriginalData: o[0],
                badMahjongGroups: o[1].map(function (e) {
                    e.forEach(function (e) {
                        e.id = e.gridPosX + "-" + e.gridPosY + "-" + e.layer;
                    });
                    return {
                        key: e.map(function (e) {
                            return e.id;
                        }).sort().join(","),
                        colors: new Set(e.map(function (e) {
                            return e.cardId;
                        })),
                        tileIds: new Set(e.map(function (e) {
                            return e.id;
                        })),
                        tiles: e
                    };
                })
            } : null;
        }
        catch (e) {
            return null;
        }
    };
    DeathAnalyzeModel = __decorate([
        mj.class("DeathAnalyzeModel")
    ], DeathAnalyzeModel);
    return DeathAnalyzeModel;
}(Model_1.default));
exports.default = DeathAnalyzeModel;

cc._RF.pop();