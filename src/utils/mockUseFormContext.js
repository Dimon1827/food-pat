import { useFormContext } from "react-hook-form";

export function mockUseFormContext(errors) {
  useFormContext.mockReturnValue({
    register: jest.fn(),
    formState: {
      errors: errors,
    },
  });
}


