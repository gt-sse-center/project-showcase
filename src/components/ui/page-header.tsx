interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  height?: string;
}

export default function PageHeader({
  title,
  description,
  backgroundImage,
  height = "medium"
}: PageHeaderProps) {
  // Map height to actual pixel values
  const heightClass =
    {
      small: "py-12",
      medium: "py-16",
      large: "py-24"
    }[height] || "py-16";

  return (
    <div className={`relative bg-[var(--gt-navy)] text-white ${heightClass} overflow-hidden`}>
      {/* Optional background image with overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0 opacity-55">
          <img src={backgroundImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[var(--gt-navy)] opacity-60"></div>
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
        {description && <p className="text-lg md:text-xl text-gray-100 max-w-3xl">{description}</p>}
      </div>
    </div>
  );
}
