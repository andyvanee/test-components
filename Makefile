build: js/datepicker/build

clean: js/datepicker/clean

js/datepicker/build: js/datepicker/components js/datepicker/index.js js/datepicker/datepicker.css
	@cd js/datepicker && component build --dev
	@cd js/datepicker/build && uglifyjs build.js -c > build.min.js
	@cd js/datepicker/build && lessc -x build.css > build.min.css

js/datepicker/components: js/datepicker/component.json
	@cd js/datepicker && component install --dev

js/datepicker/clean:
	cd js/datepicker && rm -fr build components template.js

.PHONY: clean
