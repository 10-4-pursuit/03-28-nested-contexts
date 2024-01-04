import React from "react";
import ThemeContext from "../../contexts/ThemeContext";

export default function ThemeSelector() {
    const availableThemes = [
        "Light",
        "Dark"
    ]

    const {theme, setTheme} = React.useContext(ThemeContext);

    return(
        <div>
            <button onClick={() => setTheme(
                theme === "Light" ? "Dark" : "Light"
            )}>Display Theme: {theme}</button>
        </div>
    );
}