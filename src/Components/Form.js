import React, {useState} from 'react'

export default function Form(props) {
  const [text, setText] = useState('');
  // setText("I'm setting");


  const handeler = (event) => {
    setText(event.target.value);
  }

  const handelupcli = () =>{
    let newText =text.toUpperCase();
    setText(newText);
  }

  const handelupclilow = () =>{
    let newText =text.toLowerCase();
    setText(newText);
  }

  return (
    <div>
      <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value  ={text} onChange={handeler} id="mybox " rows="10"></textarea>
  <button type="button" onClick={handelupcli} className="btn btn-primary mx-2">uppercase</button>
  <button type="button" onClick={handelupclilow} className="btn btn-primary mx-2">lowercase</button>
</div>

<div className="mb-3">
  <p>Need count??</p>
  <p>{text.split(" ").length} and {text.length}  </p>
  <p>{0.008* text.split(" ").length} min is requirred to read</p>
  <h3>Preview</h3>
  <p>{text}</p>
</div>
    </div>
  )
}
