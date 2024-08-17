import { Outlet } from 'react-router-dom'
import Navbar from '../dashboard/navbar'
import Sidebar from '../dashboard/sidebar'

const DashboardLayout = () => {
    return (
        <div className=" h-screen overflow-hidden flex">
            <Sidebar />
            <div className="w-full">
                <Navbar />
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default DashboardLayout
