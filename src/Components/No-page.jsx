export default function NoPage() {
    return (
        <div className="mt-15 bg-white pb-10">
            <div className="text-center px-6">
                <h1 className="text-8xl font-light mb-4 text-[#666e75]">Page not found</h1>
                <div className="flex justify-center mt-8">
                    <img src="https://www.telecomarmenia.am/img/error-page/error-pic-1.png" alt="placeholder" className="" />
                </div>
                <div className="mt-10 text-5xl font-light text-[#666e75]">404 error</div>
                <div className="mt-8">
                    <a href="/" className="text-white bg-red-600 hover:bg-red-700 p-2.5 px-5 font-semibold w-50 rounded-3xl">Back to Home</a>
                </div>
            </div>
        </div>
    )
}
