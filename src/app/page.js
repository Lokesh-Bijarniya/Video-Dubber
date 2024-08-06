// import { MantineProvider } from "@mantine/core";
// import Bar from "@/utils/Breadcrumb";
// import "./globals.css";

// export default function Home() {
//   return (
//     <MantineProvider withGlobalStyles withNormalizeCSS>
//       <div className="mx-52">
//       <div className="px-24 pt-20 flex flex-col gap-6">
//         <Bar className="text-gray-300" />
//         <div>
//           <img
//             src={
//               "https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2"
//             }
//             alt="logo"
//             height={60}
//             width={60}
//           />
//         </div>
//         <div>
//           <h1 className="text-2xl flex flex-wrap gap-2 font-semibold items-center">
//             VideoDubber - Fast Video Translator
//             <span className="text-gray-400 cursor-pointer">
//               {" "}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                 <path d="M6 9l6 6l6 -6" />
//               </svg>
//             </span>
//           </h1>

//           <div className="flex gap-10">
//             <div className="text-2xl text-gray-600 font-extralight">
//               <p>
//                 Translate videos in your own voice, globalize <br></br> in a
//                 click!
//               </p>
//             </div>

//             <div className="flex  gap-4">

//               <button className="border p-4 flex">Visit
//               <span className="text-gray-400 cursor-pointer">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                 <path d="M6 9l6 6l6 -6" />
//               </svg>
//             </span>
//               </button>

//               <button className="border border-red-500 p-4">UPVOTED 55</button>
//             </div>
//           </div>
//           <div>

//          <div className="flex justify-between gap-4 font-light relative top-16">
//          <div className="flex">
//           <div className="text-gray-500 flex gap-1 text-orange-500">
//           <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-gift"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 14v8h-4a3 3 0 0 1 -3 -3v-4a1 1 0 0 1 1 -1h6zm8 0a1 1 0 0 1 1 1v4a3 3 0 0 1 -3 3h-4v-8h6zm-2.5 -12a3.5 3.5 0 0 1 3.163 5h.337a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-7v-5h-2v5h-7a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.337a3.486 3.486 0 0 1 -.337 -1.5c0 -1.933 1.567 -3.5 3.483 -3.5c1.755 -.03 3.312 1.092 4.381 2.934l.136 .243c1.033 -1.914 2.56 -3.114 4.291 -3.175l.209 -.002zm-9 2a1.5 1.5 0 0 0 0 3h3.143c-.741 -1.905 -1.949 -3.02 -3.143 -3zm8.983 0c-1.18 -.02 -2.385 1.096 -3.126 3h3.143a1.5 1.5 0 1 0 -.017 -3z" /></svg>
//             2 months free annually</div>
//           <div className="text-gray-500">• Free Options</div>
//          </div>

//          <div className="font-light flex gap-4">
//          <button className="flex gap-1 text-gray-500">
//          <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-message-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8" /><path d="M8 13h6" /><path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z" /></svg>
//           Discuss</button>
//           <button className="flex gap-1 text-gray-500">
//           <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-shield"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" /></svg>
//             Collect</button>
//           <button className="flex gap-1 text-gray-500">
//           <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-share-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1" /><path d="M12 14v-11" /><path d="M9 6l3 -3l3 3" /></svg>
//             Share</button>
//           <button className="flex gap-1 text-gray-500">
//           <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chart-bar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 20h14" /></svg>
//             Stats</button>
//          </div>
//          </div>
//          </div>

//          <div className="relative top-24 font-light">
//           <p>Translate video in one click with AI to 150+ languages & accents in original voice. Prime features: 1. 0.1 USD/min for premium video translation with voice cloning 2. Unlimited Editing 3. Exports MP4/SRT/MP3</p>
//           <div className="mt-4">
//             <p className="flex gap-2">Launched in 
//               <button className="rounded-full bg-blue-100 px-2"> Languages</button>
//               <button className="rounded-full bg-blue-100 px-2">Artificial Intelligence</button>
//               <button className="rounded-full bg-blue-100 px-2">Video</button>
//             </p>
//           </div>
//          </div>
          
//         </div>

    
//       </div>
//       <div className="w-full relative top-44">
//           <img src="https://ph-files.imgix.net/8ce9557d-9614-44e2-b7ed-1402494ebfe5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=392&h=220&fit=max&dpr=2" alt="" width={"100%"} className="h-64"/>
//         </div>
//       </div>
//     </MantineProvider>
//   );
// }



