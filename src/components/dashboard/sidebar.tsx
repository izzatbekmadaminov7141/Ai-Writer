import { Loader2, Pencil } from 'lucide-react'
import PromptHistory from './prompt-history'
import { TPromptHistory } from '@/shared/types/prompt-history.type'
import { useAppContext } from '@/contexts/app.context'

const mockItems: TPromptHistory[] = [
    {
        date: 'Tuday',
        links: [
            {
                title: 'Prompt 1',
                url: '/dashboard/prompt-1',
            },
            {
                title: 'Prompt 2',
                url: '/dashboard/prompt-2',
            },
        ],
    },
    {
        date: 'Yesterday',
        links: [
            {
                title: 'Prompt 1',
                url: '/dashboard/prompt-1',
            },
            {
                title: 'Prompt 2',
                url: '/dashboard/prompt-2',
            },
        ],
    },
]
const Sidebar = () => {
    const { generatingContent } = useAppContext()
    return (
        <div className=" h-screen w-80 border-r p-8">
            <div className=" flex justify-between items-center">
                <h1 className="text-2xl font-semibold ">AI Writer</h1>
                {generatingContent ? (
                    <Loader2 className="animate-spin" />
                ) : (
                    <button>
                        <Pencil size={24} />
                    </button>
                )}
            </div>
            <PromptHistory items={mockItems} />
        </div>
    )
}

export default Sidebar
