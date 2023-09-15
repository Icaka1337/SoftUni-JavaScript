function password(input) {
  let username = input.shift();
  let password = input.shift();

  let data = input.shift();

  while (data != password)
  {
    data= input.shift()
  }

  console.log(`Welcome ${username}!`)
}