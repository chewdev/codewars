function rgb(r, g, b) {
  let hex = "";
  [r, g, b].forEach(item => {
    const newItem = item > 255 ? 255 : item < 0 ? 0 : item;
    const newHex = newItem.toString(16);
    hex = hex.concat(newHex.length > 1 ? newHex : "0" + newHex);
  });

  return hex.toUpperCase();
}

rgb(50, 300, -10); // 32FF00
