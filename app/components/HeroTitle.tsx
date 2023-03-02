// import { convert } from 'html-to-text';
interface TitleCenterType {
  title: string;
  subTitle: string | '';
  paragraph: any;
}
const HeroTitle = ({ title, subTitle, paragraph }: TitleCenterType) => {
  return (
    <div className="reveal fade-bottom mt-10">
      <div className="flex items-center flex-col">
        <h1 className="mt-10 mb-2 font-black text-4xl leading-relaxed">{title}</h1>
        <p className="italic text-xl">{subTitle}</p>
        <hr className="w-20 mt-2 border border-yatri-blue" />
      </div>
      <div className="text-center leading-relaxed m-5">{paragraph}</div>
    </div>
  );
};

export default HeroTitle;
