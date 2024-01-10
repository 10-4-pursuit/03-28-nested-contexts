import React, { createContext, useState } from "react";

const LanguageContext = createContext({
    language: "French",
    toggleLanguage: () => {}
  
  });
  
  export default LanguageContext;