import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import AssessmentIcon from '@material-ui/icons/Assessment';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const SidebarData = [
    {
        title: "Overview",
        icon: <PersonIcon />,
        link: '/overview',
    },
    {
        title: "Mailbox",
        icon: <MailIcon />,
        link: '/mailbox',
    },
    {
        title: "Analytics",
        icon: <AssessmentIcon />,
        link: '/analytics',
    },
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: '/dashboard',
    },
    {
        title: "Friends",
        icon: <GroupIcon />,
        link: '/friends',
    },
    {
        title: "Images",
        icon: <PermMediaIcon />,
        link: '/images',
    },
    {
        title: "Todo",
        icon: <ListIcon />,
        link: '/todo',
    },
]
