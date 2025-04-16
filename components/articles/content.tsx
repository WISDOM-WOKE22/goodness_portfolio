import ArticleCard from "../commons/cards/articleCard"
import { articles } from "@/constants/contants"

export default function ArticleContent () {
    return (
        <div className="flex justify-center w-full py-2 px-4 mt-20">
        <div className="flex justify-between w-full max-w-6xl flex-col">
            <h1 className="text-4xl text-center">My Articles</h1>
            <p className="text-center mt-5">Here are my article i i&lsquo;ve written so far</p>
            <section className="md:mt-20 mt-10 grid grid-cols-2 md:grid-cols-3 md:gap-4 w-full gap-2">
                {
                    articles.map((article, index) => (
                        <ArticleCard 
                            key={index}
                            image={article.image}
                            title={article.title}
                            description={article.description}
                            date={article.date}
                            link={article.link}
                        />
                    ))
                }
            </section>
        </div>
    </div>
    )
};