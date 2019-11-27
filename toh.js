function TOH (num, source, dest, temp) {
  // n++;
  if (num === 1) {
    console.log(`${source} -> ${dest}`)
    return;
  }

  TOH(num - 1, source, temp, dest)
  console.log(`${source} -> ${dest}`)
  TOH(num - 1, temp, dest, source)
  // console.log(n)
}
TOH (3, 'A', 'C', 'B')