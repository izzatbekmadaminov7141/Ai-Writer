import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { StarIcon } from '@heroicons/react/16/solid'
import { ClipboardIcon, ShareIcon } from '@heroicons/react/16/solid'
import Markdown from 'react-markdown'
type ContentViwerProps = {
    content: string
}
export default function ContentViwer({ content }: ContentViwerProps) {
    return (
        <Card className="mt-5">
            <CardContent className="p-4">
                <div className="prose lg:prose-xl">
                    <Markdown>{content}</Markdown>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">
                    <ShareIcon className="w-4 h-4" />
                </Button>
                <Button variant="outline">
                    <ClipboardIcon className="w-4 h-4" />
                </Button>
                <Button variant="outline">
                    <StarIcon className="w-4 h-4" />
                </Button>
            </CardFooter>
        </Card>
    )
}
