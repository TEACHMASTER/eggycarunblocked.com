import { Fragment } from "react"
import ResponsiveIframe from "./ResponsiveIframe"


interface GameProps {
   game: {
    id: number;
    title: string;
    imageUrl: string;
    genre: string;
    url: string;
  };
}

const Game:React.FC<GameProps> = ({game}) => {
  return (
    <Fragment>
          <h1 className="text-3xl font-bold mb-6 text-write-800">{game.title}</h1>
          <p className="text-write-600 mb-4">{game.genre}</p>
          <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden shadow-lg">
            <ResponsiveIframe
              src={game.url}
              title={`Play ${game.title}`}
              width="1200px"    // 可以自定义宽度
              height="600px"   // 可以自定义高度
            />
          </div>
    </Fragment>
  )
}

export default Game