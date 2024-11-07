export type Label = {
  htmlFor: string;
  name: string;
};

export type InputProps = {
  id: string;
  name: string;
  type?: string;
  className?: string;
  placeholder: string;
  min?: number;
  max?: number;
  numberMessage?: string;
  regex?: RegExp | null;
  required: string | boolean;
  message?: string;
};

export interface IcontactsData {
  label: Label;
  input: InputProps;
}
