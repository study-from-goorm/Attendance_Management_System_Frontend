// material-ui
import { Box, IconButton, Link, useMediaQuery } from '@mui/material';
import { GithubOutlined } from '@ant-design/icons';

// project import
// import Search from './Search';
// import Profile from './Profile';
// import Notification from './Notification';
// import MobileSection from './MobileSection';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  return (
    <>
      <IconButton
        component={Link}
        href="https://github.com/codedthemes/mantis-free-react-admin-template"
        target="_blank"
        disableRipple
        color="secondary"
        title="Download Free Version"
        sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
      >
        <GithubOutlined />
      </IconButton>

      {/* <Notification />
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />} */}
    </>
  );
};

export default HeaderContent;