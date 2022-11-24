var programming_languages = [
	"129",
]

function value() {
  return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}

export { value }