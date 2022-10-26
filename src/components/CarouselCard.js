import React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';

import Button from '@mui/material/Button';

// mui icons
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// 3rd party


// react icons

import { FaRegHeart } from 'react-icons/fa';
import {
  carouselDot,
  fixedIcon,
  carouselImage,
  fixedBottom,
} from 'themes/commonStyles';
import './Cards.css';

const CarouselCard = ({ location }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = location.locationImages.length; // so that we know how many dots

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1); // jumps when we click the next arrow
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1); // when we click the back arrow
  };


  return (
    <Box
      className="carouselCard"
      sx={{
        flexGrow: 1,
        position: 'relative',
      }}
    >
      <Box sx={fixedIcon}>
        <FaRegHeart size={24} color="#fff" />
      </Box>

      {location.locationImages.length && (
        // <SwipeableViews
        //   axis={'x'}
        //   index={activeStep}
        //   onChangeIndex={handleStepChange}
        //   enableMouseEvents
        // >
        <Box>
          {location.locationImages.map((step, index) => {
            return (
              <span key={step.id}>
                <Box
                  component="img"
                  sx={carouselImage}
                  src={step.url}
                  alt={step.id}
                ></Box>
                
              </span>
            );
          })}
        </Box>
      )}

      <Box sx={fixedBottom}>
        <MobileStepper
          sx={{ backgroundColor: 'transparent' }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              sx={carouselDot}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              sx={carouselDot}
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </Box>

      
    </Box>
  );
};

export default CarouselCard;