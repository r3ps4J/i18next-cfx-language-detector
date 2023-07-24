import { InitOptions, LanguageDetectorModule, Services } from "i18next";

interface DetectorOptions {
    convar: string;
}

function getDefaults(): DetectorOptions {
    return {
        convar: "i18next_lng",
    };
}

class LanguageDetector {
    static type = "languageDetector" as const;

    private services!: Services;
    private detectorOptions!: DetectorOptions;
    private i18nextOptions!: InitOptions<object>;

    init(services: Services, detectorOptions: Partial<DetectorOptions>, i18nextOptions: InitOptions<object>): void {
        this.services = services;
        this.detectorOptions = {
            ...getDefaults(),
            ...detectorOptions,
        };
        this.i18nextOptions = i18nextOptions;
    }

    detect() {
        let lng: string | undefined = GetConvar(this.detectorOptions.convar, GetConvar("locale", ""));
        if (lng == "") {
            lng = undefined;
        }
        return lng;
    }
}

export default LanguageDetector;
