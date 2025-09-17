import * as yup from "yup";

export const characterSchema = yup.object().shape({
  name: yup.string(),
  age: yup.number(),
  wand: yup.string(),
});

export type InferTypeCharacterSchema = yup.InferType<typeof characterSchema>;
