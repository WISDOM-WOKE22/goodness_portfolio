"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { Button } from "./ui/button"
import { DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger, } from "./ui/dropdown-menu"

export default function Header () {
    const { setTheme } = useTheme()
    return (
        <div className="flex justify-center items-center w-full py-2 px-4 h-16">
            <div className="flex justify-between items-center w-full max-w-6xl">
                <Link href="/">
                    <h2 className="text-xl sm:text-2xl md:text-2xl">Goodness Woke</h2>
                </Link>
                <div className="flex gap-4 flex-row items-center">
                    <div className="flex gap-4 flex-row items-center max-md:hidden">
                        <Link href='/#about'>
                            <p className="cursor-pointer">About</p>
                        </Link>
                        <Link href="/articles">
                            <p className="cursor-pointer">articles</p>
                        </Link>
                        <Link href="/#contact">
                            <p className="cursor-pointer">Contact</p>
                        </Link>
                        <Link href="https://github.com/Nessii-green" target="_blank">
                            <p className="cursor-pointer">Github</p>
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <MenuIcon/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    <Link href='/#about'>
                                        <p className="cursor-pointer">About</p>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/articles">
                                        <p className="cursor-pointer">articles</p>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href='/#contact'>
                                        <p className="cursor-pointer">Contact</p>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                <Link href="https://github.com/WISDOM-WOKE22" target="_blank">
                                    <p className="cursor-pointer">Github</p>
                                </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}