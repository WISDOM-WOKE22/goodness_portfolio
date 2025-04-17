"use client"

import { MoveUpRight } from "lucide-react"
import { Separator } from "./ui/separator"
import { useRef, useEffect } from "react";
import Link from "next/link";
import Typed from "typed.js" 

export default function Hero () {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Technical Writer', 'Documentation writer'],
          typeSpeed: 200,
          loop: true,
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []);

    return (
        <div className="flex items-center justify-center py-20 md:py-40 sm:py-32 px-3">
            <div className="w-full max-w-6xl">
                <div className="w-full max-w-[800px]">
                    <h1 className="text-4xl sm:text-6xl">I&apos;m Goodness Woke, <br/> <span ref={el}></span></h1>
                    <p className="mt-6 text-[18px] text-[#686868] w-full max-w-3xl">Experienced Technical and Documentation writer with a talent for simplifying complex ideas. Multiple publications credits and adaptable writing style. Let me help you create content that engages and informs your audience.</p>

                    <Link href="https://docs.google.com/document/d/1nbPnbXnbddmoDCcx631PL0l-Xh_QSw_5bJtzPMOKtbU/edit" target="_blank" className="group flex flex-col gap-1 cursor-pointer mt-10 w-fit">
                        <div className="flex flex-row gap-3 items-center">
                            <h2 className="text-2xl">My Resume</h2>
                            <MoveUpRight/>
                        </div>
                        <Separator className="w-0 group-hover:w-[170px] duration-700 h-1"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}