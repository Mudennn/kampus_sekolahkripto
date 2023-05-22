import ama from "../data/amaData";

import React, { useState } from "react";


const VideoAma = () => {

    // Popup state 
  const [popup, setPopup] = useState([]);
  const [popupToggle, setPopupToggle] = useState(false);
  const changeContent = (menu) => {
    setPopup([menu]);
    setPopupToggle(!popupToggle);
  };

  return (
    <div className="py-10 px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 ">
      <div className="p-4 ">
        <h3 className=" lg:text-3xl text-3xl font-bold text-center text-white">
          Ask Me Anything Session!
        </h3>
        <p className="text-sm lg:text-base py-2 text-center  text-gray-400 mt-2">
          Sesi AMA yang pernah kami jalankan.
        </p>
      </div>

      <div className="px-4 py-8 mx-2 sm:mx-auto max-w-7xl lg:py-18 ">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {ama.map((menu, i) => (
            <div key={i}>
              <div className="card cursor-pointer overflow-hidden bg-transparent bg-gray-300 bg-opacity-20 shadow-lg rounded-lg ">
                <img
                  src={menu.image}
                  className=" w-full rounded-md object-cover aspect-square"
                  alt={menu.name}
                />
                <div className="p-5 flex justify-between items-center my-auto">
                  <p className=" font-bold text-white tracking-wide uppercase">
                    {menu.name}
                  </p>
                  <div className="flex items-center justify-start ">
                    <button
                      onClick={() => changeContent(menu)}
                      className="bg-yellow-400 text-black px-5 py-1 rounded-lg font-semibold text-sm"
                    >
                      Tonton
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Popup untuk bagi video keluar  */}
        {popupToggle && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm "
            onClick={changeContent}
          >
            <div
              className="w-[70%] h-[70%] mx-auto "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="justify-end flex m-3">
                <button onClick={changeContent}>
                  <RiCloseFill className="text-2xl text-white" />
                </button>
              </div>
              <div>
                {popup.map((pop) => {
                  return (
                    <div className="containerVideo aspect-w-16 aspect-h-9">
                      <iframe
                        className="responsive-iframe"
                        src={pop.link}
                        title={pop.name}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoAma