self.addEventListener("install", function(event) {
  // Perform install steps
  event.waitUntil(Promise.resolve());
});

self.addEventListener("fetch", function(event) {
  console.log("intercepted");
//   if(event.request.url === "https://biggyspender.github.io/cmsppp/trailer1.mp4"){
//       event.request.url="https://biggyspender.github.io/cmsppp/trailer.mp4"
//   }
//   let req =
//     event.request.url === "https://biggyspender.github.io/cmsppp/trailer1.mp4"
//       ? {
//           ...event.request,
//           url: "https://biggyspender.github.io/cmsppp/trailer.mp4"
//         }
//       : event.request;
  event.respondWith(
    fetch(event.request)
    //   caches.match(event.request)
    //     .then(function(response) {
    //       // Cache hit - return response
    //       if (response) {
    //         return response;
    //       }
    //       return fetch(event.request);
    //     }
    //   )
  );
});
