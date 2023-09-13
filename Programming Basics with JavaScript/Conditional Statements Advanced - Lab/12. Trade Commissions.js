function tradeCommissions(input) {
  let city = input.shift();
  let sales = Number(input.shift());
  let commission;
  let error = false;

  if (city == "Sofia") {
    if (sales >= 0 && sales <= 500) {
      commission = 5;
    } else if (sales > 500 && sales <= 1000) {
      commission = 7;
    } else if (sales > 1000 && sales <= 10000) {
      commission = 8;
    } else if (sales > 10000) {
      commission = 12;
    } else {
      error = true;
    }
  } else if (city == "Varna") {
    if (sales >= 0 && sales <= 500) {
      commission = 4.5;
    } else if (sales > 500 && sales <= 1000) {
      commission = 7.5;
    } else if (sales > 1000 && sales <= 10000) {
      commission = 10;
    } else if (sales > 10000) {
      commission = 13;
    } else {
      error = true;
    }
  } else if (city == "Plovdiv") {
    if (sales >= 0 && sales <= 500) {
      commission = 5.5;
    } else if (sales > 500 && sales <= 1000) {
      commission = 8;
    } else if (sales > 1000 && sales <= 10000) {
      commission = 12;
    } else if (sales > 10000) {
      commission = 14.5;
    } else {
      error = true;
    }
  } else {
    error = true;
  }

  commission /= 100;

  if (!error) {
    console.log((sales * commission).toFixed(2));
  } else {
    console.log("error");
  }
}