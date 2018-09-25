const URL = 'https://jsonplaceholder.typicode.com/posts';

const component = new Vue({
	delimiters: ['{', '}'],
	el: '#posts-vue',
	data: {
		posts: []
	}
});

async function testURL () {
	const result = await axios.get(URL);
	component.posts = result.data;
}

testURL();