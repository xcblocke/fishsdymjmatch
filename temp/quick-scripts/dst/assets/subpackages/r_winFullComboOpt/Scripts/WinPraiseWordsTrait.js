
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_winFullComboOpt/Scripts/WinPraiseWordsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4cb53wjfTpN+r1Nn5aJnte2', 'WinPraiseWordsTrait');
// subpackages/r_winFullComboOpt/Scripts/WinPraiseWordsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var WinPraiseWordsTrait = /** @class */ (function (_super) {
    __extends(WinPraiseWordsTrait, _super);
    function WinPraiseWordsTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mul = 2;
        _this._replayCount = 3;
        _this._condPool = void 0;
        _this._gmPickConfig = {};
        _this._snapshot = null;
        _this.COND_A_TITLES = [{
                key: "Tile_End_Praise_A_title_1",
                default: "Lightning-fast"
            }, {
                key: "Tile_End_Praise_A_title_2",
                default: "Eagle-eyed"
            }, {
                key: "Tile_End_Praise_A_title_3",
                default: "Crackling wit"
            }, {
                key: "Tile_End_Praise_A_title_4",
                default: "Speed king!"
            }, {
                key: "Tile_End_Praise_A_title_5",
                default: "Unconquered!"
            }, {
                key: "Tile_End_Praise_A_title_6",
                default: "Sonic Mode"
            }, {
                key: "Tile_End_Praise_A_title_7",
                default: "In the zone!"
            }];
        _this.COND_A_WORDS = [{
                key: "Tile_End_Praise_A_text_1",
                default: "Your name shall be sung by bards!"
            }, {
                key: "Tile_End_Praise_A_text_2",
                default: "Too fast. Leave some challenge for the rest of us."
            }, {
                key: "Tile_End_Praise_A_text_3",
                default: "This isn't a game for you, it's a victory lap."
            }, {
                key: "Tile_End_Praise_A_text_4",
                default: "The tiles never stood a chance."
            }, {
                key: "Tile_End_Praise_A_text_5",
                default: "Blink and it's done!"
            }, {
                key: "Tile_End_Praise_A_text_6",
                default: "That was over before it started."
            }, {
                key: "Tile_End_Praise_A_text_7",
                default: "The board cleared itself? No, that was you."
            }, {
                key: "Tile_End_Praise_A_text_8",
                default: "Speed and skill in perfect harmony."
            }];
        _this.COND_B_TITLES = [{
                key: "Tile_End_Praise_B_title_1",
                default: "One-shot"
            }, {
                key: "Tile_End_Praise_B_title_2",
                default: "Untouched"
            }, {
                key: "Tile_End_Praise_B_title_3",
                default: "With ease"
            }, {
                key: "Tile_End_Praise_B_title_4",
                default: "Watertight"
            }, {
                key: "Tile_End_Praise_B_title_5",
                default: "Feeling lucky today!"
            }];
        _this.COND_B_WORDS = [{
                key: "Tile_End_Praise_B_text_1",
                default: "How did you figure that out? Can I borrow your brain?"
            }, {
                key: "Tile_End_Praise_B_text_2",
                default: "That's some next-level thinking!"
            }, {
                key: "Tile_End_Praise_B_text_3",
                default: "Thought you were doomed? Nope, you owned it!"
            }, {
                key: "Tile_End_Praise_B_text_4",
                default: "Luck? No, that's pure skill!"
            }, {
                key: "Tile_End_Praise_B_text_5",
                default: "Everyone's stuck, but you're just smiling!"
            }, {
                key: "Tile_End_Praise_B_text_6",
                default: "No use hiding it, you're a genius!"
            }, {
                key: "Tile_End_Praise_B_text_7",
                default: "Too smart to be true!"
            }, {
                key: "Tile_End_Praise_B_text_8",
                default: "Wait... you didn't get stumped? Not even once?"
            }, {
                key: "Tile_End_Praise_B_text_9",
                default: "Flawless from start to finish!"
            }, {
                key: "Tile_End_Praise_B_text_10",
                default: "Looked impossible, yet here you are."
            }, {
                key: "Tile_End_Praise_B_text_11",
                default: "Some call it luck. We call it mastery."
            }];
        _this.COND_C_TITLES = [{
                key: "Tile_End_Praise_C_title_1",
                default: "Unstoppable"
            }, {
                key: "Tile_End_Praise_C_title_2",
                default: "Got smarter"
            }, {
                key: "Tile_End_Praise_C_title_3",
                default: "Forged in Fire"
            }];
        _this.COND_C_WORDS = [{
                key: "Tile_End_Praise_C_text_1",
                default: "Fall seven, rise eight!"
            }, {
                key: "Tile_End_Praise_C_text_2",
                default: "A crisis reveals who is a man!"
            }, {
                key: "Tile_End_Praise_C_text_3",
                default: "Through trials untold, you've reached the shores of glory!"
            }, {
                key: "Tile_End_Praise_C_text_4",
                default: "You've mastered this level!"
            }, {
                key: "Tile_End_Praise_C_text_5",
                default: "Every setback made you stronger."
            }, {
                key: "Tile_End_Praise_C_text_6",
                default: "The comeback is always greater than the setback."
            }, {
                key: "Tile_End_Praise_C_text_7",
                default: "They said it couldn't be done. You didn't listen."
            }, {
                key: "Tile_End_Praise_C_text_8",
                default: "Persistence pays off, and you just cashed in."
            }, {
                key: "Tile_End_Praise_C_text_9",
                default: "This level met its match."
            }, {
                key: "Tile_End_Praise_C_text_10",
                default: "What doesn't stop you makes you unstoppable."
            }];
        _this.COND_D_TITLES = [{
                key: "Tile_End_Praise_D_title_1",
                default: "Big Brain"
            }, {
                key: "Tile_End_Praise_D_title_2",
                default: "Strategic Genius"
            }, {
                key: "Tile_End_Praise_D_title_3",
                default: "Tool Master"
            }, {
                key: "Tile_End_Praise_D_title_4",
                default: "Calculated"
            }, {
                key: "Tile_End_Praise_D_title_5",
                default: "Brilliant!"
            }];
        _this.COND_D_WORDS = [{
                key: "Tile_End_Praise_D_text_1",
                default: "Smart boost usage!"
            }, {
                key: "Tile_End_Praise_D_text_2",
                default: "A feat worthy of the heroes of old!"
            }, {
                key: "Tile_End_Praise_D_text_3",
                default: "Such strategy deserves its own epic!"
            }, {
                key: "Tile_End_Praise_D_text_4",
                default: "The rosy-fingered dawn crowns you!"
            }, {
                key: "Tile_End_Praise_D_text_5",
                default: "Your fame flies on epea pteroenta - winged words!"
            }, {
                key: "Tile_End_Praise_D_text_6",
                default: "Glory be!"
            }, {
                key: "Tile_End_Praise_D_text_7",
                default: "You found the secret sauce!"
            }, {
                key: "Tile_End_Praise_D_text_8",
                default: "Now THAT'S a pro move!"
            }, {
                key: "Tile_End_Praise_D_text_9",
                default: "You survived THAT? Legendary!"
            }, {
                key: "Tile_End_Praise_D_text_10",
                default: "Lost? You? Never!"
            }, {
                key: "Tile_End_Praise_D_text_11",
                default: "Using that item there? 200 IQ play."
            }, {
                key: "Tile_End_Praise_D_text_12",
                default: "Perfect timing. You love to see it."
            }];
        return _this;
    }
    WinPraiseWordsTrait_1 = WinPraiseWordsTrait;
    WinPraiseWordsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var t = this._traitData;
        void 0 !== (null == t ? void 0 : t.mul) && (this._mul = t.mul);
        void 0 !== (null == t ? void 0 : t.replayCount) && (this._replayCount = t.replayCount);
        this._loadGmPickConfig();
    };
    WinPraiseWordsTrait.prototype.onWinVw_showWinVw = function (e, t) {
        this._handleShowWinView(e.ins);
        t();
    };
    WinPraiseWordsTrait.prototype.onTile2WinVw_show = function (e, t) {
        this._handleShowWinView(e.ins);
        t();
    };
    WinPraiseWordsTrait.prototype.onWinFullComboOpt_rainbow = function (e, t) {
        var i = this._isCondA(), o = this._isCondB(), r = this._isCondC(), n = this._isCondD();
        if (i || o || r || n || GameUtils_1.default.isFullComboTriggered()) {
            t({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: true
            });
        }
        else {
            t();
        }
    };
    WinPraiseWordsTrait.prototype.onWinFullComboOpt_getKey = function (e, t) {
        this._condPool = void 0;
        var i = GameUtils_1.default.isFullComboTriggered();
        [i ? "FullCombo" : "", this._isCondA() ? "A(速通)" : "", this._isCondB() ? "B(一命)" : "", this._isCondC() ? "C(坚持)" : "", this._isCondD() ? "D(道具)" : ""].filter(function (e) {
            return "" !== e;
        }).join(" + ");
        if (i)
            t();
        else {
            var o = this._resolveCondPool();
            if (o) {
                var r = this._getGmWord("title");
                t({
                    returnType: TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: (r || this._randomPick(o.titles)).key
                });
            }
            else
                t();
        }
    };
    WinPraiseWordsTrait.prototype.onDynRateShow_shouldShow = function (e, t) {
        var i = this._isCondA(), o = this._isCondB(), r = this._isCondC(), n = this._isCondD();
        if (i || o || r || n || GameUtils_1.default.isFullComboTriggered()) {
            t({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: false
            });
        }
        else {
            t();
        }
    };
    WinPraiseWordsTrait.prototype.onGameMod_modifyWin = function (e, t) {
        this._takeSnapshot();
        t();
    };
    WinPraiseWordsTrait.prototype.onGameMod_modifyWinTile2 = function (e, t) {
        this._takeSnapshot();
        t();
    };
    WinPraiseWordsTrait.prototype._takeSnapshot = function () {
        var e = UserModel_1.default.getInstance().getCurrentGameData();
        if (e) {
            var t = Math.max(0, e.getReplayCount() - 1);
            this._snapshot = {
                roundTime: e.getCurrentRoundTime(),
                tileCount: e.getTotalTileCount(),
                replayCount: t,
                usedRevive: e.getUsedRevive(),
                usedShuffle: e.getUsedShuffle(),
                usedHitTips: e.getUsedHitTips(),
                usedRevert: e.getUsedRevert()
            };
        }
    };
    WinPraiseWordsTrait.prototype._handleShowWinView = function (e) {
        if (cc.isValid(e)) {
            var t;
            if (GameUtils_1.default.isFullComboTriggered())
                t = this._pickWordForFullCombo();
            else {
                var i = this._resolveCondPool();
                t = i ? this._getGmWord("content") || this._randomPick(i.words) : null;
            }
            if (t) {
                var o = e._lblSubtitle;
                o && cc.isValid(o.node) && I18NStrings_1.default.setText(o.node, t.default, t.key);
            }
        }
    };
    WinPraiseWordsTrait.prototype._resolveCondPool = function () {
        if (void 0 !== this._condPool)
            return this._condPool;
        var e = [], t = [];
        if (this._isCondA()) {
            t.push("A");
            e.push({
                key: "A",
                titles: this.COND_A_TITLES,
                words: this.COND_A_WORDS
            });
        }
        if (this._isCondB()) {
            t.push("B");
            e.push({
                key: "B",
                titles: this.COND_B_TITLES,
                words: this.COND_B_WORDS
            });
        }
        if (this._isCondC()) {
            t.push("C");
            e.push({
                key: "C",
                titles: this.COND_C_TITLES,
                words: this.COND_C_WORDS
            });
        }
        this._isCondD() && t.push("D");
        0 === e.length && t.indexOf("D") >= 0 && e.push({
            key: "D",
            titles: this.COND_D_TITLES,
            words: this.COND_D_WORDS
        });
        if (e.length > 0) {
            var i = this._randomPick(e);
            this._condPool = {
                key: i.key,
                titles: i.titles,
                words: i.words
            };
        }
        else
            this._condPool = null;
        return this._condPool;
    };
    WinPraiseWordsTrait.prototype._pickWordForFullCombo = function () {
        var e = [];
        this._isCondA() && e.push({
            key: "A",
            words: this.COND_A_WORDS
        });
        this._isCondB() && e.push({
            key: "B",
            words: this.COND_B_WORDS
        });
        this._isCondC() && e.push({
            key: "C",
            words: this.COND_C_WORDS
        });
        this._isCondD() && e.push({
            key: "D",
            words: this.COND_D_WORDS
        });
        0 === e.length && e.push({
            key: "A",
            words: this.COND_A_WORDS
        }, {
            key: "B",
            words: this.COND_B_WORDS
        }, {
            key: "C",
            words: this.COND_C_WORDS
        }, {
            key: "D",
            words: this.COND_D_WORDS
        });
        var t = this._randomPick(e);
        return this._getGmWord("content") || this._randomPick(t.words);
    };
    WinPraiseWordsTrait.prototype._getGmWord = function (e) {
        var t, i = null === (t = this._gmPickConfig) || void 0 === t ? void 0 : t[e];
        if (!i)
            return null;
        var o = this._getWordsByCond(i.cond, e);
        return !o || i.index < 1 || i.index > o.length ? null : o[i.index - 1];
    };
    WinPraiseWordsTrait.prototype._getWordsByCond = function (e, t) {
        if ("title" === t)
            switch (e) {
                case "A":
                    return this.COND_A_TITLES;
                case "B":
                    return this.COND_B_TITLES;
                case "C":
                    return this.COND_C_TITLES;
                case "D":
                    return this.COND_D_TITLES;
            }
        switch (e) {
            case "A":
                return this.COND_A_WORDS;
            case "B":
                return this.COND_B_WORDS;
            case "C":
                return this.COND_C_WORDS;
            case "D":
                return this.COND_D_WORDS;
        }
    };
    WinPraiseWordsTrait.prototype._loadGmPickConfig = function () {
        this._gmPickConfig = {};
        var e = cc.sys.localStorage.getItem(WinPraiseWordsTrait_1.GM_PICK_STORAGE_KEY);
        if (e)
            try {
                var t = JSON.parse(e);
                t && "object" == typeof t && (this._gmPickConfig = t);
            }
            catch (e) { }
    };
    WinPraiseWordsTrait.prototype.gmReloadPickConfig = function () {
        this._loadGmPickConfig();
        this._condPool = void 0;
    };
    WinPraiseWordsTrait.prototype._isCondA = function () {
        return !!this._snapshot && this._snapshot.roundTime < this._snapshot.tileCount * this._mul;
    };
    WinPraiseWordsTrait.prototype._isCondB = function () {
        return !!this._snapshot && this._snapshot.replayCount < 1 && 0 === this._snapshot.usedRevive;
    };
    WinPraiseWordsTrait.prototype._isCondC = function () {
        return !!this._snapshot && this._snapshot.replayCount >= this._replayCount;
    };
    WinPraiseWordsTrait.prototype._isCondD = function () {
        return !!this._snapshot && this._snapshot.usedShuffle + this._snapshot.usedHitTips + this._snapshot.usedRevert > 0;
    };
    WinPraiseWordsTrait.prototype._randomPick = function (e) {
        return e[Math.floor(Math.random() * e.length)];
    };
    var WinPraiseWordsTrait_1;
    WinPraiseWordsTrait.traitKey = "WinPraiseWords";
    WinPraiseWordsTrait.GM_PICK_STORAGE_KEY = "__gmWinPraiseWordsPick__";
    WinPraiseWordsTrait = WinPraiseWordsTrait_1 = __decorate([
        mj.trait,
        mj.class("WinPraiseWordsTrait")
    ], WinPraiseWordsTrait);
    return WinPraiseWordsTrait;
}(Trait_1.default));
exports.default = WinPraiseWordsTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3dpbkZ1bGxDb21ib09wdC9TY3JpcHRzL1dpblByYWlzZVdvcmRzVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCwyRUFBc0U7QUFDdEUsc0VBQWlFO0FBQ2pFLDRFQUF1RTtBQUd2RTtJQUFpRCx1Q0FBSztJQUF0RDtRQUFBLHFFQWdiQztRQS9hQyxVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1Qsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsZUFBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ25CLG1CQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsbUJBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUcsRUFBRSwyQkFBMkI7Z0JBQ2hDLE9BQU8sRUFBRSxnQkFBZ0I7YUFDMUIsRUFBRTtnQkFDRCxHQUFHLEVBQUUsMkJBQTJCO2dCQUNoQyxPQUFPLEVBQUUsWUFBWTthQUN0QixFQUFFO2dCQUNELEdBQUcsRUFBRSwyQkFBMkI7Z0JBQ2hDLE9BQU8sRUFBRSxlQUFlO2FBQ3pCLEVBQUU7Z0JBQ0QsR0FBRyxFQUFFLDJCQUEyQjtnQkFDaEMsT0FBTyxFQUFFLGFBQWE7YUFDdkIsRUFBRTtnQkFDRCxHQUFHLEVBQUUsMkJBQTJCO2dCQUNoQyxPQUFPLEVBQUUsY0FBYzthQUN4QixFQUFFO2dCQUNELEdBQUcsRUFBRSwyQkFBMkI7Z0JBQ2hDLE9BQU8sRUFBRSxZQUFZO2FBQ3RCLEVBQUU7Z0JBQ0QsR0FBRyxFQUFFLDJCQUEyQjtnQkFDaEMsT0FBTyxFQUFFLGNBQWM7YUFDeEIsQ0FBQyxDQUFDO1FBQ0gsa0JBQVksR0FBRyxDQUFDO2dCQUNkLEdBQUcsRUFBRSwwQkFBMEI7Z0JBQy9CLE9BQU8sRUFBRSxtQ0FBbUM7YUFDN0MsRUFBRTtnQkFDRCxHQUFHLEVBQUUsMEJBQTBCO2dCQUMvQixPQUFPLEVBQUUsb0RB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dCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiV2luUHJhaXNlV29yZHNUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luUHJhaXNlV29yZHNUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX211bCA9IDI7XG4gIF9yZXBsYXlDb3VudCA9IDM7XG4gIF9jb25kUG9vbCA9IHZvaWQgMDtcbiAgX2dtUGlja0NvbmZpZyA9IHt9O1xuICBfc25hcHNob3QgPSBudWxsO1xuICBDT05EX0FfVElUTEVTID0gW3tcbiAgICBrZXk6IFwiVGlsZV9FbmRfUHJhaXNlX0FfdGl0bGVfMVwiLFxuICAgIGRlZmF1bHQ6IFwiTGlnaHRuaW5nLWZhc3RcIlxuICB9LCB7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9BX3RpdGxlXzJcIixcbiAgICBkZWZhdWx0OiBcIkVhZ2xlLWV5ZWRcIlxuICB9LCB7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9BX3RpdGxlXzNcIixcbiAgICBkZWZhdWx0OiBcIkNyYWNrbGluZyB3aXRcIlxuICB9LCB7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9BX3RpdGxlXzRcIixcbiAgICBkZWZhdWx0OiBcIlNwZWVkIGtpbmchXCJcbiAgfSwge1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfQV90aXRsZV81XCIsXG4gICAgZGVmYXVsdDogXCJVbmNvbnF1ZXJlZCFcIlxuICB9LCB7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9BX3RpdGxlXzZcIixcbiAgICBkZWZhdWx0OiBcIlNvbmljIE1vZGVcIlxuICB9LCB7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9BX3RpdGxlXzdcIixcbiAgICBkZWZhdWx0OiBcIkluIHRoZSB6b25lIVwiXG4gIH1dO1xuICBDT05EX0FfV09SRFMgPSBbe1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfQV90ZXh0XzFcIixcbiAgICBkZWZhdWx0OiBcIllvdXIgbmFtZSBzaGFsbCBiZSBzdW5nIGJ5IGJhcmRzIVwiXG4gIH0sIHtcbiAgICBrZXk6IFwiVGlsZV9FbmRfUHJhaXNlX0FfdGV4dF8yXCIsXG4gICAgZGVmYXVsdDogXCJUb28gZmFzdC4gTGVhdmUgc29tZSBjaGFsbGVuZ2UgZm9yIHRoZSByZXN0IG9mIHVzLlwiXG4gIH0sIHtcbiAgICBrZXk6IFwiVGlsZV9FbmRfUHJhaXNlX0FfdGV4dF8zXCIsXG4gICAgZGVmYXVsdDogXCJUaGlzIGlzbid0IGEgZ2FtZSBmb3IgeW91LCBpdCdzIGEgdmljdG9yeSBsYXAuXCJcbiAgfSwge1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfQV90ZXh0XzRcIixcbiAgICBkZWZhdWx0OiBcIlRoZSB0aWxlcyBuZXZlciBzdG9vZCBhIGNoYW5jZS5cIlxuICB9LCB7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9BX3RleHRfNVwiLFxuICAgIGRlZmF1bHQ6IFwiQmxpbmsgYW5kIGl0J3MgZG9uZSFcIlxuICB9LCB7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9BX3RleHRfNlwiLFxuICAgIGRlZmF1bHQ6IFwiVGhhdCB3YXMgb3ZlciBiZWZvcmUgaXQgc3RhcnRlZC5cIlxuICB9LCB7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9BX3RleHRfN1wiLFxuICAgIGRlZmF1bHQ6IFwiVGhlIGJvYXJkIGNsZWFyZWQgaXRzZWxmPyBObywgdGhhdCB3YXMgeW91LlwiXG4gIH0sIHtcbiAgICBrZXk6IFwiVGlsZV9FbmRfUHJhaXNlX0FfdGV4dF84XCIsXG4gICAgZGVmYXVsdDogXCJTcGVlZCBhbmQgc2tpbGwgaW4gcGVyZmVjdCBoYXJtb255LlwiXG4gIH1dO1xuICBDT05EX0JfVElUTEVTID0gW3tcbiAgICBrZXk6IFwiVGlsZV9FbmRfUHJhaXNlX0JfdGl0bGVfMVwiLFxuICAgIGRlZmF1bHQ6IFwiT25lLXNob3RcIlxuICB9LCB7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9CX3RpdGxlXzJcIixcbiAgICBkZWZhdWx0OiBcIlVudG91Y2hlZFwiXG4gIH0sIHtcbiAgICBrZXk6IFwiVGlsZV9FbmRfUHJhaXNlX0JfdGl0bGVfM1wiLFxuICAgIGRlZmF1bHQ6IFwiV2l0aCBlYXNlXCJcbiAgfSwge1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfQl90aXRsZV80XCIsXG4gICAgZGVmYXVsdDogXCJXYXRlcnRpZ2h0XCJcbiAgfSwge1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfQl90aXRsZV81XCIsXG4gICAgZGVmYXVsdDogXCJGZWVsaW5nIGx1Y2t5IHRvZGF5IVwiXG4gIH1dO1xuICBDT05EX0JfV09SRFMgPSBbe1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfQl90ZXh0XzFcIixcbiAgICBkZWZhdWx0OiBcIkhvdyBkaWQgeW91IGZpZ3VyZSB0aGF0IG91dD8gQ2FuIEkgYm9ycm93IHlvdXIgYnJhaW4/XCJcbiAgfSwge1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfQl90ZXh0XzJcIixcbiAgICBkZWZhdWx0OiBcIlRoYXQncyBzb21lIG5leHQtbGV2ZWwgdGhpbmtpbmchXCJcbiAgfSwge1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfQl90ZXh0XzNcIixcbiAgICBkZWZhdWx0OiBcIlRob3VnaHQgeW91IHdlcmUgZG9vbWVkPyBOb3BlLCB5b3Ugb3duZWQgaXQhXCJcbiAgfSwge1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfQl90ZXh0XzRcIixcbiAgICBkZWZhdWx0OiBcIkx1Y2s/IE5vLCB0aGF0J3MgcHVyZSBza2lsbCFcIlxuICB9LCB7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9CX3RleHRfNVwiLFxuICAgIGRlZmF1bHQ6IFwiRXZlcnlvbmUncyBzdHVjaywgYnV0IHlvdSdyZSBqdXN0IHNtaWxpbmchXCJcbiAgfSwge1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfQl90ZXh0XzZcIixcbiAgICBkZWZhdWx0OiBcIk5vIHVzZSBoaWRpbmcgaXQsIHlvdSdyZSBhIGdlbml1cyFcIlxuICB9LCB7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9CX3RleHRfN1wiLFxuICAgIGRlZmF1bHQ6IFwiVG9vIHNtYXJ0IHRvIGJlIHRydWUhXCJcbiAgfSwge1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfQl90ZXh0XzhcIixcbiAgICBkZWZhdWx0OiBcIldhaXQuLi4geW91IGRpZG4ndCBnZXQgc3R1bXBlZD8gTm90IGV2ZW4gb25jZT9cIlxuICB9LCB7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9CX3RleHRfOVwiLFxuICAgIGRlZmF1bHQ6IFwiRmxhd2xlc3MgZnJvbSBzdGFydCB0byBmaW5pc2ghXCJcbiAgfSwge1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfQl90ZXh0XzEwXCIsXG4gICAgZGVmYXVsdDogXCJMb29rZWQgaW1wb3NzaWJsZSwgeWV0IGhlcmUgeW91IGFyZS5cIlxuICB9LCB7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9CX3RleHRfMTFcIixcbiAgICBkZWZhdWx0OiBcIlNvbWUgY2FsbCBpdCBsdWNrLiBXZSBjYWxsIGl0IG1hc3RlcnkuXCJcbiAgfV07XG4gIENPTkRfQ19USVRMRVMgPSBbe1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfQ190aXRsZV8xXCIsXG4gICAgZGVmYXVsdDogXCJVbnN0b3BwYWJsZVwiXG4gIH0sIHtcbiAgICBrZXk6IFwiVGlsZV9FbmRfUHJhaXNlX0NfdGl0bGVfMlwiLFxuICAgIGRlZmF1bHQ6IFwiR290IHNtYXJ0ZXJcIlxuICB9LCB7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9DX3RpdGxlXzNcIixcbiAgICBkZWZhdWx0OiBcIkZvcmdlZCBpbiBGaXJlXCJcbiAgfV07XG4gIENPTkRfQ19XT1JEUyA9IFt7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9DX3RleHRfMVwiLFxuICAgIGRlZmF1bHQ6IFwiRmFsbCBzZXZlbiwgcmlzZSBlaWdodCFcIlxuICB9LCB7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9DX3RleHRfMlwiLFxuICAgIGRlZmF1bHQ6IFwiQSBjcmlzaXMgcmV2ZWFscyB3aG8gaXMgYSBtYW4hXCJcbiAgfSwge1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfQ190ZXh0XzNcIixcbiAgICBkZWZhdWx0OiBcIlRocm91Z2ggdHJpYWxzIHVudG9sZCwgeW91J3ZlIHJlYWNoZWQgdGhlIHNob3JlcyBvZiBnbG9yeSFcIlxuICB9LCB7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9DX3RleHRfNFwiLFxuICAgIGRlZmF1bHQ6IFwiWW91J3ZlIG1hc3RlcmVkIHRoaXMgbGV2ZWwhXCJcbiAgfSwge1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfQ190ZXh0XzVcIixcbiAgICBkZWZhdWx0OiBcIkV2ZXJ5IHNldGJhY2sgbWFkZSB5b3Ugc3Ryb25nZXIuXCJcbiAgfSwge1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfQ190ZXh0XzZcIixcbiAgICBkZWZhdWx0OiBcIlRoZSBjb21lYmFjayBpcyBhbHdheXMgZ3JlYXRlciB0aGFuIHRoZSBzZXRiYWNrLlwiXG4gIH0sIHtcbiAgICBrZXk6IFwiVGlsZV9FbmRfUHJhaXNlX0NfdGV4dF83XCIsXG4gICAgZGVmYXVsdDogXCJUaGV5IHNhaWQgaXQgY291bGRuJ3QgYmUgZG9uZS4gWW91IGRpZG4ndCBsaXN0ZW4uXCJcbiAgfSwge1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfQ190ZXh0XzhcIixcbiAgICBkZWZhdWx0OiBcIlBlcnNpc3RlbmNlIHBheXMgb2ZmLCBhbmQgeW91IGp1c3QgY2FzaGVkIGluLlwiXG4gIH0sIHtcbiAgICBrZXk6IFwiVGlsZV9FbmRfUHJhaXNlX0NfdGV4dF85XCIsXG4gICAgZGVmYXVsdDogXCJUaGlzIGxldmVsIG1ldCBpdHMgbWF0Y2guXCJcbiAgfSwge1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfQ190ZXh0XzEwXCIsXG4gICAgZGVmYXVsdDogXCJXaGF0IGRvZXNuJ3Qgc3RvcCB5b3UgbWFrZXMgeW91IHVuc3RvcHBhYmxlLlwiXG4gIH1dO1xuICBDT05EX0RfVElUTEVTID0gW3tcbiAgICBrZXk6IFwiVGlsZV9FbmRfUHJhaXNlX0RfdGl0bGVfMVwiLFxuICAgIGRlZmF1bHQ6IFwiQmlnIEJyYWluXCJcbiAgfSwge1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfRF90aXRsZV8yXCIsXG4gICAgZGVmYXVsdDogXCJTdHJhdGVnaWMgR2VuaXVzXCJcbiAgfSwge1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfRF90aXRsZV8zXCIsXG4gICAgZGVmYXVsdDogXCJUb29sIE1hc3RlclwiXG4gIH0sIHtcbiAgICBrZXk6IFwiVGlsZV9FbmRfUHJhaXNlX0RfdGl0bGVfNFwiLFxuICAgIGRlZmF1bHQ6IFwiQ2FsY3VsYXRlZFwiXG4gIH0sIHtcbiAgICBrZXk6IFwiVGlsZV9FbmRfUHJhaXNlX0RfdGl0bGVfNVwiLFxuICAgIGRlZmF1bHQ6IFwiQnJpbGxpYW50IVwiXG4gIH1dO1xuICBDT05EX0RfV09SRFMgPSBbe1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfRF90ZXh0XzFcIixcbiAgICBkZWZhdWx0OiBcIlNtYXJ0IGJvb3N0IHVzYWdlIVwiXG4gIH0sIHtcbiAgICBrZXk6IFwiVGlsZV9FbmRfUHJhaXNlX0RfdGV4dF8yXCIsXG4gICAgZGVmYXVsdDogXCJBIGZlYXQgd29ydGh5IG9mIHRoZSBoZXJvZXMgb2Ygb2xkIVwiXG4gIH0sIHtcbiAgICBrZXk6IFwiVGlsZV9FbmRfUHJhaXNlX0RfdGV4dF8zXCIsXG4gICAgZGVmYXVsdDogXCJTdWNoIHN0cmF0ZWd5IGRlc2VydmVzIGl0cyBvd24gZXBpYyFcIlxuICB9LCB7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9EX3RleHRfNFwiLFxuICAgIGRlZmF1bHQ6IFwiVGhlIHJvc3ktZmluZ2VyZWQgZGF3biBjcm93bnMgeW91IVwiXG4gIH0sIHtcbiAgICBrZXk6IFwiVGlsZV9FbmRfUHJhaXNlX0RfdGV4dF81XCIsXG4gICAgZGVmYXVsdDogXCJZb3VyIGZhbWUgZmxpZXMgb24gZXBlYSBwdGVyb2VudGEgLSB3aW5nZWQgd29yZHMhXCJcbiAgfSwge1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfRF90ZXh0XzZcIixcbiAgICBkZWZhdWx0OiBcIkdsb3J5IGJlIVwiXG4gIH0sIHtcbiAgICBrZXk6IFwiVGlsZV9FbmRfUHJhaXNlX0RfdGV4dF83XCIsXG4gICAgZGVmYXVsdDogXCJZb3UgZm91bmQgdGhlIHNlY3JldCBzYXVjZSFcIlxuICB9LCB7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9EX3RleHRfOFwiLFxuICAgIGRlZmF1bHQ6IFwiTm93IFRIQVQnUyBhIHBybyBtb3ZlIVwiXG4gIH0sIHtcbiAgICBrZXk6IFwiVGlsZV9FbmRfUHJhaXNlX0RfdGV4dF85XCIsXG4gICAgZGVmYXVsdDogXCJZb3Ugc3Vydml2ZWQgVEhBVD8gTGVnZW5kYXJ5IVwiXG4gIH0sIHtcbiAgICBrZXk6IFwiVGlsZV9FbmRfUHJhaXNlX0RfdGV4dF8xMFwiLFxuICAgIGRlZmF1bHQ6IFwiTG9zdD8gWW91PyBOZXZlciFcIlxuICB9LCB7XG4gICAga2V5OiBcIlRpbGVfRW5kX1ByYWlzZV9EX3RleHRfMTFcIixcbiAgICBkZWZhdWx0OiBcIlVzaW5nIHRoYXQgaXRlbSB0aGVyZT8gMjAwIElRIHBsYXkuXCJcbiAgfSwge1xuICAgIGtleTogXCJUaWxlX0VuZF9QcmFpc2VfRF90ZXh0XzEyXCIsXG4gICAgZGVmYXVsdDogXCJQZXJmZWN0IHRpbWluZy4gWW91IGxvdmUgdG8gc2VlIGl0LlwiXG4gIH1dO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIldpblByYWlzZVdvcmRzXCI7XG4gIHN0YXRpYyBHTV9QSUNLX1NUT1JBR0VfS0VZID0gXCJfX2dtV2luUHJhaXNlV29yZHNQaWNrX19cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZhciB0ID0gdGhpcy5fdHJhaXREYXRhO1xuICAgIHZvaWQgMCAhPT0gKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubXVsKSAmJiAodGhpcy5fbXVsID0gdC5tdWwpO1xuICAgIHZvaWQgMCAhPT0gKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQucmVwbGF5Q291bnQpICYmICh0aGlzLl9yZXBsYXlDb3VudCA9IHQucmVwbGF5Q291bnQpO1xuICAgIHRoaXMuX2xvYWRHbVBpY2tDb25maWcoKTtcbiAgfVxuICBvbldpblZ3X3Nob3dXaW5WdyhlLCB0KSB7XG4gICAgdGhpcy5faGFuZGxlU2hvd1dpblZpZXcoZS5pbnMpO1xuICAgIHQoKTtcbiAgfVxuICBvblRpbGUyV2luVndfc2hvdyhlLCB0KSB7XG4gICAgdGhpcy5faGFuZGxlU2hvd1dpblZpZXcoZS5pbnMpO1xuICAgIHQoKTtcbiAgfVxuICBvbldpbkZ1bGxDb21ib09wdF9yYWluYm93KGUsIHQpIHtcbiAgICB2YXIgaSA9IHRoaXMuX2lzQ29uZEEoKSxcbiAgICAgIG8gPSB0aGlzLl9pc0NvbmRCKCksXG4gICAgICByID0gdGhpcy5faXNDb25kQygpLFxuICAgICAgbiA9IHRoaXMuX2lzQ29uZEQoKTtcbiAgICBpZiAoaSB8fCBvIHx8IHIgfHwgbiB8fCBHYW1lVXRpbHMuaXNGdWxsQ29tYm9UcmlnZ2VyZWQoKSkge1xuICAgICAgdCh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBvbldpbkZ1bGxDb21ib09wdF9nZXRLZXkoZSwgdCkge1xuICAgIHRoaXMuX2NvbmRQb29sID0gdm9pZCAwO1xuICAgIHZhciBpID0gR2FtZVV0aWxzLmlzRnVsbENvbWJvVHJpZ2dlcmVkKCk7XG4gICAgW2kgPyBcIkZ1bGxDb21ib1wiIDogXCJcIiwgdGhpcy5faXNDb25kQSgpID8gXCJBKOmAn+mAmilcIiA6IFwiXCIsIHRoaXMuX2lzQ29uZEIoKSA/IFwiQijkuIDlkb0pXCIgOiBcIlwiLCB0aGlzLl9pc0NvbmRDKCkgPyBcIkMo5Z2a5oyBKVwiIDogXCJcIiwgdGhpcy5faXNDb25kRCgpID8gXCJEKOmBk+WFtylcIiA6IFwiXCJdLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIFwiXCIgIT09IGU7XG4gICAgfSkuam9pbihcIiArIFwiKTtcbiAgICBpZiAoaSkgdCgpO2Vsc2Uge1xuICAgICAgdmFyIG8gPSB0aGlzLl9yZXNvbHZlQ29uZFBvb2woKTtcbiAgICAgIGlmIChvKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5fZ2V0R21Xb3JkKFwidGl0bGVcIik7XG4gICAgICAgIHQoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblZhbDogKHIgfHwgdGhpcy5fcmFuZG9tUGljayhvLnRpdGxlcykpLmtleVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfVxuICB9XG4gIG9uRHluUmF0ZVNob3dfc2hvdWxkU2hvdyhlLCB0KSB7XG4gICAgdmFyIGkgPSB0aGlzLl9pc0NvbmRBKCksXG4gICAgICBvID0gdGhpcy5faXNDb25kQigpLFxuICAgICAgciA9IHRoaXMuX2lzQ29uZEMoKSxcbiAgICAgIG4gPSB0aGlzLl9pc0NvbmREKCk7XG4gICAgaWYgKGkgfHwgbyB8fCByIHx8IG4gfHwgR2FtZVV0aWxzLmlzRnVsbENvbWJvVHJpZ2dlcmVkKCkpIHtcbiAgICAgIHQoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG4gIG9uR2FtZU1vZF9tb2RpZnlXaW4oZSwgdCkge1xuICAgIHRoaXMuX3Rha2VTbmFwc2hvdCgpO1xuICAgIHQoKTtcbiAgfVxuICBvbkdhbWVNb2RfbW9kaWZ5V2luVGlsZTIoZSwgdCkge1xuICAgIHRoaXMuX3Rha2VTbmFwc2hvdCgpO1xuICAgIHQoKTtcbiAgfVxuICBfdGFrZVNuYXBzaG90KCkge1xuICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVEYXRhKCk7XG4gICAgaWYgKGUpIHtcbiAgICAgIHZhciB0ID0gTWF0aC5tYXgoMCwgZS5nZXRSZXBsYXlDb3VudCgpIC0gMSk7XG4gICAgICB0aGlzLl9zbmFwc2hvdCA9IHtcbiAgICAgICAgcm91bmRUaW1lOiBlLmdldEN1cnJlbnRSb3VuZFRpbWUoKSxcbiAgICAgICAgdGlsZUNvdW50OiBlLmdldFRvdGFsVGlsZUNvdW50KCksXG4gICAgICAgIHJlcGxheUNvdW50OiB0LFxuICAgICAgICB1c2VkUmV2aXZlOiBlLmdldFVzZWRSZXZpdmUoKSxcbiAgICAgICAgdXNlZFNodWZmbGU6IGUuZ2V0VXNlZFNodWZmbGUoKSxcbiAgICAgICAgdXNlZEhpdFRpcHM6IGUuZ2V0VXNlZEhpdFRpcHMoKSxcbiAgICAgICAgdXNlZFJldmVydDogZS5nZXRVc2VkUmV2ZXJ0KClcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIF9oYW5kbGVTaG93V2luVmlldyhlKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgIHZhciB0O1xuICAgICAgaWYgKEdhbWVVdGlscy5pc0Z1bGxDb21ib1RyaWdnZXJlZCgpKSB0ID0gdGhpcy5fcGlja1dvcmRGb3JGdWxsQ29tYm8oKTtlbHNlIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9yZXNvbHZlQ29uZFBvb2woKTtcbiAgICAgICAgdCA9IGkgPyB0aGlzLl9nZXRHbVdvcmQoXCJjb250ZW50XCIpIHx8IHRoaXMuX3JhbmRvbVBpY2soaS53b3JkcykgOiBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKHQpIHtcbiAgICAgICAgdmFyIG8gPSBlLl9sYmxTdWJ0aXRsZTtcbiAgICAgICAgbyAmJiBjYy5pc1ZhbGlkKG8ubm9kZSkgJiYgSTE4TlN0cmluZ3Muc2V0VGV4dChvLm5vZGUsIHQuZGVmYXVsdCwgdC5rZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBfcmVzb2x2ZUNvbmRQb29sKCkge1xuICAgIGlmICh2b2lkIDAgIT09IHRoaXMuX2NvbmRQb29sKSByZXR1cm4gdGhpcy5fY29uZFBvb2w7XG4gICAgdmFyIGUgPSBbXSxcbiAgICAgIHQgPSBbXTtcbiAgICBpZiAodGhpcy5faXNDb25kQSgpKSB7XG4gICAgICB0LnB1c2goXCJBXCIpO1xuICAgICAgZS5wdXNoKHtcbiAgICAgICAga2V5OiBcIkFcIixcbiAgICAgICAgdGl0bGVzOiB0aGlzLkNPTkRfQV9USVRMRVMsXG4gICAgICAgIHdvcmRzOiB0aGlzLkNPTkRfQV9XT1JEU1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pc0NvbmRCKCkpIHtcbiAgICAgIHQucHVzaChcIkJcIik7XG4gICAgICBlLnB1c2goe1xuICAgICAgICBrZXk6IFwiQlwiLFxuICAgICAgICB0aXRsZXM6IHRoaXMuQ09ORF9CX1RJVExFUyxcbiAgICAgICAgd29yZHM6IHRoaXMuQ09ORF9CX1dPUkRTXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzQ29uZEMoKSkge1xuICAgICAgdC5wdXNoKFwiQ1wiKTtcbiAgICAgIGUucHVzaCh7XG4gICAgICAgIGtleTogXCJDXCIsXG4gICAgICAgIHRpdGxlczogdGhpcy5DT05EX0NfVElUTEVTLFxuICAgICAgICB3b3JkczogdGhpcy5DT05EX0NfV09SRFNcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9pc0NvbmREKCkgJiYgdC5wdXNoKFwiRFwiKTtcbiAgICAwID09PSBlLmxlbmd0aCAmJiB0LmluZGV4T2YoXCJEXCIpID49IDAgJiYgZS5wdXNoKHtcbiAgICAgIGtleTogXCJEXCIsXG4gICAgICB0aXRsZXM6IHRoaXMuQ09ORF9EX1RJVExFUyxcbiAgICAgIHdvcmRzOiB0aGlzLkNPTkRfRF9XT1JEU1xuICAgIH0pO1xuICAgIGlmIChlLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBpID0gdGhpcy5fcmFuZG9tUGljayhlKTtcbiAgICAgIHRoaXMuX2NvbmRQb29sID0ge1xuICAgICAgICBrZXk6IGkua2V5LFxuICAgICAgICB0aXRsZXM6IGkudGl0bGVzLFxuICAgICAgICB3b3JkczogaS53b3Jkc1xuICAgICAgfTtcbiAgICB9IGVsc2UgdGhpcy5fY29uZFBvb2wgPSBudWxsO1xuICAgIHJldHVybiB0aGlzLl9jb25kUG9vbDtcbiAgfVxuICBfcGlja1dvcmRGb3JGdWxsQ29tYm8oKSB7XG4gICAgdmFyIGUgPSBbXTtcbiAgICB0aGlzLl9pc0NvbmRBKCkgJiYgZS5wdXNoKHtcbiAgICAgIGtleTogXCJBXCIsXG4gICAgICB3b3JkczogdGhpcy5DT05EX0FfV09SRFNcbiAgICB9KTtcbiAgICB0aGlzLl9pc0NvbmRCKCkgJiYgZS5wdXNoKHtcbiAgICAgIGtleTogXCJCXCIsXG4gICAgICB3b3JkczogdGhpcy5DT05EX0JfV09SRFNcbiAgICB9KTtcbiAgICB0aGlzLl9pc0NvbmRDKCkgJiYgZS5wdXNoKHtcbiAgICAgIGtleTogXCJDXCIsXG4gICAgICB3b3JkczogdGhpcy5DT05EX0NfV09SRFNcbiAgICB9KTtcbiAgICB0aGlzLl9pc0NvbmREKCkgJiYgZS5wdXNoKHtcbiAgICAgIGtleTogXCJEXCIsXG4gICAgICB3b3JkczogdGhpcy5DT05EX0RfV09SRFNcbiAgICB9KTtcbiAgICAwID09PSBlLmxlbmd0aCAmJiBlLnB1c2goe1xuICAgICAga2V5OiBcIkFcIixcbiAgICAgIHdvcmRzOiB0aGlzLkNPTkRfQV9XT1JEU1xuICAgIH0sIHtcbiAgICAgIGtleTogXCJCXCIsXG4gICAgICB3b3JkczogdGhpcy5DT05EX0JfV09SRFNcbiAgICB9LCB7XG4gICAgICBrZXk6IFwiQ1wiLFxuICAgICAgd29yZHM6IHRoaXMuQ09ORF9DX1dPUkRTXG4gICAgfSwge1xuICAgICAga2V5OiBcIkRcIixcbiAgICAgIHdvcmRzOiB0aGlzLkNPTkRfRF9XT1JEU1xuICAgIH0pO1xuICAgIHZhciB0ID0gdGhpcy5fcmFuZG9tUGljayhlKTtcbiAgICByZXR1cm4gdGhpcy5fZ2V0R21Xb3JkKFwiY29udGVudFwiKSB8fCB0aGlzLl9yYW5kb21QaWNrKHQud29yZHMpO1xuICB9XG4gIF9nZXRHbVdvcmQoZSkge1xuICAgIHZhciB0LFxuICAgICAgaSA9IG51bGwgPT09ICh0ID0gdGhpcy5fZ21QaWNrQ29uZmlnKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0W2VdO1xuICAgIGlmICghaSkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG8gPSB0aGlzLl9nZXRXb3Jkc0J5Q29uZChpLmNvbmQsIGUpO1xuICAgIHJldHVybiAhbyB8fCBpLmluZGV4IDwgMSB8fCBpLmluZGV4ID4gby5sZW5ndGggPyBudWxsIDogb1tpLmluZGV4IC0gMV07XG4gIH1cbiAgX2dldFdvcmRzQnlDb25kKGUsIHQpIHtcbiAgICBpZiAoXCJ0aXRsZVwiID09PSB0KSBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgIHJldHVybiB0aGlzLkNPTkRfQV9USVRMRVM7XG4gICAgICBjYXNlIFwiQlwiOlxuICAgICAgICByZXR1cm4gdGhpcy5DT05EX0JfVElUTEVTO1xuICAgICAgY2FzZSBcIkNcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuQ09ORF9DX1RJVExFUztcbiAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgIHJldHVybiB0aGlzLkNPTkRfRF9USVRMRVM7XG4gICAgfVxuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuQ09ORF9BX1dPUkRTO1xuICAgICAgY2FzZSBcIkJcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuQ09ORF9CX1dPUkRTO1xuICAgICAgY2FzZSBcIkNcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuQ09ORF9DX1dPUkRTO1xuICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuQ09ORF9EX1dPUkRTO1xuICAgIH1cbiAgfVxuICBfbG9hZEdtUGlja0NvbmZpZygpIHtcbiAgICB0aGlzLl9nbVBpY2tDb25maWcgPSB7fTtcbiAgICB2YXIgZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShXaW5QcmFpc2VXb3Jkc1RyYWl0LkdNX1BJQ0tfU1RPUkFHRV9LRVkpO1xuICAgIGlmIChlKSB0cnkge1xuICAgICAgdmFyIHQgPSBKU09OLnBhcnNlKGUpO1xuICAgICAgdCAmJiBcIm9iamVjdFwiID09IHR5cGVvZiB0ICYmICh0aGlzLl9nbVBpY2tDb25maWcgPSB0KTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIGdtUmVsb2FkUGlja0NvbmZpZygpIHtcbiAgICB0aGlzLl9sb2FkR21QaWNrQ29uZmlnKCk7XG4gICAgdGhpcy5fY29uZFBvb2wgPSB2b2lkIDA7XG4gIH1cbiAgX2lzQ29uZEEoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fc25hcHNob3QgJiYgdGhpcy5fc25hcHNob3Qucm91bmRUaW1lIDwgdGhpcy5fc25hcHNob3QudGlsZUNvdW50ICogdGhpcy5fbXVsO1xuICB9XG4gIF9pc0NvbmRCKCkge1xuICAgIHJldHVybiAhIXRoaXMuX3NuYXBzaG90ICYmIHRoaXMuX3NuYXBzaG90LnJlcGxheUNvdW50IDwgMSAmJiAwID09PSB0aGlzLl9zbmFwc2hvdC51c2VkUmV2aXZlO1xuICB9XG4gIF9pc0NvbmRDKCkge1xuICAgIHJldHVybiAhIXRoaXMuX3NuYXBzaG90ICYmIHRoaXMuX3NuYXBzaG90LnJlcGxheUNvdW50ID49IHRoaXMuX3JlcGxheUNvdW50O1xuICB9XG4gIF9pc0NvbmREKCkge1xuICAgIHJldHVybiAhIXRoaXMuX3NuYXBzaG90ICYmIHRoaXMuX3NuYXBzaG90LnVzZWRTaHVmZmxlICsgdGhpcy5fc25hcHNob3QudXNlZEhpdFRpcHMgKyB0aGlzLl9zbmFwc2hvdC51c2VkUmV2ZXJ0ID4gMDtcbiAgfVxuICBfcmFuZG9tUGljayhlKSB7XG4gICAgcmV0dXJuIGVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZS5sZW5ndGgpXTtcbiAgfVxufSJdfQ==