import { LanguageDetectorModule } from "i18next";

class LanguageDetector implements LanguageDetectorModule {
    type = "languageDetector" as const;

    detect() {
        let lng: string | undefined = GetConvar("i18next_lng", GetConvar("locale", ""));
        if (lng == "") {
            lng = undefined;
        }
        return lng;
    }
}

export default LanguageDetector;
