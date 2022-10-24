import { View, Text } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import Button from "../Button";

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <Button
      buttonClassName="bg-[#57b831] py-2 px-4 rounded-lg mt-5"
      textClassName="font-[sansMedium] text-white text-center"
      onPress={handleSubmit}
    >
      {title}
    </Button>
  );
}
