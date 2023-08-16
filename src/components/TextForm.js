import React, { useState } from "react";

export default function TextForm(props) {
  
    const handleUpClick = () => {
    // console.log("Upercase was Clicked.");
    
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase.!","success")
  };

  const handleRemoveExtraSpace = () => {
    // console.log("Upercase was Clicked.");
    
    let newText = text.replace(/\s+/g," ");
    setText(newText)
    props.showAlert("Extra spaces have been removed. Your text is now more concise and easier to read.","success")
  };

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase.!","success")

  }

  const handleOnChange = (event) => {
    // console.log("On change");
    // console.log(event)
    console.log(event.target)
    setText(event.target.value)  
  };

  const handleCopy = ()=>{
    // let textarea = document.getElementById("myBox");
    // textarea.select();
    navigator.clipboard.writeText(text)
    // document.getSelection().removeAllRanges();
    props.showAlert("The text has been copied to the clipboard.","success")


  }

  const handleClear = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("The text has been cleared.","success")
    

  }

  


  const [text, setText] = useState("");

  //   setText("new text");
  

  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?'white':'black'}}>
      <h1> {props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'#333333':'white',color: props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
        Convert To UpperCase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
        Convert To LowerCase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpace}>
        Remove Extra Spaces
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
        Copy Text
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>
        Clear Text
      </button>
      
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p><b>{text.split(/\s+/).filter((element) => {return element.length!==0}).length}</b> words and <b>{text.length}</b> charecters.</p>
      <p> <b>~ {text.split(" ").filter((element) => {return element.length!==0}).length * 0.008}</b> Minutes to read</p>
      <h2>Preview</h2>
      <p><i>{text.length>0?text:"Nothing To Preview.!"}</i></p>
    </div>
    </>
  );
}
