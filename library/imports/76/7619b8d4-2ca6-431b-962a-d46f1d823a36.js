"use strict";
cc._RF.push(module, '7619bjULKZDG5Yq1G8dgjo2', 'Tile2RollCardLightTrait');
// subpackages/l_tile2RollCardLight/Scripts/Tile2RollCardLightTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseTileNode_1 = require("../../../Scripts/BaseTileNode");
var Tile2RollCardLightTrait = /** @class */ (function (_super) {
    __extends(Tile2RollCardLightTrait, _super);
    function Tile2RollCardLightTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2RollCardLightTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2RollCardLightTrait.prototype.getSpineCfg = function () {
        return {
            path: "spine/gameplay_mj_choose_light",
            bundle: this.traitData.bundleName || "l_tile2RollCardLight"
        };
    };
    Tile2RollCardLightTrait.prototype.getLightSize = function () {
        return cc.v2(163, 201);
    };
    Tile2RollCardLightTrait.prototype.onTile2FlipAni_playEnter = function (e, t) {
        var i = this.getTile2Node(e), r = this.getSpineCfg();
        if (i && r.path) {
            var o = i.tileNode;
            if (cc.isValid(o)) {
                var n = o.getChildByName("Tile2RollCardLight");
                if (!n || !cc.isValid(n)) {
                    (n = new cc.Node("Tile2RollCardLight")).parent = o;
                    n.zIndex = BaseTileNode_1.ETileNodeZIndex.RollCardLight;
                    var l = o.getChildByName(BaseTileNode_1.ETileNodeNames.imgCardBg);
                    if (l) {
                        var s = this.getLightSize();
                        if (l.width && l.height) {
                            var p = l.width, d = l.height, f = p / s.x, u = d / s.y;
                            n.setScale(f, u, 1);
                        }
                    }
                }
                if (n) {
                    n.active = true;
                    var h = BaseSpine_1.default.refreshWithNode(n, r.path, r.bundle);
                    h.setAnimation("in", 1, function () {
                        h.setAnimation("idle", -1);
                    });
                }
                t();
            }
            else
                t();
        }
        else
            t();
    };
    Tile2RollCardLightTrait.prototype.onTile2FlipAni_playExit = function (e, t) {
        var i = this.getTile2Node(e);
        if (i && cc.isValid(i.tileNode)) {
            var r = i.tileNode.getChildByName("Tile2RollCardLight");
            if (r && r.activeInHierarchy) {
                var o = r.getComponent(BaseSpine_1.default);
                o && o.setAnimation("out", 1);
            }
            t();
        }
        else
            t();
    };
    Tile2RollCardLightTrait.prototype.onRollCrdComp_playFly = function (e, t) {
        var i, r = null === (i = e.ins._host) || void 0 === i ? void 0 : i.tileNode;
        if (r && cc.isValid(r)) {
            var o = r.getChildByName("Tile2RollCardLight");
            if (o && o.activeInHierarchy) {
                var n = o.getComponent(BaseSpine_1.default);
                n && n.setAnimation("fly", 1, function () {
                    o.active = false;
                });
            }
            t();
        }
        else
            t();
    };
    Tile2RollCardLightTrait.prototype.getTile2Node = function (e) {
        var t = null == e ? void 0 : e.ins;
        return (null == t ? void 0 : t._baseTileNode) || null;
    };
    Tile2RollCardLightTrait.traitKey = "Tile2RollCardLight";
    Tile2RollCardLightTrait = __decorate([
        mj.trait,
        mj.class("Tile2RollCardLightTrait")
    ], Tile2RollCardLightTrait);
    return Tile2RollCardLightTrait;
}(Trait_1.default));
exports.default = Tile2RollCardLightTrait;

cc._RF.pop();