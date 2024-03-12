import { Meteors } from "./ui/metoers";



export function MeteorsDemo() {
    return (
        <div className="">
            <div className=" w-full relative ">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <div className="flex items-center justify-center mb-4 border-gray-500">
                        <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                            A Little About Me
                        </h1>


                    </div>


                    <p className="font-normal text-base text-white mb-4 relative z-50">
                        I myself wanted to do something new and exciting after school.
                        Got myself in the domain of freelancing with freestyle art works, formed a family business with my lil bro.

                    </p>


                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                </div>
            </div>
        </div>
    );
}
