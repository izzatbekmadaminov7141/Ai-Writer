import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { FormEvent, useState } from 'react'
import { Loader2 } from 'lucide-react'
import { ContetentCreateRequestParam } from '@/shared/types/content-create-request-param'
type ContentCreateFormProps = {
    isLoading: boolean
    onSubmit: (params: ContetentCreateRequestParam) => void
}
export default function ContentCreateForm({
    isLoading,
    onSubmit,
}: ContentCreateFormProps) {
    const [form, setForm] = useState<ContetentCreateRequestParam>({
        title: '',
        description: '',
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSubmit(form)
        setForm({ title: '', description: '' })
    }
    const handelChange = (
        event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.currentTarget
        setForm({ ...form, [name]: value })
    }
    return (
        <form className="mt-5" onSubmit={handleSubmit}>
            <div className="grid w-full  mb-4 gap-1.5">
                <Label htmlFor="title">Title</Label>
                <Input
                    type="title"
                    id="title"
                    placeholder="Tiltle"
                    onChange={handelChange}
                    disabled={isLoading}
                />
            </div>
            <div className="grid w-full mb-4 gap-1.5">
                <Label htmlFor="discription">Description</Label>
                <Textarea
                    placeholder="type your description here"
                    id="discription"
                    name="description"
                    onChange={handelChange}
                    disabled={isLoading}
                />
            </div>
            <Button disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Generate
            </Button>
        </form>
    )
}
