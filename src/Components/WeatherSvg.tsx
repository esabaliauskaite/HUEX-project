import { ReactComponent as Sunny } from "../WeatherSvg/sunny.svg";
import { ReactComponent as PartlyCloudy } from "../WeatherSvg/partly-cloudy-day.svg";
import { ReactComponent as Cloudy } from "../WeatherSvg/cloudy.svg";
import { ReactComponent as Mist } from "../WeatherSvg/mist.svg";
import { ReactComponent as Rain } from "../WeatherSvg/rain.svg";
import { ReactComponent as PartlyRain } from "../WeatherSvg/partly-cloudy-day-rain.svg";
import { ReactComponent as PartlyDrizzle } from "../WeatherSvg/partly-cloudy-day-drizzle.svg";
import { ReactComponent as Snow } from "../WeatherSvg/snow.svg";
import { ReactComponent as Thunderstorms } from "../WeatherSvg/thunderstorms.svg";
import { ReactComponent as PartlySnow } from "../WeatherSvg/partly-cloudy-day-snow.svg";
import { ReactComponent as PartlyHail } from "../WeatherSvg/partly-cloudy-day-hail.svg";
import { ReactComponent as Hail } from "../WeatherSvg/hail.svg";

interface IWeatherSvgProps {
  code: string;
  big?: boolean;
}

const WeatherSvg: React.FC<IWeatherSvgProps> = (props) => {
  let Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  switch (props.code) {
    case "113":
      Icon = Sunny;
      break;

    case "116":
      Icon = PartlyCloudy;
      break;

    case "119":
    case "122":
      Icon = Cloudy;
      break;

    case "143":
    case "248":
    case "260":
      Icon = Mist;
      break;

    case "176":
    case "266":
    case "293":
    case "296":
    case "299":
    case "302":
    case "311":
    case "314":
    case "353":
    case "356":
    case "359":
      Icon = PartlyRain;
      break;

    case "179":
    case "182":
    case "230":
    case "281":
    case "284":
    case "320":
    case "332":
    case "335":
    case "338":
    case "371":
      Icon = Snow;
      break;

    case "185":
    case "263":
      Icon = PartlyDrizzle;
      break;

    case "200":
    case "386":
    case "389":
      Icon = Thunderstorms;
      break;

    case "227":
    case "317":
    case "323":
    case "326":
    case "329":
    case "362":
    case "365":
    case "368":
    case "392":
    case "395":
      Icon = PartlySnow;
      break;

    case "281":
    case "374":
    case "377":
      Icon = PartlyHail;
      break;

    case "305":
    case "308":
      Icon = Rain;
      break;

    case "350":
      Icon = Hail;
      break;

    default:
      Icon = Sunny;
  }
  return props.big ? (
    <Icon style={{ width: "60px", height: "45px", display: "inline" }} />
  ) : (
    <Icon />
  );
};

export default WeatherSvg;
