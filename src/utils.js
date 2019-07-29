// els要实现此功能dom对象，callback 加载更多的方法
export function loadMore(element, callback) {
  let timer; // 防抖
  element.addEventListener('scroll', function () {
    timer && clearTimeout(timer)
    timer = setTimeout(function () {
      let clientHeight = element.clientHeight;
      let scrollTop = element.scrollTop;
      let scrollHeight = element.scrollHeight;
      if (clientHeight + scrollTop + 20 >= scrollHeight) {
        callback();
      }
    }, 300)

  })

}

// 下来刷新
export function downRefresh(element, callback) {
  let startY;// 刚按下的时候初始纵坐标
  let distance; //下拉的距离
  let originTop = element.offsetTop; // 在最初的距离顶部的距离  

  element.addEventListener('touchstart', function (event) {
    if (element.offsetTop == originTop && element.scrollTop == 0) {
      startY = event.touches[0].pageY
      element.addEventListener('touchmove', touchMove);
      element.addEventListener('touchend', touchEnd);
    }

    function touchMove(event) {
      let pageY = event.touches[0].pageY;
      if (pageY > startY) {
        // 如果越来越大，表示下达
        distance = pageY - startY;
        element.style.top = originTop + distance + 'px';
      } else {
        element.removeEventListener('touchmove', touchMove);
        element.removeEventListener('touchend', touchEnd);
      }
    }
    function touchEnd(event) {
      element.removeEventListener('touchmove', touchMove);
      element.removeEventListener('touchend', touchEnd);
      // element.style.transition = 'all 1s ease-in';
      // element.style.top = originTop + 'px';
      let timer = setInterval(function () {
        if (distance < 1) {
          element.style.top = originTop + 'px';
          clearInterval(timer);
        } else {
          element.style.top = originTop + (--distance) + 'px'
        }
      }, 13)
      if (distance > 30) {
        callback();
      }
    }
  })
}