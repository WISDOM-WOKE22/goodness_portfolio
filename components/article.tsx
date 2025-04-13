import { Link } from "lucide-react";
import Image from "next/image";
import Lin from "next/link";

export default function Articles () {
    return (
        <div className="flex justify-center w-full py-2 px-4 mt-20">
            <div className="flex justify-between w-full max-w-6xl flex-col">
                <h1 className="text-4xl text-center">My Works</h1>
                <section className="mt-20 grid grid-cols-1 w-full">
                    {/* Section 1 */}
                    <section className="w-full flex items-center border-y md:flex-row flex-col">
                        <div className="relative w-full md:w-[50%] h-[300px] md:h-[500px]">
                            <Image
                                className="cursor-pointer object-cover"
                                src="/image.png"
                                alt="article image"
                                fill
                            />
                        </div>
                        <div className="md:ml-10 w-full md:w-[50%] space-y-5 max-md:mb-10 max-md:mt-5">
                            <h1 className="text-3xl">React.js for Web Development</h1>
                            <p className="text-gray-500 text-sm">
                            Front-end frameworks and libraries are crucial to the process of creating a website. Therefore, libraries have become essential for creating high-performing responsive web pages and web-based apps.
                            </p>
                            <p>Feb 1, 2023 </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="w-full flex flex-col md:flex-row-reverse items-center border-y">
                        <div className="relative w-full md:w-[50%] h-[300px]  md:h-[500px]">
                            <Image
                                className="cursor-pointer object-cover"
                                src="/image1.jpg"
                                alt="article image"
                                fill
                            />
                        </div>
                        <div className="md:mr-10 w-full md:w-[50%] space-y-5 max-md:mb-10 max-md:mt-5">
                            <h1 className="text-3xl">Serverless Authentication methods in web apps.</h1>
                            <p className="text-gray-500 text-sm">
                            Serverless authentication methods refer to approaches for managing user identity and access without the need for traditional server-based authentication systems.
                            </p>
                            <p>5th March 2024</p>
                        </div>
                    </section>

                    <section className="w-full flex items-center border-y md:flex-row flex-col">
                        <div className="relative w-full md:w-[50%] h-[300px]  md:h-[500px]">
                            <Image
                                className="cursor-pointer object-cover"
                                src="/image2.avif"
                                alt="article image"
                                fill
                            />
                        </div>
                        <div className="md:ml-10 w-full md:w-[50%] space-y-5 max-md:mb-10 max-md:mt-5">
                            <h1 className="text-3xl">React.js for Web Development</h1>
                            <p className="text-gray-500 text-sm">
                            Front-end frameworks and libraries are crucial to the process of creating a website. Therefore, libraries have become essential for creating high-performing responsive web pages and web-based apps.
                            </p>
                            <p>Feb 1, 2023 </p>
                        </div>
                    </section>
                </section>
                <div className="flex justify-end mt-5">
                    <Lin href="/articles" className="flex flex-row gap-2 items-center">
                        <Link/>
                        <h1>See more</h1>
                    </Lin>
                </div>
            </div>
        </div>
    )
};