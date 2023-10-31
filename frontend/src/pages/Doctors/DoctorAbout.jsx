import { formatDate } from "../../utils/formatDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Dr. Hassan Jarko
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eos hic
          aspernatur ducimus inventore qui consequuntur eligendi iste possimus?
          Eos quibusdam omnis libero, reprehenderit aperiam consequatur eaque
          magni excepturi molestiae et. Nemo, tempora, quo quos eligendi
          expedita vitae hic minima, vero ratione magni natus consectetur. Vitae
          incidunt facilis quos at.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("07-23-2010")} - {formatDate("07-23-2014")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Appollo Hospital, New York, USA
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("12-05-2015")} - {formatDate("04-05-2017")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Appollo Hospital, New York, USA
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#FFF9EA]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("12-05-2015")} - {formatDate("04-05-2017")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              Medicare Hospital, Montreal, Canada
            </p>
          </li>
          <li className="p-4 rounded bg-[#FFF9EA]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("09-23-2015")} - {formatDate("010-15-2017")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Head Of Surgeons
            </p>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              Mediclinic, Rio De Janiro, Brazil
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
