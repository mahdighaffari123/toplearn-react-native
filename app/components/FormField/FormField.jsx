import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import InputField from "../InputField/InputField";
export default function FormField({ name, ...otherProps }) {
  const { touched, handleChange, setFieldTouched, errors } = useFormikContext();
  return (
    <>
      <InputField
        {...otherProps}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
      />
      {touched[name] && <ErrorMessage error={errors[name]} />}
    </>
  );
}
