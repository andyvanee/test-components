var Calendar = require('calendar')
  , Popover = require('popover')
  , event = require('event')

module.exports = Datepicker;

function Datepicker(el) {
  if (!(this instanceof Datepicker)) return new Datepicker(el);
  this.el = el;
  this.cal = new Calendar;
  this.cal.el.addClass('datepicker-calendar');
  event.bind(el, 'click', this.onclick.bind(this));
}

Datepicker.prototype.onclick = function(e){
  this.cal.on('change', this.onchange.bind(this));
  this.popover = new Popover(this.cal.el);
  this.popover.classname = 'datepicker-popover popover';
  this.popover.show(this.el);
};

Datepicker.prototype.onchange = function(date){
  el.value = date.getFullYear()
    + '/'
    + date.getMonth()
    + '/'
    + date.getDate();

  this.popover.hide();
};
