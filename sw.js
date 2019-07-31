self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      Promise.resolve()
    );
  });



self.addEventListener("fetch", function(event) {
  console.log("intercepted");
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
