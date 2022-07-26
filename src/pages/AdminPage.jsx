import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { AdminContext } from "../contexts/AdminProvider";
import { Delete, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";

function AdminPage() {
  const { getWatches, watches, deleteWatch } = React.useContext(AdminContext);

  React.useEffect(() => {
    getWatches();
  }, []);

  return (
    <Container>
      <h2>Admin CP</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Photo</TableCell>
            <TableCell>#</TableCell>
            <TableCell>#</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {watches.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.brand}</TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>{item.year}</TableCell>
              <TableCell>
                <img width={100} src={item.photo} />
              </TableCell>
              <TableCell>
                <Link to={`/admin/edit/${item.id}`}>
                  <Edit />
                </Link>
              </TableCell>
              <TableCell>
                <Delete onClick={() => deleteWatch(item.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default AdminPage;
