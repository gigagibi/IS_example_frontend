import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NavButton.module.css'

export const NavButton = ({url, children}) => {
    return (
        <Link to={url} className={classes.NavButton}>
            {children}
        </Link>
    )
}
