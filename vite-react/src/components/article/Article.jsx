const Article = (props) => {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href="#">Daugiau</a>
    </article>
  );
};
export default Article;
