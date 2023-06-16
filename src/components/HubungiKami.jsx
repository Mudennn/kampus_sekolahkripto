import React from "react";
import BG from "/assets/Mask-group.png";

const HubungiKami = () => {
  return (
    <section >
      <img
      src={BG}
      alt="MySekolah Kripto"
      class="absolute -mt-[15%] rotate-180 w-full left-0 lg:block hidden -z-20"
    />
    <img
      src={BG}
      alt="MySekolah Kripto"
      class="absolute mt-[100%]rotate-180 left-0 h-[550px] sm:block md:hidden -z-20"
    />
      <div class="relative flex flex-wrap items-center mx-auto max-w-7xl">
        <div class="flex flex-col items-start lg:mt-12 mb-16 lg:flex-grow lg:w-1/2 lg:pr-6 xl:pr-24 md:mb-0 xl:mt-0 z-10">
          <h2 class="text-white lg:mb-6 mb-2 text-[28px]  font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
            Hubungi Kami
          </h2>
          <p class="text-white mb-9 text-base leading-relaxed">
            Maklumat lanjut atau ingin tahu sebarang penyertaan boleh hubungi
            kami. Kami sentiasa bersedia membantu anda
          </p>
          {/* Lokasi kami  */}
          <div class="mb-8 flex w-full max-w-[370px] text-white">
            <div class=" mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden sm:h-[70px] sm:max-w-[70px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
            <div class="w-full">
              <h4 class="text-dark mb-1 text-xl font-bold">Lokasi Kami</h4>
              <p class="text-body-color text-base">Selangor, Malaysia</p>
            </div>
          </div>
          {/* No telefon  */}
          <div class="mb-8 flex w-full max-w-[370px] text-white">
            <div class="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <div class="w-full">
              <h4 class="text-dark mb-1 text-xl font-bold">No. Telefon</h4>
              <p class="text-body-color text-base">(+60) 12345678</p>
            </div>
          </div>
          {/* Alamat Emel  */}
          <div class="lg:mb-8 mb-0 flex w-full  max-w-[370px] text-white">
            <div class="mr-6 flex h-[60px] max-w-[60px] w-full  items-center justify-center overflow-hidden rounded  sm:h-[70px] sm:max-w-[70px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div class="w-full">
              <h4 class="text-dark mb-1 text-xl font-bold">Alamat Emel</h4>
              <p class="text-body-color text-base">
                admin@kampussekolahkripto.com
              </p>
            </div>
          </div>
        </div>

        {/* Form  */}
        <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl mt-0 md:mt-10">
          <div class="relative rounded-lg  bg-gray-300 bg-opacity-20 p-8 shadow-lg sm:p-12">
            <form>
              <div class="mb-6">
                <label htmlFor="" className="text-white">Nama Penuh <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  placeholder="Ali bin Abdul"
                  class="placeholder:text-white bg-gray-500 border-[f0f0f0] focus:border-primary w-full rounded  py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                />
              </div>
              <div class="mb-6">
              <label htmlFor="" className="text-white">Alamat Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  placeholder="admin@kampussekolahkripto.com"
                  class="placeholder:text-white bg-gray-500 border-[f0f0f0] focus:border-primary w-full rounded  py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                />
              </div>
              <div class="mb-6">
              <label htmlFor="" className="text-white">No Telefon <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  placeholder="0162345678"
                  class="placeholder:text-white bg-gray-500 border-[f0f0f0] focus:border-primary w-full rounded  py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                />
              </div>
              <div class="mb-6">
              <label htmlFor="" className="text-white">Mesej <span className="text-red-500">*</span></label>
                <textarea
                  rows="6"
                  placeholder="Mesej Anda"
                  class="placeholder:text-white bg-gray-500 border-[f0f0f0] focus:border-primary w-full resize-none rounded py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  class=" w-full text-base font-semibold py-3 px-5 rounded-lg transition-colors duration-200  bg-yellow-400 text-black hover:bg-black hover:text-white"
                >
                  Send Message
                </button>
              </div>
            </form>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubungiKami;
