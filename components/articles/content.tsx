import { Card } from "../ui/card"

export default function ArticleContent () {
    return (
        <div className="flex justify-center w-full py-2 px-4 mt-20">
        <div className="flex justify-between w-full max-w-6xl flex-col">
            <h1 className="text-4xl text-center">My Articles</h1>
            <p className="text-center mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, distinctio veniam culpa doloremque voluptate inventore placeat suscipit esse minima quae neque id nisi recusandae obcaecati vel, sequi voluptatum facere sint!</p>
            <section className="md:mt-20 mt-10 grid grid-cols-2 md:grid-cols-3 md:gap-4 w-full gap-2">
                <Card className="h-40 md:h-60 w-full cursor-pointer"></Card>
                <Card className="h-40 md:h-60 w-full cursor-pointer"></Card>
                <Card className="h-40 md:h-60 w-full cursor-pointer"></Card>
                <Card className="h-40 md:h-60 w-full cursor-pointer"></Card>
                <Card className="h-40 md:h-60 w-full cursor-pointer"></Card>
                <Card className="h-40 md:h-60 w-full cursor-pointer"></Card>
                <Card className="h-40 md:h-60 w-full cursor-pointer"></Card>
                <Card className="h-40 md:h-60 w-full cursor-pointer"></Card>
                <Card className="h-40 md:h-60 w-full cursor-pointer"></Card>
                <Card className="h-40 md:h-60 w-full cursor-pointer"></Card>
                <Card className="h-40 md:h-60 w-full cursor-pointer"></Card>
                <Card className="h-40 md:h-60 w-full cursor-pointer"></Card>
            </section>
        </div>
    </div>
    )
};