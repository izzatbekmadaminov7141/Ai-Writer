import { Outlet } from 'react-router-dom'
import Navbar from '../dashboard/navbar'
import Sidebar from '../dashboard/sidebar'

const DashboardLayout = () => {
    const apiKey = import.meta.env.VITE_APP_OPEN_AI_KEY

    if (apiKey) {
        console.log(apiKey)
    } else {
        console.error('VITE_APP_OPEN_AI_KEY is undefined!')
    }

    return (
        <div className="h-screen overflow-hidden flex">
            <Sidebar />
            <div className="w-full">
                <Navbar />
                <div className="p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
