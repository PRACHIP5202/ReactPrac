import React, {useState} from 'react'

export default function Form(props) {
  const [text, setText] = useState('Enter text here');
  // setText("I'm setting");


  const handeler = (event) => {
    console.log("on change");
    setText(event.target.value);
  }

  const handelupcli = (event) =>{
    console.log("Uppercase was clicked");
    let newText =text.toUpperCase();
    setText(newText);
  }


  return (
    <div>
      
<div className="mb-3">
  
  <h1>{props.heading}</h1>
  <textarea className="form-control" value  ={text} onChange={handeler} id="mybox " rows="10"></textarea>
  <button type="button" onClick={handelupcli} class="btn btn-primary">submit</button>
</div>
    </div>
  )
}
