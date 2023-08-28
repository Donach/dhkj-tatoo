import React, { useState } from "react";
import * as ReactDOM from "react-dom/client";
import { TextField, Container, Typography, Grid } from "@mui/material";
import ArtistCard from "./ArtistCard";

interface Artist {
  id: number;
  name: string;
  style: string;
  pictures: string[];
  location: string;
}

const tattooArtists: Artist[] = [
  {
    id: 1,
    name: "Artist 1",
    style: "Traditional",
    pictures: ["url1", "url2"],
    location: "HK"
  },
  {
    id: 2,
    name: "Artist 2",
    style: "Realism",
    pictures: ["url3", "url4"],
    location: "Praha"
  },
  {
    id: 3,
    name: "Artist 3",
    style: "Realism",
    pictures: ["url3", "url4"],
    location: "Brno"
  },
  {
    id: 4,
    name: "Artist 4",
    style: "Realism",
    pictures: ["url3", "url4"],
    location: "Plzeň"
  }
  // Add more artists here
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArtists = tattooArtists.filter((artist) =>
    artist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h4" style={{ margin: "20px 0" }}>
        Tattoo Artists
      </Typography>
      <TextField
        label="Search Artist"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <Grid container spacing={2}>
        {filteredArtists.map((artist) => (
          <Grid item xs={12} sm={6} md={4} key={artist.id}>
            <ArtistCard artist={artist} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

ReactDOM.createRoot(document.querySelector("#app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
