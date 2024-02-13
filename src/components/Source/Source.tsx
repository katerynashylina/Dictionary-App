import classNames from 'classnames';
import './Source.scss';
import { useAppSelector } from '../../app/hooks';
import { colorThemes } from '../../helpers/consts';

type SourceProps = {
  url: string;
}

export const Source: React.FC<SourceProps> = ({ url }) => {
  const colorTheme = useAppSelector(state => state.colorTheme.colorTheme);
  

  return (
    <section className="source">
      <a href={url} className={classNames("source__link", {
        "source__link--dark": colorTheme === colorThemes[1],
      })}>
        {url}
      </a>
    </section>
  );
}
