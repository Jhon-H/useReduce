import React, { useState } from 'react'

const useForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState);

  const reset = () => {
    setForm(initialState)
  };

  const handleInputChange = ({ name, value }) => {
    setForm({
      ...form,
      [name]: value
    })
  };

  return [form, handleInputChange, reset];
}

export default useForm;