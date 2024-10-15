import { Link } from "react-router-dom";
export default function RasetPassword() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white overflow-hidden">
            <div className="text-center">
                <h1 className="text-[150px]">404</h1>
                <h3 className="text-4xl mb-5 ">Page not found</h3>
                <p className="text-lg">
                    Oops!, the page you looking for does not exist
                </p>
                <Link className="font-medium block uppercase bg-blue-500 w-fit mx-auto cursor-pointer mt-6 py-2 px-3 rounded-full" to="/">
                    Sign In Page
                </Link>
            </div>
        </div>
    );
}