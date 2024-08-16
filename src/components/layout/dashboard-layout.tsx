import Navbar from '../dashboard/navbar'
import Sidebar from '../dashboard/sidebar'

const DashboardLayout = () => {
    return (
        <div className=" h-screen overflow-hidden flex">
            <Sidebar />
            <div className="w-full">
                <Navbar />
                <h1>Component</h1>
            </div>
        </div>
    )
}
export default DashboardLayout
