import { useRef, useEffect } from "react";

export function CarDetails({ initialData }) {
  const formRef = useRef();

  useEffect(() => {
    formRef.current.model.value = initialData.model;
    formRef.current.year.value = initialData.year;
    formRef.current.color.value = initialData.color;
  }, [initialData]);

  return (
    <div>
      <form ref={formRef}>
        <input name="model"></input>
        <input name="year"></input>
        <input name="color"></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
