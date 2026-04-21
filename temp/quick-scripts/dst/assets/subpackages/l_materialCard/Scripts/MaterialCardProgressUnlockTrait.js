
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_materialCard/Scripts/MaterialCardProgressUnlockTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a5a55G4hJxNx5/thM5GJhjp', 'MaterialCardProgressUnlockTrait');
// subpackages/l_materialCard/Scripts/MaterialCardProgressUnlockTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var MaterialCardProgressUnlockTrait = /** @class */ (function (_super) {
    __extends(MaterialCardProgressUnlockTrait, _super);
    function MaterialCardProgressUnlockTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 30;
        _this._initialUnlock = 2;
        _this._unlockInterval = 10;
        return _this;
    }
    MaterialCardProgressUnlockTrait_1 = MaterialCardProgressUnlockTrait;
    MaterialCardProgressUnlockTrait.prototype.onLoad = function () {
        var e, r, a, i, o, l;
        _super.prototype.onLoad.call(this);
        this._initData();
        this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 30;
        this._initialUnlock = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.initialUnlock) && void 0 !== i ? i : 2;
        this._unlockInterval = null !== (l = null === (o = this._traitData) || void 0 === o ? void 0 : o.unlockInterval) && void 0 !== l ? l : 10;
    };
    MaterialCardProgressUnlockTrait.prototype._initData = function () {
        this.isLocalEmpty(this.localData.sequenceIndex) && (this.localData.sequenceIndex = 0);
    };
    MaterialCardProgressUnlockTrait.prototype.setCurMaterialCard = function (t) {
        var e = UserModel_1.default.getInstance();
        e.normalData.setCardMaterialID(t);
        e.travelData.setCardMaterialID(t);
        e.dailyChallengeData.setCardMaterialID(t);
    };
    MaterialCardProgressUnlockTrait.prototype._getMaterialUnlockOrder = function () {
        return MaterialCardBaseTrait_1.default.MATERIAL_CARD_LIST.filter(function (t) {
            return 0 !== t.id;
        }).map(function (t) {
            return t.id;
        });
    };
    MaterialCardProgressUnlockTrait.prototype._getUnlockedCount = function (t) {
        if (t < this._startLevel)
            return 0;
        var e = Math.floor((t - this._startLevel) / this._unlockInterval), r = this._initialUnlock + e, a = this._getMaterialUnlockOrder().length;
        return Math.min(r, a);
    };
    MaterialCardProgressUnlockTrait.prototype._getUnlockedAvailableMaterials = function (t) {
        var e = this._getMaterialUnlockOrder(), r = this._getUnlockedCount(t);
        if (0 === r)
            return [];
        var a = e.slice(0, r), i = new Set(this.getAvailableMaterials());
        return a.filter(function (t) {
            return i.has(t);
        });
    };
    MaterialCardProgressUnlockTrait.prototype._switchSequential = function (t) {
        var e, r = this._getUnlockedAvailableMaterials(t);
        if (0 !== r.length) {
            var a = null !== (e = this.localData.sequenceIndex) && void 0 !== e ? e : 0, i = r[a % r.length];
            this.getCurMaterialCard();
            this.setCurMaterialCard(i);
            this.localData.sequenceIndex = a + 1;
        }
    };
    MaterialCardProgressUnlockTrait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (this.isClassicMode()) {
                e();
                return;
            }
            var a = this.getCurrentLevel();
            if (a < this._startLevel) {
                e();
                return;
            }
            this._getUnlockedCount(a);
            this._switchSequential(a);
            e();
        }
        catch (t) {
            console.error("[" + MaterialCardProgressUnlockTrait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var MaterialCardProgressUnlockTrait_1;
    MaterialCardProgressUnlockTrait.traitKey = "MaterialCardProgressUnlock";
    MaterialCardProgressUnlockTrait = MaterialCardProgressUnlockTrait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCardProgressUnlockTrait")
    ], MaterialCardProgressUnlockTrait);
    return MaterialCardProgressUnlockTrait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCardProgressUnlockTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGVyaWFsQ2FyZC9TY3JpcHRzL01hdGVyaWFsQ2FyZFByb2dyZXNzVW5sb2NrVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUE0RDtBQUM1RCxzRUFBaUU7QUFHakU7SUFBNkQsbURBQXFCO0lBQWxGO1FBQUEscUVBNEVDO1FBM0VDLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLG9CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLHFCQUFlLEdBQUcsRUFBRSxDQUFDOztJQXlFdkIsQ0FBQzt3Q0E1RW9CLCtCQUErQjtJQUtsRCxnREFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2xJLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFD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LENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNuSCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQzs7SUF2RU0sd0NBQVEsR0FBRyw0QkFBNEIsQ0FBQztJQUo1QiwrQkFBK0I7UUFGbkQsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDO09BQ3ZCLCtCQUErQixDQTRFbkQ7SUFBRCxzQ0FBQztDQTVFRCxBQTRFQyxDQTVFNEQsK0JBQXFCLEdBNEVqRjtrQkE1RW9CLCtCQUErQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXRlcmlhbENhcmRCYXNlVHJhaXQgZnJvbSAnLi9NYXRlcmlhbENhcmRCYXNlVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTWF0ZXJpYWxDYXJkUHJvZ3Jlc3NVbmxvY2tUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0ZXJpYWxDYXJkUHJvZ3Jlc3NVbmxvY2tUcmFpdCBleHRlbmRzIE1hdGVyaWFsQ2FyZEJhc2VUcmFpdCB7XG4gIF9zdGFydExldmVsID0gMzA7XG4gIF9pbml0aWFsVW5sb2NrID0gMjtcbiAgX3VubG9ja0ludGVydmFsID0gMTA7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTWF0ZXJpYWxDYXJkUHJvZ3Jlc3NVbmxvY2tcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByLCBhLCBpLCBvLCBsO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2luaXREYXRhKCk7XG4gICAgdGhpcy5fc3RhcnRMZXZlbCA9IG51bGwgIT09IChyID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuc3RhcnRMZXZlbCkgJiYgdm9pZCAwICE9PSByID8gciA6IDMwO1xuICAgIHRoaXMuX2luaXRpYWxVbmxvY2sgPSBudWxsICE9PSAoaSA9IG51bGwgPT09IChhID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmluaXRpYWxVbmxvY2spICYmIHZvaWQgMCAhPT0gaSA/IGkgOiAyO1xuICAgIHRoaXMuX3VubG9ja0ludGVydmFsID0gbnVsbCAhPT0gKGwgPSBudWxsID09PSAobyA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby51bmxvY2tJbnRlcnZhbCkgJiYgdm9pZCAwICE9PSBsID8gbCA6IDEwO1xuICB9XG4gIF9pbml0RGF0YSgpIHtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5zZXF1ZW5jZUluZGV4KSAmJiAodGhpcy5sb2NhbERhdGEuc2VxdWVuY2VJbmRleCA9IDApO1xuICB9XG4gIHNldEN1ck1hdGVyaWFsQ2FyZCh0KSB7XG4gICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgICBlLm5vcm1hbERhdGEuc2V0Q2FyZE1hdGVyaWFsSUQodCk7XG4gICAgZS50cmF2ZWxEYXRhLnNldENhcmRNYXRlcmlhbElEKHQpO1xuICAgIGUuZGFpbHlDaGFsbGVuZ2VEYXRhLnNldENhcmRNYXRlcmlhbElEKHQpO1xuICB9XG4gIF9nZXRNYXRlcmlhbFVubG9ja09yZGVyKCkge1xuICAgIHJldHVybiBNYXRlcmlhbENhcmRCYXNlVHJhaXQuTUFURVJJQUxfQ0FSRF9MSVNULmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIDAgIT09IHQuaWQ7XG4gICAgfSkubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5pZDtcbiAgICB9KTtcbiAgfVxuICBfZ2V0VW5sb2NrZWRDb3VudCh0KSB7XG4gICAgaWYgKHQgPCB0aGlzLl9zdGFydExldmVsKSByZXR1cm4gMDtcbiAgICB2YXIgZSA9IE1hdGguZmxvb3IoKHQgLSB0aGlzLl9zdGFydExldmVsKSAvIHRoaXMuX3VubG9ja0ludGVydmFsKSxcbiAgICAgIHIgPSB0aGlzLl9pbml0aWFsVW5sb2NrICsgZSxcbiAgICAgIGEgPSB0aGlzLl9nZXRNYXRlcmlhbFVubG9ja09yZGVyKCkubGVuZ3RoO1xuICAgIHJldHVybiBNYXRoLm1pbihyLCBhKTtcbiAgfVxuICBfZ2V0VW5sb2NrZWRBdmFpbGFibGVNYXRlcmlhbHModCkge1xuICAgIHZhciBlID0gdGhpcy5fZ2V0TWF0ZXJpYWxVbmxvY2tPcmRlcigpLFxuICAgICAgciA9IHRoaXMuX2dldFVubG9ja2VkQ291bnQodCk7XG4gICAgaWYgKDAgPT09IHIpIHJldHVybiBbXTtcbiAgICB2YXIgYSA9IGUuc2xpY2UoMCwgciksXG4gICAgICBpID0gbmV3IFNldCh0aGlzLmdldEF2YWlsYWJsZU1hdGVyaWFscygpKTtcbiAgICByZXR1cm4gYS5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBpLmhhcyh0KTtcbiAgICB9KTtcbiAgfVxuICBfc3dpdGNoU2VxdWVudGlhbCh0KSB7XG4gICAgdmFyIGUsXG4gICAgICByID0gdGhpcy5fZ2V0VW5sb2NrZWRBdmFpbGFibGVNYXRlcmlhbHModCk7XG4gICAgaWYgKDAgIT09IHIubGVuZ3RoKSB7XG4gICAgICB2YXIgYSA9IG51bGwgIT09IChlID0gdGhpcy5sb2NhbERhdGEuc2VxdWVuY2VJbmRleCkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDAsXG4gICAgICAgIGkgPSByW2EgJSByLmxlbmd0aF07XG4gICAgICB0aGlzLmdldEN1ck1hdGVyaWFsQ2FyZCgpO1xuICAgICAgdGhpcy5zZXRDdXJNYXRlcmlhbENhcmQoaSk7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5zZXF1ZW5jZUluZGV4ID0gYSArIDE7XG4gICAgfVxuICB9XG4gIG9uR3NMaXN0ZW5lcl9vbk5ld0dhbWUodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5pc0NsYXNzaWNNb2RlKCkpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgYSA9IHRoaXMuZ2V0Q3VycmVudExldmVsKCk7XG4gICAgICBpZiAoYSA8IHRoaXMuX3N0YXJ0TGV2ZWwpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9nZXRVbmxvY2tlZENvdW50KGEpO1xuICAgICAgdGhpcy5fc3dpdGNoU2VxdWVudGlhbChhKTtcbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgTWF0ZXJpYWxDYXJkUHJvZ3Jlc3NVbmxvY2tUcmFpdC50cmFpdEtleSArIFwiXSDlpITnkIbmlrDmuLjmiI/kuovku7blpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==