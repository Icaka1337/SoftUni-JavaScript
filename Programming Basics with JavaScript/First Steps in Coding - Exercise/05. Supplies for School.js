function supplies(input) {
  let penPack = 5.8;
  let markerPack = 7.2;
  let cleaningSupplies = 1.2;

  let penPackCount = Number(input.shift());
  let markerCount = Number(input.shift());
  let suppliesCount = Number(input.shift());
  let discount = Number(input.shift()) / 100;

  let totalSum =
    penPack * penPackCount +
    markerPack * markerCount +
    cleaningSupplies * suppliesCount;

  totalSum = totalSum - totalSum * discount;

  console.log(totalSum);
}