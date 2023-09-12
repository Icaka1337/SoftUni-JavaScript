function area(input) {
  let figure = input.shift();

  if (figure == "square") {
    let a = Number(input.shift());

    let area = a * a;
    console.log(area.toFixed(3));
  } else if (figure == "rectangle") {
    let a = Number(input.shift());
    let b = Number(input.shift());

    let area = a * b;

    console.log(area.toFixed(3));
  } else if (figure == "circle") {
    let r = Number(input.shift());

    let area = Math.PI * r * r;
    console.log(area.toFixed(3));
  } else if (figure == "triangle") {
    let a = Number(input.shift());
    let h = Number(input.shift());

    let area = (a * h) / 2;
    console.log(area.toFixed(3));
  }
}