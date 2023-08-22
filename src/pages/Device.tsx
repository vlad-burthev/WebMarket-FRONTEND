import { addRating, getOneDevice } from "@/store/deviceSlice/deviceAPI";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { StarIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useEffect, type FC, useState } from "react";
import { useParams } from "react-router-dom";

interface DeviceProps {}

const Device: FC<DeviceProps> = () => {
  const dispatch = useAppDispatch();
  const [reviews, setReviews] = useState(0);
  const { device }: any = useAppSelector((state) => state.device);
  const { user } = useAppSelector((state) => state.user);
  const [chooseRate, setChooseRate] = useState(0);
  const [rateBy, setRateBy] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const { slug } = useParams();

  const addRatingHandler = (rate: any) => {
    if (user !== undefined) {
      dispatch(addRating({ rate, id: device.id }));
      setRateBy(rate);
      if (rateBy === 0) {
        setReviews(reviews + 1);
      }
    } else {
      alert("Registration");
    }
  };

  useEffect(() => {
    try {
      if (slug) {
        dispatch(getOneDevice(slug));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  useEffect(() => {
    if (device.ratings && device.ratings !== undefined) {
      setReviews(device.ratings.length);

      if (device.ratings.length === 0) {
        setAverageRating(0);
      }
      const sumOfRatings = device.ratings.reduce(
        (sum: number, rating: any) => sum + rating.rate,
        0
      );
      const average = sumOfRatings / device.ratings.length;
      setAverageRating(average);
      if (user !== undefined && device.ratings !== undefined) {
        const existingRate = device.ratings.find(
          (rate: any) => rate.userId === user.id
        );

        if (existingRate !== undefined) {
          setRateBy(existingRate.rate);
        } else {
          setRateBy(0);
        }
      } else {
        setRateBy(0);
      }
    }
  }, [device, user]);

  for (const key in device) {
    if (device[key] === undefined) {
      return "Loading...";
    }
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={import.meta.env.VITE_API_URL + device.img}
              alt={device.name}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="aspect-h-4 aspect-w-3 hidden col-start-3 overflow-hidden rounded-lg lg:block">
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">device.rows information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {device.price} ₴
              </p>

              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        onClick={() => addRatingHandler(rating + 1)}
                        onMouseEnter={() => setChooseRate(rating + 1)}
                        onMouseLeave={() => setChooseRate(0)}
                        className={classNames(
                          chooseRate > rating
                            ? "text-green-500"
                            : rateBy > rating
                            ? "text-yellow-600"
                            : averageRating > rating
                            ? "text-gray-900"
                            : "text-gray-400",
                          "h-5 w-5 flex-shrink-0 cursor-pointer"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{averageRating} out of 5 stars</p>
                  <a className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {reviews} reviews
                  </a>
                </div>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Make an order
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* device.rows info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {device.name}
            </h1>
          </div>

          {/* Options */}

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                {/* <p className="text-base text-gray-900">{device.description}</p> */}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Device;
