import { Pencil } from 'lucide-react'
import PromptHistory from './prompt-history'

const Sidebar = () => {
    return (
        <div className=" h-screen w-80 border-r p-4">
            <div className=" flex justify-between items-center">
                <h1 className="text-2xl font-semibold px-4">AI Writer</h1>
                <button>
                    <Pencil size={24} />
                </button>
            </div>
            <PromptHistory />
        </div>
    )
}

export default Sidebar
