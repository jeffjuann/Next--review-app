import { useEffect, useState } from "react"
import Axios from 'axios';

export default function ReviewPage()
{
    const [ reviews, setReviews ] = useState(["a","b","c"]);

    useEffect(() =>
    {
        Axios.get("http://localhost:3000/api/reviews")
        .then((Responses: any) =>
        {
            console.log(Responses.data)
            setReviews(Responses.data);
        })
        console.log(reviews);
    }, [])

    return (
        <main>
            <h1>Doe's Restaurants</h1>
            <div className="reviewContainer">
                {
                    reviews.map((review: any) =>
                    {
                        return (
                            <div>
                                {review.review};
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}