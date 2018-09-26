const component = new Vue({
	delimiters: ['@', '@'],
	el: '#posts-vue',
	data: {
		posts: []
	}
});

async function testURL () {
	const result = await axios.get(URL);
	component.posts = result.data;
}

setTimeout(() => {
	testURL();
}, 2000);
