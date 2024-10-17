const Article = (props) => {
  return (
    <article>
      <h1>{props.title}</h1>
      <h5>{props.description}</h5>
      <p>{props.priority}</p>
    </article>
  );
};
export default Article;
