
export default function ThumbnailSection() {
    return (
        <div className=" *:rounded-2xl *:p-8 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 z-50 lg:bg-black ">
      <div
    className="relative w-full h-[50vh] sm:h-[20vh] md:h-[20vh] lg:h-[50vh] xl:h-[50vh] overflow-hidden"
    style={{
        backgroundImage: "url('/assets/thumbnail.png')",
        backgroundSize: "contain", // Ensures the entire image is visible
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents repetition
    }}
></div>



            </div>
    );
}
