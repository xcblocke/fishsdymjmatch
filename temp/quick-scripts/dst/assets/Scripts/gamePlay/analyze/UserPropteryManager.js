
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/analyze/UserPropteryManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79884CwS31KtKN7he7jQG/V', 'UserPropteryManager');
// Scripts/gamePlay/analyze/UserPropteryManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SingletonFactory_1 = require("../../framework/utils/SingletonFactory");
var AdModel_1 = require("../base/ad/AdModel");
var LoginModel_1 = require("../login/model/LoginModel");
var UserModel_1 = require("../user/UserModel");
var AnalyzeTypes_1 = require("./AnalyzeTypes");
var ScreenUtils_1 = require("./ScreenUtils");
var UserPropteryManager = /** @class */ (function () {
    function UserPropteryManager() {
    }
    UserPropteryManager.getInstance = function () {
        return SingletonFactory_1.SingletonFactory.getInstance(this);
    };
    UserPropteryManager.prototype.report = function (e, t) {
        var _o = {};
        _o[e] = t;
        mj.sdk.userDataUpload(_o);
    };
    UserPropteryManager.prototype.sendScreenPhysicalSize = function () { };
    UserPropteryManager.prototype.startupReport = function () {
        var e, t = LoginModel_1.default.getInstance(), o = {};
        o[AnalyzeTypes_1.EUserPropertyType.GameVersion] = t.appVersion;
        o[AnalyzeTypes_1.EUserPropertyType.ResVersion] = t.version;
        o[AnalyzeTypes_1.EUserPropertyType.Version] = t.version;
        o[AnalyzeTypes_1.EUserPropertyType.Language] = t.language;
        var n = t.userWayArr(), c = [];
        for (var u in n)
            u.length > 0 && n[u].length > 0 && c.push(u + ":" + n[u].join("|"));
        o[AnalyzeTypes_1.EUserPropertyType.CurrentWayNum] = t.curWayNum();
        o[AnalyzeTypes_1.EUserPropertyType.UserWayArr] = c;
        o[AnalyzeTypes_1.EUserPropertyType.gameNumAll] = UserModel_1.default.getInstance().getTotalGames();
        o[AnalyzeTypes_1.EUserPropertyType.exptPeriod] = t.exptPeriod();
        o[AnalyzeTypes_1.EUserPropertyType.physicsWidth] = ScreenUtils_1.default.getPhysicalWidthInInches();
        o[AnalyzeTypes_1.EUserPropertyType.physicsHeight] = ScreenUtils_1.default.getPhysicalHeightInInches();
        o[AnalyzeTypes_1.EUserPropertyType.UserAbtestResult] = null === (e = null == t ? void 0 : t.serverPlanData) || void 0 === e ? void 0 : e.hits;
        AdModel_1.default.getInstance().startupReport(o);
        mj.sdk.userDataUpload(o);
    };
    return UserPropteryManager;
}());
exports.default = UserPropteryManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2FuYWx5emUvVXNlclByb3B0ZXJ5TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQTBFO0FBQzFFLDhDQUF5QztBQUN6Qyx3REFBbUQ7QUFDbkQsK0NBQTBDO0FBQzFDLCtDQUFtRDtBQUNuRCw2Q0FBd0M7QUFDeEM7SUFBQTtJQStCQSxDQUFDO0lBOUJRLCtCQUFXLEdBQWxCO1FBQ0UsT0FBTyxtQ0FBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELG9DQUFNLEdBQU4sVUFBTyxDQUFDLEVBQUUsQ0FBQztRQUNULElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQXNCLEdBQXRCLGNBQTBCLENBQUM7SUFDM0IsMkNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxvQkFBVSxDQUFDLFdBQVcsRUFBRSxFQUM1QixDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLGdDQUFpQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDaEQsQ0FBQyxDQUFDLGdDQUFpQixDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDNUMsQ0FBQyxDQUFDLGdDQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDekMsQ0FBQyxDQUFDLGdDQUFpQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUNwQixDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1QsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyRixDQUFDLENBQUMsZ0NBQWlCLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25ELENBQUMsQ0FBQyxnQ0FBaUIsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLGdDQUFpQixDQUFDLFVBQVUsQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUUsQ0FBQyxDQUFDLGdDQUFpQixDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNqRCxDQUFDLENBQUMsZ0NBQWlCLENBQUMsWUFBWSxDQUFDLEdBQUcscUJBQVcsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzNFLENBQUMsQ0FBQyxnQ0FBaUIsQ0FBQyxhQUFhLENBQUMsR0FBRyxxQkFBVyxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDN0UsQ0FBQyxDQUFDLGdDQUFpQixDQUFDLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMvSCxpQkFBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2luZ2xldG9uRmFjdG9yeSB9IGZyb20gJy4uLy4uL2ZyYW1ld29yay91dGlscy9TaW5nbGV0b25GYWN0b3J5JztcbmltcG9ydCBBZE1vZGVsIGZyb20gJy4uL2Jhc2UvYWQvQWRNb2RlbCc7XG5pbXBvcnQgTG9naW5Nb2RlbCBmcm9tICcuLi9sb2dpbi9tb2RlbC9Mb2dpbk1vZGVsJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgRVVzZXJQcm9wZXJ0eVR5cGUgfSBmcm9tICcuL0FuYWx5emVUeXBlcyc7XG5pbXBvcnQgU2NyZWVuVXRpbHMgZnJvbSAnLi9TY3JlZW5VdGlscyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyUHJvcHRlcnlNYW5hZ2VyIHtcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIHJldHVybiBTaW5nbGV0b25GYWN0b3J5LmdldEluc3RhbmNlKHRoaXMpO1xuICB9XG4gIHJlcG9ydChlLCB0KSB7XG4gICAgdmFyIF9vID0ge307XG4gICAgX29bZV0gPSB0O1xuICAgIG1qLnNkay51c2VyRGF0YVVwbG9hZChfbyk7XG4gIH1cbiAgc2VuZFNjcmVlblBoeXNpY2FsU2l6ZSgpIHt9XG4gIHN0YXJ0dXBSZXBvcnQoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0ID0gTG9naW5Nb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgbyA9IHt9O1xuICAgIG9bRVVzZXJQcm9wZXJ0eVR5cGUuR2FtZVZlcnNpb25dID0gdC5hcHBWZXJzaW9uO1xuICAgIG9bRVVzZXJQcm9wZXJ0eVR5cGUuUmVzVmVyc2lvbl0gPSB0LnZlcnNpb247XG4gICAgb1tFVXNlclByb3BlcnR5VHlwZS5WZXJzaW9uXSA9IHQudmVyc2lvbjtcbiAgICBvW0VVc2VyUHJvcGVydHlUeXBlLkxhbmd1YWdlXSA9IHQubGFuZ3VhZ2U7XG4gICAgdmFyIG4gPSB0LnVzZXJXYXlBcnIoKSxcbiAgICAgIGMgPSBbXTtcbiAgICBmb3IgKHZhciB1IGluIG4pIHUubGVuZ3RoID4gMCAmJiBuW3VdLmxlbmd0aCA+IDAgJiYgYy5wdXNoKHUgKyBcIjpcIiArIG5bdV0uam9pbihcInxcIikpO1xuICAgIG9bRVVzZXJQcm9wZXJ0eVR5cGUuQ3VycmVudFdheU51bV0gPSB0LmN1cldheU51bSgpO1xuICAgIG9bRVVzZXJQcm9wZXJ0eVR5cGUuVXNlcldheUFycl0gPSBjO1xuICAgIG9bRVVzZXJQcm9wZXJ0eVR5cGUuZ2FtZU51bUFsbF0gPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRUb3RhbEdhbWVzKCk7XG4gICAgb1tFVXNlclByb3BlcnR5VHlwZS5leHB0UGVyaW9kXSA9IHQuZXhwdFBlcmlvZCgpO1xuICAgIG9bRVVzZXJQcm9wZXJ0eVR5cGUucGh5c2ljc1dpZHRoXSA9IFNjcmVlblV0aWxzLmdldFBoeXNpY2FsV2lkdGhJbkluY2hlcygpO1xuICAgIG9bRVVzZXJQcm9wZXJ0eVR5cGUucGh5c2ljc0hlaWdodF0gPSBTY3JlZW5VdGlscy5nZXRQaHlzaWNhbEhlaWdodEluSW5jaGVzKCk7XG4gICAgb1tFVXNlclByb3BlcnR5VHlwZS5Vc2VyQWJ0ZXN0UmVzdWx0XSA9IG51bGwgPT09IChlID0gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5zZXJ2ZXJQbGFuRGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5oaXRzO1xuICAgIEFkTW9kZWwuZ2V0SW5zdGFuY2UoKS5zdGFydHVwUmVwb3J0KG8pO1xuICAgIG1qLnNkay51c2VyRGF0YVVwbG9hZChvKTtcbiAgfVxufSJdfQ==