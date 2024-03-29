import { TypeBlogItem } from "../../widgets/blogs/types/types";

const BlogItem = ({ title, text, img }: TypeBlogItem) => {
  return (
    <div className="blogs__item">
      <div className=" blogs__image-wrapper">
        <img src={img} alt="" />
      </div>
      <div className="blogs__text-wrapper">
        <h6 className="blogs__title">{title}</h6>
        <p className="blogs__text">{text}</p>
      </div>
    </div>
  );
};

export default BlogItem;
