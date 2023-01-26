import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Header() {
  return (
    <div className="top-navbar">
      <div className="nav-left">
        <MenuIcon sx={{ fontSize: 30 }} />
        <HomeOutlinedIcon sx={{ fontSize: 30 }} />
      </div>
      <div className="nav-right">
        <AddIcon sx={{ fontSize: 30 }} />
        <CalendarMonthIcon sx={{ fontSize: 30 }} />
      </div>
    </div>
  );
}
