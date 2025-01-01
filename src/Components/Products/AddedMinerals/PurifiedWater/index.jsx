import React, { useState } from "react";
import { addedMineralData } from "../../../../db/dummyData";
import { ContentBody, GridBox } from "../../../../ReusableComponents/Products/";
import { Heading } from "../../../../ReusableComponents";
import { Paragraph } from "../../../../Basics";
import { mineral } from "../../../../assets";

const PurifiedWater = () => {
  const [selectedIndex, setSelectedIndex] = useState(addedMineralData[1]);

  return (
    <GridBox
      listData={addedMineralData}
      listIndex={selectedIndex}
      setListIndex={setSelectedIndex}
    >
      {selectedIndex && (
        <div>
          <ContentBody title={selectedIndex?.name} img={selectedIndex?.img} />

          <div className="my-10">
            <Paragraph
              para="Are you drinking RO or any other purified water? Then wait & think."
              addClass={"my-4 font-bold"}
            />
            <Heading text="Pure Magic Plus A Unique Mineral Composition" />
            <Paragraph
              para="Make drinking water in a real sense of mineral water."
              addClass={"my-4 font-bold"}
            />
            <Paragraph
              para="Mineral composition is to improve salt contains and also improve portable water taste of RO Purified water which is demineralised water having no taste of natural spring water."
              addClass={"my-5 text-[15px]"}
            />
            <Paragraph
              para="1.25 kg mineral composition can improve taste of 5000 ltr RO purified demineralised water by increasing balance mineral contents and PH to prepare drinking water live with minerals."
              addClass={"my-5 text-[15px]"}
            />
            <Paragraph
              para="Pure magic plus mineral salt powder composition is not medicine, drug, food nor food additive. It is only mineral salt additive for drinking and cooking water for RO purified water to recoup lost minerals by high rejection of RO Membrane."
              addClass={"my-5 text-[15px]"}
            />
            <Paragraph
              para="Are you drinking RO or any other purified water? Then wait & think."
              addClass={"my-5 text-[15px]"}
            />
            <Paragraph
              para="Are you getting all the desired minerals from RO water? Certainly not. Addition of pure magic mineral composition which is balanced mineral composition will convert demineralised water better tasting live with minerals as good as spring fresh."
              addClass={"my-5 text-[15px]"}
            />
            <Paragraph
              para="Institutional pack 1.25kg."
              addClass={"my-5 text-[15px]"}
            />
            <img src={mineral} className="my-5" />
            <div className="my-8 w-full h-[1px] bg-gray-200"></div>
            <Paragraph
              para='"Pure Magic Plus" mineral salts composition is for water to pack in bottles ,pouches or jars etc.
They have no any adverse effect on our body or health. Water follows national & international quality standard for drinking water.'
              addClass={"text-[15px] mt-5"}
            />
            <Paragraph
              para="Water becomes an elixir of life and very good health drink.
Mineral Composition is to be used for packed drinking water. It is making R.O water into real sense mineral water."
              addClass={"text-[15px]"}
            />
            <Paragraph para="Weight 1.25 Kg.(When Packed)" addClass={"text-[15px] mb-5"} />
            <Paragraph
              para="1.25 Kg. Composition required to dissolve in 5000 water received from RO treatment plant."
              addClass={"text-[15px] mt-5 font-bold italic"}
            /><Paragraph
              para="“Pure Magic Plus” is containing minerals in required proportions for our health."
              addClass={"text-[15px] font-bold italic"}
            /><Paragraph
              para="Minerals used are very pure."
              addClass={"text-[15px] mb-5 font-bold italic"}
            />
            <Paragraph
              para="This is not medicine, not drug, not food and not food additive. It is only for to add in drinking and cooking water for recoup the lost minerals and to make water wholesome, testier and health drink….It is not for oral use."
              addClass={"text-[15px] my-5"}
            />
          </div>

          <table className="w-full text-[#acacac]">
            <tr className="border"><td colSpan={"2"} className="text-center p-3">Contents of one gram powder :</td></tr>
            <tr className="border">
              <td className="p-3">Na</td>
              <td className="text-right p-3">12%</td>
            </tr>
            <tr className="border">
              <td className="p-3">K</td>
              <td className="text-right p-3">18%</td>
            </tr>
            <tr className="border">
              <td className="p-3">Mg</td>
              <td className="text-right p-3">1%</td>
            </tr>
            <tr className="border">
              <td className="p-3">Ca</td>
              <td className="text-right p-3">1%</td>
            </tr>
            <tr className="border">
              <td className="p-3">Bicarbonates</td>
              <td className="text-right p-3">40%-50%</td>
            </tr>
            <tr className="border">
              <td className="p-3">Cl</td>
              <td className="text-right p-3">2%</td>
            </tr>
            <tr className="border">
              <td className="p-3">I</td>
              <td className="text-right p-3">0.5%-1%</td>
            </tr>
            <tr className="border">
              <td className="p-3">Glauconite</td>
              <td className="text-right p-3">20%-25%</td>
            </tr>
            <tr className="border">
              <td className="p-3">Others</td>
              <td className="text-right p-3">1%</td>
            </tr>
          </table>
          <p className="text-red-500 my-5">Caution: Not For Direct Oral Use</p>
        </div>
      )}
    </GridBox>
  );
};

export default PurifiedWater;
