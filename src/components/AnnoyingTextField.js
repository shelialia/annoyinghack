import { useState, useEffect } from 'react';


// change everything after a like to be cats

export default function AnnoyingTextField() {
  const [text, setText] = useState('');
  const [letterIndex, setLetterIndex] = useState([]);

  function autoComplete(text) {
    letterCorrect(text) || wordCorrect(text);
  }

  function wordCorrect(text) {
    const has = (text, word) => text.slice(-1 * word.length) === word;
    let char_i = text.length - 1;

    if (has(text, "like") && !letterIndex.includes(char_i)) {
      setText(text + ' cats');
      setLetterIndex(letterIndex.concat([char_i]));
      return true;
    }
    else {
      setText(text);
    }
  }

  

  function letterCorrect(text) { // whenever a 'P' or an 'M' gets inputted into the text, change the P to Purr and M to Meow
    // TODO: scans the text from the back, if the last character is a P or M, autocomplete.
    let last_char = text.slice(-1).toLowerCase();
    let char_i = text.length - 1;

    const templateLetterCorrect = (char, add) => {
      if (last_char == char && !letterIndex.includes(char_i)) {
        setText(text + add);
        setLetterIndex(letterIndex.concat([char_i]));
        return true;
      }
    }

    return templateLetterCorrect('p', 'urr') || templateLetterCorrect('m', 'eow') || templateLetterCorrect('r', 'awr') || setText(text);
  }

  return (
    <div>
      <input
        style = {{width: 400, height: 50}}
        placeholder="Introduce yourself. Meow. Hint: Type p m or r"
        value={text}
        onChange={(event) => {
          autoComplete(event.target.value);
        }}
      />
    </div>
  );
}