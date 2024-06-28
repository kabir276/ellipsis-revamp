// components/Hero.js
const VideoSection = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="w-full max-w-4xl p-8 h-screen bg-white rounded-lg shadow-lg">
                <div className="aspect-w-72 aspect-h-72">
                    <iframe
                        src="https://www.loom.com/embed/3c03d542f5d04df19946c770f8db3661"
                        frameBorder="0"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
