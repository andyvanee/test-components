build: components index.js datepicker.css
	@component build --dev
	@cd build && uglifyjs build.js -c > build.min.js
	@cd build && lessc -x build.css > build.min.css

components: component.json
	@component install --dev

clean:
	rm -fr build components

.PHONY: clean
