import { questions } from "./data/questions";

const Page = () => {
  const title = 'Quiz de Culinária';

  return(
    <div className="w-full h-screen bg-red-700 flex justify-center items-center">
      <div className="bg-white w-full max-w-xl rounded-md text-black shadow shadow-black">
      <div className="p-5 font-bold text-2xl shadow shadow-gray-300">{title} </div>

      <div className="p-5">
        ...
      </div>
      <div className="p-5 text-center border-t border-gray-300 ">
        X de {questions.length} perguntas
      </div>

      </div>
    
    </div>
  )
}

export default Page;
