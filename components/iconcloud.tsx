'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Skeleton } from "@/components/ui/skeleton"

// Dynamically import IconCloud to prevent SSR
const IconCloud = dynamic(() => import("@/components/ui/icon-cloud"), { ssr: false })

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

export function IconCloudDemo() {
    const [isClient, setIsClient] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsClient(true)
        const timer = setTimeout(() => setIsLoading(false), 1000)
        return () => clearTimeout(timer)
    }, [])

    if (!isClient) {
        return null
    }

    return (
        <div className="w-full max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-center overflow-hidden pb-20 pt-8">
                {isLoading ? (
                    <Skeleton className="w-full h-64 rounded-lg" />
                ) : (
                    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
                        <IconCloud iconSlugs={slugs} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default IconCloudDemo