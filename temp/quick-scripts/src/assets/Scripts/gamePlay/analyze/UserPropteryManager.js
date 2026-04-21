"use strict";
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