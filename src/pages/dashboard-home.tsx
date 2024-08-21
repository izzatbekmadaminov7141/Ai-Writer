import ContentCreateForm from '@/components/dashboard/content-create-form'
import ContentViwer from '@/components/dashboard/content-viwer'
import { useAppContext } from '@/contexts/app.context'
import { ContetentCreateRequestParam } from '@/shared/types/content-create-request-param'
import { GenerateArticle } from '@/utills/openai'
import { useEffect, useState } from 'react'

export default function DashboardHome() {
    const { setGeneratingContent, generatingContent } = useAppContext()
    const [content, setContent] = useState<boolean>(false)
    useEffect(() => {
        setTimeout(() => {
            setContent(true)
        }, 5000)
    }, [setContent])
    const handleSubmit = async (params: ContetentCreateRequestParam) => {
        const { title, description } = params
        setGeneratingContent(true)
        const result = await GenerateArticle(title, description)
        // setContent(result)

        console.log(result)
        setGeneratingContent(false)
    }
    const text =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi mollitia maiores? Aliquid aperiam dicta, unde odit alias itaque debitis, nobis exercitationem quos enim beatae reprehenderit est laboriosam vero repellendus!'

    return (
        <div>
            <h1 className="text-2xl font-semibold ">Articl Writer</h1>
            {content ? (
                <ContentViwer content={text} />
            ) : (
                <ContentCreateForm
                    isLoading={generatingContent}
                    onSubmit={handleSubmit}
                />
            )}
        </div>
    )
}
