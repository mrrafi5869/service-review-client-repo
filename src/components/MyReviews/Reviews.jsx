import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Reviews = ({ review, handleDelete }) => {
  const { _id, serviceName, price, user, userEmail, userReview, service } =
    review;
  // const {user} = useContext(AuthContext)
  const [reviews, setReviews] = useState({});
  useEffect(() => {
    fetch(`https://service-review-server-mu.vercel.app/service/${service}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [service]);

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)}>
            <FaTrash></FaTrash>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img src={reviews.img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{user}</div>
            <div className="text-sm opacity-50">{serviceName}</div>
          </div>
        </div>
      </td>
      <td>
        {userEmail}
        <br />
        <p className="">{userReview}</p>
      </td>
      <td>{price}</td>
      <th>
        <Link to={`/details/${_id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
      </th>
    </tr>
  );
};

export default Reviews;
