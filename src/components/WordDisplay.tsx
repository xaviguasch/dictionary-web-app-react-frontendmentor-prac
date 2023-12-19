import React from 'react'
import styles from './WordDisplay.modules.css'

const WordDisplay = ({ data }) => {
  const { word, phonetic, meanings, sourceUrls } = data
  console.log(data)
  return (
    <div>
      <div>
        <div>
          <h1>{word}</h1>
          <span>{phonetic}</span>
        </div>
        <div>icon-play</div>
        {meanings.map((meaning) => {
          const { partOfSpeech, definitions, synonyms } = meaning
          return (
            <div key={partOfSpeech}>
              <h2>{partOfSpeech}</h2>

              <h3>Meaning</h3>
              <ul>
                {definitions.map((def) => {
                  return (
                    <li key={def.definition}>
                      <p>{def.definition}</p>

                      <span> {def.example && <span>{def.example}</span>}</span>
                    </li>
                  )
                })}
              </ul>

              <h3>Synonyms</h3>
              {synonyms.map((syn) => (
                <span key={syn}>{syn}</span>
              ))}
            </div>
          )
        })}

        <h4>Source</h4>
        {sourceUrls.map((sURL) => (
          <a key={sURL} href={sURL}>
            {sURL}
          </a>
        ))}
      </div>
    </div>
  )
}

export default WordDisplay
