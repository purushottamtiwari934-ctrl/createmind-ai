type VideoCardProps = {
  title: string;
  type: string;
  category: string;
  description: string;
  video: string;
  thumbnail: string;
};

export default function VideoCard({
  title,
  type,
  category,
  description,
  video,
  thumbnail,
}: VideoCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-surface border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-glow">

      <div className="relative">

        <video
          className="w-full aspect-video object-cover"
          controls
          muted
          playsInline
          poster={thumbnail}
        >
          <source src={video} type="video/mp4" />
        </video>

        <span className="absolute top-4 left-4 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white">
          {type}
        </span>

      </div>

      <div className="p-6">

        <p className="text-primary text-sm uppercase tracking-widest">
          {category}
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-4 text-gray-400 leading-7">
          {description}
        </p>

      </div>

    </article>
  );
}
