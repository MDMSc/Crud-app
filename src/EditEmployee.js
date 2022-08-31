import React from 'react';
import { Button, Paper, Typography, TextField } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function EditEmployee({rows, button}) {
  const {id} = useParams();
  const emp = rows[id];
  const { name, age, dept, loc } = emp;
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: name,
      age: age,
      dept: dept,
      loc: loc 
    },
    onSubmit: () => {
      rows.splice(id, 1, {
        name: formik.values.name,
        age: formik.values.age,
        dept: formik.values.dept,
        loc: formik.values.loc
      });
      navigate("/");
    },
    validationSchema: yup.object({
      name: yup.string().required("Required!!!"),
      age: yup.number().required("Required!!!").positive().integer().max(100, "Invalid age!!!"),
      dept: yup.string().required("Required!!!"),
      loc: yup.string().required("Required!!!")
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
          {button? "View Employee Details" : "Edit Employee Details"}
        </Typography>

        <form onSubmit={formik.handleSubmit}>
        <TextField
          id="standard-name"
          label="Employee Name"
          variant={ button? "filled" : "standard" }
          name="name"
          InputProps={{
            readOnly: button
          }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (<div className="error">{formik.errors.name}</div>) : null}
        <TextField
          id="standard-age"
          label="Age"
          variant={ button? "filled" : "standard" }
          name="age"
          InputProps={{
            readOnly: button
          }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
        />
        {formik.touched.age && formik.errors.age ? (<div className="error">{formik.errors.age}</div>) : null}
        <TextField
          id="standard-dept"
          label="Department"
          variant={ button? "filled" : "standard" }
          name="dept"
          InputProps={{
            readOnly: button
          }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.dept}
        />
        {formik.touched.dept && formik.errors.dept ? (<div className="error">{formik.errors.dept}</div>) : null}
        <TextField
          id="standard-loc"
          label="Location"
          variant={ button? "filled" : "standard" }
          name="loc"
          InputProps={{
            readOnly: button
          }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.loc}
        />
        {formik.touched.loc && formik.errors.loc ? (<div className="error">{formik.errors.loc}</div>) : null}
        {button? "" : <Button
          type='submit'
          color="primary"
          variant="contained"
        >
          Add Employee
        </Button>}
        </form>
      </Paper>
    </div>
  )
}
