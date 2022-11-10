import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";

const SendReview = () => {
  useTitle("SendReview")
  const { user } = useContext(AuthContext);
  const { _id, name, price} = useLoaderData();
  const navigate = useNavigate();
  // const firstName = user?.displayName.split(' ').slice(0, -1).join(' ');
  // const lastName = user?.displayName.split(' ').slice(-1).join(' ');

  const handleSendReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = user?.email;
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
        service: _id,
        serviceName: name,
        price,
        user: firstName + lastName,
        userEmail: email,
        userPhone: phone,
        userReview: message,
    }

    fetch('http://localhost:5000/reviews', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            alert('Thanks For your review');
            navigate('/');
            form.reset();
        }
    })

  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10">{name}</h1>
      <form onSubmit={handleSendReview} className="w-9/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="firstName"
            // defaultValue={firstName}
            type="text"
            placeholder="First Name"
            className="input w-full input-bordered my-3"
            required
          />
          <input
            name="lastName"
            // defaultValue={lastName}
            type="text"
            placeholder="Last Name"
            className="input w-full input-bordered my-3"
            required
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input w-full input-bordered my-3"
          />
          <input
            name="email"
            type="text"
            placeholder="Your Email"
            defaultValue={user?.email}
            readOnly
            className="input w-full input-bordered my-3"
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full my-3"
          placeholder="Bio"
          required
        >
        </textarea>
        <div className="flex justify-center my-9">
          <input className="btn btn-primary w-32" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default SendReview;
