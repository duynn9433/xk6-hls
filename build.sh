echo "Export xk6 build flags"
export XK6_BUILD_FLAGS="-gcflags=all=-N"

echo "Build k6 with extension"
xk6 build --replace go.k6.io/k6=go.k6.io/k6@v0.52 --with xk6-hls=.

echo "Run with devel"
dlv --listen=:2345 --headless=true --api-version=2 exec ./k6 run example/test.js 
