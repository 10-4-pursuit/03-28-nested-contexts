import React, { createContext, useState } from "react";

const ThemeContext = createContext({
    theme: "white",
    toggleTheme: () => {}
  
  });
  
  export default ThemeContext;