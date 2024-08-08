import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, CardMedia, Container, Grid, Link, Rating, Tooltip, Typography } from '@mui/material';

// third party
import { motion } from 'framer-motion';

// assets
import AnimateButton from 'components/@extended/AnimateButton';
import techBootstrap from 'assets/images/landing/tech-bootstrap.svg';
import techReact from 'assets/images/landing/tech-react.svg';
import techMui from 'assets/images/landing/tech-mui.svg';
import techCodeigniter from 'assets/images/landing/tech-codeigniter.svg';
import techNet from 'assets/images/landing/tech-net.svg';
import techFigma from 'assets/images/landing/tech-figma.svg';

// ==============================|| LANDING - HeaderPage ||============================== //

const HeaderPage = () => {
  const theme = useTheme();

  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ pt: { md: 0, xs: 8 }, pb: { md: 0, xs: 5 } }}>
        <Grid item xs={12} md={9}>
          <Grid container spacing={3} sx={{ textAlign: 'center' }}>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '1.825rem', sm: '2rem', md: '3.4375rem' },
                    fontWeight: 700,
                    lineHeight: 1.2
                  }}
                >
                  <span>Explore One of the </span>
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(90deg, rgb(37, 161, 244), rgb(249, 31, 169), rgb(37, 161, 244)) 0 0 / 400% 100%',
                      color: 'transparent',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      animation: 'move-bg 24s infinite linear',
                      '@keyframes move-bg': {
                        '100%': {
                          backgroundPosition: '400% 0'
                        }
                      }
                    }}
                  >
                    <span>Featured Dashboard </span>
                  </Box>
                  <span> Template in Themeforest</span>
                </Typography>
              </motion.div>
            </Grid>
            <Grid container justifyContent="center" item xs={12}>
              <Grid item xs={8}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30,
                    delay: 0.2
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontSize: { xs: '0.875rem', md: '1rem' },
                      fontWeight: 400,
                      lineHeight: { xs: 1.4, md: 1.4 }
                    }}
                  >
                    Able Pro is the one of the Featured admin dashboard template in Envato Marketplace and used by over 2.5K+ Customers
                    wordwide.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4
                }}
              >
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <AnimateButton>
                      <Button component={RouterLink} to="/components-overview/buttons" size="large" color="secondary" variant="outlined">
                        Explore Components
                      </Button>
                    </AnimateButton>
                  </Grid>
                  <Grid item>
                    <AnimateButton>
                      <Button component={RouterLink} to="/login" target="_blank" size="large" color="primary" variant="contained">
                        Live Preview
                      </Button>
                    </AnimateButton>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.6
                }}
              >
                <Grid container spacing={3} justifyContent="center">
                  <Grid
                    item
                    sx={{
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        height: 30,
                        bottom: 10,
                        left: 'auto',
                        right: '-12px',
                        width: '1px',
                        background: theme.palette.divider
                      }
                    }}
                  >
                    <Rating name="read-only" value={4.5} size="small" readOnly />
                    <Typography variant="h4">
                      4.7/5
                      <span
                        style={{
                          fontSize: '75%',
                          fontWeight: 400,
                          margin: 5,
                          color: theme.palette.text.secondary
                        }}
                      >
                        Ratings
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5">
                      <span
                        style={{
                          fontSize: '75%',
                          fontWeight: 400,
                          color: theme.palette.text.secondary
                        }}
                      >
                        Sales
                      </span>
                    </Typography>
                    <Typography variant="h4">2.5K+</Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          position: 'absolute',
          bottom: { xs: -30, sm: 0 },
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
          background: theme.palette.background.paper,
          borderTop: `1px solid ${theme.palette.divider}`,
          borderBottom: `1px solid ${theme.palette.divider}`
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{
            '& > .MuiGrid-item': {
              borderRight: `1px solid ${theme.palette.divider}`,
              '&:first-of-type': {
                borderLeft: `1px solid ${theme.palette.divider}`
              },
              '& img': {
                padding: 1.3
              }
            }
          }}
        >
          <Grid item>
            <motion.div
              initial={{ opacity: 0, translateY: 550 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 30,
                delay: 0.8
              }}
            >
              <Tooltip title="Click to Preview Bootstrap 5">
                <Link component={Link} href="https://ableproadmin.com/dashboard/index.html" target="_blank">
                  <CardMedia component="img" image={techBootstrap} sx={{ width: 'auto' }} />
                </Link>
              </Tooltip>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div
              initial={{ opacity: 0, translateY: 550 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 30,
                delay: 0.9
              }}
            >
              <Tooltip title="Click to Preview React">
                <Link component={Link} href="https://ableproadmin.com/react/" target="_blank">
                  <CardMedia component="img" image={techReact} sx={{ width: 'auto' }} />
                </Link>
              </Tooltip>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div
              initial={{ opacity: 0, translateY: 550 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 30,
                delay: 1
              }}
            >
              <Tooltip title="Click to Preview React Material UI">
                <Link component={Link} href="https://ableproadmin.com/react/" target="_blank">
                  <CardMedia component="img" image={techMui} sx={{ width: 'auto' }} />
                </Link>
              </Tooltip>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div
              initial={{ opacity: 0, translateY: 550 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 30,
                delay: 1.1
              }}
            >
              <Tooltip title="Click to Preview CodeIgniter">
                <Link component={Link} href="https://ableproadmin.com/codeigniter/default/public/" target="_blank">
                  <CardMedia component="img" image={techCodeigniter} sx={{ width: 'auto' }} />
                </Link>
              </Tooltip>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div
              initial={{ opacity: 0, translateY: 550 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 30,
                delay: 1.2
              }}
            >
              <Tooltip title="Click to Preview ASP.net">
                <Link component={Link} href="https://able-pro.azurewebsites.net/" target="_blank">
                  <CardMedia component="img" image={techNet} sx={{ width: 'auto' }} />
                </Link>
              </Tooltip>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div
              initial={{ opacity: 0, translateY: 550 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 30,
                delay: 1.3
              }}
            >
              <Tooltip title="Figma Design System">
                <Link
                  component={Link}
                  href="https://www.figma.com/file/6XqmRhRmkr33w0EFD49acY/Able-Pro--v9.0-Figma-Preview?type=design&node-id=46-226114&mode=design&t=4FS2Lw6WxsmJ3RLm-0"
                  target="_blank"
                >
                  <CardMedia component="img" image={techFigma} sx={{ width: 'auto' }} />
                </Link>
              </Tooltip>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default HeaderPage;
