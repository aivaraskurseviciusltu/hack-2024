import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Stack,
} from "@mui/material";
import { Formik } from "formik";
import { styled } from "@mui/material/styles";
import * as yup from "yup";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Header from "../../components/Header";
import { MapContext } from "../../contexts/Map.context";
import Pin from "../../components/Map/pin";
import Pin1 from "../../components/Map/pin1";
import { useNavigate } from "react-router-dom";
import Map from "../../components/DraggablePinMap/Map";

const Report = () => {
  const [category, setCategory] = useState(""); // Set to empty string initially
  const [fileURI, setFileURI] = useState();
  const navigate = useNavigate();

  const { markers, updateMarkers } = useContext(MapContext);

  const [markerPosition, setMarkerPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  const handleFormSubmit = (values) => {
    const updatedValues = {
      description: values.description,
      latitude: markerPosition.latitude,
      longitude: markerPosition.longitude,
      image: fileURI,
      iconType: category,
    };
    updateMarkers([...markers, updatedValues]);

    setCategory(""); // Reset to empty string
    setFileURI(null);

    values.description = "";
    values.location = "";
    navigate("/");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURI = URL.createObjectURL(file);
      setFileURI(fileURI);
    }
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Box display="grid">
      <Header title="Add Report" subtitle="Create a New Report" />

      <Stack direction="column" spacing={2} style={{margin: '20px'}}>
        <Stack >
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
              <form onSubmit={handleSubmit}>
                <Box display="grid" gap="15px">
                  <FormControl variant="filled" fullWidth>
                    <InputLabel size="small" id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                      size="small"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={category}
                      label="category"
                      onChange={handleCategory}
                      error={!!touched.category && !!errors.category}
                      displayEmpty
                      sx={{
                        "& .MuiFilledInput-input": {
                          display: "flex",
                          alignItems: "center",
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                      </MenuItem>
                      <MenuItem value={"Alert"}>
                        <Pin1 iconType="Alert" /> Alert
                      </MenuItem>
                      <MenuItem value={"Wheelchair"}>
                        <Pin iconType="Wheelchair" /> Wheelchair
                      </MenuItem>
                      <MenuItem value={"Deaf"}>
                        <Pin iconType="Deaf" /> Deaf
                      </MenuItem>
                      <MenuItem value={"Blind"}>
                        <Pin iconType="Blind" /> Blind
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    size="small"
                    multiline
                    variant="filled"
                    type="text"
                    label="Description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    name="description"
                    error={!!touched.description && !!errors.description}
                    helperText={touched.description && errors.description}
                  />
                  <Button
                    component="label"
                    variant="outlined"
                    color="secondary"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload file
                    <input
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    <VisuallyHiddenInput type="file" />
                  </Button>
                  <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    onSubmit={handleFormSubmit}
                  >
                    Create
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Stack>
        <Stack>
          <Map setMarkerPosition={setMarkerPosition} />
        </Stack>
      </Stack>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  description: yup.string().required("required"),
});

const initialValues = {
  description: "",
};

export default Report;
