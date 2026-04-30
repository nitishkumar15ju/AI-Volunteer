import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Trash2 } from "lucide-react";
import { RiEdit2Fill } from "react-icons/ri";
import { IoWarningOutline } from "react-icons/io5";

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

  // Create + Update Submit
  const handleFormrSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      // Update Data
      const updatedUsers = commentsUser.map((item) =>
        item.id === editId ? { ...item, ...formData } : item
      );

      setComment(updatedUsers);
    } else {
      // Add Data
      const newData = {
        ...formData,
        id: commentsUser.length + 1,
      };

      setComment((prev) => [...prev, newData]);
    }

    setOpenModal(false);
    setEditId(null);

    setFormData({
      id: "",
      userId: "",
      title: "",
      body: "",
      views: "",
    });
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
    <div>
      <Navbar />

      <div className="flex">
        <div className="w-60">
          <Sidebar />
        </div>

        <div className="flex-1 mt-20">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Volunteer Data
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              View and manage all volunteer information.
            </p>
          </div>

          <div className="flex justify-end pr-[45px]">
            <button
              onClick={handleAddData}
              className="w-24 p-2 bg-red-600 text-white rounded-xl"
            >
              Create
            </button>
          </div>

          {/* Loader */}
          {commentLoader ? (
            <div className="flex justify-center items-center h-[80vh]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
          ) : (
            <div className="mb-20 bg-white shadow-md mr-10">
              <table className="w-full border-collapse border border-gray-200 rounded-xl">
                <thead className="bg-gray-100">
                  <tr className="text-black">
                    <th className="border px-4 py-3 ">ID</th>
                    <th className="border px-4 py-3">UserID</th>
                    <th className="border px-4 py-3">Title</th>
                    <th className="border px-4 py-3">Body</th>
                    <th className="border px-4 py-3">Views</th>
                    <th className="border px-4 py-3">Update</th>
                    <th className="border px-4 py-3">Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {commentsUser.slice(0, 30).map((comment) => (
                    <tr key={comment.id} className="hover:bg-gray-50">
                      <td className="border px-4 py-3 text-black">{comment.id}</td>
                      <td className="border px-4 py-3">{comment.userId}</td>
                      <td className="border px-4 py-3">{comment.title}</td>
                      <td className="border px-4 py-3">{comment.body}</td>
                      <td className="border px-4 py-3">{comment.views}</td>

                      <td className="border px-4 py-3 text-center">
                        <button
                          onClick={() => handleEditData(comment)}
                          className="w-[100px] p-2 bg-yellow-500 text-white rounded-xl flex items-center justify-center gap-2"
                        >
                          <RiEdit2Fill size={20} />
                          Edit
                        </button>
                      </td>

                      <td className="border px-4 py-3 text-center">
                        <button
                          onClick={() =>
                            handleDeleteData(comment.id)
                          }
                          className="w-[100px] p-2 bg-red-600 text-white rounded-xl flex items-center justify-center gap-2"
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
    </div>
  );
};

export default VolunteerData;