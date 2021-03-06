import Post from "./Post";
import "./Blog.css";

const posts = [
	{
		id: "askflhwio234234",
		author: {
			firstName: "CABDI",
			lastName: "Jaamac",
		},
		title: "Post 1",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cupiditate.",
		image: "/logo192.png",
	},
	{
		id: "askflhwasdfasfio234234",
		title: "Post 2",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cupiditate.",
		image: "/logo192.png",
	},
];

function Blog() {
	return (
		<div className='blog'>
			{posts.map((post) => (
				<div key={post.id}>
					{/* <h1>{post.title}</h1>
					{post.author ? (
						<span>
							authored by: {`${post.author.firstName} ${post.author.lastName}`}
						</span>
					) : (
						<span></span>
					)}
					<img src={post.image} alt={post.title} />
					<p>{post.text}</p> */}
					<Post title={post.title} image={post.image} text={post.text}></Post>
				</div>
			))}
		</div>
	);
}
export default Blog;
