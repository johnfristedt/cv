import { useEffect } from 'react';

type LangShort = 'en' | 'sv';
type LangLong = 'English' | 'Svenska';

interface Lang {
  short: LangShort,
  long: LangLong
};

interface LanguageSelectProps {
  onSetLanguage: (lang: LangShort) => void;
}

export const LanguageSelect = (props: LanguageSelectProps) => {
  useEffect(() => {
    const cookies = document.cookie.split('; ');
    const lang = cookies.filter((x) => x.includes('lang'))[0].split('=')[1];
    props.onSetLanguage(lang as LangShort);
  }, [props]);
  
  const langs: Lang[] = [
    { short: 'en', long: 'English' },
    { short: 'sv', long: 'Svenska' },
  ];

  function setLang(langShort: LangShort) {
    document.cookie = `lang=${langShort}`;
    props.onSetLanguage(langShort);
  }

  return (
    <>
      {langs.map(lang =>
        <button type='button' onClick={() => setLang(lang.short)}>{lang.long}</button>
      )}
    </>
  )
}