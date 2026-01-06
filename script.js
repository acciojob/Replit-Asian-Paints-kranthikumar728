//your JS code here. If required.
const changeBtn = document.getElementById("change_button");

changeBtn.addEventListener('click', () => {
	const blockId = document.getElementById('block_id').value
	const color = document.getElementById('color_id').value
	const blockEle = document.getElementById(blockId);
	blockEle.style.backgroundColor = color;
})

const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', () => {
	const blocks = document.querySelectorAll('.grid-item');
	blocks.forEach(b => b.style.backgroundColor = 'transparent')
})
