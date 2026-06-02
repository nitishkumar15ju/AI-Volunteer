import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Trash2, Sparkles } from "lucide-react";
import { RiEdit2Fill } from "react-icons/ri";
import { IoWarningOutline } from "react-icons/io5";
import Footer from "../components/Footer";

const VolunteerData = () => {
  const [commentsUser, setComment] = useState([]);
  const [commentLoader, setCommentUserLoader] = useState(true);

  const [idToDelete, setIdToDelete] = useState(null);
  const [editId, setEditId] = useState(null);

  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setDeleteDataModal] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    userId: "",
    title: "",
    body: "",
    views: "",
  });

  // Fetch Data
  const Fetchusercomment = async () => {
    setCommentUserLoader(true);

    try {
      const result = await fetch("https://dummyjson.com/posts");
      const data = await result.json();
      setComment(data.posts);
    } catch (error) {
      console.log(error);
    } finally {
      setCommentUserLoader(false);
    }
  };

  useEffect(() => {
    Fetchusercomment();
  }, []);

  // Input Change
  const handleTextChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleFormrSubmit = (e) => {
    e.preventDefault();

    if (editId) {

      // find updated item
      const updatedItem = {
        id: editId,
        userId: formData.userId,
        title: formData.title,
        body: formData.body,
        views: formData.views,
      };

      // remove old item
      const filteredData = commentsUser.filter(
        (item) => item.id !== editId
      );

      // add updated item on top
      setComment([updatedItem, ...filteredData]);

    } else {

      // create new item
      const newData = {
        id: commentsUser.length + 1,
        userId: formData.userId,
        title: formData.title,
        body: formData.body,
        views: formData.views,
      };

      setComment((prev) => [newData, ...prev]);
    }

    // reset form
    setFormData({
      id: "",
      userId: "",
      title: "",
      body: "",
      views: "",
    });

    setEditId(null);
    setOpenModal(false);
  };

  // Open Create Modal
  const handleAddData = () => {
    setEditId(null);

    setFormData({
      id: "",
      userId: "",
      title: "",
      body: "",
      views: "",
    });

    setOpenModal(true);
  };

  // Open Update Modal
  const handleEditData = (comment) => {
    setEditId(comment.id);

    setFormData({
      id: comment.id,
      userId: comment.userId,
      title: comment.title,
      body: comment.body,
      views: comment.views,
    });

    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  // Delete Modal
  const handleDeleteData = (id) => {
    setIdToDelete(id);
    setDeleteDataModal(true);
  };

  const deleteClose = () => {
    setDeleteDataModal(false);
  };

  // Confirm Delete
  const handleDelete = () => {
    const deleteRow = commentsUser.filter(
      (item) => item.id !== idToDelete
    );

    setComment(deleteRow);
    setDeleteDataModal(false);
    setIdToDelete(null);
  };

  return (
    <div className="bg-gray-100">
      <Navbar />

      <div className="flex  ">
        <div className="w-60">
          <Sidebar />
        </div>

        <div className="flex-1 mt-[130px] mr-20 ml-10 mb-[300px]   ">
           <div className="relative overflow-hidden rounded-3xl p-8 mb-8 bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#7c3aed] shadow-2xl">

            {/* Glow Effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center">

              <div>
                <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">
                  AI Volunteer Data 🚀
                </h1>

                <p className="text-blue-100 text-sm sm:text-base max-w-2xl leading-relaxed">
                  Monitor volunteer attendance, event activities,
                  performance analytics, AI reports, and real-time engagement.
                </p>

                {/* <div className="flex gap-3 mt-6 flex-wrap">

                  <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                    View Reports
                  </button>

                  <button className="bg-white/10 border border-white/20 backdrop-blur-md text-white px-5 py-2 rounded-xl hover:bg-white/20 transition">
                    Attendance Analytics
                  </button>

                </div> */}
              </div>

              {/* AI LOADER */}
                 <div className="mt-10 lg:mt-0 flex justify-center items-center">

                <div className="  mt-10 h-20 w-20 rounded-full bg-[#0b0b10] relative overflow-hidden flex items-center justify-center shadow-[0_0_60px_rgba(168,85,247,0.4)]">

                  {/* Outer Ring */}
                  <div className="absolute inset-0 border-[6px] border-cyan-400/20 rounded-full"></div>

                  {/* Rotating Ring */}
                  <div className="absolute h-10 w-10 border-[5px] border-t-cyan-400 border-r-purple-500 border-b-transparent border-l-transparent rounded-full animate-spin"></div>

                  {/* Glow */}
                  <div className="absolute h-24 w-24 bg-purple-500/20 blur-2xl rounded-full"></div>

                  {/* Core */}
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse shadow-[0_0_30px_#8b5cf6]"></div>

                </div>

              </div>

            </div>

            {/* LIVE BADGE */}
            <div className="absolute top-5 right-5 bg-green-400 text-black px-4 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
              ● LIVE SYSTEM
            </div>

          </div>
        
          <div className="flex justify-end pr-[45px]">
            <button
              onClick={handleAddData}
              className="w-24 p-2 bg-green-600 text-white rounded-xl"
            >
              +  Create
            </button>
          </div>

          {/* Loader */}
          {commentLoader ? (
            <div className="flex justify-center items-center h-[80vh]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
          ) : (
            <div className=" bg-white shadow-md ">
              <table className="w-full border-collapse border border-gray-200 rounded-xl">
                <thead className="bg-gray-100">
                  <tr className="text-black">
                    <th className=" px-4 py-3 ">ID</th>
                    <th className=" px-4 py-3">UserID</th>
                    <th className=" px-4 py-3">Title</th>
                    <th className=" px-4 py-3">Body</th>
                    <th className=" px-4 py-3">Views</th>
                    <th className=" px-4 py-3">Update</th>            
                    <th className=" px-4 py-3">Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {commentsUser.map((comment) => (
                    <tr key={comment.id} className="hover:bg-gray-50">
                      <td className=" px-4 py-3 text-black">#{comment.id}</td>
                      <td className=" px-4 py-3">
                        <span className=" p-2 rounded-3xl bg-blue-200">{comment.userId}</span></td>
                      <td className=" px-4 py-3">{comment.title}</td>
                      <td className=" px-4 py-3">{comment.body}</td>
                      <td className=" px-4 py-3"><span className="p-2 rounded-3xl bg-green-200">{comment.views}</span></td>

                      <td className=" px-4 py-3 text-center">
                        <button
                          onClick={() => handleEditData(comment)}
                          className="w-[100px] p-2 bg-yellow-500 text-white rounded-3xl flex items-center justify-center gap-2"
                        >
                          <RiEdit2Fill size={20} />
                          Edit
                        </button>
                      </td>

                      <td className=" px-4 py-3 text-center">
                        <button
                          onClick={() =>
                            handleDeleteData(comment.id)
                          }
                          className="w-[100px] p-2 bg-red-600 text-white rounded-3xl flex items-center justify-center gap-2"
                        >
                          <Trash2 size={20} />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Create / Update Modal */}
          {openModal && (
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
              <form onSubmit={handleFormrSubmit}>
                <div className="bg-gray-200 w-full max-w-2xl rounded-2xl shadow-2xl p-8">
                  <h2 className="text-3xl font-bold mb-6 text-center">
                    {editId ? "Update Volunteer" : "Create Volunteer"}
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="number"
                      name="userId"
                      value={formData.userId}
                      onChange={handleTextChange}
                      placeholder="UserID"
                      className="border p-3 rounded-lg"
                    />

                    <input
                      type="text"
                      name="views"
                      value={formData.views}
                      onChange={handleTextChange}
                      placeholder="Views"
                      className="border p-3 rounded-lg"
                    />

                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleTextChange}
                      placeholder="Title"
                      className="border p-3 rounded-lg col-span-2"
                    />

                    <textarea
                      name="body"
                      value={formData.body}
                      onChange={handleTextChange}
                      rows="4"
                      placeholder="Body"
                      className="border p-3 rounded-lg col-span-2"
                    ></textarea>
                  </div>

                  <div className="flex justify-end gap-3 mt-6">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-5 py-2 bg-gray-400 text-white rounded-lg"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="px-5 py-2 bg-green-600 text-white rounded-lg"
                    >
                      {editId ? "Update" : "Save"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* Delete Modal */}
          {openDeleteModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white w-[420px] rounded-2xl shadow-2xl p-6">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
                    <IoWarningOutline className="text-red-600 text-3xl" />
                  </div>
                </div>
                <div className="text-center mb-5">
                  <h1 className="text-2xl font-bold">
                    Are you sure?
                  </h1>

                  <p className="text-sm text-gray-500 mt-2">
                    This action cannot be undone.
                  </p>
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleDelete}
                    className="px-5 py-2 bg-red-600 text-white rounded-lg"
                  >
                    Confirm
                  </button>

                  <button
                    onClick={deleteClose}
                    className="px-5 py-2 bg-gray-300 rounded-lg"
                  >                
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
      <div className="overflow-x-hidden ">
        <Footer />
      </div>
    </div>
  );
};

export default VolunteerData;