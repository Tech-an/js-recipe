const character = {
  name: "AAA",
  mothoer: {
    name: "BBB",
  },
  hobbies: ["piano", "running"],
}

console.log(
  `${character.name}, ${character.mothoer.name}, ${character.hobbies[0]}`,
)

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) console.log(i)
}

// True
if ("こんにちは") {
  console.log("こんにちは")
}
