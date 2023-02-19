function getMoneySpent(keyboards, drives, b) {
  let maxSpent = -1;
  for (let i = 0; i < keyboards.length; i++) {
    const keyboardPrice = keyboards[i];
    for (let j = 0; j < drives.length; j++) {
      const drivePrice = drives[j];
      if (
        keyboardPrice + drivePrice <= b &&
        keyboardPrice + drivePrice > maxSpent
      ) {
        maxSpent = keyboardPrice + drivePrice;
      }
    }
  }
  return maxSpent;
}
