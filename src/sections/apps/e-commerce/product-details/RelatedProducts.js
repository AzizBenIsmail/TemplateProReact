import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Button,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Rating,
  Stack,
  Typography
} from '@mui/material';

// project-imports
import Loader from 'components/Loader';
import Avatar from 'components/@extended/Avatar';
import SimpleBar from 'components/third-party/SimpleBar';
import IconButton from 'components/@extended/IconButton';

import { dispatch, useSelector } from 'store';
import { getRelatedProducts } from 'store/reducers/product';
import { openSnackbar } from 'store/reducers/snackbar';

// assets
import { Heart } from 'iconsax-react';

const prodImage = require.context('assets/images/e-commerce', true);

const ListProduct = ({ product }) => {
  const theme = useTheme();
  const history = useNavigate();

  const [wishlisted, setWishlisted] = useState(false);
  const addToFavourite = () => {
    setWishlisted(!wishlisted);
    dispatch(
      openSnackbar({
        open: true,
        message: 'Added to favourites',
        variant: 'alert',
        alert: {
          color: 'success'
        },
        close: false
      })
    );
  };

  const linkHandler = (id) => {
    history(`/apps/e-commerce/product-details/${id}`);
  };

  return (
    <ListItemButton divider onClick={() => linkHandler(product.id)}>
      <ListItemAvatar>
        <Avatar
          alt="Avatar"
          size="xl"
          color="secondary"
          variant="rounded"
          type="combined"
          src={product.image ? prodImage(`./thumbs/${product.image}`) : ''}
          sx={{ borderColor: theme.palette.divider, mr: 1 }}
        />
      </ListItemAvatar>
      <ListItemText
        disableTypography
        primary={<Typography variant="subtitle1">{product.name}</Typography>}
        secondary={
          <Stack spacing={1}>
            <Typography color="text.secondary">{product.description}</Typography>
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Typography variant="h5">{product.salePrice ? `$${product.salePrice}` : `$${product.offerPrice}`}</Typography>
                {product.salePrice && (
                  <Typography variant="h6" color="textSecondary" sx={{ textDecoration: 'line-through' }}>
                    ${product.offerPrice}
                  </Typography>
                )}
              </Stack>
              <Rating name="simple-controlled" value={product.rating < 4 ? product.rating + 1 : product.rating} readOnly precision={0.1} />
            </Stack>
          </Stack>
        }
      />
      <ListItemSecondaryAction>
        <IconButton
          size="medium"
          color="secondary"
          sx={{ opacity: wishlisted ? 1 : 0.5, '&:hover': { bgcolor: 'transparent' } }}
          onClick={addToFavourite}
        >
          {wishlisted ? (
            <Heart variant="Bold" style={{ fontSize: '1.15rem', color: theme.palette.error.main }} />
          ) : (
            <Heart style={{ fontSize: '1.15rem' }} />
          )}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItemButton>
  );
};

ListProduct.propTypes = {
  product: PropTypes.object
};

// ==============================|| PRODUCT DETAILS - RELATED PRODUCTS ||============================== //

const RelatedProducts = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState([]);
  const { relatedProducts } = useSelector((state) => state.product);

  useEffect(() => {
    setRelated(relatedProducts);
  }, [relatedProducts]);

  useEffect(() => {
    dispatch(getRelatedProducts(id)).then(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let productResult = <></>;
  if (related) {
    productResult = (
      <List
        component="nav"
        sx={{
          '& .MuiListItemButton-root': {
            borderRadius: 0,
            my: 0,
            px: 3,
            py: 2,
            alignItems: 'flex-start',
            '& .MuiListItemSecondaryAction-root': {
              alignSelf: 'flex-start',
              ml: 1,
              position: 'relative',
              right: 'auto',
              top: 'auto',
              transform: 'none'
            },
            '& .MuiListItemAvatar-root': { mr: 1, mt: 0.75 }
          },
          p: 0
        }}
      >
        {related.map((product, index) => (
          <ListProduct key={index} product={product} />
        ))}
      </List>
    );
  }
  if (loading) return <Loader />;

  return (
    <SimpleBar sx={{ height: { xs: '100%', md: 'calc(100% - 62px)' } }}>
      <Grid item>
        <Stack>
          {productResult}
          <Button color="secondary" variant="outlined" sx={{ mx: 2, my: 4, textTransform: 'none' }}>
            View all Products
          </Button>
        </Stack>
      </Grid>
    </SimpleBar>
  );
};

RelatedProducts.propTypes = {
  id: PropTypes.string
};

export default RelatedProducts;
