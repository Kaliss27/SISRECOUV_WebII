import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
        backgroundColor: '#66CC66',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        color: '#000000',
        fontFamily: 'Arial',
        
    },
}));

export default function Header(props) {
    const classes = useStyles();
    const { sections, title } = props;

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Typography
                    component="h1"
                    variant="h4"
                    color="inherit"
                    align="center"
                    fontFamily='Helvetica Neue'
                    noWrap

                    className={classes.toolbarTitle}
                >
                    {title}
                </Typography>
            </Toolbar>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {sections.map((section) => (
                    <Router>
                        <Link
                            color="inherit"
                            noWrap
                            key={section.title}
                            variant="body2"
                            to={classes.toolbarLink}
                            className={classes.toolbarLink}
                        >
                            {section.title}
                        </Link>
                    </Router>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};