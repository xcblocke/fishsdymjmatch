"use strict";
cc._RF.push(module, '949e2oekKBLJb4N6o6s6Vu1', 'GuideNewTrait');
// subpackages/l_guideNew/Scripts/GuideNewTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EGuideDisplayType = void 0;
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var EGuideDisplayType;
(function (EGuideDisplayType) {
    EGuideDisplayType[EGuideDisplayType["None"] = 0] = "None";
    EGuideDisplayType[EGuideDisplayType["Click"] = 1] = "Click";
    EGuideDisplayType[EGuideDisplayType["Drag"] = 2] = "Drag";
    EGuideDisplayType[EGuideDisplayType["DoubleClick"] = 3] = "DoubleClick";
})(EGuideDisplayType = exports.EGuideDisplayType || (exports.EGuideDisplayType = {}));
var GuideNewTrait = /** @class */ (function (_super) {
    __extends(GuideNewTrait, _super);
    function GuideNewTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._guideUI = null;
        _this._guideStep = -1;
        _this._displayType = [EGuideDisplayType.Click, EGuideDisplayType.Drag, EGuideDisplayType.DoubleClick];
        return _this;
    }
    GuideNewTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._displayType = this.traitData.displayType;
    };
    GuideNewTrait.prototype.isGuideActive = function () {
        var e = mj.getClassByName("GuideTrait");
        return !(!e || !e.getInstance() || true !== e.getInstance().eventEnabled || UserModel_1.default.getInstance().isGuideFinished());
    };
    GuideNewTrait.prototype.getGuideStep = function () {
        return this.isGuideActive() ? mj.getClassByName("GuideTrait").getInstance().guideStep : -1;
    };
    GuideNewTrait.prototype.showGuide = function (e, t, i) {
        if (i === EGuideDisplayType.Drag) {
            this.showDragGuide(e, t);
        }
        else {
            if (i === EGuideDisplayType.DoubleClick) {
                this.showDoubleClickGuide(e, t);
            }
            else {
                i === EGuideDisplayType.None && cc.isValid(this._guideUI) && (this._guideUI.getNodeHand().active = false);
            }
        }
    };
    GuideNewTrait.prototype.createDragGuideNode = function () {
        var e = new cc.Node();
        this._dragGuideNode = e;
        var t = new cc.Node();
        this._guideUI.getNodeHand().addChild(e, -1);
        e.addComponent(cc.Sprite);
        t.parent = e;
        t.addComponent(cc.Sprite);
        this._dragGuideFlowerNode = t;
    };
    GuideNewTrait.prototype.refreshDragSprite = function (e) {
        var t = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_img_mj_up"), i = t.path, a = t.bundleName, o = t.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._dragGuideNode, i, o, false, a);
        this._dragGuideNode.setContentSize(e.info.tileObject.getBgContentSize());
        var n = CardUtil_1.default.getAtlasPathAndBundleName(e.info.tileObject.resName), r = n.path, d = n.bundleName, s = n.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._dragGuideFlowerNode, r, s, false, d);
        this._dragGuideFlowerNode.scale = e.animNode.scale;
    };
    GuideNewTrait.prototype.showDragGuide = function (e, t) {
        var i = this;
        if (cc.isValid(this._guideUI)) {
            var a = this._guideUI.getNodeHand();
            if (cc.isValid(a)) {
                this._dragGuideNode || this.createDragGuideNode();
                this._dragGuideNode.active = true;
                this.refreshDragSprite(e);
                this._dragGuideNode.opacity = 0;
                this._dragGuideNode.scale = 1.2;
                var o = e.layerNode.convertToWorldSpaceAR(e.info.tileObject.getPosition()), n = this._guideUI.node.parent.convertToNodeSpaceAR(o), r = t.layerNode.convertToWorldSpaceAR(t.info.tileObject.getPosition()), s = this._guideUI.node.parent.convertToNodeSpaceAR(r);
                cc.Tween.stopAllByTarget(a);
                var c = function c() {
                    if (cc.isValid(i._guideUI)) {
                        a.opacity = 255;
                        i._dragGuideNode.opacity = 0;
                        GameUtils_1.default.playSpine(i._guideUI._handSpine, "in_drag", false, function () {
                            GameUtils_1.default.playSpine(i._guideUI._handSpine, "init_drag", true);
                            cc.tween(a).delay(0.1).call(function () {
                                cc.isValid(i._guideUI) && (i._dragGuideNode.opacity = 153);
                            }).to(0.5, {
                                position: s
                            }).call(function () {
                                cc.isValid(i._guideUI) && (a.opacity = 0);
                            }).delay(0.33).call(function () {
                                cc.isValid(i._guideUI) && a.setPosition(n);
                                c();
                            }).start();
                        });
                        if (cc.isValid(i._guideUI)) {
                            cc.Tween.stopAllByTarget(a);
                            a.setPosition(n);
                        }
                    }
                };
                c();
            }
        }
    };
    GuideNewTrait.prototype.showDoubleClickGuide = function (e, t) {
        var i = this;
        if (cc.isValid(this._guideUI)) {
            var a = this._guideUI.getNodeHand();
            if (cc.isValid(a)) {
                cc.Tween.stopAllByTarget(a);
                a.scaleX = -1;
                var o = e.layerNode.convertToWorldSpaceAR(e.info.tileObject.getPosition()), n = (this._guideUI.node.parent.convertToNodeSpaceAR(o), t.layerNode.convertToWorldSpaceAR(t.info.tileObject.getPosition())), r = this._guideUI.node.parent.convertToNodeSpaceAR(n);
                if (!this._nodeHandRight) {
                    var s = new cc.Node();
                    s.parent = a.parent;
                    s.setPosition(cc.v2(-a.position.x, a.position.y));
                    s.name = "nodeHand2";
                    this._nodeHandRight = s;
                }
                this._nodeHandRight.active = true;
                this._guideUI.loadRes("prefabs/guide/guidehand", cc.Prefab, "mainRes").then(function (e) {
                    if (cc.isValid(i._guideUI)) {
                        i._nodeHandRight.removeAllChildren();
                        var t = cc.instantiate(e);
                        t.parent = i._nodeHandRight;
                        var a = t.getComponent(sp.Skeleton);
                        GameUtils_1.default.playSpine(a, "in", false, function () {
                            GameUtils_1.default.playSpine(a, "init", true);
                        });
                        GameUtils_1.default.playSpine(i._guideUI._handSpine, "in", false, function () {
                            GameUtils_1.default.playSpine(i._guideUI._handSpine, "init", true);
                        });
                    }
                });
                cc.Tween.stopAllByTarget(this._nodeHandRight);
                this._nodeHandRight.opacity = 255;
                cc.tween(this._nodeHandRight).to(0.23, {
                    position: r
                }).call(function () {
                    cc.isValid(i._guideUI) && i._nodeHandRight.setPosition(r);
                }).start();
            }
        }
    };
    GuideNewTrait.prototype.onGuideBhv_start = function (e, t) {
        if (this.isGuideActive()) {
            this._guideContext = e.ins.context;
            this._guideStep = this.getGuideStep();
            t();
        }
        else
            t();
    };
    GuideNewTrait.prototype.onGuide_getSelectTileId = function (e, t) {
        if (this.isGuideActive()) {
            this._gameController = e.args[0];
            t();
        }
        else
            t();
    };
    GuideNewTrait.prototype.onGtc_isOpenTouchMove = function (e, t) {
        if (this.isGuideActive()) {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: true
            });
        }
        else {
            t();
        }
    };
    GuideNewTrait.prototype.onIptBTchEnd_checkIsSame = function (e, t) {
        if (this.isGuideActive()) {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: false
            });
        }
        else {
            t();
        }
    };
    GuideNewTrait.prototype.onGuideUI_playHandSpi = function (e, t) {
        var i, a;
        if (this.isGuideActive()) {
            var o = mj.getClassByName("GuideTrait"), n = e.ins;
            this._guideUI = n;
            if (o && o.getInstance()) {
                var d = o.getInstance().guideStep, s = this._displayType[d];
                if (s === EGuideDisplayType.Click) {
                    t();
                    return;
                }
                var l = this._gameController.tileMapObject.getCanMatchTilesHint();
                if (0 == l.length) {
                    this._gameController.tileMapObject.updateCanMatchTiles();
                    l = this._gameController.tileMapObject.getCanMatchTilesHint();
                }
                if (!l.length) {
                    t();
                    return;
                }
                var u = l[0], p = null === (i = u[0]) || void 0 === i ? void 0 : i.id, g = null === (a = u[1]) || void 0 === a ? void 0 : a.id;
                if (p && g) {
                    this._gameController.tileMapObject.getTileObject(p), this._gameController.tileMapObject.getTileObject(g);
                    var h = this._guideContext.getTileNodeMap().get(p), f = this._guideContext.getTileNodeMap().get(g);
                    this.showGuide(h, f, s);
                    t({
                        returnType: TraitManager_1.TraitCallbackReturnType.return,
                        isBreak: true
                    });
                    return;
                }
            }
            t();
        }
        else
            t();
    };
    GuideNewTrait.prototype.onIptBase_pushClrEff = function (e, t) {
        if (this.isGuideActive()) {
            if (cc.isValid(this._guideUI)) {
                var i = this._guideUI.getNodeHand();
                if (cc.isValid(i)) {
                    this._nodeHandRight && (this._nodeHandRight.active = false);
                    this._dragGuideNode && (this._dragGuideNode.active = false);
                    i.scaleX = 1;
                    i.scaleY = 1;
                    t();
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    GuideNewTrait.prototype.onInputGuide_pushEfData = function (e, t) {
        if (this.isGuideActive() && cc.isValid(this._guideUI)) {
            var i = this._guideUI.getNodeHand();
            if (cc.isValid(i)) {
                var a = this._displayType[this.getGuideStep()];
                if (a !== EGuideDisplayType.None && a !== EGuideDisplayType.Click) {
                    var o = e.args[0], n = e.args[1];
                    if (o.isSelect || n.isSelect) {
                        i.scale = 0;
                        a === EGuideDisplayType.DoubleClick && this._nodeHandRight && (this._nodeHandRight.scale = 0);
                        t({
                            returnType: TraitManager_1.TraitCallbackReturnType.return,
                            isBreak: true
                        });
                    }
                    else {
                        if (a === EGuideDisplayType.Drag) {
                            var d = this._guideContext.getTileNodeMap().get(o.id), s = this._guideContext.getTileNodeMap().get(n.id);
                            this.showDragGuide(d, s);
                            i.scale = 1;
                        }
                        else if (a === EGuideDisplayType.DoubleClick) {
                            this._nodeHandRight && (this._nodeHandRight.scale = 1);
                            i.scale = 1;
                            i.scaleX = -1;
                            i.opacity = 255;
                        }
                        t();
                    }
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    GuideNewTrait.traitKey = "GuideNew";
    GuideNewTrait = __decorate([
        mj.trait,
        mj.class("GuideNewTrait")
    ], GuideNewTrait);
    return GuideNewTrait;
}(Trait_1.default));
exports.default = GuideNewTrait;

cc._RF.pop();