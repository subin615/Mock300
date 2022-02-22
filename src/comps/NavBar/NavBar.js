import React, { useContext } from "react";
import "./NavBar.scss";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Contexts from "../../Context/ContextApi";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function CustomizedBadges() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={0} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}



function NavBar() {
  const { products, cart, setCart } = useContext(Contexts);

  return (
    <div className="topbar">
      <div className="discountbar">
        <div>
          <p>Free Shipping on Everything</p>
        </div>
        <div>
          <p>LoveThyself Sale | Up to 50% Off Sign Up</p>
        </div>
      </div>
      <div className="navbar">
        <div>
          <img src="https://ii1.pepperfry.com/images/svg/pf-logo-21.svg" />
        </div>
        <div className="shop">
          <span>SHOP</span>
        </div>
        <div className="getinspired">
          <span>GET INSPIRED</span>
        </div>
        <div className="partner">
          <span>PARTNER</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="Door to happiness begins with a search"
          />
        </div>
        <div className="selectpin">
          <p>enter pincode</p>
          <p>select city</p>
        </div>
        <div className="navicons">
          <div>
           <FavoriteBorderIcon/>
          </div>
          <div>
            <StyledBadge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </div>
          <div>
            <PersonIcon />
          </div>
        </div>
      </div>

      <div className=" p-2 hoversearch">
        <span className=" ml-3">Furniture</span>
        <span className=" ml-3">Sofa&Recliner</span>
        <span className=" ml-3">Cabinatary</span>
        <span className=" ml-3">Beds</span>
        <span className=" ml-3">Matress</span>
        <span className=" ml-3">Furnishing</span>
        <span className=" ml-3">Decor</span>
        <span className=" ml-3">Lights</span>
        <span className=" ml-3">Appliances</span>
        <span className=" ml-3">Modular</span>
        <span className=" ml-3"> need Help? </span>
      </div>
    </div>
  );
}

export default NavBar;
