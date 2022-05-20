var Slider = function(id) {
    var self = this;
    var startX = 0,
        x = 0;

    var slider = document.getElementById(id)
    var touchLeft = slider.querySelector('.slider-left');
    var touchRight = slider.querySelector('.slider-right');
    var lineSpan = slider.querySelector('.line');

    var min = parseFloat(slider.getAttribute('se-min'));
    var max = parseFloat(slider.getAttribute('se-max'));

    var defaultMinValue = min;
    if (slider.hasAttribute('se-min-value')) {
        defaultMinValue = parseFloat(slider.getAttribute('se-min-value'));
    }
    var defaultMaxValue = max;
    if (slider.hasAttribute('se-max-value')) {
        defaultMaxValue = parseFloat(slider.getAttribute('se-max-value'));
    }

    if (defaultMinValue < min) {
        defaultMinValue = min;
    }

    if (defaultMaxValue > max) {
        defaultMaxValue = max;
        document.querySelector('.title-range-values').innerHTML = `${defaultMinValue}Р - ${defaultMaxValue}Р`;
    }

    if (defaultMaxValue < min) {
        defaultMaxValue = min;
        document.querySelector('.title-range-values').innerHTML = `${defaultMinValue}Р - ${defaultMaxValue}Р`;
    }

    if (defaultMinValue > defaultMaxValue) {
        defaultMinValue = defaultMaxValue;
        document.querySelector('.title-range-values').innerHTML = `${defaultMinValue}Р - ${defaultMaxValue}Р`;
    }

    var step = 0.0;

    if (slider.getAttribute('se-step')) {
        step = Math.abs(parseFloat(slider.getAttribute('se-step')));
    }

    var normalizeFact = 6;

    self.slider = slider;
    self.reset = function() {
        touchLeft.style.left = '0px';
        touchRight.style.left = (slider.offsetWidth - touchLeft.offsetWidth) + 'px';
        lineSpan.style.marginLeft = '0px';
        lineSpan.style.width = (slider.offsetWidth - touchLeft.offsetWidth) + 'px';
        startX = 0;
        x = 0;
    };

    self.setMinValue = function(minValue) {
        var ratio = ((minValue - min) / (max - min));
        touchLeft.style.left = Math.ceil(ratio * (slider.offsetWidth - (touchLeft.offsetWidth + normalizeFact))) + 'px';
        lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
        lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';
        slider.setAttribute('se-min-value', minValue);
    }

    self.setMaxValue = function(maxValue) {
        var ratio = ((maxValue - min) / (max - min));
        touchRight.style.left = Math.ceil(ratio * (slider.offsetWidth - (touchLeft.offsetWidth + normalizeFact)) + normalizeFact) + 'px';
        lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
        lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';
        slider.setAttribute('se-max-value', maxValue);
    }

    self.reset();

    var maxX = slider.offsetWidth - touchRight.offsetWidth;
    var selectedTouch = null;
    var initialValue = (lineSpan.offsetWidth - normalizeFact);

    self.setMinValue(defaultMinValue);
    self.setMaxValue(defaultMaxValue);

    function onStart(event) {

        event.preventDefault();
        var eventTouch = event;

        if (event.touches) {
            eventTouch = event.touches[0];
        }

        if (this === touchLeft) {
            x = touchLeft.offsetLeft;
        } else {
            x = touchRight.offsetLeft;
        }

        startX = eventTouch.pageX - x;
        selectedTouch = this;
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onStop);
        document.addEventListener('touchmove', onMove);
        document.addEventListener('touchend', onStop);
    }

    function onMove(event) {
        var eventTouch = event;

        if (event.touches) {
            eventTouch = event.touches[0];
        }

        x = eventTouch.pageX - startX;

        if (selectedTouch === touchLeft) {
            if (x > (touchRight.offsetLeft - selectedTouch.offsetWidth + 10)) {
                x = (touchRight.offsetLeft - selectedTouch.offsetWidth + 10)
            } else if (x < 0) {
                x = 0;
            }

            selectedTouch.style.left = x + 'px';
        } else if (selectedTouch === touchRight) {
            if (x < (touchLeft.offsetLeft + touchLeft.offsetWidth - 10)) {
                x = (touchLeft.offsetLeft + touchLeft.offsetWidth - 10)
            } else if (x > maxX) {
                x = maxX;
            }
            selectedTouch.style.left = x + 'px';
        }

        lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
        lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';

        calculateValue();

        if (slider.getAttribute('on-change')) {
            var fn = new Function('min, max', slider.getAttribute('on-change'));
            fn(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
        }

        if (self.onChange) {
            self.onChange(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
        }

    }

    function onStop(event) {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onStop);
        document.removeEventListener('touchmove', onMove);
        document.removeEventListener('touchend', onStop);

        selectedTouch = null;

        calculateValue();

        if (slider.getAttribute('did-changed')) {
            var fn = new Function('min, max', slider.getAttribute('did-changed'));
            fn(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
        }

        if (self.didChanged) {
            self.didChanged(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
        }
    }

    function calculateValue() {
        var newValue = (lineSpan.offsetWidth - normalizeFact) / initialValue;
        var minValue = lineSpan.offsetLeft / initialValue;
        var maxValue = minValue + newValue;

        var minValue = minValue * (max - min) + min;
        var maxValue = maxValue * (max - min) + min;

        if (step !== 0.0) {
            var multi = Math.floor((minValue / step));
            minValue = step * multi;

            multi = Math.floor((maxValue / step));
            maxValue = step * multi;
        }

        slider.setAttribute('se-min-value', minValue);
        slider.setAttribute('se-max-value', maxValue);
    }

    touchLeft.addEventListener('mousedown', onStart);
    touchRight.addEventListener('mousedown', onStart);
    touchLeft.addEventListener('touchstart', onStart);
    touchRight.addEventListener('touchstart', onStart);
};

var newRangeSlider = new Slider('my-slider');

newRangeSlider.onChange = function(min, max) {
    document.querySelector('.title-range-values').innerHTML = `${min}Р - ${max}Р`;
}

newRangeSlider.didChanged = function(min, max) {
    document.querySelector('.title-range-values').innerHTML = `${min}Р - ${max}Р`;
}