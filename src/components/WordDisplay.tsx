import React from 'react'
import classes from './WordDisplay.module.css'

import PlayIcon from '../assets/images/icon-play.svg?react'
import NewWindowIcon from '../assets/images/icon-new-window.svg?react'

const WordDisplay = ({ data }) => {
  const { word, phonetic, meanings, sourceUrls, phonetics } = data
  console.log(data)

  if (word === 'not found') {
    return <p>not found</p>
  }

  const playAudio = () => {
    const urlAudio = phonetics.find((pho) => pho.audio).audio

    const audio = new Audio(urlAudio)

    audio.play()
  }

  return (
    <div className={classes.WordDisplay}>
      <div>
        <div className={classes.mainWord}>
          <h1 className={classes.word}>{word}</h1>
          <span className={classes.phonetic}>{phonetic}</span>
          <PlayIcon onClick={playAudio} className={classes.playIcon} />
        </div>

        <div className={classes.info}>
          {meanings.map((meaning) => {
            const { partOfSpeech, definitions, synonyms } = meaning
            return (
              <div key={partOfSpeech} className={classes.partOfSpeech}>
                <div className={classes.lineGroup}>
                  <h2 className={classes.partOfTitle}>{partOfSpeech}</h2>
                  <span className={classes.horizontalLine}></span>
                </div>

                <h3 className={classes.meaning}>Meaning</h3>

                <ul className={classes.list}>
                  {definitions.map((def) => {
                    return (
                      <li key={def.definition}>
                        <p>{def.definition}</p>

                        {def.example && <p className={classes.example}>{def.example}</p>}
                      </li>
                    )
                  })}
                </ul>

                {synonyms.length > 0 && (
                  <div className={classes.synonymGroup}>
                    <h3 className={classes.synonyms}>Synonyms</h3>

                    <div className={classes.synonymResults}>
                      {synonyms.map((syn) => (
                        <span key={syn}>{syn}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}

          <div className={classes.divider}></div>

          <h3 className={classes.source}>Source</h3>
          {sourceUrls.map((sURL) => (
            <a key={sURL} href={sURL} className={classes.url}>
              {sURL}
              <NewWindowIcon className={classes.newWindowIcon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WordDisplay
