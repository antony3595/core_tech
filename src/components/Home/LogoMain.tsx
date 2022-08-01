import React from "react";
import { ReactComponent as LogoBrain } from "../../images/logos/logo_brain.svg";
import { ReactComponent as LogoCore } from "../../images/logos/logo_core.svg";
import { ReactComponent as LogoTech } from "../../images/logos/logo_tech.svg";
import "./css/LogoMain.scss";

const LogoMain = () => {
  return (
    <div className="LogoMain">
      <LogoCore className={"LogoMain-text_svg"} />
      <LogoBrain className={"LogoMain-brain_svg"} />
      <LogoTech className={"LogoMain-text_svg"} />
    </div>
  );
};

export default LogoMain;
