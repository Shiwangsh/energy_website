// import { convert } from 'html-to-text';

interface TitleSideType {
  title: string;
  subTitle: string | '';
  paragraph: any;
}

const TitleSide = ({ title, subTitle, paragraph }: TitleSideType) => {
  return (
    <section className="text-black reveal fade-bottom md:ml-20 md:flex md:items-start mt-10 md:justify-around">
      <div className="flex md:items-start items-center flex-col md:w-80 md:h-60">
        <h1 className="mb-2 font-extrabold text-4xl leading-relaxed">{title}</h1>
        <p className="italic">{subTitle}</p>
        <hr className="w-20 mt-2 border border-yatri-blue" />
      </div>
      <div className="md:flex md:items-start flex-col md:w-[40rem] md:h-60 m-5 leading-relaxed md:text-justify text-center">
        {paragraph}
      </div>
    </section>
  );
};

export default TitleSide;
