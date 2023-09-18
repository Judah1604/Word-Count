import "./Styles/common.css";
import "./Styles/card.css";
import { useState } from "react";

function App() {
    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);

    function handleInput(e) {
		let newText = e.target.value;
		let newWordCount = newText.trim().split(' ').length
		let newCharCount = newText.trim().split('').length
		
		newText ? setWordCount(newWordCount) : setWordCount(0)
		newText ? setCharCount(newCharCount) : setCharCount(0)
        setText(newText);
    }

    return (
        <>
            <h1>Word Count App</h1>

            <textarea
                id="textarea"
                name="textarea"
                placeholder="Enter text here..."
                value={text}
                onChange={(e) => handleInput(e)}
            ></textarea>
            <div className="count">
                <div className="words">
                    Words: <span className="text">{wordCount}</span>
                </div>
                <div className="chars">
                    Characters: <span className="text">{charCount}</span>
                </div>
            </div>
        </>
    );
}

export default App;
