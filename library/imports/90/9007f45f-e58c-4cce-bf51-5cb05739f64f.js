"use strict";
cc._RF.push(module, '9007fRf5YxMzr9RXLBXOfZP', 'UnifyBaseTrait');
// subpackages/l_unifyLibFormat/Scripts/UnifyBaseTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var UnifyBaseTrait = /** @class */ (function (_super) {
    __extends(UnifyBaseTrait, _super);
    function UnifyBaseTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelCaches = new Map();
        return _this;
    }
    UnifyBaseTrait.prototype.setLevelCaches = function (t, e) {
        this.levelCaches.set(t, e);
    };
    UnifyBaseTrait.prototype.getLevelCaches = function (t) {
        return this.levelCaches.get(t) || null;
    };
    UnifyBaseTrait.prototype.cacheCurLvData = function (t, e, r) {
        var n = "" + t;
        this.localData[n] = Object.assign(Object.assign({}, r), {
            levelId: e
        });
    };
    UnifyBaseTrait.prototype.getCurLvData = function (t, e) {
        var r = "" + t, n = this.localData[r];
        return null == n || "" === n ? null : (null == n ? void 0 : n.levelId) !== e ? null : n;
    };
    UnifyBaseTrait.prototype.getLevelByLibIndex = function (t, e) {
        var r = this.getLevelCaches(t);
        return null === r ? null : r.find(function (t) {
            return t.index === e;
        }) || null;
    };
    UnifyBaseTrait.prototype.getLevelByArrayIndex = function (t, e) {
        var r = this.getLevelCaches(t);
        return null === r ? null : e < 0 || e >= r.length ? null : r[e];
    };
    UnifyBaseTrait.prototype.onExtractTool_getSolvers = function (t, e) {
        if (this.checkGameMode()) {
            var r = __read(t.args, 2), n = r[0], i = r[1], a = this.getCurLvData(n, i);
            if (null !== a) {
                e({
                    returnType: TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: null == a ? void 0 : a.solver
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    UnifyBaseTrait.traitKey = "UnifyBase";
    return UnifyBaseTrait;
}(ExtractTrait_1.default));
exports.default = UnifyBaseTrait;

cc._RF.pop();