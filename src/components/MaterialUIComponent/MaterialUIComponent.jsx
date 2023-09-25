import React from "react";
import {
  Button,
  TextField,
  Checkbox,
  FormGroup,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  ThemeProvider,
} from "@mui/material";

// Importa el tema personalizado que has definido
import theme from "../../muiTheme"; // Asegúrate de que la ruta sea correcta

function MaterialUIComponent() {
  const [text, setText] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [gender, setGender] = React.useState("male");
  const [fruit, setFruit] = React.useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleFruitChange = (event) => {
    setFruit(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ maxWidth: "400px", margin: "0 auto", padding:"2vh" }}>
        <h1
          style={{
            fontSize: "2em",
            color: theme.palette.secondary.main,
            fontWeight: "bold",
          }}
        >
          Material UI
        </h1>
        <TextField
          label="Text"
          variant="outlined"
          value={text}
          onChange={handleTextChange}
          style={{ marginBottom: "16px", width: "100%", fontSize:"1em" }}
        />
        <Button variant="contained" color="primary" style={{ width: "100%" }}>
          Material-UI Button
        </Button>
        <FormGroup style={{ marginTop: "16px" }}>
          <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={handleCheckboxChange} />
            }
            label="Check this"
          />
        </FormGroup>
        <FormControl component="fieldset" style={{ marginTop: "16px" }}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender"
            value={gender}
            onChange={handleGenderChange}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
        </FormControl>
        <FormControl
          variant="outlined"
          style={{ marginTop: "16px", width: "100%", marginBottom: "5vh" }}
        >
          <InputLabel htmlFor="fruit-label">Fruit</InputLabel>
          <Select
            value={fruit}
            onChange={handleFruitChange}
            label="Fruit"
            inputProps={{ id: "fruit-label" }}
            style={{ width: "100%" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="apple">Apple</MenuItem>
            <MenuItem value="banana">Banana</MenuItem>
            <MenuItem value="cherry">Cherry</MenuItem>
          </Select>
        </FormControl>
      </div>
    </ThemeProvider>
  );
}

export default MaterialUIComponent;
