import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LenguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        Select a language:
        <i
          onClick={() => this.context.onLanguageChange("english")}
          className="flag us"
        ></i>
        <i
          onClick={() => this.context.onLanguageChange("dutch")}
          className="flag nl"
        ></i>
      </div>
    );
  }
}

export default LenguageSelector;
