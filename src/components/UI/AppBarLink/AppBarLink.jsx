import { Button } from '@mui/material';
import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import cl from './AppBarLink.module.css';

const AppBarLink = ({ to, title }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });
  return (
    <Button>
      <Link className={match ? cl.active_link : cl.link} to={to}>
        {title}
      </Link>
    </Button>
  );
};

export default AppBarLink;
