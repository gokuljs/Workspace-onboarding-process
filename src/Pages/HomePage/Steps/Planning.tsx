import React, { Dispatch, useState } from "react";
import CustomCard from "../../../Components/core/Cards/CustomCards/Index";
import { CardArea, GridAlignMent, InPutArea } from "./styles";
import PersonIcon from "@mui/icons-material/Person";
import CtaButton from "../../../Components/core/Buttons/CTAButton";
import { EdenIntegrationSteps } from "../types";

export type CurrentState = "MYSELF" | "TEAM" ;
function Planning({setEdenIntegrationStep,setEdenFormData,edenFormData}:{setEdenIntegrationStep:Dispatch<EdenIntegrationSteps>, setEdenFormData:Dispatch<any>,edenFormData:any}) {
  const [cardState, setCardState] = useState<CurrentState>("MYSELF");
  return (
    <InPutArea lg={12} container>
    <CardArea>
      <CustomCard
        avatar=<PersonIcon/>
        header="For myself"
        subtext="Write better.Think more Clearly. Stay organized"
        selected={cardState === "MYSELF"}
        handleClick={() => setCardState("MYSELF")}
      />
      <CustomCard
        avatar=<PersonIcon/>
        header="With my team"
        subtext="Wikis ,docs ,tasks & projects,all in one place"
        selected={cardState === "TEAM"}
        handleClick={() => {
          setCardState("TEAM");
        }}
      />
    </CardArea>
       <GridAlignMent container justifyContent="center">
        <CtaButton
          btnText="create workSpace"
          handleClick={() =>{
            setEdenIntegrationStep(EdenIntegrationSteps.COMPLETED);
            setEdenFormData({...edenFormData, planningToUseEden:cardState})
          }
          }
        />
      </GridAlignMent>
    </InPutArea>
  );
}

export default Planning;
