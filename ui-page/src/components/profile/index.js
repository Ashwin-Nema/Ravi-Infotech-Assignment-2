import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import HardwareIcon from '@mui/icons-material/Hardware';
import { Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import { StyledEngineProvider } from '@mui/material/styles';
import { useState, useRef, useEffect } from 'react'
import * as React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

export const ProfileComponent = (props) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const { Description, email, cc, smallicon, hammer, newuser, encrypted } = props
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === "Escape") {
            setOpen(false);
        }
    }

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);
    console.log(props)
    return (
        <div className="bg-white mt-3 p-2">
            <div className="d-flex">
                <div className="me-3">
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                </div>
                <div className="d-flex flex-column smalltext">
                    <div className="d-flex align-items-center">
                        <span className="ms-2 me-1">{email}</span>
                        {hammer && <HardwareIcon className="tiltedhammer" color='primary' />}
                    </div>
                    <div className="d-flex align-items-center">

                        {cc && <Chip label="CC" className="transformsmallerscale8smaller rightnegativemargin1" />}
                        {smallicon && <Avatar className="transformsmallerscale6smaller " sx={{ bgcolor: deepOrange[500] }}>N</Avatar>}
                        <span className={`${!encrypted && 'ms-2'}`}>{email}</span>
                        {newuser && <Chip label="NEW" className={`lightorangechip transformsmallerscale7smaller ${encrypted && 'rightnegativemargin'}`} />}
                        {encrypted &&
                            <Button className="lightgreenbackground transformsmallerscale6smaller" variant="contained" endIcon={<LockIcon color="success" />} >

                                ENCRYPTED
                            </Button>
                        }

                    </div>
                </div>
            </div>
            {typeof Description === 'function' ? <Description /> : <p className='mt-3'>{Description}</p>}

            <div className="space-between align-items-center mt-3">
                <div>
                    <ArrowBackIosNewIcon className="transformsmallerscale6smaller" variant="contained" color="primary" />
                    <DoubleArrowIcon className="rotatedarrows me-1" variant="contained" color="primary" />
                    <span className="text-primary me-2">All</span>
                    <StarBorderIcon className="transformsmallerscale8smaller" color="primary" />
                    <DensitySmallIcon className="transformsmallerscale6smaller" color="primary" />
                </div>
                <div>
                    <StyledEngineProvider injectFirst>
                        <Button
                            ref={anchorRef}
                            id="composition-button"
                            aria-controls={open ? "composition-menu" : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                        >
                            <ExpandMoreIcon className="transformsmallerscale6smaller" variant="contained" color="primary" />
                            Save
                        </Button>
                        <Popper
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            placement="bottom-start"
                            transition
                            disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin:
                                            placement === "bottom-start" ? "left top" : "left bottom"
                                    }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList
                                                autoFocusItem={open}
                                                id="composition-menu"
                                                aria-labelledby="composition-button"
                                                onKeyDown={handleListKeyDown}
                                            >
                                                <MenuItem onClick={handleClose}>Searches</MenuItem>
                                                <MenuItem onClick={handleClose}>Commitment</MenuItem>
                                                <MenuItem onClick={handleClose}>Payoffs & Invoices</MenuItem>
                                                <MenuItem onClick={handleClose}>Policy</MenuItem>
                                                <MenuItem onClick={handleClose}>Other</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </StyledEngineProvider>
                    23 October 11:27
                </div>
            </div>
        </div>
    )
}