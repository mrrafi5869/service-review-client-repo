import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import Reviews from "./Reviews";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../hooks/useTitle";

const MyReviews = () => {
  useTitle("MyReviews");
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://service-review-server-mu.vercel.app/reviews?email=${user.email}`,{
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          logOut();
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (_id) => {
    const confirm = window.confirm("Are you sure???");
    if (confirm) {
      fetch(`https://service-review-server-mu.vercel.app/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = reviews.filter((review) => review._id !== _id);
            setReviews(remaining);
            toast.success("Your review is deleted", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        });
    }
  };
  return (

        <>
          {reviews.length === 0 ? (
            <h1 className="text-5xl text-center font-semibold my-10">
              You have no review till now
            </h1>
          ) : (
            <div className="overflow-x-auto w-full">
              <table className="table w-9/12 mx-auto">
                {/* <!-- head --> */}
                <thead>
                  <tr>
                    <th>
                      <label>
                        <>Delete</>
                      </label>
                    </th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review) => (
                    <Reviews
                      key={review._id}
                      review={review}
                      handleDelete={handleDelete}
                    ></Reviews>
                  ))}
                  <ToastContainer />
                </tbody>
              </table>
            </div>
          )}
        </>
  );
};

export default MyReviews;
