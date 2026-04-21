
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_pushSchemeSkipRepeat/Scripts/PushSchemeSkipRepeatTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3B1c2hTY2hlbWVTa2lwUmVwZWF0L1NjcmlwdHMvUHVzaFNjaGVtZVNraXBSZXBlYXRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELCtFQUEwRTtBQUcxRTtJQUF1RCw2Q0FBSztJQUE1RDs7SUErQ0EsQ0FBQztJQTdDQywwQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0RBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsSUFBSSxRQUFRLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNoSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDekYsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDO0lBQ3pDLENBQUM7SUFDRCw2Q0FBUyxHQUFULFVBQVUsQ0FBQztRQUNULE9BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQzVDLENBQUM7SUFDRCw4Q0FBVSxHQUFWLFVBQVcsQ0FBQyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELCtDQUFXLEdBQVgsVUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNELHNEQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN6RCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUNqQixDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFDekMsQ0FBQyxHQUFHLHFCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLEVBQy9DLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUN2QyxJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDO3dCQUMvQixPQUFPLEVBQUUsSUFBSTt3QkFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtxQkFDM0MsQ0FBQyxDQUFDO3FCQUFLO29CQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN0QixDQUFDLEVBQUUsQ0FBQztpQkFDTDthQUNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixDQUFDLEVBQUUsQ0FBQzthQUNMO1NBQ0Y7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBN0NNLGtDQUFRLEdBQUcsc0JBQXNCLENBQUM7SUFEdEIseUJBQXlCO1FBRjdDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztPQUNqQix5QkFBeUIsQ0ErQzdDO0lBQUQsZ0NBQUM7Q0EvQ0QsQUErQ0MsQ0EvQ3NELGVBQUssR0ErQzNEO2tCQS9Db0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBQdXNoTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvcHVzaC9QdXNoTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlB1c2hTY2hlbWVTa2lwUmVwZWF0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1c2hTY2hlbWVTa2lwUmVwZWF0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUHVzaFNjaGVtZVNraXBSZXBlYXRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIGdldFB1c2hSZWNvcmRNYXAoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEucHVzaFNjaGVtZVJlY29yZCAmJiBcIm9iamVjdFwiID09IHR5cGVvZiB0aGlzLmxvY2FsRGF0YS5wdXNoU2NoZW1lUmVjb3JkIHx8ICh0aGlzLmxvY2FsRGF0YS5wdXNoU2NoZW1lUmVjb3JkID0ge30pO1xuICAgIEFycmF5LmlzQXJyYXkodGhpcy5sb2NhbERhdGEucHVzaFNjaGVtZVJlY29yZCkgJiYgKHRoaXMubG9jYWxEYXRhLnB1c2hTY2hlbWVSZWNvcmQgPSB7fSk7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnB1c2hTY2hlbWVSZWNvcmQ7XG4gIH1cbiAgZ2V0S2V5TnVtKGUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQdXNoUmVjb3JkTWFwKClbZV0gfHwgbnVsbDtcbiAgfVxuICBzYXZlS2V5TnVtKGUsIHQpIHtcbiAgICB2YXIgciA9IHRoaXMuZ2V0UHVzaFJlY29yZE1hcCgpO1xuICAgIHJbZV0gPSB0O1xuICAgIHRoaXMubG9jYWxEYXRhLnB1c2hTY2hlbWVSZWNvcmQgPSByO1xuICB9XG4gIGlzRHVwbGljYXRlKGUsIHQsIHIpIHtcbiAgICBpZiAoZSAhPT0gcikgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBvID0gdGhpcy5nZXRLZXlOdW0oZSk7XG4gICAgcmV0dXJuICEhbyAmJiBvID09PSB0O1xuICB9XG4gIG9uUHVzaE1ncl9zZW5kUHVzaChlLCB0KSB7XG4gICAgdmFyIHIsXG4gICAgICBvLFxuICAgICAgYSA9IG51bGwgPT09IChyID0gZS5hcmdzKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByWzBdLFxuICAgICAgaSA9IG51bGwgPT09IChvID0gZS5hcmdzKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvWzFdO1xuICAgIGlmIChhICYmIGEub3Bld2F5bnVtKSB7XG4gICAgICB2YXIgbiA9IGEub3Bld2F5bnVtLFxuICAgICAgICBjID0gKG51bGwgPT0gaSA/IHZvaWQgMCA6IGkua2V5TnVtKSB8fCBcIlwiLFxuICAgICAgICBzID0gUHVzaE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lUHVzaEluZm8oKSxcbiAgICAgICAgcCA9IG51bGwgPT0gcyA/IHZvaWQgMCA6IHMub3Bld2F5bnVtO1xuICAgICAgaWYgKHApIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEdXBsaWNhdGUobiwgYywgcCkpIHQoe1xuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgIH0pO2Vsc2Uge1xuICAgICAgICAgIHRoaXMuc2F2ZUtleU51bShuLCBjKTtcbiAgICAgICAgICB0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2F2ZUtleU51bShuLCBjKTtcbiAgICAgICAgdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbn0iXX0=