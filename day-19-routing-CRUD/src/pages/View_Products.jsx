import React from 'react'

const View_Products = ({ list, handleEdit, handleDelete }) => {
  return (
    <>
      <div className="container mt-4">
        <h2 className="mb-3">Product List</h2>

        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              list.map((item, index) => {
                const { id, title, imgurl, price, category } = item
                return (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={imgurl}
                        alt={title}
                        width="60"
                        height="60"
                      />
                    </td>
                    <td>{title}</td>
                    <td>{price}</td>
                    <td>{category}</td>
                    <td>
                      <button onClick={() => handleEdit(id)} className="btn btn-warning btn-sm me-2">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(id)} className="btn btn-danger btn-sm">
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default View_Products
