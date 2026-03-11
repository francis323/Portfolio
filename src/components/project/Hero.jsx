export function Hero({ data }) {
    return (
        <div className="mt-44">
            <div className="flex flex-col gap-12">
                <span className="text-xs font-medium text-tags uppercase">Case study</span>
                <h1 className="text-[4rem]">{data.title}</h1>
                <p className="text-2xl text-secondary">{data.description}</p>
                <div className="flex flex-wrap gap-2">
                    {data.tags.map((tag, index) => (
                        <span key={tag} className="text-tags text-sm">
                            {tag}
                            {index !== data.tags.length - 1 && " •"}
                        </span>
                    ))}
                </div>
            </div>
            <img className="mt-20 rounded-lg" src={data.screenImage} alt={data.alt} />
        </div>
    )
}