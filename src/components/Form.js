import React, { useState } from "react";
export default function Form(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("Lowercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleSenClick = () => {
    let newText = text
      .toLowerCase()
      .replace(/(^|\s)\S/g, (L) => L.toUpperCase());
    setText(newText);
  };
  const handleTrimSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleClearClick = () => {
    // console.log("Lowercase was Clicked" + text);
    let newText = " ";
    setText(newText);
  };
  const [text, setText] = useState(" ");
  //    setText=(newText);
  return (
    <>
      <p className={`text-${props.shade}`}>
        <br />
        <div className="short_head"><em>Get your clean and desired document with</em></div>
      </p>
      <p className="heading">{props.heading} </p>


      <div className="container">
        <div className="mb-2">
          <textarea
            className={`form-control bg-${props.cover} text-${props.shade}`}
            value={text}
            id="exampleFormControlTextarea1"
            rows="15"
            placeholder="Enter Text Here"
            onChange={handleOnChange}
          ></textarea>
        </div>
     

        <div class="input-group mb-3">
          <input type="file" class="form-control" id="inputGroupFile02" />
          <label class="input-group-text" for="inputGroupFile02">
            Upload
          </label>
        </div>
        
<br />
        <div className="container2">
          {/* <div className="btn-group d-grid gap-2 col-6 mx-auto" role="group"> */}
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-danger dropdown-toggle px-4"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lettercase
            </button>
            <ul className="dropdown-menu px-4">
              <button className="dropdown-item" onClick={handleUpClick}>
                Uppercase
              </button>
              <button className="dropdown-item" onClick={handleLoClick}>
                Lowercase
              </button>
              <button className="dropdown-item" onClick={handleSenClick}>
                Sentence Case
              </button>
            </ul>
          </div>
          <div className="btn-group mx-1" role="group">
            <button
              type="button"
              className="btn btn-danger dropdown-toggle px-4"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Whitespaces
            </button>
            <ul className="dropdown-menu px-3">
              <button className="dropdown-item" onClick={handleTrimSpaces}>
                Trim
              </button>
              <button className="dropdown-item">Remove leading/Trailing</button>
              <button className="dropdown-item">Remove blank line</button>
            </ul>
          </div>
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-danger dropdown-toggle px-4"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Duplicates
            </button>
            <ul className="dropdown-menu px-4">
              <button className="dropdown-item">Remove Duplicate lines</button>
              <button className="dropdown-item">Remove Duplicate words</button>
            </ul>
          </div>
        </div>

        <br />
        <br />
        <div className={`container1  text-${props.cover}`}>
          <h3>Text Summary</h3>
          <p className={`container1 text-${props.shade}`}>
            {text.length} Characters and {text.trim().split(" ").length} Words
          </p>
          <p className={`container1 text-${props.shade}`}>{0.008 * text.split(" ").length} Minutes Read</p>
  
          <h3>Preview</h3>
          <p className={`container1 text-${props.shade}`}>{text}</p>
        </div>

        <br />
        <div className="button">
          <button type="button" className="btn btn-primary px-4 mx-1" onClick={handleCopy}> Copy</button>
          <button type="button" className="btn btn-primary px-4" onClick={handleClearClick}>  Clear </button>
        </div>
      </div>
      <br /><br /><br /><br />
      <hr /><br /><br />
    </>
  );
}
