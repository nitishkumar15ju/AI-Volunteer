import React from 'react'


const Cards = ({ data }) => {
  return (
  <div className="w-[420px] bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
  <table className="w-full border-collapse">
    <thead className="bg-gray-100">
      <tr>
        <th className="border px-4 py-2 text-left">ID</th>
        <th className="border px-4 py-2 text-left">Name</th>
        <th className="border px-4 py-2 text-left">Email</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className="border px-4 py-2">{data.id}</td>
        <td className="border px-4 py-2">{data.name}</td>
        <td className="border px-4 py-2 break-words">{data.email}</td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default Cards