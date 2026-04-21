import Trait from '../../../Scripts/framework/trait/Trait';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
@mj.trait
@mj.class("WinPraiseWordsTrait")
export default class WinPraiseWordsTrait extends Trait {
  _mul = 2;
  _replayCount = 3;
  _condPool = void 0;
  _gmPickConfig = {};
  _snapshot = null;
  COND_A_TITLES = [{
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
  COND_A_WORDS = [{
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
  COND_B_TITLES = [{
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
  COND_B_WORDS = [{
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
  COND_C_TITLES = [{
    key: "Tile_End_Praise_C_title_1",
    default: "Unstoppable"
  }, {
    key: "Tile_End_Praise_C_title_2",
    default: "Got smarter"
  }, {
    key: "Tile_End_Praise_C_title_3",
    default: "Forged in Fire"
  }];
  COND_C_WORDS = [{
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
  COND_D_TITLES = [{
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
  COND_D_WORDS = [{
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
  static traitKey = "WinPraiseWords";
  static GM_PICK_STORAGE_KEY = "__gmWinPraiseWordsPick__";
  onLoad() {
    super.onLoad.call(this);
    var t = this._traitData;
    void 0 !== (null == t ? void 0 : t.mul) && (this._mul = t.mul);
    void 0 !== (null == t ? void 0 : t.replayCount) && (this._replayCount = t.replayCount);
    this._loadGmPickConfig();
  }
  onWinVw_showWinVw(e, t) {
    this._handleShowWinView(e.ins);
    t();
  }
  onTile2WinVw_show(e, t) {
    this._handleShowWinView(e.ins);
    t();
  }
  onWinFullComboOpt_rainbow(e, t) {
    var i = this._isCondA(),
      o = this._isCondB(),
      r = this._isCondC(),
      n = this._isCondD();
    if (i || o || r || n || GameUtils.isFullComboTriggered()) {
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: true
      });
    } else {
      t();
    }
  }
  onWinFullComboOpt_getKey(e, t) {
    this._condPool = void 0;
    var i = GameUtils.isFullComboTriggered();
    [i ? "FullCombo" : "", this._isCondA() ? "A(速通)" : "", this._isCondB() ? "B(一命)" : "", this._isCondC() ? "C(坚持)" : "", this._isCondD() ? "D(道具)" : ""].filter(function (e) {
      return "" !== e;
    }).join(" + ");
    if (i) t();else {
      var o = this._resolveCondPool();
      if (o) {
        var r = this._getGmWord("title");
        t({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: (r || this._randomPick(o.titles)).key
        });
      } else t();
    }
  }
  onDynRateShow_shouldShow(e, t) {
    var i = this._isCondA(),
      o = this._isCondB(),
      r = this._isCondC(),
      n = this._isCondD();
    if (i || o || r || n || GameUtils.isFullComboTriggered()) {
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: false
      });
    } else {
      t();
    }
  }
  onGameMod_modifyWin(e, t) {
    this._takeSnapshot();
    t();
  }
  onGameMod_modifyWinTile2(e, t) {
    this._takeSnapshot();
    t();
  }
  _takeSnapshot() {
    var e = UserModel.getInstance().getCurrentGameData();
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
  }
  _handleShowWinView(e) {
    if (cc.isValid(e)) {
      var t;
      if (GameUtils.isFullComboTriggered()) t = this._pickWordForFullCombo();else {
        var i = this._resolveCondPool();
        t = i ? this._getGmWord("content") || this._randomPick(i.words) : null;
      }
      if (t) {
        var o = e._lblSubtitle;
        o && cc.isValid(o.node) && I18NStrings.setText(o.node, t.default, t.key);
      }
    }
  }
  _resolveCondPool() {
    if (void 0 !== this._condPool) return this._condPool;
    var e = [],
      t = [];
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
    } else this._condPool = null;
    return this._condPool;
  }
  _pickWordForFullCombo() {
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
  }
  _getGmWord(e) {
    var t,
      i = null === (t = this._gmPickConfig) || void 0 === t ? void 0 : t[e];
    if (!i) return null;
    var o = this._getWordsByCond(i.cond, e);
    return !o || i.index < 1 || i.index > o.length ? null : o[i.index - 1];
  }
  _getWordsByCond(e, t) {
    if ("title" === t) switch (e) {
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
  }
  _loadGmPickConfig() {
    this._gmPickConfig = {};
    var e = cc.sys.localStorage.getItem(WinPraiseWordsTrait.GM_PICK_STORAGE_KEY);
    if (e) try {
      var t = JSON.parse(e);
      t && "object" == typeof t && (this._gmPickConfig = t);
    } catch (e) {}
  }
  gmReloadPickConfig() {
    this._loadGmPickConfig();
    this._condPool = void 0;
  }
  _isCondA() {
    return !!this._snapshot && this._snapshot.roundTime < this._snapshot.tileCount * this._mul;
  }
  _isCondB() {
    return !!this._snapshot && this._snapshot.replayCount < 1 && 0 === this._snapshot.usedRevive;
  }
  _isCondC() {
    return !!this._snapshot && this._snapshot.replayCount >= this._replayCount;
  }
  _isCondD() {
    return !!this._snapshot && this._snapshot.usedShuffle + this._snapshot.usedHitTips + this._snapshot.usedRevert > 0;
  }
  _randomPick(e) {
    return e[Math.floor(Math.random() * e.length)];
  }
}