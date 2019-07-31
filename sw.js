self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      Promise.resolve()
    );
  });



self.addEventListener("fetch", function(event) {
  console.log(JSON.stringify(event,null,2));
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
