
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/DailyCollectCellItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d6438ECNJAWp3zykvTO2mQ', 'DailyCollectCellItem');
// subpackages/l_daily/Scripts/DailyCollectCellItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var BaseCell_1 = require("../../../Scripts/base/ui/BaseCell");
var DailyTypes_1 = require("./DailyTypes");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var BadgeMode_1 = require("../../../Scripts/gamePlay/badge/mode/BadgeMode");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var DailyModel_1 = require("./DailyModel");
var DailyCollectCellItem = /** @class */ (function (_super) {
    __extends(DailyCollectCellItem, _super);
    function DailyCollectCellItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._txtTime = null;
        _this._startCellHeight = 660;
        _this._firstCellHeight = 500;
        _this._cellHeight = 400;
        _this._itemNodes = [];
        return _this;
    }
    DailyCollectCellItem.prototype.uiOnLoad = function () {
        var t, e, i, o, n, a, l = this;
        this._txtTime = null === (t = cc.find("txt_time", this._cellUI)) || void 0 === t ? void 0 : t.getComponent(cc.Label);
        for (var r = function r(t) {
            var r = cc.find("items/item_" + t, s._cellUI);
            if (!r)
                return "continue";
            s._itemNodes[t] = {
                container: r,
                imgBg: null === (e = cc.find("img_bg", r)) || void 0 === e ? void 0 : e.getComponent(cc.Sprite),
                imgItem: null === (i = cc.find("img_item", r)) || void 0 === i ? void 0 : i.getComponent(cc.Sprite),
                imgGrayItem: null === (o = cc.find("img_grayItem", r)) || void 0 === o ? void 0 : o.getComponent(cc.Sprite),
                txtDay: null === (n = cc.find("img_bg/txt_day", r)) || void 0 === n ? void 0 : n.getComponent(cc.Label),
                effItemLight: null === (a = cc.find("eff_itemLight", r)) || void 0 === a ? void 0 : a.getComponent(sp.Skeleton),
                btnNode: cc.find("btn_item", r)
            };
            s._itemNodes[t].btnNode && s.OnButtonClick(s._itemNodes[t].btnNode, {
                func: function () {
                    return l.onItemClick(t);
                },
                clickAudio: DailyTypes_1.EDailyAudioID.DailyDay
            });
        }, s = this, d = 0; d < 3; d++)
            r(d);
        this.initCellSize();
    };
    DailyCollectCellItem.prototype.initCellSize = function () {
        this._cellHeight = 450;
        this._startCellHeight = 660;
        this._firstCellHeight = 500;
    };
    DailyCollectCellItem.prototype.updateUI = function () {
        if (this._data && this._data.items) {
            if ((this._data.first || this._data.start) && this._data.items[0]) {
                var t = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.daily_challenge, this._data.items[0].id);
                t && (this._txtTime.string = t.Year.toString());
            }
            else
                this._txtTime.string = "";
            this._cellUI.active = !this._data.empty;
            this.widgetUI();
            for (var e = 0; e < 3; e++) {
                var i = this._data.items[e], o = this._itemNodes[e];
                if (o)
                    if (i) {
                        o.container.active = true;
                        i.monthTxt && I18NStrings_1.default.setText(o.txtDay.node, i.monthTxt[0], i.monthTxt[1]);
                        o.imgItem.node.active = i.status === DailyTypes_1.DailyStatus.Completed;
                        o.imgGrayItem.node.active = i.status != DailyTypes_1.DailyStatus.Completed;
                        o.effItemLight.node.active = i.status === DailyTypes_1.DailyStatus.Completed;
                        var n = 2000 * Math.random() + 200;
                        this.playEffItemLight(o, n);
                        if (i.status === DailyTypes_1.DailyStatus.Completed) {
                            this.loadCollectIcon(o.imgItem, i.rewardItemId, true);
                        }
                        else {
                            this.loadCollectIcon(o.imgGrayItem, i.rewardItemId, false);
                        }
                    }
                    else
                        o.container.active = false;
            }
        }
    };
    DailyCollectCellItem.prototype.playEffItemLight = function (t, e) {
        setTimeout(function () {
            t && cc.isValid(t.effItemLight) && t.effItemLight.node.active && CommonUtils_1.playSpineAnim(t.effItemLight, -1, "init");
        }, e);
    };
    DailyCollectCellItem.prototype.widgetUI = function () {
        if (this._data.start) {
            this._cellUI.height = this._startCellHeight;
            this.node.height = this._startCellHeight;
        }
        else if (this._data.first) {
            this._cellUI.height = this._firstCellHeight;
            this.node.height = this._firstCellHeight;
        }
        else {
            this._cellUI.height = this._cellHeight;
            this.node.height = this._cellHeight;
        }
    };
    DailyCollectCellItem.prototype.loadCollectIcon = function (t, e, i) {
        if (DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, e)) {
            var o = DailyModel_1.default.getInstance().getItemIconUrl(e), n = i ? o : o + "_gray";
            BaseSprite_1.default.refreshWithNode(t.node, n);
        }
    };
    DailyCollectCellItem.prototype.onItemClick = function (t) {
        if (this._data && this._data.items && this._data.items[t]) {
            var e = this._data.items[t], i = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.daily_challenge, e.id);
            if (e.status === DailyTypes_1.DailyStatus.Completed || this._data.type != BadgeMode_1.BadgeType.Daily) {
                DGameBtnClick_1.DotGameBtnClick.dotBadge(DGameBtnClick_1.EBadgeClickType.RewardHas, i.Year + "年" + i.Month + "月");
                ControllerManager_1.default.getInstance().pushViewByController("DailyRewardController", {
                    itemId: e.rewardItemId,
                    dailyId: e.id
                });
            }
            else {
                DGameBtnClick_1.DotGameBtnClick.dotBadge(DGameBtnClick_1.EBadgeClickType.RewardNot, i.Year + "年" + i.Month + "月");
                ControllerManager_1.default.getInstance().pushViewByController("DailyController", {
                    showReward: true,
                    isShowAction: false,
                    success: false,
                    isReuse: true,
                    specifiedDate: true,
                    isReplace: true,
                    id: e.id
                });
            }
        }
    };
    DailyCollectCellItem.prototype.getCellData = function () {
        return this._data;
    };
    DailyCollectCellItem.prefabUrl = "prefabs/daily/DailyCollectList";
    DailyCollectCellItem.bundleName = "mainRes";
    DailyCollectCellItem = __decorate([
        mj.class
    ], DailyCollectCellItem);
    return DailyCollectCellItem;
}(BaseCell_1.default));
exports.default = DailyCollectCellItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvRGFpbHlDb2xsZWN0Q2VsbEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZFQUE0RTtBQUM1RSx5RUFBd0U7QUFDeEUsOERBQXlEO0FBQ3pELDJDQUEwRDtBQUMxRCwwRkFBcUY7QUFDckYsMkVBQXNFO0FBQ3RFLDRFQUEyRTtBQUMzRSw0RUFBNkU7QUFDN0UsMkVBQXNFO0FBQ3RFLG9FQUFzRjtBQUN0RiwyQ0FBc0M7QUFFdEM7SUFBa0Qsd0NBQVE7SUFBMUQ7UUFBQSxxRUEwSEM7UUF6SEMsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixzQkFBZ0IsR0FBRyxHQUFHLENBQUM7UUFDdkIsc0JBQWdCLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLGlCQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLGdCQUFVLEdBQUcsRUFBRSxDQUFDOztJQXFIbEIsQ0FBQztJQWxIQyx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckgsS0FBSyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLENBQUM7Z0JBQUUsT0FBTyxVQUFVLENBQUM7WUFDMUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRztnQkFDaEIsU0FBUyxFQUFFLENBQUM7Z0JBQ1osS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnQkFDL0YsT0FBTyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnQkFDbkcsV0FBVyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnQkFDM0csTUFBTSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUN2RyxZQUFZLEVBQUUsSUFB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aUJBQ1QsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtJQUNILENBQUM7SUFDRCwwQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFuSE0sOEJBQVMsR0FBRyxnQ0FBZ0MsQ0FBQztJQUM3QywrQkFBVSxHQUFHLFNBQVMsQ0FBQztJQVBYLG9CQUFvQjtRQUR4QyxFQUFFLENBQUMsS0FBSztPQUNZLG9CQUFvQixDQTBIeEM7SUFBRCwyQkFBQztDQTFIRCxBQTBIQyxDQTFIaUQsa0JBQVEsR0EwSHpEO2tCQTFIb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xuaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgQmFzZUNlbGwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL3VpL0Jhc2VDZWxsJztcbmltcG9ydCB7IEVEYWlseUF1ZGlvSUQsIERhaWx5U3RhdHVzIH0gZnJvbSAnLi9EYWlseVR5cGVzJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCB7IEJhZGdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFkZ2UvbW9kZS9CYWRnZU1vZGUnO1xuaW1wb3J0IHsgcGxheVNwaW5lQW5pbSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3V0aWxzL0NvbW1vblV0aWxzJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCB7IERvdEdhbWVCdG5DbGljaywgRUJhZGdlQ2xpY2tUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9kb3QvREdhbWVCdG5DbGljayc7XG5pbXBvcnQgRGFpbHlNb2RlbCBmcm9tICcuL0RhaWx5TW9kZWwnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYWlseUNvbGxlY3RDZWxsSXRlbSBleHRlbmRzIEJhc2VDZWxsIHtcbiAgX3R4dFRpbWUgPSBudWxsO1xuICBfc3RhcnRDZWxsSGVpZ2h0ID0gNjYwO1xuICBfZmlyc3RDZWxsSGVpZ2h0ID0gNTAwO1xuICBfY2VsbEhlaWdodCA9IDQwMDtcbiAgX2l0ZW1Ob2RlcyA9IFtdO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2RhaWx5L0RhaWx5Q29sbGVjdExpc3RcIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcIm1haW5SZXNcIjtcbiAgdWlPbkxvYWQoKSB7XG4gICAgdmFyIHQsXG4gICAgICBlLFxuICAgICAgaSxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgYSxcbiAgICAgIGwgPSB0aGlzO1xuICAgIHRoaXMuX3R4dFRpbWUgPSBudWxsID09PSAodCA9IGNjLmZpbmQoXCJ0eHRfdGltZVwiLCB0aGlzLl9jZWxsVUkpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgZm9yICh2YXIgciA9IGZ1bmN0aW9uIHIodCkge1xuICAgICAgICB2YXIgciA9IGNjLmZpbmQoXCJpdGVtcy9pdGVtX1wiICsgdCwgcy5fY2VsbFVJKTtcbiAgICAgICAgaWYgKCFyKSByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICBzLl9pdGVtTm9kZXNbdF0gPSB7XG4gICAgICAgICAgY29udGFpbmVyOiByLFxuICAgICAgICAgIGltZ0JnOiBudWxsID09PSAoZSA9IGNjLmZpbmQoXCJpbWdfYmdcIiwgcikpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksXG4gICAgICAgICAgaW1nSXRlbTogbnVsbCA9PT0gKGkgPSBjYy5maW5kKFwiaW1nX2l0ZW1cIiwgcikpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksXG4gICAgICAgICAgaW1nR3JheUl0ZW06IG51bGwgPT09IChvID0gY2MuZmluZChcImltZ19ncmF5SXRlbVwiLCByKSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSxcbiAgICAgICAgICB0eHREYXk6IG51bGwgPT09IChuID0gY2MuZmluZChcImltZ19iZy90eHRfZGF5XCIsIHIpKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmdldENvbXBvbmVudChjYy5MYWJlbCksXG4gICAgICAgICAgZWZmSXRlbUxpZ2h0OiBudWxsID09PSAoYSA9IGNjLmZpbmQoXCJlZmZfaXRlbUxpZ2h0XCIsIHIpKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksXG4gICAgICAgICAgYnRuTm9kZTogY2MuZmluZChcImJ0bl9pdGVtXCIsIHIpXG4gICAgICAgIH07XG4gICAgICAgIHMuX2l0ZW1Ob2Rlc1t0XS5idG5Ob2RlICYmIHMuT25CdXR0b25DbGljayhzLl9pdGVtTm9kZXNbdF0uYnRuTm9kZSwge1xuICAgICAgICAgIGZ1bmM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBsLm9uSXRlbUNsaWNrKHQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xpY2tBdWRpbzogRURhaWx5QXVkaW9JRC5EYWlseURheVxuICAgICAgICB9KTtcbiAgICAgIH0sIHMgPSB0aGlzLCBkID0gMDsgZCA8IDM7IGQrKykgcihkKTtcbiAgICB0aGlzLmluaXRDZWxsU2l6ZSgpO1xuICB9XG4gIGluaXRDZWxsU2l6ZSgpIHtcbiAgICB0aGlzLl9jZWxsSGVpZ2h0ID0gNDUwO1xuICAgIHRoaXMuX3N0YXJ0Q2VsbEhlaWdodCA9IDY2MDtcbiAgICB0aGlzLl9maXJzdENlbGxIZWlnaHQgPSA1MDA7XG4gIH1cbiAgdXBkYXRlVUkoKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEgJiYgdGhpcy5fZGF0YS5pdGVtcykge1xuICAgICAgaWYgKCh0aGlzLl9kYXRhLmZpcnN0IHx8IHRoaXMuX2RhdGEuc3RhcnQpICYmIHRoaXMuX2RhdGEuaXRlbXNbMF0pIHtcbiAgICAgICAgdmFyIHQgPSBEYXRhUmVhZGVyLmdldEJ5S2V5KENvbmZpZ1R5cGUuZGFpbHlfY2hhbGxlbmdlLCB0aGlzLl9kYXRhLml0ZW1zWzBdLmlkKTtcbiAgICAgICAgdCAmJiAodGhpcy5fdHh0VGltZS5zdHJpbmcgPSB0LlllYXIudG9TdHJpbmcoKSk7XG4gICAgICB9IGVsc2UgdGhpcy5fdHh0VGltZS5zdHJpbmcgPSBcIlwiO1xuICAgICAgdGhpcy5fY2VsbFVJLmFjdGl2ZSA9ICF0aGlzLl9kYXRhLmVtcHR5O1xuICAgICAgdGhpcy53aWRnZXRVSSgpO1xuICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCAzOyBlKyspIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9kYXRhLml0ZW1zW2VdLFxuICAgICAgICAgIG8gPSB0aGlzLl9pdGVtTm9kZXNbZV07XG4gICAgICAgIGlmIChvKSBpZiAoaSkge1xuICAgICAgICAgIG8uY29udGFpbmVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgaS5tb250aFR4dCAmJiBJMThOU3RyaW5ncy5zZXRUZXh0KG8udHh0RGF5Lm5vZGUsIGkubW9udGhUeHRbMF0sIGkubW9udGhUeHRbMV0pO1xuICAgICAgICAgIG8uaW1nSXRlbS5ub2RlLmFjdGl2ZSA9IGkuc3RhdHVzID09PSBEYWlseVN0YXR1cy5Db21wbGV0ZWQ7XG4gICAgICAgICAgby5pbWdHcmF5SXRlbS5ub2RlLmFjdGl2ZSA9IGkuc3RhdHVzICE9IERhaWx5U3RhdHVzLkNvbXBsZXRlZDtcbiAgICAgICAgICBvLmVmZkl0ZW1MaWdodC5ub2RlLmFjdGl2ZSA9IGkuc3RhdHVzID09PSBEYWlseVN0YXR1cy5Db21wbGV0ZWQ7XG4gICAgICAgICAgdmFyIG4gPSAyMDAwICogTWF0aC5yYW5kb20oKSArIDIwMDtcbiAgICAgICAgICB0aGlzLnBsYXlFZmZJdGVtTGlnaHQobywgbik7XG4gICAgICAgICAgaWYgKGkuc3RhdHVzID09PSBEYWlseVN0YXR1cy5Db21wbGV0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZENvbGxlY3RJY29uKG8uaW1nSXRlbSwgaS5yZXdhcmRJdGVtSWQsIHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRDb2xsZWN0SWNvbihvLmltZ0dyYXlJdGVtLCBpLnJld2FyZEl0ZW1JZCwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIG8uY29udGFpbmVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwbGF5RWZmSXRlbUxpZ2h0KHQsIGUpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHQgJiYgY2MuaXNWYWxpZCh0LmVmZkl0ZW1MaWdodCkgJiYgdC5lZmZJdGVtTGlnaHQubm9kZS5hY3RpdmUgJiYgcGxheVNwaW5lQW5pbSh0LmVmZkl0ZW1MaWdodCwgLTEsIFwiaW5pdFwiKTtcbiAgICB9LCBlKTtcbiAgfVxuICB3aWRnZXRVSSgpIHtcbiAgICBpZiAodGhpcy5fZGF0YS5zdGFydCkge1xuICAgICAgdGhpcy5fY2VsbFVJLmhlaWdodCA9IHRoaXMuX3N0YXJ0Q2VsbEhlaWdodDtcbiAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSB0aGlzLl9zdGFydENlbGxIZWlnaHQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9kYXRhLmZpcnN0KSB7XG4gICAgICB0aGlzLl9jZWxsVUkuaGVpZ2h0ID0gdGhpcy5fZmlyc3RDZWxsSGVpZ2h0O1xuICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IHRoaXMuX2ZpcnN0Q2VsbEhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2VsbFVJLmhlaWdodCA9IHRoaXMuX2NlbGxIZWlnaHQ7XG4gICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gdGhpcy5fY2VsbEhlaWdodDtcbiAgICB9XG4gIH1cbiAgbG9hZENvbGxlY3RJY29uKHQsIGUsIGkpIHtcbiAgICBpZiAoRGF0YVJlYWRlci5nZXRCeUtleShDb25maWdUeXBlLml0ZW1fY29uZmlnLCBlKSkge1xuICAgICAgdmFyIG8gPSBEYWlseU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0SXRlbUljb25VcmwoZSksXG4gICAgICAgIG4gPSBpID8gbyA6IG8gKyBcIl9ncmF5XCI7XG4gICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh0Lm5vZGUsIG4pO1xuICAgIH1cbiAgfVxuICBvbkl0ZW1DbGljayh0KSB7XG4gICAgaWYgKHRoaXMuX2RhdGEgJiYgdGhpcy5fZGF0YS5pdGVtcyAmJiB0aGlzLl9kYXRhLml0ZW1zW3RdKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2RhdGEuaXRlbXNbdF0sXG4gICAgICAgIGkgPSBEYXRhUmVhZGVyLmdldEJ5S2V5KENvbmZpZ1R5cGUuZGFpbHlfY2hhbGxlbmdlLCBlLmlkKTtcbiAgICAgIGlmIChlLnN0YXR1cyA9PT0gRGFpbHlTdGF0dXMuQ29tcGxldGVkIHx8IHRoaXMuX2RhdGEudHlwZSAhPSBCYWRnZVR5cGUuRGFpbHkpIHtcbiAgICAgICAgRG90R2FtZUJ0bkNsaWNrLmRvdEJhZGdlKEVCYWRnZUNsaWNrVHlwZS5SZXdhcmRIYXMsIGkuWWVhciArIFwi5bm0XCIgKyBpLk1vbnRoICsgXCLmnIhcIik7XG4gICAgICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJEYWlseVJld2FyZENvbnRyb2xsZXJcIiwge1xuICAgICAgICAgIGl0ZW1JZDogZS5yZXdhcmRJdGVtSWQsXG4gICAgICAgICAgZGFpbHlJZDogZS5pZFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIERvdEdhbWVCdG5DbGljay5kb3RCYWRnZShFQmFkZ2VDbGlja1R5cGUuUmV3YXJkTm90LCBpLlllYXIgKyBcIuW5tFwiICsgaS5Nb250aCArIFwi5pyIXCIpO1xuICAgICAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiRGFpbHlDb250cm9sbGVyXCIsIHtcbiAgICAgICAgICBzaG93UmV3YXJkOiB0cnVlLFxuICAgICAgICAgIGlzU2hvd0FjdGlvbjogZmFsc2UsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgaXNSZXVzZTogdHJ1ZSxcbiAgICAgICAgICBzcGVjaWZpZWREYXRlOiB0cnVlLFxuICAgICAgICAgIGlzUmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICBpZDogZS5pZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0Q2VsbERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbn0iXX0=