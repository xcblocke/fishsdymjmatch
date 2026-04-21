export enum EItemType {
  None = 0,
  Shuffle = 1001,
  Hint = 1002,
  Undo = 1003,
}
(ItemTypeKey = {})[EItemType.None] = "none";
ItemTypeKey[EItemType.Shuffle] = "shuffle";
ItemTypeKey[EItemType.Hint] = "hitTips";
ItemTypeKey[EItemType.Undo] = "revert";
export var ItemTypeKey = ItemTypeKey;