import { MantineProvider } from "@mantine/core";
import Bar from "@/utils/Breadcrumb";
import "./globals.css";

export default function Home() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="mx-auto md:mx-52 px-4 sm:px-6 lg:px-8">
        <div className="py-20 flex flex-col gap-6 md:px-24">
          <Bar className="text-gray-300" />
          <div className="flex">
            <img
              src={
                "https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2"
              }
              alt="logo"
              height={60}
              width={60}
            />
          </div>
          <div>
            <h1 className="text-2xl flex gap-2 font-semibold items-center">
              VideoDubber - Fast Video Translator
              <span className="text-gray-400 cursor-pointer">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              </span>
            </h1>

            <div className="flex flex-col md:flex-row gap-10">
              <div className="text-2xl text-gray-600 font-extralight">
                <p>
                  Translate videos in your own voice, globalize <br></br> in a
                  click!
                </p>
              </div>

              <div className="flex gap-4">
                <button className="border p-4 flex items-center">Visit
                  <span className="text-gray-400 cursor-pointer ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 9l6 6l6 -6" />
                    </svg>
                  </span>
                </button>

                <button className="border border-red-500 p-4">UPVOTED 55</button>
              </div>
            </div>
            <div>

              <div className="flex flex-col md:flex-row md:mr-52 justify-between gap-4 font-light relative top-16">
                <div className="flex flex-col md:flex-row">
                  <div className="text-gray-500 flex gap-1 text-orange-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-gift">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M11 14v8h-4a3 3 0 0 1 -3 -3v-4a1 1 0 0 1 1 -1h6zm8 0a1 1 0 0 1 1 1v4a3 3 0 0 1 -3 3h-4v-8h6zm-2.5 -12a3.5 3.5 0 0 1 3.163 5h.337a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-7v-5h-2v5h-7a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.337a3.486 3.486 0 0 1 -.337 -1.5c0 -1.933 1.567 -3.5 3.483 -3.5c1.755 -.03 3.312 1.092 4.381 2.934l.136 .243c1.033 -1.914 2.56 -3.114 4.291 -3.175l.209 -.002zm-9 2a1.5 1.5 0 0 0 0 3h3.143c-.741 -1.905 -1.949 -3.02 -3.143 -3zm8.983 0c-1.18 -.02 -2.385 1.096 -3.126 3h3.143a1.5 1.5 0 1 0 -.017 -3z" />
                    </svg>
                    2 months free annually
                  </div>
                  <div className="text-gray-500 mt-2 md:mt-0">• Free Options</div>
                </div>

                <div className="font-light flex gap-4 mt-4 md:mt-0">
                  <button className="flex gap-1 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-message-2">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8 9h8" />
                      <path d="M8 13h6" />
                      <path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z" />
                    </svg>
                    Discuss
                  </button>
                  <button className="flex gap-1 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shield">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                    </svg>
                    Collect
                  </button>
                  <button className="flex gap-1 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-share-2">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1" />
                      <path d="M12 14v-11" />
                      <path d="M9 6l3 -3l3 3" />
                    </svg>
                    Share
                  </button>
                  <button className="flex gap-1 text-gray-500">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chart-bar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 20h14" /></svg>
                    Stats
                  </button>
                </div>
            </div>

            <div className="font-light relative top-24">
           <p>Translate video in one click with AI to 150+ languages & accents in original voice. Prime features: 1. 0.1 USD/min for premium video translation with voice cloning 2. Unlimited Editing 3. Exports MP4/SRT/MP3</p>
             <div className="mt-4">
               <p className="flex flex-wrap gap-2">Launched in 
                 <button className="rounded-full bg-blue-100 px-2"> Languages</button>
                 <button className="rounded-full bg-blue-100 px-2">Artificial Intelligence</button>
                 <button className="rounded-full bg-blue-100 px-2">Video</button>
               </p>
             </div>
              </div>
            </div>
          </div>

          <div className="w-full relative top-44">
             <img src="https://ph-files.imgix.net/8ce9557d-9614-44e2-b7ed-1402494ebfe5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=392&h=220&fit=max&dpr=2" alt="" width={"100%"} className="h-64"/>
           </div>
        </div> 
      </div>
    </MantineProvider>
  );
}
