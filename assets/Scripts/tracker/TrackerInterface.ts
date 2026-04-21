export var EGameStepCmd = {
  Invalid: "n",
  KillPair: "e",
  Undo: "u",
  Hint: "h",
  Shuffle: "is",
  ReviveShuffle: "s",
  AutoMerge: "a",
  Default: "error"
};
export enum EClearType {
  Single = 1,
  Multi = 2,
  Drag = 3,
  AutoMerge = 4,
  Bomb = 5,
  AutoMergeBomb = 6,
  Duoxiao = 7,
  Daxiao = 8,
}
export enum EBlockStatus {
  Movable = 0,
  FullVisible = 1,
  PartialVisible = 2,
  Invisible = 3,
}