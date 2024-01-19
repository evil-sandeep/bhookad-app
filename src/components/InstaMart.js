import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { API_URL } from "../config"
import ShimmerCard from "./Shimmer"

const Section = ({ title, description, isShow, setIsShow }) => {
    return (
        <>
            <h3 className=" font-bold text-2xl">{title}</h3>
            {
                isShow ? <button
                    className="underline border-lime-300"
                    onClick={() => {
                        setIsShow(false)
                    }}
                >
                    Hide
                </button> : <button
                    className="underline border-lime-300"
                    onClick={() => {
                        setIsShow(true)
                    }}
                >
                    Show
                </button>
            }

            <p>{isShow && description}</p>
        </>
    )
}
const InstaMart = () => {
    const [isVisible, setIsVisible] = useState('title')
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = (async () => {
            try {
                const response = await fetch(API_URL);
                if (!response) {
                    throw new Error();
                }
                const json = await response.json();
                const productsArray = json.products;

                setProducts(productsArray)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        })

        fetchData()
    }, [])
    return products === 0 ? (<ShimmerCard />) : (
        < >
            {/* Top Discount Offers */}
            <div>
                <h1 className="text-2xl font-bold ml-2 p-2">Top Discount Offers <i className="fa fa-percent text-2xl text-red-600 animate-pulse " aria-hidden="true"></i></h1>

            </div>
            <div className="flex overflow-x-auto space-x-3 bg-slate-50">

                {/* Left Arrow */}
                <div className="flex-shrink-0 w-8 flex items-center justify-center cursor-pointer">
                    &#x2190;
                </div>

                {/* Carousel Items */}
                {products
                    .slice(10, 20)
                    .sort((a, b) => a.title.localeCompare(b.title))
                    .map((item) => (
                        <Link to={'/resturant/' + item.id} key={item.id}>
                            <div key={item.id} className=" mt-2 flex-shrink-0 w-64 bg-white p-4 shadow-2xl border  rounded-md hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 hover:left-9">

                                <img src={item?.images[2]} alt="" className="w-full h-48 object-cover mb-2" />
                                <h1 className="text-xl font-bold mb-2">{item.title}</h1>
                                <h3 className="text-green-600">Price: ₹{item?.price * 64}</h3>
                                <h3 className="text-blue-600 &#10032" > ⭐{item?.rating}</h3>
                            </div>
                        </Link>
                    ))}

                {/* Right Arrow */}
                <div className="flex-shrink-0 w-8 flex items-center justify-center cursor-pointer">
                    &#x2192;
                </div>
            </div>


            {/* Customer Favorites  */}
            <div>
                <h1 className=" font-bold text-2xl m-2 p-2 ">Customer Favorites </h1>

            </div>
            <div className="flex overflow-x-auto space-x-3 bg-slate-50">

                {/* Left Arrow */}
                <div className="flex-shrink-0 w-8 flex items-center justify-center cursor-pointer ">
                    &#x2190;
                </div>

                {/* Carousel Items */}
                {products
                    .slice(17, 30)
                    .map((item) => (
                        <Link to={'/resturant/' + item.id} key={item.id}>
                            <div key={item.id} className="mt-2 flex-shrink-0 w-64 bg-white p-4 shadow-2xl border  rounded-md hover:scale-105 focus:outline-none focus:ring hover:left-9">

                                <img src={item?.images[1]} alt="" className="w-full h-48 object-cover mb-2" />
                                <h1 className="text-xl font-bold mb-2">{item.title}</h1>
                                <h3 className="text-green-600">Price: ₹{item?.price * 64}</h3>
                                <h3 className="text-blue-600 &#10032" > ⭐{item?.rating}</h3>
                            </div>
                        </Link>
                    ))}

                {/* Right Arrow */}
                <div className="flex-shrink-0 w-8 flex items-center justify-center cursor-pointer">
                    &#x2192;
                </div>
            </div>

            {/* Accordian  */}
            <div className=" border m-2 p-2 border-r-2 border-blue-600 shadow-2xl ">
                <Section
                    title={"Why Choose Us:"}
                    description={'Discounts stimulate sales and can lead to increased revenue. Whether its through flash sales, seasonal promotions, or bundled discounts, these incentives encourage customers to make purchases, contributing to the overall growth of your business. 1. Unmissable Deals and Discounts: Brace yourself for a shopping experience filled with unbeatable deals and discounts! We regularly feature exclusive promotions, flash sales, and limited-time offers, ensuring you get the best value for your money.                    2. Seasonal Specials and Celebratory Sales: Join us in celebrating special occasions and seasons with tailor-made sales events. Whether its festive discounts, holiday specials, or exclusive launches, you can expect exciting opportunities to save big.  3. Loyalty Rewards for Your Ongoing Support: Your loyalty doesnt go unnoticed! As a token of our appreciation, our loyalty program rewards you for every purchase, allowing you to accumulate points that can be redeemed for additional discounts and perks. '}
                    isShow={isVisible === 'title'}
                    setIsShow={() => setIsVisible('title')}
                />
            </div>
            <div className=" border m-2 p-2 border-r-2 border-blue-600 shadow-2xl">
                <Section
                    title={"Boosting Sales and Revenue"}
                    description={'1. Exclusive Discounts and Offers: As a loyal customer, youll enjoy special discounts and exclusive offers that are just for you. Its our way of saying thank you for choosing [Your Brand Name].\n 2. Early Access to Sales and Promotions: Get a VIP pass to our exciting sales events and promotions! Be the first to know about new arrivals and limited-time offers before anyone else.\n 3. Personalized Shopping Experience: Your preferences matter! Experience a personalized shopping journey with tailored recommendations, early product access, and special surprises that suit your unique taste. \n 4. Priority Customer Support: Need assistance? Our dedicated support team is here to prioritize your inquiries and provide swift assistance. Your satisfaction is our top priority.\n 5. Birthday Treats: Celebrate your special day with us! Enjoy exclusive birthday treats and surprises as a token of our appreciation for being a part of the [Your Brand Name] family.\n 6. Accumulate Reward Points: Every purchase brings you closer to exciting rewards! Accumulate points with each transaction and redeem them for discounts or special products.\n  Join our Customer Loyalty and Retention Program today and experience the joy of being a cherished member of the [Your Brand Name] community. Because your loyalty deserves to be rewarded!'}
                    isShow={isVisible === 'Carrer'}
                    setIsShow={() => setIsVisible('Carrer')}
                />

            </div>
            <div className=" border m-2 p-2 border-r-2 border-blue-600 shadow-2xl">
                <Section
                    title={"Why Our Customers Keep Coming Back! "}
                    description={`At *SpiceStyle*, we understand that trust is the cornerstone of every great relationship. We are honored to be your trusted partner on your journey to discovering quality products. Heres why our customers choose us time and time again

 1. Uncompromising Quality: From the selection of materials to the final product, we are committed to delivering uncompromising quality. Our products undergo rigorous testing to ensure they meet the highest standards, providing you with reliability you can count on.

 2. Transparent Business Practices: We believe in openness and transparency. Our business practices are straightforward, and we provide clear information about our products, pricing, and policies. No hidden fees, no surprises—just honest, transparent transactions.
 
3. Exceptional Customer Service: Your satisfaction is our top priority. Our dedicated customer service team is here to listen, assist, and ensure that every interaction with us is a positive one. Your questions and concerns matter, and were always here to help.

4. Real Reviews from Real Customers: The trust of our customers is our most valuable asset. Explore our reviews and hear directly from the community about their experiences. Real stories from real customers — because your voice matters.

5. Secure Shopping Environment: We prioritize the security of your personal information. Our robust security measures ensure a safe and secure shopping environment, giving you peace of mind with every purchase.

6. Reliability in Every Transaction: Whether its a one-time purchase or a long-term partnership, we pride ourselves on delivering reliability at every step. Your trust is not just earned; its maintained through consistent and dependable service.

Thank you for choosing [Your Brand Name]. Join the thousands of customers who have made us their preferred choice. Because when you trust us, youre not just a customer — youre part of the [Your Brand Name] family.`}
                    isShow={isVisible === 'Team'}
                    setIsShow={() => setIsVisible('Team')}
                />

            </div>
        </>
    )
}

export default InstaMart;