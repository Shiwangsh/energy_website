// import { convert } from 'html-to-text';

interface TitleSideType {
  title: string;
  subTitle: string | '';
  paragraph: any;
}

const TitleSide = ({ title, subTitle, paragraph }: TitleSideType) => {
  // const text = convert(paragraph);
  return (
    <section className="text-black reveal fade-bottom md:ml-20 md:flex md:items-start">
      <div className="flex md:items-start items-center flex-col md:w-80 md:h-80">
        <h1 className="mt-10 mb-2 font-black text-2xl leading-relaxed">{title}</h1>
        <p className="italic">{subTitle}</p>
        <hr className="w-20 mt-2 border border-yatri-blue" />
      </div>
      <div className="md:mt-10 md:w-[30rem] md:m-20 m-10">{paragraph}</div>
    </section>
  );
};

export default TitleSide;
