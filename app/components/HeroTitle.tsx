import { convert } from 'html-to-text';
interface TitleCenterType {
  title: string;
  subTitle: string | '';
  paragraph: string | '';
}
const HeroTitle = ({ title, subTitle, paragraph }: TitleCenterType) => {
  const text = convert(paragraph);

  return (
    <div className="reveal fade-bottom">
      <div className="flex items-center flex-col">
        <h1 className="mt-10 mb-2 font-black text-2xl leading-relaxed">{title}</h1>
        <p className="italic">{subTitle}</p>
        <hr className="w-20 mt-2 border border-yatri-blue" />
      </div>
      <div className="text-center leading-relaxed m-5">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HeroTitle;
