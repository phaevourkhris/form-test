import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Checkbox } from "@mui/material";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Header from "../components/header";
import HeadeFooter from "../components/footer";
export default function Register() {
  return (
    <div>
      <Header />
      <div className="itex-banner">
        <div className="itex-banner-cover">
          <div className="itex-banner-text">
            Register to become a chef in your neighbourhood
          </div>
        </div>
      </div>
      <div className="itex-form-section wf-section">
        <div className="itex-form">
          <div className="itex-form-header">
            Please enter your details below
          </div>
          <p>
            Disclaimer: Any information inputted is confidential and not to be
            re-shared with any party.
          </p>
          <div>
            <form>
              <div className="radio-div">
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="gender"
                    defaultValue="female"
                    name="radio-buttons-group"
                    row
                  >
                    <FormControlLabel
                      style={{ marginRight: "100px" }}
                      value="female"
                      control={
                        <Radio style={{ color: "rgba(6, 79, 75, 1)" }} />
                      }
                      label="Individual"
                    />
                    <FormControlLabel
                      value="male"
                      control={
                        <Radio style={{ color: "rgba(6, 79, 75, 1)" }} />
                      }
                      label="Corporate"
                    />
                  </RadioGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "rgba(6, 79, 75, 1)",
                          "&.Mui-checked": {
                            color: "rgba(6, 79, 75, 1)",
                          },
                        }}
                      />
                    }
                    label="Add a family member"
                  />
                </FormControl>
              </div>

              <div className="individual-form">
                <TextField
                  className="textfield-control"
                  id="outlined-basic"
                  label="First Name"
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  className="textfield-control"
                  id="outlined-basic"
                  label="Last Name"
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  className="textfield-control"
                  id="outlined-basic"
                  label="NIN Number"
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {/* <TextField
                  className="textfield-control"
                  id="outlined-basic"
                  label="Email address*"
                  InputLabelProps={{
                    shrink: true,
                  }}
                /> */}
                <TextField
                  className="textfield-control"
                  id="outlined-basic"
                  label="Email Address"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <FormControl fullWidth>
                  <InputLabel required id="demo-simple-select-label">
                    Zone
                  </InputLabel>
                  <Select
                    className="textfield-control"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Zone"
                    value="Zone"
                  >
                    <MenuItem value={10}>My Zone</MenuItem>
                    <MenuItem value={20}>Your Zone</MenuItem>
                    <MenuItem value={30}>Our Zone</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel required id="demo-simple-select-label">
                    State
                  </InputLabel>
                  <Select
                    className="textfield-control"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="State"
                    value="State"
                  >
                    <MenuItem value={10}>Lagos</MenuItem>
                    <MenuItem value={20}>Abuja</MenuItem>
                    <MenuItem value={30}>Imo</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel required id="demo-simple-select-label">
                    Order of Importance
                  </InputLabel>
                  <Select
                    className="textfield-control"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Order"
                    value="Order"
                  >
                    <MenuItem value={10}>Order 1</MenuItem>
                    <MenuItem value={20}>Order 2</MenuItem>
                    <MenuItem value={30}>Order 3</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel required id="demo-simple-select-label">
                    Limited Importance
                  </InputLabel>
                  <Select
                    className="textfield-control"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Limited"
                    value="Limited"
                  >
                    <MenuItem value={10}>Option 1</MenuItem>
                    <MenuItem value={20}>Option 2</MenuItem>
                    <MenuItem value={30}>Option 3</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </form>
          </div>
          <button type="submit" class="itex-form-submit-btn">
            Submit
          </button>
        </div>
      </div>
      <HeadeFooter />
    </div>
  );
}
