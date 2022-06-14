import { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
export const TabComponent = (props) => {
    const [value, setValue] = useState(0);
    const handleChange = (_, newValue) => {
        setValue(newValue);
    };
    const {Tabsdata} = props
    return (
        <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon position tabs example"
        >
            {
                Tabsdata.map((item, index) => {
                    return <Tab key={index} {...item}></Tab>
                })
            }
        </Tabs>
    )
}