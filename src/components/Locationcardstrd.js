import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { locations as cardLocations } from 'data/mock-data';
import Cards from './Cards';

const Locationcardstrd = () => {
  const [cards] = React.useState(cardLocations);
  if (!cards.length) {
    return null;
  }
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={0} columnSpacing={3}>
        {cards.map((locationimg) => {
          return (
            <Grid key={locationimg.id} item xs={0} sm={3} md={2} lg={3}>
              <Cards locationimg={locationimg} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Locationcardstrd;