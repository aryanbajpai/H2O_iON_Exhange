import React, { useState } from "react";
import { GridBox } from "../../../../../../ReusableComponents/Products";
import { Paragraph } from "../../../../../../Basics";
import { Heading } from "../../../../../../ReusableComponents";

const Greenz = () => {
    const showData = [
        {
            id: 1,
            name: "All Products",
        },
        {
            id: 2,
            name: "OZONATOR / OXYGEN CONCENTRATOR – GREENZ",
        },
    ];

    const [selectedIndex, setSelectedIndex] = useState(showData[1]);

    return (
        <GridBox
            listData={showData}
            listIndex={selectedIndex}
            setListIndex={setSelectedIndex}
        >
            {selectedIndex && (
                <div className="-mt-4">
                    <Heading text="OZONATOR / OXYGEN CONCENTRATOR – GREENZ" />
                    <Paragraph
                        para="Ozone has the ability of saving hundreds or thousands of lives and millions of from illness and disease from drinking water related contaminants."
                        addClass={"my-4 "}
                    />
                    <Paragraph
                        para="SAFE water, food and clean air are basic need for healthy living. OZONE makes it happen naturally."
                        addClass={"my-4"}
                    />
                    <Paragraph 
                        para='We are witnessing excess use of chemicals and pesticides in agriculture for growing crops. Also half heartedly waste from waste treatment plants eventually contaminants winds up in the subsoil water, lakes, rivers and back to our water distribution system which we need to treat with OZONE at point of application in order to receive clean water, clean vegetables and fruits, clean meat and marine products.'
                        addClass={"my-4"}
                    />
                    <Paragraph
                        para='We also offer ozone for hotel industries’ kitchen, mineral water plants, food and beverages plants, high quality water preparation for electronic industries, laboratory high quality applications, chemical free cooling tower, and wastewater treatment foe safe discharge to water bodies.'
                        addClass={"my-4"}
                    />
                    <Paragraph
                        para='Ozone O3 is a molecule composed by three atoms of oxygen. Ozone existence was supposed from 1871 by Van Marun, who noticed its odour in the air crossed by electricity discharges, and was finally discovered and named-from the Greek word “ozein” to smell-in 1840 by Schombein, Marignac, Becquerel and Fremy, they investigated and established the ozone’s nature, and its formula and constitution were later determined and introduced by J.L.Soret investigations.'
                        addClass={"my-5"}
                    />
                    <Paragraph
                       addClass={"my-4"}
                       para='Because of its powerful oxidative and bactericide effects, ozone is used to renovate the air in confined atmospheres, and for water sterilization and treatment. The interest of the ozone applications in water treatment, it is due so much for its particularly energetic oxidizing characteristics, profited to degrade or eliminate some undesirable organic or mineral substances, as for its powerful bactericide and virucidal strength'
                    />
                    <Paragraph
                        para='The oxidating action of ozone can be presented in three different forms: As direct oxidant, setting one of its oxygen atoms. As an oxidant, setting its three oxygen atoms to a double or triple connection. As catalyst of oxygen, accelerating the speed of the oxidation reactions in ozonized air. Ozon decomposes slowly at room temperature, and the spare atom of oxygen is absorbed by the reducing substances. Thus oxidative and clean air in countryside contains from 200 to 400 mg. of ozone per 100 m3. in countryside, ozone is mainly produced by green plants photosynthesis. On contrary, the air in town, laden with a weighty proportion of reducing powdered particles, it contains no more than 2 mg. of ozone per 100 m3. Because of its capacity of absorption, ozone in stratosphere avoids thet high frequency ultra-violet rays reach the ground.'
                        addClass={"my-5"}
                    />
                    <Paragraph addClass={"my-4"}
                        para='Pure ozone is not usually produced, but such as ozonized oxygen. That is achieved by passing oxygen or air through an electric effluvium resulting from the gas ionization. This effect is obtained with ozonizers or ozone generator.'
                    />
                </div>
            )}
        </GridBox>
    );
};

export default Greenz;
