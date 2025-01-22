/*eslint-disable*/

const ImpactSection = () => {
    return (
        <div className="px-4 py-20 max-w-7xl m-auto">
            <p className="text-center mb-10 w-full tracking-wide  md:w-2/3 md:mx-auto">
                deeptrack™ leverages cutting-edge AI to protect Africa's businesses, media, and governments from deepfake threats, ensuring truth, safeguarding reputations, and enabling informed decision-making.
            </p>
            <div className="border border-customTeal p-7 rounded-3xl h-[30rem] justify-between bg-impact-gradient-up text-white grid lg:grid-cols-3 sm:grid-col-1 md:h-auto md:bg-impact-gradient md:grid-cols-3 gap-4  ">
                <div className="text-center">
                    <h2 className="font-extrabold text-5xl mb-2 tracking-wide">85<span>%</span></h2>
                    <p className="text-sm tracking-wide">Organizations Vulnerable to deepfake</p>
                </div>
                <div className="text-center">
                    <h2 className="font-extrabold text-5xl mb-2 tracking-wide">$250<span>M</span></h2>
                    <p className="text-sm tracking-wide">Estimated Global loss to fraud 2024</p>
                </div>
                <div className="text-center">
                    <h2 className="font-extrabold text-5xl mb-2 tracking-wide">75<span>%</span></h2>
                    <p className="text-sm tracking-wide">African organization report misinformation & Scam</p>
                </div>
            </div>
        </div>
    )
}

export default ImpactSection;