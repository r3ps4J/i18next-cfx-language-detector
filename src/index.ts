import { LanguageDetectorModule } from "i18next";

const languageDetector: LanguageDetectorModule = {
    type: "languageDetector",
    detect: () => {
        let lng: string | undefined = GetConvar("i18next_lng", GetConvar("locale", ""));
        if (lng == "") {
            lng = undefined;
        }
        return lng;
    },
};

export default languageDetector;
