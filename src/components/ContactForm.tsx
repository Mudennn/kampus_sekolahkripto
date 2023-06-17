import {useForm} from "react-hook-form"

export const ContactUsForm = () => {
    const {register, handleSubmit} = useForm()
    return <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl mt-0 md:mt-10">
    <div className="relative rounded-lg  bg-gray-300 bg-opacity-20 p-8 shadow-lg sm:p-12">
      <form>
        <div className="mb-6">
          <label htmlFor="" className="text-white">Nama Penuh <span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Ali bin Abdul"
            className="placeholder:text-white bg-gray-500 border-[f0f0f0] focus:border-primary w-full rounded  py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          />
        </div>
        <div className="mb-6">
        <label htmlFor="" className="text-white">Alamat Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            placeholder="admin@kampussekolahkripto.com"
            className="placeholder:text-white bg-gray-500 border-[f0f0f0] focus:border-primary w-full rounded  py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          />
        </div>
        <div className="mb-6">
        <label htmlFor="" className="text-white">No Telefon <span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="0162345678"
            className="placeholder:text-white bg-gray-500 border-[f0f0f0] focus:border-primary w-full rounded  py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          />
        </div>
        <div className="mb-6">
        <label htmlFor="" className="text-white">Mesej <span className="text-red-500">*</span></label>
          <textarea
            
            placeholder="Mesej Anda"
            className="placeholder:text-white bg-gray-500 border-[f0f0f0] focus:border-primary w-full resize-none rounded py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className=" w-full text-base font-semibold py-3 px-5 rounded-lg transition-colors duration-200  bg-yellow-400 text-black hover:bg-black hover:text-white"
          >
            Send Message
          </button>
        </div>
      </form>
      
    </div>
  </div>
}