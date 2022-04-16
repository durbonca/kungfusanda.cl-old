import { StyledContainer, Item } from './styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <StyledContainer>
      <Item>
        <Box sx={{ flexGrow: 1, justifyContent: 'right', display: { xs: 'none', md: 'flex' } }}>
          <a href="https://wa.me/56951787063" target="_blank" rel="noreferrer">
            <IconButton>
              <WhatsAppIcon />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/kungfuguangong/" target="_blank" rel="noreferrer">
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </a>
          <a href="https://www.facebook.com/kungfulaflorida/" target="_blank" rel="noreferrer">
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </a>
        </Box>
      </Item>
      <Item>
        Kung Fu La Florida © {year} - Made by{' '}
        <a href="https://durbonca.com" target="_blank" rel="noreferrer">
          @durbonca
        </a>
      </Item>
    </StyledContainer>
  );
};
