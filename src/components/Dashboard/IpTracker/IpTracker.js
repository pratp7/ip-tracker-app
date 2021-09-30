import React,{useEffect} from 'react'
import Card from '../../Card/Card'
import classes from "./IpTracker.module.scss";
import { fetchData } from '../../../store/ipThunk';
import { useSelector, useDispatch } from 'react-redux';
require("dotenv").config();
const IpTracker = () => {
    const dispatch = useDispatch()
    const details = useSelector(state => state.ipify.ipDetails);

    useEffect(() => {
       dispatch(fetchData(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_API_KEY}`)) 
    },[dispatch])

    return (
        <Card className={classes.info}>
            
            <div>
                IP ADDRESS
                <h3>{details.ip||"92.92.92.92"}</h3>
            </div>
            <div>
                LOCATION
                <h3>{details.city},{details.country || "Earth"}</h3>
            </div>
            <div>
                TIMEZONE
                <h3>{details.timezone||"UTC-05:00"}</h3>
            </div>
            <div>
                ISP
                <h3>{details.isp || "JIO"}</h3>
            </div>
            

        </Card>
    )
}

export default IpTracker
