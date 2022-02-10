import { useLocation, NavLink } from 'react-router-dom';

export default function CustomNavLink({ to, ...props }) {
  let location = useLocation();
  
  return <NavLink to={to + location.search} {...props} />
}

