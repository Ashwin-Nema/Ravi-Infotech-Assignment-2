import Alert from '@mui/material/Alert';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export const AlertComponent = (props) => {
    const {alertserverity, alertclass} = props
    const alertproperties = alertserverity == ""? {icon:false} :{icon:false,severity: alertserverity}
    return (
        <Alert className={`my-3 ${alertclass ? alertclass : ''}`} icon={false} severity={alertserverity}>
            <div className="w-100 alertgrid ">
                <div>
                    xyz@gmail.com
                </div>

                <div>
                    <AcUnitIcon></AcUnitIcon>
                </div>

                <div>
                    <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                </div>

                <div>
                    <ArrowForwardIcon></ArrowForwardIcon>
                    1 day, 2 hours
                </div>
            </div>
        </Alert>
    )
}