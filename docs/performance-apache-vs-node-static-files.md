# Apache vs node for rendering static files

## Considerations

Q: What about PHP5? Won't that slow apache down?
A: ???

Q: Test on windows and linux, any immediate differences?
A: ???

## On Win7

Apache:
```
ab -n 1000 -c 5 http://fetest.local/stylesheets/app.css
```

Node:
```
ab -n 1000 -c 5 http://localhost:3000/stylesheets/app.css
```
