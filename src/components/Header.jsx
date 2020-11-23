import React from 'react';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/storm-advisory-outline'

const Header = () => {
    return (
        <header className="header">
            <h1> <Icon icon={locationIcon}></Icon>Natural Events Tracker</h1>
        </header>
    )}

export default Header
