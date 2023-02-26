export type TExperience = {
  title: string;
  company: string;
  description: string;
  startDate: string;
  endDate?: string;
};

export default function Experience({
  title,
  company,
  description,
  startDate,
  endDate,
}: TExperience) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col font-inter text-xs pt-5 mr-3 min-w-[15%]">
        <h3>{startDate}</h3>
        <h3>{endDate === undefined ? "Present" : endDate}</h3>
      </div>
      <div className="border-slate-500 border-l-[7px]">
        <div className="w-4 h-4 bg-[#918ced] rounded-full relative -left-[11.5px] -top-3"></div>
        <div className="pl-3">
          <h2 className="mb-2 text-xl font-inter font-extrabold">{company}</h2>
          <div className="border border-slate-500 rounded-md p-4  mb-2 bg-gradient-to-b from-[#1b1b1b] via-[#1e1e1e] to-[#1f1f1f]">
            <h2 className="mb-2 text-xl font-inter font-extrabold">{title}</h2>
            <p className="text-slate-300">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
