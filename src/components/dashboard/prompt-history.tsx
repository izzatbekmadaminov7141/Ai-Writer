import { Link } from "react-router-dom";

export default function PromptHistory() {
    return (
        <nav className="mt-8">
            <div>
                <h5 className="text-sm font-semibold text-gray-400">Today</h5>
                <nav className="mt-2">
                    <Link
                        to={'/'}
                        className="flex items-center rounded-md font-medium text-sm hover:bg-neutral-100 px-3 py-2"
                    >
                        Prompt 1{' '}
                    </Link>
                    <Link
                        to={'/'}
                        className="flex items-center rounded-md font-medium text-sm hover:bg-neutral-100 px-3 py-2"
                    >
                        Prompt 1{' '}
                    </Link>
                    <Link
                        to={'/'}
                        className="flex items-center rounded-md font-medium text-sm hover:bg-neutral-100 px-3 py-2"
                    >
                        Prompt 1{' '}
                    </Link>
                    <Link
                        to={'/'}
                        className="flex items-center rounded-md font-medium text-sm hover:bg-neutral-100 px-3 py-2"
                    >
                        Prompt 1{' '}
                    </Link>
                    <Link
                        to={'/'}
                        className="flex items-center rounded-md font-medium text-sm hover:bg-neutral-100 px-3 py-2"
                    >
                        Prompt 1{' '}
                    </Link>
                </nav>
            </div>
        </nav>
    )
}
