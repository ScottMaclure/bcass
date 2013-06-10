# Apache vs node for rendering static files

## Considerations

Q: What about PHP5? Won't that slow apache down?
A: ???

Q: Test on windows and linux, any immediate differences?
A: ???

## On Win7

ab -n 1000 -c 5 http://localhost:3000/javascripts/vendor/custom.modernizr.js

ab -n 1000 -c 5 http://fetest.local/javascripts/vendor/custom.modernizr.js
