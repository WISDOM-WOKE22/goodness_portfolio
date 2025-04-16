import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard ({ image, title, description, date, link }: { image: string, title: string, description: string, date: string, link: string }) {
    return (
        <Link href={link} target="_blank">
            <Card className="h-64 md:h-60 w-full cursor-pointer py-0">
                <div className="relative w-full h-full">
                    <Image
                        className="cursor-pointer object-cover rounded-t-lg"
                        src={image}
                        alt="article image"
                        fill
                    />
                </div>
                <CardContent className="py-0 my-0 relative -top-4 h-16">
                    <h1 className="truncate">{title}</h1>
                    <p className="text-gray-500 text-sm truncate">{description}</p>
                    <p className="text-[11px]">{date}</p>
                </CardContent>
            </Card>
        </Link>
    )
}