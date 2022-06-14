
import Alert from '@mui/material/Alert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Icon } from 'semantic-ui-react';
import MessageIcon from '@mui/icons-material/Message';
import { deepOrange, deepPurple, lightGreen } from '@mui/material/colors';
import './index.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { TabComponent, TableComponent } from '../../components'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react'
import Popper from '@mui/material/Popper';
import CancelIcon from '@mui/icons-material/Cancel';
import Chip from '@mui/material/Chip';
import BrushIcon from '@mui/icons-material/Brush';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import PowerIcon from '@mui/icons-material/Power';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import HomeIcon from '@mui/icons-material/Home';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Badge from '@mui/material/Badge';

export const Section2 = () => {
    const tableLabels1 = [{ label: "Overview" }, { label: "Commitment" }, { label: "Closing", icon: <VisibilityOffIcon />, iconPosition: "end" }, { label: "Recording" }, { label: "Policy" }]
    const tableLabels2 = [{ label: "Requirements(8)" }, { label: "Exceptions(20)" }, { label: "Closing", icon: <BrushIcon />, iconPosition: "start" }]
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const options = [
        'Send Email',
        'Filter Emails by Contact',
        'View Contact'
    ];

    const [anchorElPopper, setAnchorElPopper] = useState(null);

    const handleClickPopper = (event) => {
        setAnchorElPopper(anchorElPopper ? null : event.currentTarget);
    };

    const openPopper = Boolean(anchorElPopper);
    const id = openPopper ? 'simple-popper' : undefined;

    const FormInputComponent = () => {
        return (
            <>
                <FormControl variant="standard">

                    <Input
                        id="input-with-icon-adornment"
                        className="border"
                        startAdornment={
                            <InputAdornment position="start">
                                $
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </>
        )
    }

    const table1headers = ["Property", "#", "Details", "Code", "Instrument", "OL/DP", "Sno"]
    const rowdata1 = [[() => {
        return (
            <>
                <Button endIcon={<ExpandMoreIcon />} className="rounded-pill ms-1 greybutton" variant="secondary">1</Button>
            </>
        )
    }, 10, () => {
        return (
            <>

                <p className="text-primary"><LightbulbOutlinedIcon /> Show boiler plate items(9) </p>
                <p>This is requirement or except</p>
            </>
        )
    }, "R1234", "+Add", "OP", "ABC"],
    [() => {
        return (
            <>
                <Button endIcon={<ExpandMoreIcon />} className="rounded-pill ms-1 greybutton" variant="secondary">1</Button>
            </>
        )
    }, 10, "This is requirement or except", "R1234", "+Add", "OP", "XYZ"]
    ]

    const table2headers = ["Property", () => {
        return (
            <>
                <InvertColorsIcon /> Water <PowerIcon />
            </>
        )
    }, () => {
        <>

            Sewer<PowerIcon />
        </>
    }, () => {
        return (
            <div className="d-flex align-items-center">
                <i className="bi bi-sunglasses scale2transform me-2"></i>
                Final Readings
            </div>
        )
    }, "F/R Party", "F/R Date"]
    const rowdata2 = [
        ["One", () => {
            return (
                <>
                    <select className="form-select" aria-label="Default select example">

                    </select>
                </>
            )
        }, () => {
            <>
                <select className="form-select" aria-label="Default select example">

                </select>
            </>
        }, () => {
            return (
                <>
                    <select className="form-select" aria-label="Default select example">

                    </select>
                </>
            )
        }, () => {
            return (
                <>
                    <select className="form-select" aria-label="Default select example">

                    </select>
                </>
            )
        }, "11/09/20"]
    ]

    const table3headers = ["Property", "Start Up Free", "Regular Dues", "Transfer Fees", "Document Fees", "Processing Fees", "Total HOA"]
    const rowdata3 = [["One", () => <FormInputComponent />, () => <FormInputComponent />, () => <FormInputComponent />, () => <FormInputComponent />, () => <FormInputComponent />, () => <FormInputComponent />]]

    const table4headers = ["Property/ Mortgage", "Sale Price/ Mortagage", "Owners Insurance/ Lenders", "Loan", "Policy"]
    const rowdata4 = [["123 Main st. Florence, NJ", "$500,000.00", "$450,000.00", "#", "#"],
    [() => {
        return (
            <>
                <span className="me-3">Mortagage</span>
                <Badge badgeContent={4} color="primary">
                </Badge>
            </>
        )
    }, "$350,000.00", "$350,000.00", "#", "#"]
    ]
    return (
        <div className="mainsection">
            <div className="d-flex justify-content-between">
                <div className="lead">Property Details</div>
                <div className="d-flex">
                    <div className="text-danger">
                        <BorderColorIcon />
                        Highlight
                    </div>
                    <div className="text-purple">
                        <Icon name='detective' size='large' />
                        Audit
                    </div>
                    <div className="text-messagecolor">
                        <MessageIcon />
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">
                <div className="fs-4 text-break">123 Main Street, New York, NY</div>
                <div className="d-flex">
                    <Avatar variant="square" className="transformsmallerscale6smaller " sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                    <Avatar variant="square" className="transformsmallerscale6smaller " sx={{ bgcolor: deepPurple[500] }}>A</Avatar>
                    <Avatar variant="square" className="transformsmallerscale6smaller " sx={{ bgcolor: lightGreen[500] }}>B</Avatar>
                </div>
            </div>

            <div>
                <span className="rightnegativemargin">
                    42 Main Street, New York, NY, 46 Main Street. New York,NY
                </span>
                <Button className="rounded-pill ms-1 lightgreybutton transformsmallerscale7smaller ms-3" variant="secondary">Show Less</Button>
            </div>

            <div>
                <Alert className="text-dark" severity="error">This is a <strong>City of Network</strong> file, you may have issues retrieving the tax data in a timely manner."</Alert>
            </div>
            <div>
                <TabComponent Tabsdata={tableLabels1} />
            </div>
            <div className="border mt-3 alerts alertsection2">
                <span >
                    <Alert className="w-25" icon={false} severity="warning">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>Pending deal</div>
                            <div>
                                <KeyboardArrowDownIcon className="rotatedarrows" />
                            </div>
                        </div>

                    </Alert>
                </span>
                <div className="d-flex justify-content-center">
                    <div className="threecolumngrid mt-2 p-1">
                        <div >
                            <div >Underwriter</div>
                            <div>
                                <strong>Fidelity </strong>
                            </div>
                        </div>
                        <div>
                            <div>Comittment issued</div>
                            <div>
                                <strong>01/01/2020 </strong>
                            </div>
                        </div>
                        <div>
                            <div>Policy issued</div>
                            <div>
                                <strong>02/03/2020 </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="threecolumngrid mt-2 p-1 border" >
                <div>
                    <div className="lead verysmalltext">General </div>
                    <div>Purach Aser</div>
                </div>
                <div>
                    <div className="lead verysmalltext">Buyer </div>
                    <div><Alert icon={false} severity="warning">Missing Information</Alert> </div>
                </div>
                <div>
                    <div className="lead verysmalltext">Seller </div>
                    <div>Purach Aser</div>
                </div>
                <div>
                    <div className="lead verysmalltext">General </div>
                    <div>Purach </div>
                </div>
                <div>
                    <div className="lead verysmalltext">Attorney </div>
                    <div>Purach Aser</div>
                </div>
                <div>

                    <div className="lead verysmalltext">Attorney </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>Matt Blaine+2 </div>
                        <div className="d-flex align-items-center">
                            <PhoneEnabledIcon />
                            <EmailIcon className="lightgreenbackground" />

                            <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                id="long-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'long-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                {options.map((option) => (
                                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>

                        </div>


                        <div></div>
                    </div>
                </div>
                <div>
                    <div className="lead verysmalltext">Realtor </div>
                    <div>John Smith</div>
                </div>
                <div>
                    <div className="lead verysmalltext">Realtor </div>
                    <div >John Smith</div>
                </div>
                <div>
                    <div className="lead verysmalltext poppercontainer">Realtor </div>
                    <div aria-describedby={id} onClick={handleClickPopper}>John Smith</div>
                    <Popper id={id} open={openPopper} placement="right" anchorEl={anchorElPopper}>
                        <div >
                            <div className="d-flex justify-content-end">
                                <CancelIcon onClick={handleClickPopper} />
                            </div>
                            <Avatar variant="square" className="transformsmallerscale6smaller " sx={{ bgcolor: deepOrange[500] }}>Jo</Avatar>

                            <div className="lead textlightgrey smalltext">
                                Phone Number
                            </div>
                            <div>
                                (333) 333-4423 <Chip className="transformsmallerscale9smaller" label="Recent" color="success" />
                            </div>

                            <div>
                                (333) 333-4423 <Chip className="transformsmallerscale9smaller" label="Frequent" color="primary" />
                            </div>

                            <div className="lead textlightgrey smalltext">
                                Email
                            </div>
                            <div>john@smith.com</div>
                            <div className="lead textlightgrey smalltext">
                                Primary Contact
                            </div>
                            <div className="d-flex" >
                                <Avatar variant="square" className="transformsmallerscale8smaller ms-1" sx={{ bgcolor: deepOrange[500] }}>Jo</Avatar>
                                Cody Fisher
                            </div>
                            <div className="lead textlightgrey smalltext">
                                Notes
                            </div>

                            <div>
                                <Alert icon={false} className="lightyellowbackground">Usually easier to reach John through his secretary</Alert>
                            </div>
                        </div>

                    </Popper>
                </div>
                <div>
                    <div className="lead verysmalltext">General </div>
                    <div>Purach Aser</div>
                </div>
                <div>
                    <div className="lead verysmalltext">General </div>
                    <div>Purach Aser</div>
                </div>
                <div>
                    <div className="lead verysmalltext">General </div>
                    <div>Purach Aser</div>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <TabComponent Tabsdata={tableLabels2} />
                </div>
                <div className="d-flex">
                    <Button className="me-1" variant="contained">Simple</Button>
                    <Button variant="contained" color="success">Commitment</Button>
                </div>
            </div>
            <div>
                <TableComponent rowdata={rowdata1} headers={table1headers} />
            </div>
            <div className="d-flex align-items-center mt-3">
                <AddCircleOutlineIcon className="text-primary rightnegativemargin" />
                <Button className="rounded-pill ms-1 greybutton transformsmallerscale6smaller rightnegativemargin5" endIcon={<span className="text-primary">2</span>} variant="secondary">Show all resolved</Button>
                <Button className="rounded-pill ms-1 greybutton transformsmallerscale6smaller rightnegativemargin5" endIcon={<span className="text-primary">3</span>} variant="secondary">Show all omitted</Button>
                <Button className="rounded-pill ms-1 greybutton transformsmallerscale6smaller rightnegativemargin5" endIcon={<span className="text-primary">2</span>} variant="secondary">Show all deleted</Button>
            </div>
            <div>
                <TableComponent rowdata={rowdata2} headers={table2headers} />
            </div>
            <div className="mt-3">
                <TableComponent rowdata={rowdata3} headers={table3headers} />
            </div>

            <div className="d-flex justify-content-between align-items-center my-3">
                <div className="text-primary">
                    <AddCircleOutlineIcon />
                    <span className="mx-3">Add Property</span>
                    <AddCircleOutlineIcon />
                    <span className="ms-3">Add mortagage</span>
                </div>
                <div>
                    <HomeIcon />
                    <MonetizationOnIcon />
                </div>
            </div>
            <div className="mb-3">
                <TableComponent rowdata={rowdata4} headers={table4headers} />
            </div>
        </div>
    )
}