"use strict";
cc._RF.push(module, '2b250zfHRtACoNJTthLCgj4', 'Tile2RankCardComponent');
// Scripts/Tile2RankCardComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2RankCardComponent = void 0;
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var UserModel_1 = require("./gamePlay/user/UserModel");
var TileNodeComponent_1 = require("./TileNodeComponent");
var Tile2RankCardComponent = /** @class */ (function (_super) {
    __extends(Tile2RankCardComponent, _super);
    function Tile2RankCardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2RankCardComponent.prototype.getResNameOverride = function () {
        return UserModel_1.default.getInstance().getRankCardResName();
    };
    Tile2RankCardComponent.prototype.onUpdateImgCardBg = function () {
        var e = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_special_mj_2", this._host), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._host.imgCardBg, t, n, false, o);
        return true;
    };
    Tile2RankCardComponent.prototype.onUpdateEffectSelected = function () {
        this._host._effectSelectedProxy = BaseSpine_1.default.refreshWithNode(this._host.effectSelected, "spine/rankcard/select/gameplay_selected_special");
        return true;
    };
    Tile2RankCardComponent.prototype.onRealShowSelectEffect = function () {
        this._host.imgSelectedCardBg.active = false;
        return false;
    };
    return Tile2RankCardComponent;
}(TileNodeComponent_1.TileNodeComponent));
exports.Tile2RankCardComponent = Tile2RankCardComponent;

cc._RF.pop();