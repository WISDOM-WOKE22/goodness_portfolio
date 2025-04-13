export default function Work ({
    company, 
    description, 
    date }:
    { company: string, 
        description: string, 
        date: string
    }) {
    return (
        <div className="border dark:border-gray-500 p-5 border-gray-300 rounded-sm">
            <h1 className="text-xl">{company}</h1>
            <p className="mt-6 text-sm text-gray-700 dark:text-gray-200">{description}</p>

            <div className="mt-6">
                <p className="text-gray-400 text-sm">{date}</p>
            </div>
        </div>
    )
}