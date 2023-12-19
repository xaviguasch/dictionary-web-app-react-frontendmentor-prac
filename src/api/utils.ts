export async function fetchDictionaryWord(word: string) {
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

    if (res.ok === true) {
      return {
        error: null,
        response: await res.json(),
      }
    }

    throw new Error(`Error fetching word: ${word}`)
  } catch (err) {
    if (err instanceof Error) {
      return {
        error: err,
        response: null,
      }
    } else {
      // handle other errors
    }
  }
}
