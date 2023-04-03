import "./Styles.css";
const ShimmerUi = () => {
    return (
        <>
            <div className="shimmerSearch"></div>
            <div className="shimmer-container">
                {Array(15).fill("").map((e, index) =>(
                    <div key={index} className="shimmerChild">
                    <div className="shimmerImage"></div>
                    <div className="shimmerTitle"></div>
                    <div className="shimmerTime-mins">
                    <span className="shimmer"></span> <span className="shimmer"></span>
                    </div>
                    <div className="shimmerCuisines">
                    <span className="shimmerCuisine"></span> 
                    <span className="shimmerCuisine"></span>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}

export default ShimmerUi;