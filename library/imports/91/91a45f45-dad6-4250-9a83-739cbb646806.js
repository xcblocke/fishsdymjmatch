"use strict";
cc._RF.push(module, '91a459F2tZCUJqDc5y7ZGgG', 'ValentineDragCardEffectTrait');
// subpackages/r_valentineDragCardEffect/Scripts/ValentineDragCardEffectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DragCardEffect_1 = require("./DragCardEffect");
var ValentineDragCardEffectTrait = /** @class */ (function (_super) {
    __extends(ValentineDragCardEffectTrait, _super);
    function ValentineDragCardEffectTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodePool = [];
        return _this;
    }
    ValentineDragCardEffectTrait_1 = ValentineDragCardEffectTrait;
    Object.defineProperty(ValentineDragCardEffectTrait.prototype, "tailType", {
        get: function () {
            return null != this._traitData.tailType ? this._traitData.tailType : "short";
        },
        enumerable: false,
        configurable: true
    });
    ValentineDragCardEffectTrait.prototype.onMainGameCtrl_initRes = function (t, e) {
        e();
        t.ins.addPreloadRes("Prefab", ['r_valentineDragCardEffect:prefabs/DragCardEffect1', 'r_valentineDragCardEffect:prefabs/DragCardEffect2']);
    };
    ValentineDragCardEffectTrait.prototype.onTileNodeObj_touchEnd = function (t, e) {
        e();
        var r = t.ins.cardNode;
        if (null != r.r_valentineDragCardEffect)
            if ("isLoading" == r.r_valentineDragCardEffect)
                r.r_valentineDragCardEffect = null;
            else {
                var n = r.r_valentineDragCardEffect;
                r.r_valentineDragCardEffect = null;
                if (cc.isValid(n)) {
                    n.parent = null;
                    this.nodePool.push(n);
                }
            }
    };
    ValentineDragCardEffectTrait.prototype.onTileNodeObj_setPosition = function (t, e) {
        e();
        if (this.isDragCardEffectActive()) {
            var r = t.ins.cardNode;
            if (null == r.r_valentineDragCardEffect)
                if (this.nodePool.length > 0) {
                    var n = this.nodePool.splice(0, 1)[0];
                    r.r_valentineDragCardEffect = n;
                    n.parent = r;
                    n.setSiblingIndex(0);
                }
                else {
                    r.r_valentineDragCardEffect = "isLoading";
                    this.load(r);
                }
        }
    };
    ValentineDragCardEffectTrait.prototype.load = function (t) {
        var e = "short" == this.tailType ? "prefabs/DragCardEffect1" : "prefabs/DragCardEffect2";
        DragCardEffect_1.default.createUI(e).then(function (e) {
            if (cc.isValid(e) && cc.isValid(t) && "isLoading" == t.r_valentineDragCardEffect) {
                t.r_valentineDragCardEffect = e;
                e.parent = t;
                e.setSiblingIndex(0);
            }
        }).catch(function (t) {
            console.error();
            console.error("[" + ValentineDragCardEffectTrait_1.traitKey + "] 游戏内创建拖拽特效失败:" + ((null == t ? void 0 : t.message) || "拖拽效果加载失败"));
        });
    };
    ValentineDragCardEffectTrait.prototype.isDragCardEffectActive = function () {
        if (null != this._traitData.dragCardEffect)
            return this._traitData.dragCardEffect;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    var ValentineDragCardEffectTrait_1;
    ValentineDragCardEffectTrait.traitKey = "ValentineDragCardEffect";
    ValentineDragCardEffectTrait = ValentineDragCardEffectTrait_1 = __decorate([
        mj.trait,
        mj.class("ValentineDragCardEffectTrait")
    ], ValentineDragCardEffectTrait);
    return ValentineDragCardEffectTrait;
}(Trait_1.default));
exports.default = ValentineDragCardEffectTrait;

cc._RF.pop();