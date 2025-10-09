import { useEffect, useState } from "react";
import { data } from "react-router-dom";

const JobTitile = () => {
  const [empData, setEmpData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmpData = async () => {
      try {
        const res = await fetch("/employee.json");
        if (!res.ok) throw new Error("no data found");
        const data = await res.json();
        setEmpData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEmpData();
  }, []);

  if (loading) {
    return <div>loading.....</div>;
  }
  if (error) {
    return <div>error{error.message}</div>;
  }
  const handleRevealAll = () => {
    setEmpData(data.phone);
  };

  return (
    <div>
      <div className="w-full">
        <div className="flex h-full w-full p-3">
          <div className="h-full w-full bg-white rounded-md flex flex-col">
            <div className="flex h-14 w-full items-center justify-between pr-4">
              <div className="flex items-center">
                <div className="h-full w-14 flex items-center justify-center">
                  <input
                    type="checkbox"
                    class="rounded border-gray-300 text-primary focus:ring-primary focus:ring-2"
                  />
                </div>
                <div>
                  <p class="text-sm font-medium"> Contacts</p>
                </div>
              </div>
              <button className="inline-flex bg-purple-500 items-center px-2 py-2 text-xs rounded-md text-white bg-gradient-to-r-purple ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
                Bulk Reveal
              </button>
            </div>

            <div className="overflow-y-auto flex-1 scrollbar-thin">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100 h-14 sticky top-0 z-10">
                  <tr className="text-xs font-normal">
                    <th className="bw-14 "></th>
                    <th className="text-left w-[15rem]">contact</th>
                    <th className="text-left w-[15rem]"> contact details</th>
                    <th className="text-left w-[15rem]"> Company</th>
                    <th className="bw-14 "></th>
                  </tr>
                </thead>
                <tbody>
                  {empData.map((emp, index) => (
                    <tr key={index} className="  h-14 border-b-2">
                      <td class="w-14">
                        <div className="h-full w-[15rem] flex flex-col truncate  ">
                          <div className="flex gap-1">
                            <div class="h-full w-full flex justify-between ml-6 items-center">
                              <input
                                type="checkbox"
                                class="rounded border-gray-300 text-primary focus:ring-primary focus:ring-2"
                              />

                              <div class="text-xs trucate">{emp.name}</div>
                              <div>
                                <a
                                  href="https://linkedin.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <svg
                                    class="sociallink"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clip-path="url(#clip0_2300_4290)">
                                      <path
                                        d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z"
                                        fill="#0A66C2"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_2300_4290">
                                        <rect
                                          width="24"
                                          height="24"
                                          fill="white"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="text-xs text-slate-500 text-center truncate ml-6">
                            {emp.jobTitle}
                          </div>
                        </div>
                      </td>

                      <td></td>
                      <td>
                        <div class="w-[20rem] flex gap-2">
                          <div class="relative inline-block">
                            <button
                              onClick={() => handleRevealAll}
                              class="bg-primary bg-purple-500 text-white text-xs w-20 h-8 rounded-md hover:opacity-90 flex items-center justify-center"
                            >
                              <span>Reveal All</span>
                            </button>
                          </div>
                          <div class="relative flex items-center">
                            <div class="border-2 w-20 rounded-md h-8 flex items-center cursor-pointer">
                              <div class="border-r w-1/2 h-full flex items-center justify-center relative text-gray-900">
                                <div class="relative w-4 h-4 group">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="w-4 h-4 text-gray-800"
                                    aria-label="Email hidden"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div class="border-l w-1/2 h-full flex items-center justify-center relative text-gray-900">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  class="h-4 w-4 "
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>
                        {" "}
                        <div class="h-full w-[15rem] flex gap-1 truncate  items-center mr-8">
                          <div class="h-6 w-6 flex items-center justify-center">
                            <img
                              src="https://media.kipplo.com/company/boeing/boeing.jpeg"
                              alt=""
                            />
                          </div>
                          <div>
                            <div class=" text-xs cursor-pointer">
                              {emp.company}
                            </div>
                            <div class="text-slate-400 text-xs text-center truncate">
                              {emp.description}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobTitile;
