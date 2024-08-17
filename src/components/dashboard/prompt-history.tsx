import { TPromptHistory } from '@/shared/types/prompt-history.type'
import { Link } from 'react-router-dom'
type IPromptHistryProps = {
    items: TPromptHistory[]
}
export default function PromptHistory({ items }: IPromptHistryProps) {
    return (
        <nav className="mt-8">
            {items.map((item) => (
                <div key={item.date} className='mb-2'>
                    <h5 className="text-sm font-semibold text-gray-400">
                        {item.date}
                    </h5>
                    <nav className="mt-2 px-2">
                        {item.links.map((link) => (
                            <Link
                                key={link.url}
                                to={link.url}
                                className="block text-sm font-medium text-gray-700 my-2  hover:bg-neutral-100 py-2 px-3 rounded-md"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            ))}
        </nav>
    )
}
