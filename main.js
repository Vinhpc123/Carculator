// main.js

// Lấy các phần tử DOM
const display = document.getElementById('display');
const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');

// Gắn sự kiện click cho từng nút
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

// Xử lý sự kiện click
function handleClick(event) {
  const buttonValue = event.target.innerText;

  if (buttonValue === 'AC') {
    // Xử lý sự kiện khi nhấn nút AC (xóa tất cả)
    input.value = '';
  } else if (buttonValue === 'DE') {
    // Xử lý sự kiện khi nhấn nút DE (xóa ký tự cuối cùng)
    input.value = input.value.slice(0, -1);
  } else if (buttonValue === '=') {
    // Xử lý sự kiện khi nhấn nút = (thực hiện tính toán)
    const expression = input.value;
    const result = eval(expression); // Hàm eval để tính toán biểu thức
    display.value = result;
  } else {
    // Xử lý sự kiện khi nhấn các nút số và toán tử
    input.value += buttonValue;
  }
}
