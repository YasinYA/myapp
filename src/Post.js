function Post({ text, title, image, classes }) {
	return (
		<div className={classes}>
			<div>
				<img src={image} alt='' />
			</div>
			<h2>{title}</h2>
			<div>{text}</div>
		</div>
	);
}

export default Post;
