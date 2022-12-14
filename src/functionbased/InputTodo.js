/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      // eslint-disable-next-line react/destructuring-assignment
      props.addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">
        <AiOutlinePlusCircle color="darkcyan" size="20px" />
      </button>
    </form>
  );
};

export default InputTodo;
