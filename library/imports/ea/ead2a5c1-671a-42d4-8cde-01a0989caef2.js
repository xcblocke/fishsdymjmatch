"use strict";
cc._RF.push(module, 'ead2aXBZxpC1IzeAaCYnK7y', 'RankDynChasingTrait');
// subpackages/l_rank/Scripts/RankDynChasingTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RankDynChasingTrait = /** @class */ (function (_super) {
    __extends(RankDynChasingTrait, _super);
    function RankDynChasingTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._chaseLogEnable = false;
        _this.config = null;
        return _this;
    }
    RankDynChasingTrait_1 = RankDynChasingTrait;
    RankDynChasingTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        try {
            this.config = {
                botsChasingInterval: (null === (e = this._traitData.config) || void 0 === e ? void 0 : e.botsChasingInterval) || 4
            };
            this.initChasingData();
        }
        catch (t) {
            console.error("[" + RankDynChasingTrait_1.traitKey + "] 加载失败: " + (t.message || t));
        }
    };
    RankDynChasingTrait.prototype.initChasingData = function () {
        this.localData && this.localData.chasingData || (this.localData.chasingData = {
            activityStartTime: 0,
            currentRound: 0,
            needChasingCount: 0,
            chasedCount: 0,
            chasingStartTime: 0,
            chasingStartLevel: 0,
            lastUpdateTime: Date.now()
        });
    };
    RankDynChasingTrait.prototype.onRankRbtLgc_othPassScore = function (t, e) {
        try {
            var n = t.args[0], a = t.args[1], i = t.args[2], r = t.args[3], s = t.args[4], l = t.args[5];
            if (!n || !n.rankRobotCfg) {
                e();
                return;
            }
            var c = n.rankRobotCfg, d = n.joinActInfo.passCount, p = c.baseLevelConst, u = c.botsChasingLevel, h = this.config.botsChasingInterval;
            this.checkAndResetIfNeeded(n);
            var f = Math.floor((d - p) / (u + h)), m = f >= 0 && d < (u + h) * f + p + u;
            this.updateChasingData(n, f, m, u);
            var _ = 0, y = 0, g = i;
            y = a > n.joinActInfo.rank && m ? (0 === s ? n.joinActInfo.score : s) - r + l : Math.abs(n.joinActInfo.rank - a) / (n.joinActInfo.passCount + 50 / c.minPoint);
            g += Math.random() * y;
            if (3 === (_ = Math.floor(g)) || _ < 2) {
                var v = [2, 4, 5, 6, 7, 8];
                g = (_ = v[Math.floor(Math.random() * v.length)]) + Math.random();
            }
            var k = {
                score: _,
                covert: g
            };
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: k
            });
        }
        catch (t) {
            console.error("[" + RankDynChasingTrait_1.traitKey + "] 动态追赶判断失败: " + (t.message || t));
            e();
        }
    };
    RankDynChasingTrait.prototype.checkAndResetIfNeeded = function () {
        var t, e = mj.getClassByName("RankModel"), o = e ? e.getInstance() : null, n = (null === (t = null == o ? void 0 : o.localData) || void 0 === t ? void 0 : t.curActStartTime) || 0, a = this.localData.chasingData;
        if (a.activityStartTime !== n) {
            a.activityStartTime = n;
            a.currentRound = 0;
            a.needChasingCount = 0;
            a.chasedCount = 0;
            a.chasingStartTime = 0;
            a.chasingStartLevel = 0;
            a.lastUpdateTime = Date.now();
        }
        this.localData.chasingData = a;
    };
    RankDynChasingTrait.prototype.updateChasingData = function (t, e, o, n) {
        var a = this.localData.chasingData, i = Date.now(), r = t.joinActInfo.passCount;
        if (a.currentRound !== e) {
            a.currentRound = e;
            a.needChasingCount = n;
            if (o) {
                a.chasingStartTime = i;
                a.chasingStartLevel = r;
                a.chasedCount = 1;
                a.chasedCount;
            }
            else
                a.chasedCount = 0;
        }
        else {
            var s = r - a.chasingStartLevel + 1;
            if (o && a.chasedCount < s) {
                a.chasedCount++;
                a.chasedCount, a.needChasingCount;
            }
        }
        a.lastUpdateTime = i;
    };
    var RankDynChasingTrait_1;
    RankDynChasingTrait.traitKey = "RankDynChasing";
    RankDynChasingTrait = RankDynChasingTrait_1 = __decorate([
        mj.trait,
        mj.class("RankDynChasingTrait")
    ], RankDynChasingTrait);
    return RankDynChasingTrait;
}(Trait_1.default));
exports.default = RankDynChasingTrait;

cc._RF.pop();