import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const { formState } = form;
  const { errors } = formState;
  const hasErrors =
    Object.entries(errors).length > 0 &&
    formState.touchedFields[name] !== undefined;
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          disabled={disabled}
          error={!!hasErrors}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
}

export default InputField;
