self.addEventListener("fetch", function(event) {
  console.log("woo", event);
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