export function LaptopMockup({ screenImage, alt = "Screen content" }) {
  return (
    <div className="relative inline-block">
      <img
        src="/assets/laptop-frame.png"
        alt="Laptop"
        className="w-150 block"
      />

      {screenImage && (
        <div className="absolute top-[22.5%] left-[12%] w-[76%] h-[43%] overflow-hidden">
          <img
            src={screenImage}
            alt={alt}
            className="w-full h-full object-fill"
          />
        </div>
      )}
    </div>
  );
}