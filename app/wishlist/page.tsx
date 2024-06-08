"use client";

import { useSelector } from "react-redux";

const page = () => {
  const userData = useSelector((data: any) => data.users);
  console.log("userData ", userData);

  return (
    <>
      {userData.length === 0 ? (
        <div className="p-[20%] flex justify-center items-center">
          <h1 className="font-mono text-gray-800 font-extrabold text-3xl">
            Empty list....!
          </h1>
        </div>
      ) : (
        <div className="flex pt-[10%] justify-center items-center flex-wrap gap-20">
          {userData?.map((value: string | any, key: number) => (
            <div className="bg-slate-100 border-b-1 border-slate-300" key={key}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    <h1 className="car-card__content-title">
                      {value.datas.make} {value.datas.model}
                    </h1>
                  </div>
                  <p className="text-gray-700 text-base font-semibold">
                    City MPG:- {value.datas.city_mpg}
                  </p>
                  <p className="text-gray-700 text-base font-semibold">
                    Highway MPG:- {value.datas.highway_mpg}
                  </p>
                  <p className="text-gray-700 text-base font-semibold">
                    Combination MPG:- {value.datas.combination_mpg}
                  </p>
                  <p className="text-gray-700 text-base font-semibold">
                    Cylinders:- {value.datas.cylinders}
                  </p>
                  <p className="text-gray-700 text-base font-semibold">
                    Displacement:- {value.datas.displacement}
                  </p>
                  <p className="text-gray-700 text-base font-semibold">
                    Drive:- {value.datas.drive}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2">
                    #{value.datas.fuel_type}
                  </span>
                  <span className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{value.datas.year}
                  </span>
                  <span className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{value.datas.class}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default page;
