import Link from "next/link"

export default function Contact () {
    return (
        <div className="flex items-center justify-center py-20 px-4" id="contact">
            <div className="w-full max-w-6xl">
                <div className="mb-10 flex-col gap-5">
                    <h2 className="text-xl">Let&apos;s Get In touch</h2>
                    <Link href="mailto:gwoke66@gmail.com">
                        <h1 className="sm:text-4xl lg:text-5xl text-2xl ">gwoke66@gmail.com</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}