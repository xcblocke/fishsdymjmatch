
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/JourneyCollectCellItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '276f3JH67pGU6I0+VebdDjo', 'JourneyCollectCellItem');
// subpackages/l_daily/Scripts/JourneyCollectCellItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var BaseCell_1 = require("../../../Scripts/base/ui/BaseCell");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var DailyTypes_1 = require("./DailyTypes");
var JourneyCollectCellItem = /** @class */ (function (_super) {
    __extends(JourneyCollectCellItem, _super);
    function JourneyCollectCellItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._txtJourney = null;
        _this._startCellHeight = 660;
        _this._firstCellHeight = 500;
        _this._cellHeight = 400;
        _this._itemNodes = [];
        return _this;
    }
    JourneyCollectCellItem.prototype.uiOnLoad = function () {
        var t, e, i, o, n, a = this;
        this._txtJourney = null === (t = cc.find("img_nameBg/txt_journey", this._cellUI)) || void 0 === t ? void 0 : t.getComponent(cc.Label);
        for (var l = function l(t) {
            var l = cc.find("items/item_" + t, r._cellUI);
            if (!l)
                return "continue";
            r._itemNodes[t] = {
                container: l,
                imgItem: null === (e = cc.find("img_item", l)) || void 0 === e ? void 0 : e.getComponent(cc.Sprite),
                imgGrayItem: null === (i = cc.find("img_grayItem", l)) || void 0 === i ? void 0 : i.getComponent(cc.Sprite),
                txtDay: null === (o = cc.find("txt_day", l)) || void 0 === o ? void 0 : o.getComponent(cc.Label),
                effItemLight: null === (n = cc.find("eff_itemLight", l)) || void 0 === n ? void 0 : n.getComponent(sp.Skeleton),
                btnNode: cc.find("btn_item", l)
            };
            r._itemNodes[t].effItemLight.node.active = false;
            r._itemNodes[t].btnNode && r.OnButtonClick(r._itemNodes[t].btnNode, {
                func: function () {
                    return a.onItemClick(t);
                },
                clickAudio: DailyTypes_1.EDailyAudioID.DailyDay
            });
        }, r = this, s = 0; s < 3; s++)
            l(s);
        this.initCellSize();
    };
    JourneyCollectCellItem.prototype.initCellSize = function () {
        this._cellHeight = 450;
        this._startCellHeight = 660;
        this._firstCellHeight = 500;
    };
    JourneyCollectCellItem.prototype.updateUI = function () {
        if (this._data && this._data.items) {
            if (this._data) {
                var t = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.Travel, this._data.session);
                t && (this._txtJourney.string = I18NStrings_1.default.get(t.name));
            }
            this._cellUI.active = !this._data.empty;
            this.widgetUI();
            for (var e = function e(t) {
                var e = i._data.items[t], o = i._itemNodes[t];
                if (!o)
                    return "continue";
                if (!e) {
                    o.container.active = false;
                    return "continue";
                }
                o.container.active = true;
                o.imgItem.node.active = true;
                var n = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, e.itemId), a = n && n.Scale > 0 ? 0.01 * n.Scale : 0.65;
                o.imgItem.node.scale = a;
                var r = 2000 * Math.random() + 200;
                setTimeout(function () {
                    o && cc.isValid(o.effItemLight) && CommonUtils_1.playSpineAnim(o.effItemLight, -1, "init");
                }, r);
                i.loadCollectIcon(o.imgItem, e.itemId, true);
            }, i = this, o = 0; o < 3; o++)
                e(o);
        }
    };
    JourneyCollectCellItem.prototype.widgetUI = function () {
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
    JourneyCollectCellItem.prototype.loadCollectIcon = function (t, e) {
        var i = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, e);
        i && BaseSprite_1.default.refreshWithNode(t.node, "texture/badge/" + i.Icon);
    };
    JourneyCollectCellItem.prototype.onItemClick = function (t) {
        if (this._data && this._data.items && this._data.items[t]) {
            var e = this._data.items[t];
            if (e) {
                var i = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, e.itemId);
                DGameBtnClick_1.DotGameBtnClick.dotBadge(DGameBtnClick_1.EBadgeClickType.Badge, "" + I18NStrings_1.default.getCN(i.NameKey));
                ControllerManager_1.default.getInstance().pushViewByController("DailyRewardController", {
                    itemId: e.itemId
                });
            }
        }
    };
    JourneyCollectCellItem.prototype.getCellData = function () {
        return this._data;
    };
    JourneyCollectCellItem.prefabUrl = "prefabs/daily/JourneyCollectList";
    JourneyCollectCellItem.bundleName = "mainRes";
    JourneyCollectCellItem = __decorate([
        mj.class
    ], JourneyCollectCellItem);
    return JourneyCollectCellItem;
}(BaseCell_1.default));
exports.default = JourneyCollectCellItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvSm91cm5leUNvbGxlY3RDZWxsSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQXdFO0FBQ3hFLDJFQUFzRTtBQUN0RSwwRkFBcUY7QUFDckYsNEVBQTZFO0FBQzdFLDZFQUE0RTtBQUM1RSw4REFBeUQ7QUFDekQsMkVBQXNFO0FBQ3RFLG9FQUFzRjtBQUN0RiwyQ0FBNkM7QUFFN0M7SUFBb0QsMENBQVE7SUFBNUQ7UUFBQSxxRUFzR0M7UUFyR0MsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsc0JBQWdCLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLHNCQUFnQixHQUFHLEdBQUcsQ0FBQztRQUN2QixpQkFBVyxHQUFHLEdBQUcsQ0FBQztRQUNsQixnQkFBVSxHQUFHLEVBQUUsQ0FBQzs7SUFpR2xCLENBQUM7SUE5RkMseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ1gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0SSxLQUFLLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsQ0FBQztnQkFBRSxPQUFPLFVBQVUsQ0FBQztZQUMxQixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHO2dCQUNoQixTQUFTLEVBQUUsQ0FBQztnQkFDWixPQUFPLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUNuRyxXQUFXLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUMzRyxNQUFNLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxZQUFZLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUMvRyxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxD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M0Q7a0JBdEdvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhUmVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9EYXRhUmVhZGVyJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCB7IHBsYXlTcGluZUFuaW0gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91dGlscy9Db21tb25VdGlscyc7XG5pbXBvcnQgeyBDb25maWdUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL2RhdGEvQ29uZmlnVHlwZSc7XG5pbXBvcnQgQmFzZUNlbGwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL3VpL0Jhc2VDZWxsJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCB7IERvdEdhbWVCdG5DbGljaywgRUJhZGdlQ2xpY2tUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9kb3QvREdhbWVCdG5DbGljayc7XG5pbXBvcnQgeyBFRGFpbHlBdWRpb0lEIH0gZnJvbSAnLi9EYWlseVR5cGVzJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm91cm5leUNvbGxlY3RDZWxsSXRlbSBleHRlbmRzIEJhc2VDZWxsIHtcbiAgX3R4dEpvdXJuZXkgPSBudWxsO1xuICBfc3RhcnRDZWxsSGVpZ2h0ID0gNjYwO1xuICBfZmlyc3RDZWxsSGVpZ2h0ID0gNTAwO1xuICBfY2VsbEhlaWdodCA9IDQwMDtcbiAgX2l0ZW1Ob2RlcyA9IFtdO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2RhaWx5L0pvdXJuZXlDb2xsZWN0TGlzdFwiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IFwibWFpblJlc1wiO1xuICB1aU9uTG9hZCgpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUsXG4gICAgICBpLFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICBhID0gdGhpcztcbiAgICB0aGlzLl90eHRKb3VybmV5ID0gbnVsbCA9PT0gKHQgPSBjYy5maW5kKFwiaW1nX25hbWVCZy90eHRfam91cm5leVwiLCB0aGlzLl9jZWxsVUkpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgZm9yICh2YXIgbCA9IGZ1bmN0aW9uIGwodCkge1xuICAgICAgICB2YXIgbCA9IGNjLmZpbmQoXCJpdGVtcy9pdGVtX1wiICsgdCwgci5fY2VsbFVJKTtcbiAgICAgICAgaWYgKCFsKSByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICByLl9pdGVtTm9kZXNbdF0gPSB7XG4gICAgICAgICAgY29udGFpbmVyOiBsLFxuICAgICAgICAgIGltZ0l0ZW06IG51bGwgPT09IChlID0gY2MuZmluZChcImltZ19pdGVtXCIsIGwpKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLFxuICAgICAgICAgIGltZ0dyYXlJdGVtOiBudWxsID09PSAoaSA9IGNjLmZpbmQoXCJpbWdfZ3JheUl0ZW1cIiwgbCkpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksXG4gICAgICAgICAgdHh0RGF5OiBudWxsID09PSAobyA9IGNjLmZpbmQoXCJ0eHRfZGF5XCIsIGwpKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmdldENvbXBvbmVudChjYy5MYWJlbCksXG4gICAgICAgICAgZWZmSXRlbUxpZ2h0OiBudWxsID09PSAobiA9IGNjLmZpbmQoXCJlZmZfaXRlbUxpZ2h0XCIsIGwpKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksXG4gICAgICAgICAgYnRuTm9kZTogY2MuZmluZChcImJ0bl9pdGVtXCIsIGwpXG4gICAgICAgIH07XG4gICAgICAgIHIuX2l0ZW1Ob2Rlc1t0XS5lZmZJdGVtTGlnaHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgci5faXRlbU5vZGVzW3RdLmJ0bk5vZGUgJiYgci5PbkJ1dHRvbkNsaWNrKHIuX2l0ZW1Ob2Rlc1t0XS5idG5Ob2RlLCB7XG4gICAgICAgICAgZnVuYzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGEub25JdGVtQ2xpY2sodCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGlja0F1ZGlvOiBFRGFpbHlBdWRpb0lELkRhaWx5RGF5XG4gICAgICAgIH0pO1xuICAgICAgfSwgciA9IHRoaXMsIHMgPSAwOyBzIDwgMzsgcysrKSBsKHMpO1xuICAgIHRoaXMuaW5pdENlbGxTaXplKCk7XG4gIH1cbiAgaW5pdENlbGxTaXplKCkge1xuICAgIHRoaXMuX2NlbGxIZWlnaHQgPSA0NTA7XG4gICAgdGhpcy5fc3RhcnRDZWxsSGVpZ2h0ID0gNjYwO1xuICAgIHRoaXMuX2ZpcnN0Q2VsbEhlaWdodCA9IDUwMDtcbiAgfVxuICB1cGRhdGVVSSgpIHtcbiAgICBpZiAodGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLml0ZW1zKSB7XG4gICAgICBpZiAodGhpcy5fZGF0YSkge1xuICAgICAgICB2YXIgdCA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5UcmF2ZWwsIHRoaXMuX2RhdGEuc2Vzc2lvbik7XG4gICAgICAgIHQgJiYgKHRoaXMuX3R4dEpvdXJuZXkuc3RyaW5nID0gSTE4TlN0cmluZ3MuZ2V0KHQubmFtZSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2VsbFVJLmFjdGl2ZSA9ICF0aGlzLl9kYXRhLmVtcHR5O1xuICAgICAgdGhpcy53aWRnZXRVSSgpO1xuICAgICAgZm9yICh2YXIgZSA9IGZ1bmN0aW9uIGUodCkge1xuICAgICAgICAgIHZhciBlID0gaS5fZGF0YS5pdGVtc1t0XSxcbiAgICAgICAgICAgIG8gPSBpLl9pdGVtTm9kZXNbdF07XG4gICAgICAgICAgaWYgKCFvKSByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgIGlmICghZSkge1xuICAgICAgICAgICAgby5jb250YWluZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvLmNvbnRhaW5lci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIG8uaW1nSXRlbS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgdmFyIG4gPSBEYXRhUmVhZGVyLmdldEJ5S2V5KENvbmZpZ1R5cGUuaXRlbV9jb25maWcsIGUuaXRlbUlkKSxcbiAgICAgICAgICAgIGEgPSBuICYmIG4uU2NhbGUgPiAwID8gMC4wMSAqIG4uU2NhbGUgOiAwLjY1O1xuICAgICAgICAgIG8uaW1nSXRlbS5ub2RlLnNjYWxlID0gYTtcbiAgICAgICAgICB2YXIgciA9IDIwMDAgKiBNYXRoLnJhbmRvbSgpICsgMjAwO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbyAmJiBjYy5pc1ZhbGlkKG8uZWZmSXRlbUxpZ2h0KSAmJiBwbGF5U3BpbmVBbmltKG8uZWZmSXRlbUxpZ2h0LCAtMSwgXCJpbml0XCIpO1xuICAgICAgICAgIH0sIHIpO1xuICAgICAgICAgIGkubG9hZENvbGxlY3RJY29uKG8uaW1nSXRlbSwgZS5pdGVtSWQsIHRydWUpO1xuICAgICAgICB9LCBpID0gdGhpcywgbyA9IDA7IG8gPCAzOyBvKyspIGUobyk7XG4gICAgfVxuICB9XG4gIHdpZGdldFVJKCkge1xuICAgIGlmICh0aGlzLl9kYXRhLnN0YXJ0KSB7XG4gICAgICB0aGlzLl9jZWxsVUkuaGVpZ2h0ID0gdGhpcy5fc3RhcnRDZWxsSGVpZ2h0O1xuICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IHRoaXMuX3N0YXJ0Q2VsbEhlaWdodDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2RhdGEuZmlyc3QpIHtcbiAgICAgIHRoaXMuX2NlbGxVSS5oZWlnaHQgPSB0aGlzLl9maXJzdENlbGxIZWlnaHQ7XG4gICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gdGhpcy5fZmlyc3RDZWxsSGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jZWxsVUkuaGVpZ2h0ID0gdGhpcy5fY2VsbEhlaWdodDtcbiAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSB0aGlzLl9jZWxsSGVpZ2h0O1xuICAgIH1cbiAgfVxuICBsb2FkQ29sbGVjdEljb24odCwgZSkge1xuICAgIHZhciBpID0gRGF0YVJlYWRlci5nZXRCeUtleShDb25maWdUeXBlLml0ZW1fY29uZmlnLCBlKTtcbiAgICBpICYmIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHQubm9kZSwgXCJ0ZXh0dXJlL2JhZGdlL1wiICsgaS5JY29uKTtcbiAgfVxuICBvbkl0ZW1DbGljayh0KSB7XG4gICAgaWYgKHRoaXMuX2RhdGEgJiYgdGhpcy5fZGF0YS5pdGVtcyAmJiB0aGlzLl9kYXRhLml0ZW1zW3RdKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2RhdGEuaXRlbXNbdF07XG4gICAgICBpZiAoZSkge1xuICAgICAgICB2YXIgaSA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5pdGVtX2NvbmZpZywgZS5pdGVtSWQpO1xuICAgICAgICBEb3RHYW1lQnRuQ2xpY2suZG90QmFkZ2UoRUJhZGdlQ2xpY2tUeXBlLkJhZGdlLCBcIlwiICsgSTE4TlN0cmluZ3MuZ2V0Q04oaS5OYW1lS2V5KSk7XG4gICAgICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJEYWlseVJld2FyZENvbnRyb2xsZXJcIiwge1xuICAgICAgICAgIGl0ZW1JZDogZS5pdGVtSWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldENlbGxEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG59Il19