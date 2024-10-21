import { useState } from 'react';

const FormBlog = () => {
    const [title, setTitle] = useState('');
    const [bgImage, setBgImage] = useState('');
    const [blog, setBlog] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({ title, bgImage, blog, date: new Date().toLocaleDateString('en-GB') });
    };

    const handleReset = () => {
        setTitle('');
        setBgImage('');
        setBlog('');
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md mx-[10%] bg-slate-300">
            <div className="mb-4 mx-[20%]">
                <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input input-bordered w-full"
                />
            </div>
            <div className="mb-4 mx-[20%]">
                <label className="block text-gray-700 font-bold mb-2">Date:</label>
                <span className="text-gray-700">{new Date().toLocaleDateString('en-GB')}</span>
            </div>
            <div className="mb-4 mx-[20%]">
                <label htmlFor="bgImage" className="block text-gray-700 font-bold mb-2">Background Image URL:</label>
                <input
                    type="text"
                    id="bgImage"
                    value={bgImage}
                    onChange={(e) => setBgImage(e.target.value)}
                    className="input input-bordered w-full"
                />
            </div>
            <div className="mb-4 mx-[10%]">
                <label htmlFor="blog" className="block text-gray-700 font-bold mb-2">Blog:</label>
                <textarea
                    id="blog"
                    value={blog}
                    onChange={(e) => setBlog(e.target.value)}
                    className="textarea textarea-bordered w-full min-h-28 sm:min-h-36 md:min-h-48 lg:min-h-56 xl:min-h-64"
                />
            </div>
            <div className="flex justify-between">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" onClick={handleReset} className="btn btn-secondary">Reset</button>
            </div>
        </form>
    );
};

export default FormBlog