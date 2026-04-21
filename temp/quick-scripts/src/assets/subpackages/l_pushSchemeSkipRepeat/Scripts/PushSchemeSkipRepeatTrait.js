"use strict";
cc._RF.push(module, 'ae9c2LA1l5Dq7FuxgziHWw/', 'PushSchemeSkipRepeatTrait');
// subpackages/l_pushSchemeSkipRepeat/Scripts/PushSchemeSkipRepeatTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var PushManager_1 = require("../../../Scripts/gamePlay/base/push/PushManager");
var PushSchemeSkipRepeatTrait = /** @class */ (function (_super) {
    __extends(PushSchemeSkipRepeatTrait, _super);
    function PushSchemeSkipRepeatTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PushSchemeSkipRepeatTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    PushSchemeSkipRepeatTrait.prototype.getPushRecordMap = function () {
        this.localData.pushSchemeRecord && "object" == typeof this.localData.pushSchemeRecord || (this.localData.pushSchemeRecord = {});
        Array.isArray(this.localData.pushSchemeRecord) && (this.localData.pushSchemeRecord = {});
        return this.localData.pushSchemeRecord;
    };
    PushSchemeSkipRepeatTrait.prototype.getKeyNum = function (e) {
        return this.getPushRecordMap()[e] || null;
    };
    PushSchemeSkipRepeatTrait.prototype.saveKeyNum = function (e, t) {
        var r = this.getPushRecordMap();
        r[e] = t;
        this.localData.pushSchemeRecord = r;
    };
    PushSchemeSkipRepeatTrait.prototype.isDuplicate = function (e, t, r) {
        if (e !== r)
            return false;
        var o = this.getKeyNum(e);
        return !!o && o === t;
    };
    PushSchemeSkipRepeatTrait.prototype.onPushMgr_sendPush = function (e, t) {
        var r, o, a = null === (r = e.args) || void 0 === r ? void 0 : r[0], i = null === (o = e.args) || void 0 === o ? void 0 : o[1];
        if (a && a.opewaynum) {
            var n = a.opewaynum, c = (null == i ? void 0 : i.keyNum) || "", s = PushManager_1.default.getInstance().getGamePushInfo(), p = null == s ? void 0 : s.opewaynum;
            if (p) {
                if (this.isDuplicate(n, c, p))
                    t({
                        isBreak: true,
                        returnType: TraitCallbackReturnType.return
                    });
                else {
                    this.saveKeyNum(n, c);
                    t();
                }
            }
            else {
                this.saveKeyNum(n, c);
                t();
            }
        }
        else
            t();
    };
    PushSchemeSkipRepeatTrait.traitKey = "PushSchemeSkipRepeat";
    PushSchemeSkipRepeatTrait = __decorate([
        mj.trait,
        mj.class("PushSchemeSkipRepeatTrait")
    ], PushSchemeSkipRepeatTrait);
    return PushSchemeSkipRepeatTrait;
}(Trait_1.default));
exports.default = PushSchemeSkipRepeatTrait;

cc._RF.pop();