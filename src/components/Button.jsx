import React from 'react';
import '../styles/Button.css'

function Button({ text, href }) {
    return (
      <a href={href} className="dynamic-btn">
        {text}
      </a>
    );
  }
  
  export default Button;
  