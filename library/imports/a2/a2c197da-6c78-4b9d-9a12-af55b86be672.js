"use strict";
cc._RF.push(module, 'a2c19fabHhLnZoSr1W4a+Zy', 'GameEndExpTrait');
// subpackages/l_gameEndHighlight/Scripts/GameEndExpTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameEndExpTrait = /** @class */ (function (_super) {
    __extends(GameEndExpTrait, _super);
    function GameEndExpTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameEndExpTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this._traitData.i18nKeys;
        e && Object.keys(e).map(function (t) {
            var a, i;
            return t + "=" + (null !== (i = null === (a = e[t]) || void 0 === a ? void 0 : a.length) && void 0 !== i ? i : 0);
        }).join(", ");
    };
    GameEndExpTrait.prototype.onGameEndHighLT_getI18NKey = function (t, e) {
        var a, i, r = __read(t.args, 1)[0], o = this._traitData, n = "type" + r, c = null === (a = o.i18nKeys) || void 0 === a ? void 0 : a[n];
        if (c && 0 !== c.length) {
            var p = (null !== (i = o.keyPrefix) && void 0 !== i ? i : "MahjongBlast_GameEnd_Type") + c[Math.floor(Math.random() * c.length)];
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: p
            });
        }
        else
            e();
    };
    GameEndExpTrait.traitKey = "GameEndExp";
    GameEndExpTrait = __decorate([
        mj.trait,
        mj.class("GameEndExpTrait")
    ], GameEndExpTrait);
    return GameEndExpTrait;
}(Trait_1.default));
exports.default = GameEndExpTrait;

cc._RF.pop();