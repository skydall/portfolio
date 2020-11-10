var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animate__animated', // animation css class (default is animated)
      offset:       300,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();
  function square() {
    let a = document.sq.sq_a.value;
    let b = document.sq.sq_b.value;
    let c = document.sq.sq_c.value;
    let sol = document.getElementById("sq_sol");
    let d = b * b - 4 * a * c;
    let str;
    if (d < 0 ) {
      str = "Вещественных корней нет";
    } else if (d == 0) {
      str = "Два одинаковых вещественных корня: <br>x<sub>1</sub> = x<sub>2</sub>";
      str += -b/(2*a);
      str += ".";
    } else {
      str = "Два различных вещественных корня : <br>x<sub>1</sub>";
      str += -b/(2*a)-Math.sqrt(d)/(2*a);
      str += ", x<sub>2</sub> = ";
      str += -b/(2*a)+ Math.sqrt(d)/(2*a);
      str += ".";
    }
    sol.innerHTML = str;
  }