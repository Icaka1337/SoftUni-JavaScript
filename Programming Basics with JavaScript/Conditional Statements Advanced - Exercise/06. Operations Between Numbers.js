function operations(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let operator = input.shift();
  
    let result;
    let evenOrOdd;
  
    let show = true;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        if (result % 2 == 0) {
          evenOrOdd = "even";
        } else {
          evenOrOdd = "odd";
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
        break;
      case "-":
        result = num1 - num2;
        if (result % 2 == 0) {
          evenOrOdd = "even";
        } else {
          evenOrOdd = "odd";
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
        break;
      case "*":
        result = num1 * num2;
        if (result % 2 == 0) {
          evenOrOdd = "even";
        } else {
          evenOrOdd = "odd";
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
        break;
      case "/":
        if (num1 == 0) {
          console.log(`Cannot divide ${num2} by zero`);
          break;
        } else if (num2 == 0) {
          console.log(`Cannot divide ${num1} by zero`);
          break;
        } else {
          result = num1 / num2;
        }
  
        console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`);
        break;
      case "%":
          if (num1 == 0) {
              console.log(`Cannot divide ${num2} by zero`);
              break;
            } else if (num2 == 0) {
              console.log(`Cannot divide ${num1} by zero`);
              break;
            } else {
              result = num1 % num2;
            }
            console.log(`${num1} ${operator} ${num2} = ${result}`);
    }
  }