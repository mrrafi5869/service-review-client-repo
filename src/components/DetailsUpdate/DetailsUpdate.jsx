import React from 'react';
import { Link } from 'react-router-dom';

const DetailsUpdate = () => {
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.name.value;
        const user = form.user.value;
        const price = form.price.value;
        const userEmail = form.userEmail.value;
        const userPhone = form.userPhone.value;
        const userReview = form.userReview.value;

        
        const reviewUpdate = {
            serviceName,user,price,userEmail,userPhone,userReview
        }

        fetch('https://service-review-server-mu.vercel.app/service',{
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewUpdate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

      };
    return (
        <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="serviceName"
                placeholder="Service Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="name"
                name="user"
                placeholder="User Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Phone</span>
              </label>
              <input
                type="text"
                name="userPhone"
                placeholder="User Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Review</span>
              </label>
              <input
                type="text"
                name="userReview"
                placeholder="User Review"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="userEmail"
                placeholder="User Email"
                className="input input-bordered"
              />
              <label className="label">
                <p>
                  Already Have an Account?Please{" "}
                  <Link to="/login" className="text-blue-500 underline">
                    Register
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
            </div>
          </form>
    );
};

export default DetailsUpdate;