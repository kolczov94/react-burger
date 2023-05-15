import { useState, useCallback, ChangeEvent } from "react";

type TInputValues = {
  [name: string]: string;
};

export function useForm(inputValues: TInputValues) {
  const [values, setValues] = useState<TInputValues>(inputValues);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  return { values, handleChange, setValues };
}
