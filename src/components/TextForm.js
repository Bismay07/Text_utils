import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Changed to Upper Case', 'success');
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Changed to Lower Case', 'success');
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert('Text is cleared', 'success');
    }

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }
    
    const [text, setText] = useState('Enter the text here');

    return (
        <>
            <h2 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="Textarea1" onChange={handleOnChange} value={text} rows="10" style={{backgroundColor: props.mode === 'dark' ? '#2f343b' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
            </div>
            <button className="btn btn-outline-primary" onClick={handleUpClick} >Upper case</button>
            <button className="btn btn-outline-primary mx-3" onClick={handleLoClick} >Lower case</button>
            <button className="btn btn-outline-primary mx-3" onClick={handleClearClick} >Clear</button>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
            </div>
        </>
    )
}
