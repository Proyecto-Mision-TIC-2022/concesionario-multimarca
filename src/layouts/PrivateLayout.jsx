import React from 'react';
import Sidebar from "../components/Sidebar";


const PrivateLayout = ({children}) => {
    return (
        <div className="flex-sidebar">
            <Sidebar />
            <main className="flex-main">{children}</main>
        </div>
    )
};

export default PrivateLayout;

