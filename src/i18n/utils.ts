import { en } from './en';
import { zhCn } from './zhCn';
import { ptBR } from './ptBR';
import { cs } from './cs';
import { config } from '../consts';

const ui = { en, 'zh-cn': zhCn, 'pt-br': ptBR, cs };

// export function useTranslations(lang: keyof typeof ui) {
export function useTranslations(lang: string) {
  return function t(key: string) {
    return ui[lang][key] || ui[config.lang][key];
  }
}

export const t = useTranslations(config.lang)

