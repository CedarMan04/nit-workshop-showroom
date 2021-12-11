import React from 'react'
import { 
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
 } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "30px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
        <>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            フィジカルコンピューティング工房
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      </>
  )
}
export default Header