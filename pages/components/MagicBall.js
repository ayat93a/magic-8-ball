
function MagicBall({replay}) {
  return (
    <>
        <div className="relative mx-auto my-8 bg-gray-900 rounded-full h-96 w-96">
        <div className="absolute flex items-center justify-content-center w-48 h-48 rounded-full bg-gray-50 top-14 left-10">
        
            <p className="text-center">{replay}</p>
        </div>

        </div>
        
    </>
  )
}

export default MagicBall