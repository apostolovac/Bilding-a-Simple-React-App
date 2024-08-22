const quotes = [
"A coder in progress, always evolving.",
"Learning one line at a time.",
"Building skills, one bug at a time.",
"Code today, master tomorrow.",
"Exploring the web, one project at a time.",
"Constantly debugging, always improving.",
"A developer in the making, learning every day.",
"Coding through curiosity, growing with every keystroke.",
"From novice to pro, step by step.",
"Writing code, rewriting the future.",
]

const Quotes = () => {
    return (
      <>
        <h3>Here are messages for a web developer who is still learning:</h3>
        <ul>
          {quotes.map((quote, index) => {
            return <li key={`${quote}-${index}`}>{quote}</li>;
          })}
        </ul>
      </>
    );
  };
  export default Quotes;