import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Lin from "next/link";
import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog";
import { Link } from "lucide-react";

export default function ArticleCard ({ image, title, description, date, link, blog }: { image: string, title: string, description: string, date: string, link: string, blog:string | undefined }) {
    return (
        <Dialog>
            <DialogTrigger>
                {/* <Link href={link} target="_blank"> */}
                    <Card className="h-64 md:h-60 w-full cursor-pointer py-0">
                        <div className="relative w-full h-full">
                            <Image
                                className="cursor-pointer object-cover rounded-t-lg"
                                src={image}
                                alt="article image"
                                fill
                            />
                        </div>
                        <CardContent className="text-left py-0 my-0 relative -top-4 h-16">
                            <h1 className="truncate">{title}</h1>
                            <p className="text-gray-500 text-sm truncate">{description}</p>
                            <p className="text-[11px]">{date}</p>
                        </CardContent>
                    </Card>
                {/* </Link> */}
            </DialogTrigger>
            <DialogContent className="max-h-[700px] w-full max-w-3xl p-4">
                <div className="w-full max-w-xl max-h-96 relative">
                    <Image
                        src={image}
                        className="rounded-lg"
                        alt={title}
                        width={500}
                        height={500}
                        // fill
                    />
                </div>
                <div className="flex justify-center items-center">
                    <Lin href={link} target="_blank">
                        <div className="p-1.5 text-sm border rounded-lg flex flex-row items-center gap-2">
                            <Link size={20}/>
                            <p>View article</p>
                        </div>
                    </Lin>
                </div>
                <div>
                    <h1 className="font-bold">{title}</h1>
                    <p className="text-sm text-gray-800 dark:text-gray-400">{description}</p>
                    <p className="my-2"><span>blog:</span> {blog}</p>
                    <p className="text-sm">{date}</p>
                </div>
            </DialogContent>
        </Dialog>
    )
}