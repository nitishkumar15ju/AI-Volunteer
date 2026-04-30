import React, { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import { RiEdit2Fill } from "react-icons/ri";
import { IoWarningOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CommentsTable = () => {
  const [users, setUsers] = useState([]);
  const [commentLoader, setCommentLoader] = useState(true);

  const [idToDelete, setIdToDelete] = useState(null);
  const [editId, setEditId] = useState(null);

  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setDeleteDataModal] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    userId: "",
    title: "",
    body: "",
    views: "",
  });

  const GoVolunteerUser = () => {
    navigate("/volunteerdata");
  };

  // Fetch Data
  const fetchUsers = async () => {
    setCommentLoader(true);

    try {
      const result = await fetch("https://dummyjson.com/posts");
      const data = await result.json();
      setUsers(data.posts);
    } catch (error) {
      console.log(error);
    } finally {
      setCommentLoader(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Input Change
  const handleTextChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit Create + Update
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      const updatedUsers = users.map((item) =>
        item.id === editId ? { ...item, ...formData } : item
      );

      setUsers(updatedUsers);
    } else {
      const newData = {
        ...formData,
        id: users.length + 1,
      };

      setUsers((prev) => [...prev, newData]);
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

  // Edit
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

  // Delete Open
  const handleDeleteData = (id) => {
    setIdToDelete(id);
    setDeleteDataModal(true);
  };

  // Confirm Delete
  const handleDelete = () => {
    const deleteRow = users.filter((item) => item.id !== idToDelete);

    setUsers(deleteRow);
    setDeleteDataModal(false);
    setIdToDelete(null);
  };

  return (
    <div className="border-2 bg-white rounded-lg shadow-sm p-5">
      {/* Header */}
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold text-lg text-black">Comments :</h3>

        <button
          onClick={GoVolunteerUser}
          className="hover:bg-blue-500 hover:text-white px-4 py-1 rounded-full text-black"
        >
          View All
        </button>
      </div>

      {/* Loader */}
      {commentLoader ? (
        <div className="flex justify-center items-center h-80">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr className="text-black">
                <th className="border p-3">ID</th>
                <th className="border p-3">UserID</th>
                <th className="border p-3">Title</th>
                <th className="border p-3">Body</th>
                <th className="border p-3">Views</th>
                <th className="border p-3">Update</th>
                <th className="border p-3">Delete</th>
              </tr>
            </thead>

            <tbody>
              {users.slice(0, 5).map((comment) => (
                <tr key={comment.id} className="hover:bg-gray-50">
                  <td className="border p-3 text-black">{comment.id}</td>
                  <td className="border p-3">{comment.userId}</td>
                  <td className="border p-3">{comment.title}</td>
                  <td className="border p-3">{comment.body}</td>
                  <td className="border p-3">{comment.views}</td>

                  <td className="border p-3 text-center">
                    <button
                      onClick={() => handleEditData(comment)}
                      className="bg-yellow-500 text-white px-3 py-2 rounded-lg flex items-center gap-2 mx-auto"
                    >
                      <RiEdit2Fill />
                      Edit
                    </button>
                  </td>

                  <td className="border p-3 text-center">
                    <button
                      onClick={() => handleDeleteData(comment.id)}
                      className="bg-red-600 text-white px-3 py-2 rounded-lg flex items-center gap-2 mx-auto"
                    >
                      <Trash2 size={18} />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <form
            onSubmit={handleFormSubmit}
            className="bg-white p-8 rounded-2xl w-[600px]"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Update Comment
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                name="id"
                value={formData.id}
                onChange={handleTextChange}
                placeholder="ID"
                className="border p-3 rounded-lg"
              />

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
                name="title"
                value={formData.title}
                onChange={handleTextChange}
                placeholder="Title"
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

              <textarea
                name="body"
                value={formData.body}
                onChange={handleTextChange}
                rows="4"
                placeholder="Body"
                className="col-span-2 border p-3 rounded-lg"
              ></textarea>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => setOpenModal(false)}
                className="bg-gray-400 text-white px-5 py-2 rounded-lg"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="bg-green-600 text-white px-5 py-2 rounded-lg"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Delete Modal */}
      {openDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl w-[400px] text-center">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
                <IoWarningOutline className="text-red-600 text-3xl" />
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-2">Are you sure?</h2>

            <p className="text-gray-500 mb-6">
              This record will be permanently deleted.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-5 py-2 rounded-lg"
              >
                Confirm
              </button>

              <button
                onClick={() => setDeleteDataModal(false)}
                className="bg-gray-300 px-5 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentsTable;