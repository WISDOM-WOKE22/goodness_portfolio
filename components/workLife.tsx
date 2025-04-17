import { Separator } from "./ui/separator";
import Work from "./work";

export default function WorkLife () {
    return (
        <div className="flex items-center justify-center py-10 px-3">
            <div className="w-full max-w-6xl">
                <div className="mb-10">
                    <h2 className="text-2xl">My Work Life</h2>
                </div>
                <div className="my-10">
                    <Separator/>
                </div>
                <div className="mt-10 space-y-5">
                    <Work
                        company="Simple Talk, Contract Technical Author"
                        description="Writing technical contents on Backend, database and serverless technologies."
                        date="MAY 2022 - PRESENT"
                    />
                    <Work
                        company="ButterCMS, Contract Technical Author"
                        description="Writing technical content on frontend and backend technologies"
                        date="MAY 2022 - PRESENT"
                    />
                    <Work
                        company="OpenReplay, Contract Technical Author"
                        description="Writing technical contents on frontend, testing and general development related technologies."
                        date="APRIL 2022 - PRESENT"
                    />
                    <Work
                        company="Pieces.app, Contract Technical Author"
                        description="Writing technical content on frontend and full-stack technologies."
                        date="AUGUST 2022 - FEBRUARY 2023"
                    />
                    <Work
                        company="Stellar Data Recovery, Blog Contributor"
                        description="Worked as a contributor in Stellar Data Recovery, reviewing, marketing, and creating user guides on their products."
                        date="MAY 2022 - JULY 2022"
                    />
                    <Work
                        company="Hackr.io, Blog Contributor"
                        description="Worked as a contributor providing beneficial guides for audiences who are interested in venturing into certain areas of tech."
                        date="MAY 2022 - JULY 2022"
                    />
                    <Work
                        company="Bejamas, Contract Technical Author"
                        description="Composed an article on serverless security and its best practices."
                        date="MARCH 2023 - JANUARY 2024"
                    />
                </div>
            </div>
        </div>
    )
}