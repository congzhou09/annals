// 检查是否支持vh单位
export function checkViewportUnit(notpassCallback) {
  const testDiv = document.createElement('div');
  testDiv.setAttribute('id', 'test-div');
  testDiv.setAttribute('style', 'position:fixed;height:100vh;');
  document.body.appendChild(testDiv);

  setTimeout(() => {
    const theTestDiv = document.querySelector('#test-div');
    if (theTestDiv) {
      const realSize = parseInt(getComputedStyle(theTestDiv).height);
      if (notpassCallback && realSize <= 0) {
        notpassCallback();
      }

      document.body.removeChild(theTestDiv);
    }
  }, 200);
}
