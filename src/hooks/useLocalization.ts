import json from '../../localization.json';

const useLocalization = () => {

    const t = (key: string) => {
        return JSON.parse(JSON.stringify(json))[key];
    }

    return {t};
}

export default useLocalization;