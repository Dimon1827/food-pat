import { render } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';

export function renderWithReactHookForm(ui, { defaultValues = {} } = {}) {
  let reactHookFormMethods = {};

  const Wrapper = ({ children }) => {
    const methods = useForm({ defaultValues });
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  return {
    ...render(ui, { wrapper: Wrapper }),
  };
}