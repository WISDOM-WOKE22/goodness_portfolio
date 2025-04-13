import Link from "next/link";
import { Separator } from "./ui/separator";
import { Github, Linkedin, X } from "lucide-react";

export default function Footer () {
    return (
        <div className="flex items-center justify-center py-10 px-3">
            <div className="w-full max-w-6xl">
                <div className="my-10">
                    <Separator/>
                </div>
                <div className="flex flex-col gap-8 sm:flex-row sm:gap-0 items-center justify-between">
                    <p>Built with ❤️ By goodness woke</p>

                    <div className="flex flex-row gap-4 items-center">
                        <Link href="https://github.com/Nessii-green" target="_blank">
                            <Github/>
                        </Link>
                        <Link target="_blank" href="https://www.linkedin.com/in/goodness-woke-677638237/">
                            <Linkedin/>
                        </Link>
                        <Link target="_blank" href="https://x.com/shutter_talesss">
                            <X/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}