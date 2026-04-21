
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_propUsedForceInterAd/Scripts/PropUsedForceInterAdTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93908PnwLVM555zwE2Vk+V5', 'PropUsedForceInterAdTrait');
// subpackages/l_propUsedForceInterAd/Scripts/PropUsedForceInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var PropUsedForceInterAdTrait = /** @class */ (function (_super) {
    __extends(PropUsedForceInterAdTrait, _super);
    function PropUsedForceInterAdTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropUsedForceInterAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    PropUsedForceInterAdTrait.prototype.onAdMgr_chkInterAd = function (e, t) {
        var r;
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if ("result_show" === (null === (r = e.args) || void 0 === r ? void 0 : r[2])) {
                if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal) {
                    var n = mj.getClassByName("InterAdStartLevelTrait");
                    if (n && n.getInstance()) {
                        var o = n.getInstance();
                        if (true === o.eventEnabled) {
                            var a = o.getStartLevel();
                            if (UserModel_1.default.getInstance().normalData.getLevelId() <= a) {
                                var i = UserModel_1.default.getInstance().normalData, u = i.localData.usedShuffle || 0, p = i.localData.usedHitTips || 0;
                                if (u > 0 || p > 0) {
                                    t({
                                        returnVal: true,
                                        isBreak: true,
                                        returnType: TraitManager_1.TraitCallbackReturnType.return
                                    });
                                }
                                else {
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
    PropUsedForceInterAdTrait.traitKey = "PropUsedForceInterAd";
    PropUsedForceInterAdTrait = __decorate([
        mj.trait,
        mj.class("PropUsedForceInterAdTrait")
    ], PropUsedForceInterAdTrait);
    return PropUsedForceInterAdTrait;
}(Trait_1.default));
exports.default = PropUsedForceInterAdTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Byb3BVc2VkRm9yY2VJbnRlckFkL1NjcmlwdHMvUHJvcFVzZWRGb3JjZUludGVyQWRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RixzRUFBaUU7QUFDakUsd0ZBQW9GO0FBR3BGO0lBQXVELDZDQUFLO0lBQTVEOztJQW1DQSxDQUFDO0lBakNDLDBDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxzREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLE9BQU8sRUFBRTtZQUN2RSxJQUFJLGFBQWEsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzdFLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsTUFBTSxFQUFFO29CQUN0RSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLENBQUM7b0JBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTt3QkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUN4QixJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsWUFBWSxFQUFFOzRCQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7NEJBQzFCLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFO2dDQUN4RCxJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxJQUFJLENBQUMsRUFDaEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztnQ0FDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0NBQ2xCLENBQUMsQ0FBQzt3Q0FDQSxTQUFTLEVBQUUsSUFBSTt3Q0FDZixPQUFPLEVBQUUsSUFBSTt3Q0FDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtxQ0FDM0MsQ0FBQyxDQUFDO2lDQUNKO3FDQUFNO29DQUNMLENBQUMsRUFBRSxDQUFDO2lDQUNMOzZCQUNGOztnQ0FBTSxDQUFDLEVBQUUsQ0FBQzt5QkFDWjs7NEJBQU0sQ0FBQyxFQUFFLENBQUM7cUJBQ1o7O3dCQUFNLENBQUMsRUFBRSxDQUFDO2lCQUNaOztvQkFBTSxDQUFDLEVBQUUsQ0FBQzthQUNaOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQWpDTSxrQ0FBUSxHQUFHLHNCQUFzQixDQUFDO0lBRHRCLHlCQUF5QjtRQUY3QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUM7T0FDakIseUJBQXlCLENBbUM3QztJQUFELGdDQUFDO0NBbkNELEFBbUNDLENBbkNzRCxlQUFLLEdBbUMzRDtrQkFuQ29CLHlCQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlByb3BVc2VkRm9yY2VJbnRlckFkVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BVc2VkRm9yY2VJbnRlckFkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUHJvcFVzZWRGb3JjZUludGVyQWRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uQWRNZ3JfY2hrSW50ZXJBZChlLCB0KSB7XG4gICAgdmFyIHI7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIGlmIChcInJlc3VsdF9zaG93XCIgPT09IChudWxsID09PSAociA9IGUuYXJncykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogclsyXSkpIHtcbiAgICAgICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLk5vcm1hbCkge1xuICAgICAgICAgIHZhciBuID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJJbnRlckFkU3RhcnRMZXZlbFRyYWl0XCIpO1xuICAgICAgICAgIGlmIChuICYmIG4uZ2V0SW5zdGFuY2UoKSkge1xuICAgICAgICAgICAgdmFyIG8gPSBuLmdldEluc3RhbmNlKCk7XG4gICAgICAgICAgICBpZiAodHJ1ZSA9PT0gby5ldmVudEVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgdmFyIGEgPSBvLmdldFN0YXJ0TGV2ZWwoKTtcbiAgICAgICAgICAgICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLm5vcm1hbERhdGEuZ2V0TGV2ZWxJZCgpIDw9IGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLm5vcm1hbERhdGEsXG4gICAgICAgICAgICAgICAgICB1ID0gaS5sb2NhbERhdGEudXNlZFNodWZmbGUgfHwgMCxcbiAgICAgICAgICAgICAgICAgIHAgPSBpLmxvY2FsRGF0YS51c2VkSGl0VGlwcyB8fCAwO1xuICAgICAgICAgICAgICAgIGlmICh1ID4gMCB8fCBwID4gMCkge1xuICAgICAgICAgICAgICAgICAgdCh7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB0KCk7XG4gICAgICAgICAgfSBlbHNlIHQoKTtcbiAgICAgICAgfSBlbHNlIHQoKTtcbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxufSJdfQ==