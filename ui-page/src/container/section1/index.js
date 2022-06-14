import SvgIcon from '@mui/material/SvgIcon';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import WrapTextIcon from '@mui/icons-material/WrapText';
import { AlertComponent, ProfileComponent, TabComponent } from '../../components';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Chip from '@mui/material/Chip';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';


export const Section1 = () => {
  const Tabsdata = [{ className:"text-primary", label:"NJ-9A9837"}, {className:"text-primary",label:"Change"}, {icon:<StarBorderIcon />, iconPosition:"start", className:"text-primary", label:"Highlight"}, {iconPosition:"start" ,className:"text-primary", label:"Files", icon:<FolderOpenOutlinedIcon />} ]

  const profile1props = {
    email: "bryan.com", hammer: true, cc: true, smallicon: true, newuser: true, encrypted: true,
    Description: () => {
      return (
        <>
          <p>
            Yes closing is still on. I think <span className="text-success">$5000</span> for the repairs is fine. Please call me
            <CalendarTodayIcon color="primary" /> tomorrow to finalize other details.
          </p>
          <p>
            <Button className="me-2 transformsmallerscale9smaller" variant="outlined" startIcon={<Chip className="transformsmallerscale9smaller" label="$500" color="success" />} endIcon={<CreateNewFolderIcon />}>
              <InsertDriveFileIcon /> Invoice
            </Button>

            <Button variant="outlined" startIcon={<InsertDriveFileIcon />} endIcon={<FolderSpecialIcon />}>
              Image.png
            </Button>
          </p>
        </>
      )
    }
  }

  const profile2props = {
    email: "alex@uxdn.co",
    Description: "Newhouse encouraged the audience of entrepreneurship and choose one thing to focus each day."
  }

  const profile3props = {
    email: "bryan.com", hammer: true, cc: true, smallicon: true, newuser: true, encrypted: true,
    Description: "She also stressed the importance of mentorship, and advised founders to look outside their industries for mentors and to be clear about what each party will gain from the relationship"
  }

  return (
    <>
      <div className="mainsection">
        <div>
          <div className="d-flex align-items-center ">
            <SvgIcon className="transformsmallerscale8smaller bg-success" >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
            <div className="space-between w-100 align-items-center ms-1">
              <div className="d-flex align-items-center space-between">
                <span className="text-primary me-1">All Emails</span>
                <div>
                  <span className="me-3">Unsorted</span>
                  <Badge badgeContent={4} color="primary">
                  </Badge>
                </div>

              </div>
              <div className="d-flex align-items-center">
                <input placeholder="Search email" className="form-control rounded-pill w-50 me-1" type="text" />
                <Button className="me-1" variant="outlined" startIcon={<WrapTextIcon />} >
                  Filter
                </Button>
                <Button className='p-1 m-0' variant="contained" component="span">
                  New Email
                </Button>
              </div>
            </div>
          </div>
          <div className="alerts mt-3">
            <AlertComponent alertserverity="warning" />
            <AlertComponent alertserverity="success" />
            <div className="subcontainer1 p-1" >
              <AlertComponent alertclass="subcontainer1" alertserverity="info" />

              <div className="bg-white space-between align-items-center">
                <div className=" d-flex align-items-center mt-1">
                  <TabComponent Tabsdata={Tabsdata} />
                  <div className="smalltext">
                    21
                  </div>
                </div>
                <div>
                  Settlements
                </div>
              </div>
              <div className="flexend p-3 mt-2 bg-white ">
                <CancelIcon />
              </div>
              <div className="space-between align-items-center bg-white mt-2">
                <div className="mt-2 p-3 ">
                  <Button className="rounded-pill ms-1 greybutton" variant="secondary">Yes</Button>
                  <Button className="rounded-pill ms-1 greybutton" variant="secondary">No</Button>
                  <Button className="rounded-pill ms-1 greybutton" variant="secondary">Please follow up</Button>
                  <Button className="rounded-pill ms-1 greybutton" variant="secondary">Show more..</Button>
                </div>

                <div>
                  <Button startIcon={<NotificationsActiveIcon />} className="rounded-pill ms-1 lightgreenbackground" variant="contained">Send</Button>
                  <Button className="rounded-pill ms-1 " color="success" variant="contained">Send</Button>
                </div>
              </div>
              <ProfileComponent {...profile1props} />
              <ProfileComponent {...profile2props} />
              <ProfileComponent {...profile3props} />
            </div>


          </div>
        </div>
      </div>
    </>
  )
}