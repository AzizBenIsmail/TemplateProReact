import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Badge, Button, CardMedia, Container, Grid, Link, Typography } from '@mui/material';

// third party
import { motion } from 'framer-motion';

// project-imports
import FadeInWhenVisible from './Animation';
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';

// assets
import { DocumentDownload, ExportSquare } from 'iconsax-react';
import techBootstrap from 'assets/images/landing/tech-bootstrap.svg';
import techMui from 'assets/images/landing/tech-mui.svg';
import techCodeigniter from 'assets/images/landing/tech-codeigniter.svg';
import techNet from 'assets/images/landing/tech-net.svg';
import techFigma from 'assets/images/landing/tech-figma.svg';

const Technologies = [
  {
    trending: false,
    icon: techBootstrap,
    title: 'Bootstrap 5',
    description: "Able Pro - Boost your project's visual appeal and functionality with our Bootstrap 5 dashboard template.",
    preview: 'https://ableproadmin.com/dashboard/index.html',
    free: 'https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template'
  },
  {
    trending: true,
    icon: techMui,
    title: 'React Material-UI',
    description:
      'Able Pro React dashboard template is a powerful tool that utilizes the Material-UI component library to create stunning and intuitive user interfaces.',
    preview: 'https://ableproadmin.com/react',
    free: 'https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template'
  },
  {
    trending: false,
    icon: techNet,
    title: 'Asp.net',
    description:
      'Able Pro .NET version is a robust dashboard template designed specifically for .NET developers. Its comes with a wide range of pre-built components.',
    preview: 'https://able-pro.azurewebsites.net/',
    free: 'https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template'
  },
  {
    trending: false,
    icon: techCodeigniter,
    title: 'CodeIgniter',
    description:
      'Able Pro CodeIgniter version is a powerful dashboard template built specifically for developers who use the CodeIgniter PHP framework.',
    preview: 'https://ableproadmin.com/codeigniter/default/public/',
    free: 'https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template'
  },
  {
    trending: false,
    icon: techFigma,
    title: 'Figma',
    description:
      'Able Pro comes with a Figma design file that allows you to customize and fine-tune your dashboard to meet your specific needs.',
    preview:
      'https://www.figma.com/file/6XqmRhRmkr33w0EFD49acY/Able-Pro--v9.0-Figma-Preview?type=design&node-id=46-226114&mode=design&t=4FS2Lw6WxsmJ3RLm-0',
    free: null
  }
];

// ==============================|| LANDING - TechnologiesPage ||============================== //

const TechnologiesPage = () => {
  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
        <Grid item xs={12}>
          <Grid container spacing={2} sx={{ textAlign: 'center', marginBottom: 3 }}>
            <Grid item xs={12}>
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
                <Typography variant="h2">Available Technologies</Typography>
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
                  delay: 0.4
                }}
              >
                <Typography>Explore the Demos of Able Pro in multiple technologies.</Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} alignItems="center">
            {Technologies.map((tech, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <FadeInWhenVisible>
                  <MainCard>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        {tech.trending && (
                          <Badge badgeContent="TRENDING" color="error" variant="light">
                            <CardMedia component="img" image={tech.icon} sx={{ width: 'auto' }} />
                          </Badge>
                        )}
                        {!tech.trending && <CardMedia component="img" image={tech.icon} sx={{ width: 'auto' }} />}
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h4">{tech.title}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>{tech.description}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={2} justifyContent="flex-start">
                          <Grid item>
                            <Button
                              variant="contained"
                              color="secondary"
                              size="large"
                              startIcon={<ExportSquare />}
                              component={Link}
                              href={tech.preview}
                              target="_blank"
                              sx={{
                                fontWeight: 500,
                                bgcolor: 'secondary.light',
                                color: 'secondary.darker',
                                '&:hover': { color: 'secondary.lighter' }
                              }}
                            >
                              Reference
                            </Button>
                          </Grid>
                          {!(tech.free == null) && (
                            <Grid item>
                              <Link component={RouterLink} to={tech.preview}>
                                <IconButton
                                  size="large"
                                  shape="rounded"
                                  color="secondary"
                                  sx={{
                                    bgcolor: 'secondary.lighter',
                                    color: 'secondary.darker',
                                    '&:hover': { color: 'secondary.lighter', bgcolor: 'secondary.darker' }
                                  }}
                                >
                                  <DocumentDownload />
                                </IconButton>
                              </Link>
                            </Grid>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </MainCard>
                </FadeInWhenVisible>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default TechnologiesPage;
