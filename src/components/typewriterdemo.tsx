import { TypewriterEffectSmooth } from "./ui/typewriter";

export function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "Jiiya's.",
            className: "text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center",
        },
        {
            text: "Basement.",
            className: "text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center",
        },
    ];
    return (
        <>
            <TypewriterEffectSmooth words={words} cursorClassName="" />
        </>
    );
}
