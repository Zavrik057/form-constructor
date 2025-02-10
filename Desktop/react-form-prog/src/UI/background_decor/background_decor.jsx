
function BackgroundDecor() {
   return (
      <>
         <div className="background-decor absolute min-h-[100vh] overflow-hidden inset-0">
            <div className="relative isolate inset-0 px-16 py-40 sm:py-50 lg:overflow-visible lg:px-0">
               <div class="absolute inset-0 z-15 fill-gray-50">
                  <svg class="min-h-full absolute top-0 left-[max(50%,25rem)] h-[204rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
                     <defs>
                        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                           <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                     </defs>
                     <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
                        {/* <path d="M-200.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" /> */}
                     </svg>
                     <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                  </svg>
               </div>
               <div
                  aria-hidden="true"
                  className="absolute inset-x-0 -top-40 z-10 transform-gpu blur-3xl sm:-top-80"
               >
                  <div
                     style={{
                        clipPath:
                           'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                     }}
                     className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  />
               </div>
               <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-[calc(100%-13rem)] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
               >
                  <div
                     style={{
                        clipPath:
                           'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                     }}
                     className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                  />
               </div>
            </div>
         </div>
      </>
   );
}

export default BackgroundDecor;