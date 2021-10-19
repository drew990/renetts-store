import { Grid, TextField } from "@material-ui/core";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const CustomTextField = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        defaultValue=""
        name={name}
        control={control}
        render={({ field }) => (
          <TextField {...field} fullWidth label={label} required />
        )}
      />
    </Grid>
  );
};

export default CustomTextField;
