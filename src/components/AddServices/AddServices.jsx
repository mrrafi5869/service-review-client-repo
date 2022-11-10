import React from 'react';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {
    useTitle("AddServices");
    
    const handleSendReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const img = form.image.value;
        const name = form.name.value;
        const price = form.price.value;
        const desc = form.desc.value;

        const service = {
            img,
            name,
            price,
            desc
        }

        fetch('http://localhost:5000/service',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Successfully added');
                // form.reset();
            }
        })
    }
    return (
        <form onSubmit={handleSendReview} className="w-9/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="image"
            // defaultValue={firstName}
            type="text"
            placeholder="Enter Your image link"
            className="input w-full input-bordered my-3"
            required
          />
          <input
            name="name"
            // defaultValue={lastName}
            type="text"
            placeholder="Service Name"
            className="input w-full input-bordered my-3"
            required
          />
          <input
            name="price"
            type="text"
            placeholder="Service Price"
            className="input w-full input-bordered my-3"
          />
          <input
            name="desc"
            type="text"
            placeholder="Description"
            className="input w-full input-bordered my-3"
          />
        </div>
        <div className="flex justify-center my-9">
          <input className="btn btn-primary w-32" type="submit" value="Send" />
        </div>
      </form>
    );
};

export default AddServices;