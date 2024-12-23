import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";

export default function Home() {

  const [offerListings, setOfferListings] = useState(null);
  const [saleListings, setSaleListings] = useState(null);
  const [rentListings, setRentListings] = useState(null);

  SwiperCore.use([Navigation]);

  console.log(offerListings);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    }

    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    }

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchOfferListings();

  }, []);

  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-4 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your next <span className="text-slate-500">perfect</span>
          <br />
          place with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Sahand Estate in the best place to find your next
          perfect place to live.
          <br />
          We have a wide range of properties for you choose from.
        </div>
        <Link
          to={"/search"}
          className="text-sm sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Let's start now...
        </Link>
      </div>

      {/* swiper */}

      <Swiper navigation>
        {
          offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={
                  {
                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                    backgroundSize: "cover",
                  }
                }
                className="h-[500px]"
              ></div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      {/* listing results for offer, sale and rente */}

      <div className="flex flex-col gap-8 p-3 my-10 max-w-6xl mx-auto">
        {
          offerListings &&
          offerListings.length > 0 &&
          (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  Recent Offers
                </h2>
                <Link to={"/search?offer=true"} className="text-sm sm:text-sm text-blue-800 font-bold hover:underline">
                  Show more offers
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {
                  offerListings.map((listing) => (
                    <ListingItem key={listing._id} listing={listing} />
                  ))
                }
              </div>
            </div>
          )
        }

        {
          rentListings &&
          rentListings.length > 0 &&
          (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  Recent places for rent
                </h2>
                <Link to={"/search?type=rent"} className="text-sm sm:text-sm text-blue-800 font-bold hover:underline">
                  Show more places for rent
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {
                  rentListings.map((listing) => (
                    <ListingItem key={listing._id} listing={listing} />
                  ))
                }
              </div>
            </div>
          )
        }

        {
          saleListings &&
          saleListings.length > 0 &&
          (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  Recent places for sale
                </h2>
                <Link to={"/search?type=sale"} className="text-sm sm:text-sm text-blue-800 font-bold hover:underline">
                  Show more places for sale
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {
                  saleListings.map((listing) => (
                    <ListingItem key={listing._id} listing={listing} />
                  ))
                }
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
