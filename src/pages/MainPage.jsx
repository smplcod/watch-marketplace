import React from "react";
import {
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ClientContext } from "../contexts/ClientProvider";

function MainPage() {
  const { getWatches, watches } = React.useContext(ClientContext);
  React.useEffect(() => {
    getWatches();
  }, []);
  return (
    <div className="main-page">
      <Container>
        <h2>All watches catalog</h2>
        <div className="products">
          {watches.map((item) => (
            <Card key={item.id} className="product-card">
              <CardMedia component="img" height={140} image={item.photo} />
              <CardContent>
                <Typography
                  className="product-card-title"
                  gutterBottom
                  variant="h5"
                >
                  {item.name}
                </Typography>
                <ul className="product-card-ul">
                  <li>
                    <span>Brand:</span>
                    <span>{item.brand}</span>
                  </li>
                  <li>
                    <span>Year:</span>
                    <span>{item.year}</span>
                  </li>
                  <li>
                    <span>Country:</span>
                    <span>{item.country}</span>
                  </li>
                  <li>
                    <span>Price:</span>
                    <span>{item.price}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default MainPage;
