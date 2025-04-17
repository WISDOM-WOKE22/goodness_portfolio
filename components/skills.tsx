import { Separator } from "./ui/separator";

interface skillProp {
    skill: string;
}

export default function Skills () {
    return (
        <div className="flex items-center justify-center py-10 px-3" id="skills">
            <div className="w-full max-w-6xl">
                <div>
                    <h1 className="text-4xl">My Skills</h1>
                </div>
                <div className="mt-10">
                    <Separator/>
                </div>

                <div className="mt-14 grid gap-10 grid-cols-1 md:grid-cols-2 w-full">
                    <Skill skill="Technical Writing"/>
                    {/* <Skill skill="Web developer"/> */}
                    <Skill skill="API Documentation"/>
                    <Skill skill="Product Documentation"/>
                    <Skill skill="Frontend Developer"/>
                    <Skill skill="SEO Writing"/>
                </div>
            </div>
        </div>
    )
}

export function Skill ({ skill }: skillProp) {
    return (
        <div className="w-full text-center flex flex-col gap-6">
            <h2 className="text-2xl md:text-4xl">{skill}</h2>
            <Separator className="w-full"/>
        </div>
    )
}