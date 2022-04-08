import { useEffect } from 'react';

type LangShort = 'en' | 'sv';
type LangLong = 'English' | 'Svenska';
type LangFlag = '🇬🇧' | '🇸🇪';

interface Lang {
  short: LangShort,
  long: LangLong,
  flag: LangFlag
};

interface ControlsProps {
  onSetLanguage: (lang: LangShort) => void;
}

export const Controls = (props: ControlsProps) => {
  // const lang = useContext(LangContext);

  useEffect(() => {
    if (document.cookie.indexOf('lang') !== -1) {
      const cookies = document.cookie.split('; ');
      const cookieLang = cookies.filter((x) => x.includes('lang'))[0].split('=')[1];
      props.onSetLanguage(cookieLang as LangShort);
    } else {
      props.onSetLanguage('en');
    }
  }, [props]);

  const langs: Lang[] = [
    { short: 'en', long: 'English', flag: '🇬🇧' },
    { short: 'sv', long: 'Svenska', flag: '🇸🇪' },
  ];

  function setLang(langShort: LangShort) {
    document.cookie = `lang=${langShort}`;
    props.onSetLanguage(langShort);
  }

  return (
    <span className="noPrint" style={{
      position: 'absolute',
      top: 0,
      width: '100%'
    }}>
      {langs.map((v, i) =>
        <button
          key={i}
          type='button'
          style={{
            fontSize: '2ch'
          }}
          onClick={() => setLang(v.short)}>{v.flag} {v.long}</button>
      )}
      {/* <button
        type='button'
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          fontSize: '2ch'
        }}
        onClick={() => {
          window.print();
        }}>
        {lang.print}
      </button> */}
    </span>
  )
}