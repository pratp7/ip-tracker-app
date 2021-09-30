import React from 'react'
import Header from './Header/Header'
import IpTracker from './IpTracker/IpTracker'
import SearchBar from './SearchBar/SearchBar'
import Map from "./Map/Map"
const DashBoard = () => {
    return (
        <div>
            <Header />
            <SearchBar/>
            <IpTracker />
            <Map/>
        </div>
    )
}

export default DashBoard
