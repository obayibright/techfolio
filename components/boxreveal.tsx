import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import { MoveUpRight } from "lucide-react";

export function HeroBoxReveal() {
    return (
        <div className="size-fit items-center justify-center overflow-hidden ">
            <BoxReveal boxColor={"#ffbf00"} duration={0.5}>
                <p className="text-[3rem] tracking-tighter font-semibold">
                    Briteware<span className="text-[#ffbf00]">.</span>
                </p>
            </BoxReveal>

            <BoxReveal boxColor={"#ffbf00"} duration={0.5}>
                <h2 className="mt-[.5rem] tracking-tighter text-[1rem]">
                    Your Technology Partner for{" "}
                    <span className="text-[#ffbf00]">The New Age</span>
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#ffbf00"} duration={0.5}>
                <div className="mt-6">
                    <p className="tracking-tighter">
                        -&gt; Build and Deploy your dream projects with
                        <span className="font-semibold text-[#ffbf00]"> Mobile</span>,
                        <span className="font-semibold text-[#ffbf00]"> Web</span>,
                        and
                        <span className="font-semibold text-[#ffbf00]"> Artificial Intelligence</span>
                        . <br />
                        -&gt; Automate your business processes with modern technology. <br />
                    </p>
                </div>
            </BoxReveal>

            <BoxReveal boxColor={"#ffbf00"} duration={0.5}>
                <Button className="mt-[1.6rem] tracking-tighter bg-[#ffbf00] gap-2">Get in Touch
                    <MoveUpRight />
                </Button>
            </BoxReveal>
        </div>
    );
}

export default HeroBoxReveal;
