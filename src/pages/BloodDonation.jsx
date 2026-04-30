import React, { useState, } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { MailCheck, X } from "lucide-react";
import { matchPath, useParams } from "react-router-dom";
import { eventsData } from "../constant";

export const BloodDonation = () => {
    const [openModal, setOpenModal] = useState(false);
    const { id } = useParams()
    const matchedEvent = eventsData.find(event => event.id === Number(id));
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Navbar />
                <div className="p-6 m-20 ml-60">
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                        <img
                            src={matchedEvent.image}
                            alt={matchedEvent.name}
                            className="w-full h-[400px] object-cover text-red-400"
                        />

                        <div className="p-6">
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="bg-red-100 p-4 rounded-xl shadow">
                                    <h2 className="text-lg font-semibold text-black">
                                        Address :
                                    </h2>
                                    <p className={`${matchedEvent.location ? "text-sm" : "text-green-500 "}`}>
                                        {matchedEvent.location ? matchedEvent.location : "---N/A---"}
￼
                                    </p>
                                </div>

                                <div className="bg-blue-100 p-4 rounded-xl shadow">
                                    <h2 className="text-lg font-semibold text-blue-600">
                                        Date:
                                    </h2>

                                    <p className={`${matchedEvent.date ? "text-sm" : "text-red-500 "}`}>{matchedEvent.date ? matchedEvent.date : "---N/A---"}</p>

                                </div>

                                <div className="bg-green-100 p-4 rounded-xl shadow">
                                    <h2 className="text-lg font-semibold text-green-600">
                                        Volunteers
                                    </h2>
                                    <p className={`${matchedEvent.volunteers ? "text-sm" : "text-black"}`}>{matchedEvent.volunteers ? matchedEvent.volunteers : "---N/A---"}</p>
                                </div>
                                <div className=" bg-green-100 p-4 rounded-xl  shadow">
                                    <h2 className="text-lg font-semibold text-green-600 mb-3">
                                        Organization Details
                                    </h2>

                                    <p className="text-gray-700 font-medium">
                                        AI Volunteer Foundation 
                                    </p>

                                    <p className="text-sm text-gray-600 mb-3">
                                        Working for blood donation, food drives, education, and social help.
                                    </p>

                                    <div className="space-y-2 text-sm text-gray-700">
                                        <div className="flex gap-3 ">
                                            <p >
                                                <span className="font-semibold">Date:</span>
                                                <span className={`${matchedEvent.date ? "text-sm " : "text-red-500 "}`}>{matchedEvent.date ? matchedEvent.date : "---N/A---"}</span>
                                            </p> |

                                            <p>
                                                <span className="font-semibold">Time                            
                                                    :</span>
                                                <span className={`${matchedEvent.time ? "text-sm" : "text-yellow-400"}`}>{matchedEvent.time ? matchedEvent.time : "-----N/A---"}</span>
                                            </p>
                                        </div>

                                        <p>
                                            <span className="font-semibold">Location:</span>
                                            <span className={`${matchedEvent.location ? "text-sm" : "text-gray-700"}`}>{matchedEvent.location ? matchedEvent.location : "----N/A--"}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-2 p-4 rounded-xl shadow">
                                <h1 className="text-3xl font-bold text-red-600 mb-4">
                                    {matchedEvent.name}
                                </h1>

                                <p className="text-gray-700 leading-7">
                                    {matchedEvent.description}
                                </p>
                            </div>

                          
                            <button
                                onClick={() => setOpenModal(true)}
                                className="mt-6 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition "
                            >
                                Donate Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {openModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">

                    <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl p-6 relative">



                        <div className="flex justify-between items-center mb-5">
                            <h1 className="text-2xl font-bold text-red-600 ">
                                Blood Donation Form
                            </h1>

                            <button onClick={() => setOpenModal(false)} className="text-2xl text-black hover:text-red-400  ">
                                x
                            </button>

                        </div>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-3">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="border p-3 rounded-lg"
                                required
                            />

                            <input
                                type="number"
                                placeholder="Age"
                                className="border p-3 rounded-lg"
                                required
                            />

                            <select className="border p-3 rounded-lg" required>
                                <option value="">Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>  
                                <option>Other</option>
                            </select>

                            <select className="border p-3 rounded-lg" required>
                                <option value="">Select Blood Group</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>O+</option>
                                <option>O-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                            </select>

                            <input
                                type="number"
                                placeholder="Phone Number"
                                className="border p-3 rounded-lg"
                                required
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="border p-3 rounded-lg"
                            />

                            <input
                                type="text"
                                placeholder="City"
                                className="border p-3 rounded-lg"
                                required
                            />

                            <input
                                type="text"
                                placeholder="State"
                                className="border p-3 rounded-lg"
                                required
                            />

                            <inputact usenaviagte
                                type="number"
                                placeholder="Weight (kg)"
                                className="border p-3 rounded-lg"
                                required
                            />

                            <input
                                type="text"
                                className="border p-3 rounded-lg"
                                placeholder="Last Blood Donation Date"
                            />

                            <select className="border p-3 rounded-lg">
                                <option value="">Have you donated before?</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>

                            <select className="border p-3 rounded-lg">
                                <option value="">Any Disease?</option>
                                <option>No</option>
                                <option>Diabetes</option>
                                <option>BP</option>
                                <option>Heart Problem</option>
                                <option>Other</option>
                                <option>Blood Cansor</option>
                            </select>

                            <textarea
                                placeholder="Full Address"
                                className="border p-3 rounded-lg md:col-span-2"
                                rows="3"
                            ></textarea>

                            <textarea
                                placeholder="Additional Notes"
                                className="border p-3 rounded-lg md:col-span-2"
                                rows="2"
                            ></textarea>

                            <button
                                type="submit"
                                className="md:col-span-2 bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition"
                            >
                                Submit Donation Form
                            </button>

                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};