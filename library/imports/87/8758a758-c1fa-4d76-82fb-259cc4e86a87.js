"use strict";
cc._RF.push(module, '8758adYwfpNdoL7JZzE6GqH', 'ChangeResDifferenceLookUp');
// subpackages/l_changeResId/Scripts/ChangeResDifferenceLookUp.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var ChangeResDifferenceLookUp = /** @class */ (function () {
    function ChangeResDifferenceLookUp() {
        this.dict = new Map();
        this._cardIdSet = new Set();
        var e = this;
        DataReader_1.DataReader.getList(this.getConfigName()).forEach(function (t) {
            e._cardIdSet.add(t.CardId1);
            var r = Math.min(t.CardId1, t.CardId2) + "_" + Math.max(t.CardId1, t.CardId2);
            e.dict.set(r, t.Difference);
        });
    }
    ChangeResDifferenceLookUp.prototype.getConfigName = function () {
        return ConfigType_1.ConfigType.card_difference2;
    };
    ChangeResDifferenceLookUp.prototype.hasCard = function (e) {
        return this._cardIdSet.has(e);
    };
    ChangeResDifferenceLookUp.prototype.get = function (e, t) {
        if (e === t)
            return 0;
        var r = Math.min(e, t) + "_" + Math.max(e, t), i = this.dict.get(r);
        return void 0 !== i ? i : 50;
    };
    return ChangeResDifferenceLookUp;
}());
exports.default = ChangeResDifferenceLookUp;

cc._RF.pop();