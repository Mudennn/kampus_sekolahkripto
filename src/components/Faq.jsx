import { useState } from "react";
import React from 'react'

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border rounded shadow-sm">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <div className="flex items-center justify-center w-8 h-8 border rounded-full">
            <svg
              viewBox="0 0 24 24"
              className={`w-3 text-white transition-transform duration-200 ${
                isOpen ? 'transform rotate-180' : ''
              }`}
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="2,7 12,17 22,7"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="textwhite">{children}</p>
          </div>
        )}
      </div>
    );
  };
  
const Faq = () => {
    return (
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="flex flex-col mb-16 sm:text-center">
         < p
      class="p-2 text-sm font-medium tracking-wider text-center uppercase text-gray-400"
    >
      Mulakan Dengan Asas
    </p>
    <h2
      class="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-white"
    >
      Soalan-soalan Lazim
    </h2>
            {/* <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                <span class="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-white lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span class="relative">The</span>
                </span>{' '}
                quick, brown fox jumps over a lazy dog
              </h2>
              <p class="text-base text-white md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </div> */}
          </div>
          <div class="space-y-4 text-white">
            <Item title="The quick, brown fox jumps over a lazy dog?">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </Item>
            <Item title="The first mate and his Skipper too will do?">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </Item>
            <Item title="Is the Space Pope reptilian!?">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </Item>
            <Item title="How much money you got on you?">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </Item>
          </div>
        </div>
      </div>
    );
  };

  export default Faq