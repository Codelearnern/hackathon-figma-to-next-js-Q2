
import Image from 'next/image';  // Ensure to import Image from 'next/image'

function Hero() {
    return (
        <div className="bg-white mx-auto max-w-screen-2xl">
            <div className="relative flex flex-col md:mx-36 justify-around md:flex-row max-w-screen-2xl p-20">
                
                {/* Text Section Above Image */}
                <div className="absolute top-0 left-0 right-0 bg-gray-200 p-4 text-center">
                    <h1 className="text-xs sm:text-sm md:text-sm font-semibold">Hello Nike App</h1>
                    <span className="text-xs sm:text-sm md:text-sm font-semibold block mt-2">
                        Download the app to access everything Nike. Get Your Great
                    </span>
                </div>

                {/* Image Section */}
                <div className="mt-6 md:mt-0">
                    <Image
                        src="/h1.jpg"
                        alt="Nike App Image"
                        className="rounded-lg"
                        width={348}  // Use 'width' and 'height' attributes instead of inline 'style' for better performance
                        height={348} // Maintain the aspect ratio
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
