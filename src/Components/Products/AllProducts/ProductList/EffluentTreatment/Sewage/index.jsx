import React, { useState } from "react";
import { ContentBody, GridBox } from "../../../../../../ReusableComponents/Products";
import { Paragraph } from "../../../../../../Basics";
import { mineral } from "../../../../../../assets";
import { Heading } from "../../../../../../ReusableComponents";

const Sewage = () => {
    const showData = [
        {
            id: 1,
            name: "All Products",
        },
        {
            id: 2,
            name: "Effluent Treatment Plant / Sewage Treatment Plant",
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
                    <Heading text="Effluent Treatment Plant / Sewage Treatment Plant" />
                    <Paragraph
                        para="h2o has worked with effluent treatment plants mostly all kind of industries, which generate mild to highly polluted waste water requiring simple to extensive treatment to meet the required level of treatment. We have achieved 100% success rate in treating industrial effluent and helped industries to achieve zero discharge. Our technologies for ETP includes from conventional chemical, activated sludge to most advance MBR, electro-cell process."
                        addClass={"my-4 "}
                    />
                    <Paragraph
                        para="A large quantity of industrial and commercial effluents cause pollution in our environment. Our plants handle these effluents in most to make our environment safe and healthy. To keep our environment safe, we offer innovative Effluent Treatment Plants to remove the pollution effluents with economical operation and quality discharge to meet the stringent pollution control norms."
                        addClass={"my-4"}
                    />
                    <Paragraph
                        para="It mainly depends upon the type of effluent when various processes are developed for the cost effective treatment. The technological solutions are available after complete research and trial run at our pilot plants."
                        addClass={"my-4"}
                    />
                    <Paragraph
                        para="Our Effluent Treatment Plants cater in diversified areas such as Textile Industry, Electroplating and Picking Industries, Hospitals, Automobile Industries, Export Houses etc to name a few."
                        addClass={"my-4"}
                    />
                    <Paragraph
                        para="We have professional expertise to deal in the following Effluents Treatment Technologies:"
                        addClass={"my-5"}
                    />
                    <Paragraph
                        para="Sewage Treatment Plants and Wastewater Treatment Plants we worked with sewage treatment plants mostly all kind of industries, which generate mild to highly polluted waste water requiring simple to extensive treatment to meet the required level of treatment. We have achieved 100% success rate in treating industrial effluent and helped industries to achieve zero discharge. Our technologies for ETP includes from conventional chemical, activated sludge to most advance MBR, electro-cell process."
                        addClass={"my-5"}
                    />
                </div>
            )}
        </GridBox>
    );
};

export default Sewage;
