import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project-imports
import useAuth from 'hooks/useAuth';
import AuthWrapper2 from 'sections/auth/AuthWrapper2';
import AuthForgotPassword from 'sections/auth/auth-forms/AuthForgotPassword';

// ================================|| FORGOT PASSWORD ||================================ //

const ForgotPassword = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AuthWrapper2>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Forgot Password</Typography>
            <Typography
              component={Link}
              to={isLoggedIn ? '/auth/login2' : '/login2'}
              variant="body1"
              sx={{ textDecoration: 'none' }}
              color="primary"
            >
              Back to Login
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthForgotPassword />
        </Grid>
      </Grid>
    </AuthWrapper2>
  );
};

export default ForgotPassword;
