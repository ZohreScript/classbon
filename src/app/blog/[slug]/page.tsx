export default async function BlogDetails({params}: {params: {slug: string}}) {
    const {slug} = params;
    return (
        <div className="text-5xl flex justify-center items-center w-full">
        <h1>{slug}</h1>
        </div>
    )
}