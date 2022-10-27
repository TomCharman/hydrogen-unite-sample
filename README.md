# Issue: product pages wait when being navigated to

The product pages in this example load the suspense boundary around `useQuery` correctly when loaded by themselves.

However when you navigate to them from the homepage, they wait until `useQuery` has resolved (can observe that navigating takes a while and the query-loaded content is ready when you get there).
