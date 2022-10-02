import React, { Dispatch, useState } from "react";
import CustomCard from "../../../Components/core/Cards/CustomCards/Index";
import { CardArea, GridAlignMent, InPutArea } from "./styles";
import PersonIcon from "@mui/icons-material/Person";
import CtaButton from "../../../Components/core/Buttons/CTAButton";
import GroupsIcon from '@mui/icons-material/Groups';
import { IntegrationStepsProps } from "../types";

export type CurrentState = "MYSELF" | "TEAM" ;
function Planning({setIntegrationStep,setFormData,formData}:{setIntegrationStep:Dispatch<IntegrationStepsProps>, setFormData:Dispatch<any>,formData:any}) {
  const [cardState, setCardState] = useState<CurrentState>("MYSELF");
  return (
    <InPutArea lg={12} container>
    <CardArea>
      <CustomCard
        avatar=<PersonIcon className="avatar"/>
        header="For myself"
        subtext="Write better.Think more Clearly. Stay organized"
        selected={cardState === "MYSELF"}
        handleClick={() => setCardState("MYSELF")}
      />
      <CustomCard
        avatar=<GroupsIcon className="avatar"/>
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
            setIntegrationStep(IntegrationStepsProps.COMPLETED);
            setFormData({...formData, planningToUseEden:cardState})
          }
          }
        />
      </GridAlignMent>
    </InPutArea>
  );
}

export default Planning;
