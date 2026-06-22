import Button from "./Button"

function Card({title, description, imageUrl}) {
  return (
    <div className="bg-white text-black max-w-sm rounded-lg border-2 border-gray-600 m-4 shadow-lg">
        <img className="w-full h-48 object-cover rounded-lg" src={imageUrl} alt="Card Image" />
        <div className="p-4 flex flex-col items-center justify-center ">
        <h3 className="text-2xl font-bold  ">{title}</h3>
        <p>{description}</p>
        <Button />
      </div>
      </div>
  )

}

export default Card