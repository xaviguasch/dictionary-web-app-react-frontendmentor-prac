import classes from './NoDefinitionsFound.module.css'

const NoDefinitionsFound = () => {
  return (
    <div className={classes.NoDefinitionsFound}>
      <span className={classes.emoji}>😕</span>
      <h2 className={classes.title}>No Definitions Found</h2>
      <p className={classes.text}>
        Sorry pal, we couldn't find definitions for the word you were looking for. You can
        try the search again at later time or head to the web instead.
      </p>
    </div>
  )
}

export default NoDefinitionsFound
