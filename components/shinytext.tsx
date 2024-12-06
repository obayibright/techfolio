import { ArrowRightIcon } from 'lucide-react';

import AnimatedShinyText from "@/components/ui/animated-shiny-text";

export function AnimatedShinyTextDemo() {
    return (
        <div>
            <AnimatedShinyText className="inline-flex items-center tracking-tighter justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-800">
                <span>✨ Leveraging Technology for Growth</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
        </div>
    );
}

export default AnimatedShinyTextDemo;
