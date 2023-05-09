import { useState, useCallback } from "react";

export function useForm(inputValues) {
  const [values, setValues] = useState(inputValues);

  const handleChange = useCallback((event) => {
    const { value, name } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  return { values, handleChange, setValues };
}
