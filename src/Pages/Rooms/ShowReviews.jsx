import { useEffect, useState } from "react";
import useAuth from "../../api/useAuth";

const ShowReviews = () => {
    const { user } = useAuth();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched Reviews:", data);
                setReviews(data);
            })
            .catch((err) => console.error("Error fetching reviews:", err));
    }, []);

    return (
        <div className="max-w-lg">
            <h2 className="text-xl font-semibold pb-8">User Reviews</h2>
            {reviews.length > 0 ? (
                reviews.map((review, index) => (
                    <div key={index} className="border p-3 rounded-lg shadow-md">
                        <div className="flex items-center space-x-3">
                            {user?.photoURL && (
                                <img
                                    src={user.photoURL}
                                    alt="User Avatar"
                                    className="w-10 h-10 rounded-full"
                                />
                            )}
                            <div>
                                <p className="font-semibold">{review.name || "Anonymous"}</p>
                                <p className="font-semibold">{review.email}</p>
                                <p className="text-gray-600 text-sm">{review.message}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">No reviews available.</p>
            )}
        </div>
    );
};

export default ShowReviews;
