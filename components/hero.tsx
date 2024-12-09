



function Hero() {
    return (
        <div className="bg-white mx-auto max-w-screen-2xl">
            
            <div className="relative flex flex-col md:mx-36 justify-around md:flex-row max-w-screen-2xl p-20">
                {/* Text Section Above Image */}
                <div className="absolute top-0 left-0 right-0 bg-gray-200 p-4 text-center">
                    <h1 className="text-xs sm:text-sm md:text-sm font-semibold">Hello Nike App</h1>
                    <span className="text-xs sm:text-sm md:text-sm font-semibold block mt-2">Download the app to access everything Nike. Get Your Great</span>
                </div>

                {/* Image Section */}
                <div className="mt-6 md:mt-0">
                    <img
                        src="/h1.jpg"
                        height={977}
                        width={1344}
                        alt="image1"
                        className="rounded-lg"
                    />
                </div>
            </div>
            
           
        </div>
    );
}

export default Hero;
