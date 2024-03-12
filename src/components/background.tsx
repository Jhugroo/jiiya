import { WavyBackground } from "./ui/wavy-background";

export function WavyBackgroundDemo() {
    return (
        <WavyBackground className="max-w-4xl mx-auto pb-40">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                Jiiya&apos;s Basement
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center"> <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
            </svg>
                Professional Designer
            </p>
        </WavyBackground>
    );
}
