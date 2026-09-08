import Cricket from "../assets/banner-main.png";
import Background from "../assets/bg-shadow.png";

const Banner = () => {
    return (
        <div
            className="container mx-auto my-10 rounded-2xl min-h-[500px] bg-cover bg-center bg-no-repeat
                       flex flex-col items-center justify-center text-center"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <img
                src={Cricket}
                alt="Cricket"
                className="w-64 my-10"
            />

            <h1 className="text-4xl font-bold">
                Assemble Your Ultimate Dream 11 Cricket Team
            </h1>

            <p className="mt-3">
                Beyond Boundaries Beyond Limits
            </p>

            <button className="btn btn-warning my-5">
                Claim Free Credit
            </button>
        </div>
    );
};

export default Banner;