import React from "react";
import { Button, Paper, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';

const initialValues = {
  name: "",
  age: "",
  dept: "",
  loc: ""
}

export default function AddEmployee({ rows, setRows }) {
  
  const navigate = useNavigate();

  const formik = new useFormik({
    initialValues,
    onSubmit: () => {
      setRows([...rows, {
        name: formik.values.name,
        age: formik.values.age,
        dept: formik.values.dept,
        loc: formik.values.loc,
      }]);
      navigate("/");
    },
    validationSchema: yup.object({
      name: yup.string().required("Required!!!"),
      age: yup.number().required("Required!!!").positive().integer().max(100, "Invalid age!!!"),
      dept: yup.string().required("Required!!!"),
      loc: yup.string().required("Required!!!"),
    })
  })

  return (
    <div>
      <Paper
        elevation={24}
        sx={{ minWidth: 650, paddingBottom: 3, paddingTop: 3 }}
        className="add-container"
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold", marginBottom: 5 }}
        >
          Add New Employee
        </Typography>

        <form onSubmit={formik.handleSubmit}>
        <TextField
          id="outlined-name"
          label="Employee Name"
          variant="outlined"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        { formik.touched.name && formik.errors.name ? (<div className="error">{formik.errors.name}</div>) : null}
        <TextField
          id="outlined-age"
          label="Age"
          variant="outlined"
          name="age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
        />
        { formik.touched.age && formik.errors.age ? (<div className="error">{formik.errors.age}</div>) : null}
        <TextField
          id="outlined-dept"
          label="Department"
          variant="outlined"
          name="dept"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.dept}
        />
        { formik.touched.dept && formik.errors.dept ? (<div className="error">{formik.errors.dept}</div>) : null}
        <TextField
          id="outlined-loc"
          label="Location"
          variant="outlined"
          name="loc"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.loc}
        />
        { formik.touched.loc && formik.errors.loc ? (<div className="error">{formik.errors.loc}</div>) : null}
        <Button
          type="submit"
          color="primary"
          variant="contained"
        >
          Add Employee
        </Button>
        </form>
      </Paper>
    </div>
  );
}
