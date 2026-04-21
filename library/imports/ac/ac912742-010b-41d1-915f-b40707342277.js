"use strict";
cc._RF.push(module, 'ac912dCAQtB0ZFftAcHNCJ3', 'MaterialCard102Trait');
// subpackages/l_materialCard/Scripts/MaterialCard102Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ClassicMaterialCardBaseTrait_1 = require("./ClassicMaterialCardBaseTrait");
var MaterialCard102Trait = /** @class */ (function (_super) {
    __extends(MaterialCard102Trait, _super);
    function MaterialCard102Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._interval = 1;
        _this._resetOnNewGame = false;
        return _this;
    }
    MaterialCard102Trait_1 = MaterialCard102Trait;
    MaterialCard102Trait.prototype.onLoad = function () {
        var e, r, a, i;
        _super.prototype.onLoad.call(this);
        if (!this.localData.waveGroupMaterials) {
            this.localData.waveGroupMaterials = {};
            this.localData.waveGroupMaterials = this.localData.waveGroupMaterials;
        }
        this._interval = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.interval) && void 0 !== r ? r : 1;
        this._resetOnNewGame = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.resetOnNewGame) && void 0 !== i && i;
        if (void 0 === this.localData.waveGroupMaterials[0]) {
            this.localData.waveGroupMaterials[0] = this.getCurMaterialCard();
            this.localData.waveGroupMaterials = this.localData.waveGroupMaterials;
        }
    };
    MaterialCard102Trait.prototype._resetWaveGroupMaterials = function () {
        this.localData.waveGroupMaterials = {};
        this.localData.waveGroupMaterials = this.localData.waveGroupMaterials;
        this._resetOnNewGame && this.setCurMaterialCard(0);
        this.localData.waveGroupMaterials[0] = this.getCurMaterialCard();
        this.localData.waveGroupMaterials = this.localData.waveGroupMaterials;
    };
    MaterialCard102Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (!this.isClassicMode()) {
                e();
                return;
            }
            this._resetWaveGroupMaterials("新游戏开始");
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard102Trait_1.traitKey + "] 新游戏初始化失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCard102Trait.prototype.onGsListener_onReplayGame = function (t, e) {
        try {
            if (!this.isClassicMode()) {
                e();
                return;
            }
            this._resetWaveGroupMaterials("重玩游戏");
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard102Trait_1.traitKey + "] 重玩游戏初始化失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCard102Trait.prototype.onChgBatchAnimBhv_start = function (t, e) {
        var a, i, o;
        try {
            if (!this.isClassicMode()) {
                e();
                return;
            }
            var l = null === (a = t.args) || void 0 === a ? void 0 : a[0], n = null !== (o = null === (i = null == l ? void 0 : l.data) || void 0 === i ? void 0 : i.batchId) && void 0 !== o ? o : 0;
            if (0 === n) {
                e();
                return;
            }
            if (n % this._interval == 0) {
                var s = Math.floor(n / this._interval);
                this.switchToNextMaterialCard();
                var c = this.getCurMaterialCard();
                this.localData.waveGroupMaterials[s] = c;
                this.localData.waveGroupMaterials = this.localData.waveGroupMaterials;
            }
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard102Trait_1.traitKey + "] 波次切换处理失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCard102Trait.prototype.onCardUtil_atlasPathBundle = function (e, a) {
        var i, o, n;
        try {
            if (!this.isClassicMode()) {
                a();
                return;
            }
            var s = null === (i = e.args) || void 0 === i ? void 0 : i[0], c = null === (o = e.args) || void 0 === o ? void 0 : o[1];
            if ("gameplay_img_mj_dn" !== s && "gameplay_img_mj_up" !== s && "gameplay_select_mj" !== s) {
                a();
                return;
            }
            if (!c || !c.tileObject) {
                _super.prototype.onCardUtil_atlasPathBundle.call(this, e, a);
                return;
            }
            var d = null !== (n = c.tileObject.batchId) && void 0 !== n ? n : 0, u = 0;
            if (0 === d)
                u = this.getCurMaterialCard();
            else {
                var p = Math.floor(d / this._interval);
                u = this.localData.waveGroupMaterials[p];
            }
            if (void 0 === u) {
                u = this.getCurMaterialCard();
                p = Math.floor(d / this._interval);
                this.localData.waveGroupMaterials[p] = u;
                this.localData.waveGroupMaterials = this.localData.waveGroupMaterials;
            }
            if (0 === u) {
                a({
                    isBreak: true
                });
                return;
            }
            var h = this.getBundleNameById(u);
            if (!h) {
                a();
                return;
            }
            var f = "texture/" + s;
            a({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: {
                    path: f,
                    bundleName: h,
                    fromAtlas: false
                }
            });
        }
        catch (t) {
            console.error("[" + MaterialCard102Trait_1.traitKey + "] 劫持牌背图片失败: " + (null == t ? void 0 : t.message));
            a();
        }
    };
    var MaterialCard102Trait_1;
    MaterialCard102Trait.traitKey = "MaterialCard102";
    MaterialCard102Trait = MaterialCard102Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard102Trait")
    ], MaterialCard102Trait);
    return MaterialCard102Trait;
}(ClassicMaterialCardBaseTrait_1.default));
exports.default = MaterialCard102Trait;

cc._RF.pop();