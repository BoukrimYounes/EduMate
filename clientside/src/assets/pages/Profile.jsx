import { motion } from "framer-motion";
import Header from "../components/common/Header";

export default function Profile() {
    return (
        <div className="flex-1 relative overflow-auto z-10">
            <Header title={"Profile"} />
            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Profile Update Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.2 }}
                    className="bg-white dark:bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700"
                >
                    <form className="w-full flex flex-col gap-4 px-6 py-3">
                        {/* First Name Input */}
                        <div className="flex flex-col gap-2">
                            <label
                                className="text-lg font-semibold text-gray-700 dark:text-gray-300"
                                htmlFor="firstName"
                            >
                                First Name:
                            </label>
                            <input
                                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-1 py-2 rounded-md outline-none ring-1 ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-white font-medium text-lg"
                                type="text"
                                id="firstName"
                            />
                        </div>

                        {/* Last Name Input */}
                        <div className="flex flex-col gap-2">
                            <label
                                className="text-lg font-semibold text-gray-700 dark:text-gray-300"
                                htmlFor="lastName"
                            >
                                Last Name:
                            </label>
                            <input
                                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-1 py-2 rounded-md outline-none ring-1 ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-white font-medium text-lg"
                                type="text"
                                id="lastName"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col gap-2">
                            <label
                                className="text-lg font-semibold text-gray-700 dark:text-gray-300"
                                htmlFor="email"
                            >
                                Email:
                            </label>
                            <input
                                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-1 py-2 rounded-md outline-none ring-1 ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-white font-medium text-lg"
                                type="email"
                                id="email"
                            />
                        </div>

                        {/* Submit Button */}
                        <motion.input
                            whileTap={{ scale: 0.9 }}
                            className="border-[1.5px] rounded-md text-blue-500 dark:text-blue-400 border-blue-500 dark:border-blue-400 w-fit px-4 py-2 font-semibold hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white cursor-pointer"
                            type="submit"
                            value="Update"
                        />
                    </form>
                </motion.div>

                {/* User Info Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.2 }}
                    className="flex flex-col gap-4 p-8 items-center justify-center bg-white dark:bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700"
                >
                    {/* Profile Picture */}
                    <div className="w-20 h-20 bg-blue-500 dark:bg-blue-400 flex items-center justify-center rounded-full cursor-pointer">
                        <span className="font-semibold text-3xl text-white">
                            YB
                        </span>
                    </div>

                    {/* User Name and Email */}
                    <h3 className="font-bold text-3xl text-gray-800 dark:text-white">
                        Younes Boukrim
                    </h3>
                    <p className="font-semibold text-base text-gray-700 dark:text-gray-300">
                        younes@gmail.com
                    </p>
                </motion.div>
            </main>
        </div>
    );
}
