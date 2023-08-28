import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid
} from "@mui/material";

interface Artist {
  id: number;
  name: string;
  style: string;
  pictures: string[];
}

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card onClick={handleOpen} style={{ cursor: "pointer" }}>
        <CardContent>
          <Typography variant="h6">{artist.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            Style: {artist.style}
          </Typography>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{artist.name}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {artist.pictures.map((picture, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <img
                  src={picture}
                  alt={`Artwork ${index}`}
                  style={{ width: "100%" }}
                />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ArtistCard;
