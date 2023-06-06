import React from 'react';

const ShowCase = () => {
    const images = [
        {
            img: "https://cassia.qodeinteractive.com/wp-content/uploads/2022/10/landing-home-img-21.jpg"
        },
        {
            img: "https://cassia.qodeinteractive.com/wp-content/uploads/2022/11/landing-home-img-24.jpg"
        },
        {
            img: "https://cassia.qodeinteractive.com/wp-content/uploads/2022/11/landing-home-img-30.jpg"
        },
        {
            img: "https://cassia.qodeinteractive.com/wp-content/uploads/2022/11/landing-home-img-25.jpg"
        },
        {
            img: "https://cassia.qodeinteractive.com/wp-content/uploads/2022/11/landing-home-img-31.jpg"
        },
        {
            img: "https://cassia.qodeinteractive.com/wp-content/uploads/2022/11/landing-home-img-23.jpg"
        },
        {
            img: "https://cassia.qodeinteractive.com/wp-content/uploads/2022/11/landing-home-img-27.jpg"
        },
        {
            img: "https://cassia.qodeinteractive.com/wp-content/uploads/2022/11/landing-home-img-29.jpg"
        },
        {
            img: "https://cassia.qodeinteractive.com/wp-content/uploads/2022/11/landing-home-img-34.jpg"
        },
        {
            img: "https://cassia.qodeinteractive.com/wp-content/uploads/2022/11/landing-home-img-23.jpg"
        },
        {
            img: "https://cassia.qodeinteractive.com/wp-content/uploads/2022/11/landing-home-img-26.jpg"
        },
        {
            img: "https://cassia.qodeinteractive.com/wp-content/uploads/2022/11/landing-home-img-28.jpg"
        },
    ]
    return (
        <div className='w-9/12 mx-auto mt-24 mb-24'>
            <h1 className='text-center text-5xl mt-[10%] mb-12 text-yellow-800 font-semibold italic'>ShowCase</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center relative overflow-hidden bg-cover bg-no-repeat'>
                {
                    images.map(image => <img src={image.img} className='transition duration-300 ease-in-out hover:scale-110' alt=''></img>)
                }
            </div>
        </div>
    );
};

export default ShowCase;