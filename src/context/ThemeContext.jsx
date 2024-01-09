import React, { createContext, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {}

});





export default ThemeContext;
