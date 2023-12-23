import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import "./LanguageSelector.css"

export const LanguageSelector = () => {
    const { language, setLanguage } = useContext(LanguageContext)

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value)
    }
    
    return (
        <select value={language} onChange={handleLanguageChange}>
            <option value="english" >English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
        </select>
    )
}