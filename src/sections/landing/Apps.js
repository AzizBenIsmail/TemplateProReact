import { useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material';

// project-imports
import FadeInWhenVisible from './Animation';

// third-party
import Slider from 'react-slick';

// assets
import featureChat from 'assets/images/landing/chat.png';
import featureEcommerce from 'assets/images/landing/e-commerce.png';
import featureMail from 'assets/images/landing/mail.png';
import featureSocial from 'assets/images/landing/social.png';

const Technologies = [
  {
    image: featureChat,
    title: 'Chat',
    href: 'chat',
    description: 'Power your web apps with the conceptual chat app of Able Pro Dashboard Template.'
  },
  {
    image: featureEcommerce,
    title: 'E-commerce',
    href: 'ecommerce',
    description: 'Collection, Filter, Product Detail, Add New Product, and Checkout pages makes your e-commerce app complete.'
  },
  {
    image: featureMail,
    title: 'Inbox',
    href: 'mail',
    description: 'Compose Message, List Message (email), Detailed Inbox pages well suited for any conversation based web apps.'
  },
  {
    image: featureSocial,
    title: 'User Management',
    href: 'social',
    description: 'Detailed pages for User Management like Profile settings, role, account settings, social profile and more to explore.'
  }
];
// ==============================|| LANDING - AppsPage ||============================== //

const AppsPage = () => {
  const theme = useTheme();

  const [slideIndex, setSlideIndex] = useState(0);

  function handleChange(value) {
    goToSlide(value);
    setSlideIndex(value);
  }
  const [state, setState] = useState(0);
  const sliderRef = useRef(null);

  const goToSlide = (index) => {
    setState(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const settings = {
    fade: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: function (currentSlide) {
      setSlideIndex(currentSlide);
    }
  };

  return (
    <Box sx={{ bgcolor: theme.palette.primary.main }}>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ pt: { md: 10, xs: 2.5 } }}>
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="center" sx={{ textAlign: 'center', marginBottom: 3 }}>
              <Grid item xs={12}>
                <Typography variant="h2" color="white">
                  Working Conceptual Apps
                </Typography>
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography color="white">
                  Each App is carefully crafted to achieve the best feature rich working concept for your project
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ pt: { md: 10, xs: 2.5 }, pb: { md: 24, xs: 2.5 } }}>
          <Grid item xs={12}>
            <Grid container spacing={3} alignItems="start">
              <Grid item xs={12} md={6}>
                <Grid container spacing={1.5} alignItems="center">
                  {Technologies.map((tech, index) => (
                    <Grid item xs={12} key={index}>
                      <FadeInWhenVisible>
                        <Box>
                          <Button
                            onClick={() => {
                              handleChange(index);
                            }}
                            // eslint-disable-next-line
                            role="a"
                            href={`#${tech.href}`}
                            sx={{
                              p: 3,
                              borderRadius: 1.5,
                              ...(slideIndex === index && {
                                background: theme.palette.secondary.lighter + 20,
                                boxShadow: theme.customShadows.z1,
                                '&:hover': {
                                  background: theme.palette.secondary.lighter + 20,
                                  boxShadow: theme.customShadows.z1
                                }
                              })
                            }}
                            variant="light"
                          >
                            <Grid container textAlign="start" spacing={2}>
                              <Grid item xs={12}>
                                <Typography variant="h4" color="white">
                                  {tech.title}
                                </Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <Typography color="white">{tech.description}</Typography>
                              </Grid>
                            </Grid>
                          </Button>
                        </Box>
                      </FadeInWhenVisible>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    mt: 4,
                    position: 'absolute',
                    width: '150%'
                  }}
                >
                  <Slider ref={sliderRef} {...settings}>
                    {Technologies.map((tech, index) => (
                      <Box key={index + state} sx={{ width: '100%', minHeight: '100%', textAlign: 'center' }}>
                        <CardMedia component="img" image={tech.image} sx={{ width: '100%', minHeight: '100%' }} />
                      </Box>
                    ))}
                  </Slider>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default AppsPage;
