import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AdminContext } from "../contexts/AdminProvider";
import {
  Container,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  InputLabel,
} from "@mui/material";

function AdminEditPage() {
  const { getWatchToEdit, watchToEdit, saveEditedWatch } =
    React.useContext(AdminContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [year, setYear] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [country, setCountry] = React.useState("");

  const handleSubmit = () => {
    const editedWatch = {
      name,
      brand,
      price,
      year,
      photo,
      country,
      id,
    };
    for (let i in editedWatch) {
      if (typeof editedWatch[i] === "string") {
        if (!editedWatch[i]) {
          alert("All fields must be filled");
          return;
        }
      }
    }
    saveEditedWatch(editedWatch);
    navigate("/admin");
  };

  React.useEffect(() => {
    getWatchToEdit(id);
  }, []);

  React.useEffect(() => {
    if (watchToEdit) {
      setName(watchToEdit.name);
      setBrand(watchToEdit.brand);
      setPrice(watchToEdit.price);
      setYear(watchToEdit.year);
      setPhoto(watchToEdit.photo);
      setCountry(watchToEdit.country);
    }
  }, [watchToEdit]);
  return (
    <div className="admin-edit-page">
      <h2>Edit</h2>
      <Container>
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
            type="number"
            label="Price"
            variant="standard"
          />
          <TextField
            value={year}
            onChange={(e) => setYear(e.target.value)}
            type="date"
            label="Date"
            variant="standard"
          />
          <TextField
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            label="Photo"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel>Country</InputLabel>
            <Select value={country} onChange={(e) => setName(e.target.value)}>
              <MenuItem value="china">China</MenuItem>
              <MenuItem value="japan">Japan</MenuItem>
              <MenuItem value="germany">Germany</MenuItem>
              <MenuItem value="italy">Italy</MenuItem>
              <MenuItem value="switzerland">Switzerland</MenuItem>
              <MenuItem value="czech">Czech</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default AdminEditPage;
