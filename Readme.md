A demo of integrating a web component into a larger project.

Uses [this example](http://tjholowaychuk.com/post/37832588021/building-a-date-picker-component)
but nests the component and moves the makefile up to the top level.

It also creates a compressed version of build.js and build.css. Requires component, lessc and
uglifyjs, all available through npm.

## Run the example

    $ make
    $ python -m SimpleHTTPServer
    $ open http://0.0.0.0:8000
