import React from 'react';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/pine-tree-fire'

const Header = () => {
    return (
        <header className="header">
            <h1> <Icon icon={locationIcon}></Icon>Wildfire Tracker</h1>
        </header>
    )}

export default Header
