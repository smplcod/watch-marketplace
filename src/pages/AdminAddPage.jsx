import {
  Container,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import React from "react";
import { AdminContext } from "../contexts/AdminProvider";

function AdminAddPage() {
  const { sendNewWatch } = React.useContext(AdminContext);

  const [name, setName] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [year, setYear] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [country, setCountry] = React.useState("");

  const handleSubmit = () => {
    const newWatch = {
      name: name.trim(),
      brand: brand.trim(),
      price,
      year: year.trim(),
      photo: photo.trim(),
      country: country.trim(),
    };
    for (let i in newWatch) {
      // if (typeof newWatch[i] === "string")
      if (!newWatch[i]) {
        alert("All fields must be filled");
        return;
      }
    }

    sendNewWatch(newWatch);
    setName("");
    setBrand("");
    setYear("");
    setPhoto("");
    setCountry("");
    setPrice("");
  };

  return (
    <div className="admin-add-page">
      <Container>
        <h2>Add products</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            variant="standard"
          />
          <TextField
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            label="Brand"
            variant="standard"
          />
          <TextField
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            label="Price"
            variant="standard"
            type="number"
          />
          <TextField
            value={year}
            onChange={(e) => setYear(e.target.value)}
            label="Year"
            variant="standard"
            type="date"
          />
          <TextField
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            label="Photo"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel>Country</InputLabel>
            <Select
              onChange={(e) => setCountry(e.target.value)}
              label="Country"
              value="country"
            >
              <MenuItem value="china">China</MenuItem>
              <MenuItem value="japan">Japan</MenuItem>
              <MenuItem value="germany">Germany</MenuItem>
              <MenuItem value="italy">Italy</MenuItem>
              <MenuItem value="switzerland">Switzerland</MenuItem>
              <MenuItem value="czech">Czech</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" type="submit">
            Add
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default AdminAddPage;
