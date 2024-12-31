import React, { useState } from "react";
import { AutomaticWaterTreatment } from "../../../../db/dummyData";
import { ContentBody, GridBox } from "../../../../ReusableComponents/Products/";
import { Heading } from "../../../../ReusableComponents";

const AutomaticTreatment = () => {
  const [selectedIndex, setSelectedIndex] = useState(AutomaticWaterTreatment[2]);

  return (
    <GridBox listData={AutomaticWaterTreatment} listIndex={selectedIndex} setListIndex={setSelectedIndex}>
      {selectedIndex && (
        <div>
          <ContentBody
            title={selectedIndex?.name}
            img={selectedIndex?.img}
          />

          <div className="my-12">
            <h4 className="text-gray-500 font-bold">Manual Override Options</h4>
            <ul className="m-7">
            <li className="text-[15px] text-[#252525] font-bold">Hold / Release</li>
              <li className="text-[15px] text-[#252525]">One can Extend any step as Desired by pressing hold key.</li>
              <li className="text-[15px] text-[#252525]">The same can be released by pressing hold key again.</li>
              <li className="text-[15px] text-[#252525] font-bold">Skip</li>
              <li className="text-[15px] text-[#252525]">An Ongoing step can be aborted by pressing the skip key.</li>
              <li className="text-[15px] text-[#252525] font-bold">Reset</li>
              <li className="text-[15px] text-[#252525]">Back/Regeneration cycle can be aborted & auto mpv brought back to Service by pressing the rest key.</li>
            </ul>
          </div>

          <div>
            <Heading text='HANDLE ASSEMBLY' addStyle={'text-[25px] text-[#4f4f4f]'} />
            <p className="text-gray-400">Supplied with every auto MPV as backup</p>
            <table className="my-5 w-full">
              <tbody className="w-full text-gray-500">
                <tr>
                  <td className="w-[70%] border border-[#d1d1d1] pt-2 pb-5 text-left px-2"></td>
                  <td className="w-[10%] border border-[#d1d1d1] pt-2 pb-5 text-left px-2">20 NB</td>
                  <td className="w-[10%] border border-[#d1d1d1] pt-2 pb-5 text-left px-2">25 NB</td>
                  <td className="w-[10%] border border-[#d1d1d1] pt-2 pb-5 text-left px-2">40 NB</td>
                </tr>
                <tr>
                  <td className="w-[70%] border border-[#d1d1d1] pt-2 pb-5 text-left px-2">MAX. FLOW (M3 /HR)</td>
                  <td className="w-[10%] border border-[#d1d1d1] pt-2 pb-5 text-left px-2">3.0</td>
                  <td className="w-[10%] border border-[#d1d1d1] pt-2 pb-5 text-left px-2">6.0</td>
                  <td className="w-[10%] border border-[#d1d1d1] pt-2 pb-5 text-left px-2">14.0</td>
                </tr>
                <tr>
                  <td className="w-[70%] border border-[#d1d1d1] pt-2 pb-5 text-left px-2">MAX. VESSEL SIZE ON BASED RESIN VOLUME</td>
                  <td className="w-[10%] border border-[#d1d1d1] pt-2 pb-5 text-left px-2">1248</td>
                  <td className="w-[10%] border border-[#d1d1d1] pt-2 pb-5 text-left px-2">1865</td>
                  <td className="w-[10%] border border-[#d1d1d1] pt-2 pb-5 text-left px-2">3672</td>
                </tr>
                <tr>
                  <td className="w-[70%] border border-[#d1d1d1] pt-2 pb-5 text-left px-2">MAX. VESSEL SIZE ON FLOW FOR FILTERS</td>
                  <td className="w-[10%] border border-[#d1d1d1] pt-2 pb-5 text-left px-2">1054</td>
                  <td className="w-[10%] border border-[#d1d1d1] pt-2 pb-5 text-left px-2">1665</td>
                  <td className="w-[10%] border border-[#d1d1d1] pt-2 pb-5 text-left px-2">3072</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </GridBox>
  );
};

export default AutomaticTreatment;
