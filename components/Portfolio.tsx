export default function Portfolio() {
  return (
    <section className="bg-[#08080A] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-violet-500 uppercase tracking-[0.3em]">
            Selected Work
          </p>

          <h2 className="text-5xl font-bold mt-5">
            Video Portfolio
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Every project below is presented as a video-first creative experience.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {/* Video Card 1 */}

          <div className="rounded-3xl overflow-hidden bg-[#18181B]">

            <video
              controls
              poster="/portfolio/project1.jpg"
              className="w-full"
            >
              <source
                src="/portfolio/project1.mp4"
                type="video/mp4"
              />
            </video>

            <div className="p-8">

              <p className="text-violet-500">
                Concept Project
              </p>

              <h3 className="text-3xl font-bold mt-3">
                Future Sneaker Commercial
              </h3>

              <p className="text-gray-400 mt-4">
                AI-powered cinematic product film
                exploring futuristic storytelling.
              </p>

            </div>

          </div>

          {/* Video Card 2 */}

          <div className="rounded-3xl overflow-hidden bg-[#18181B]">

            <video
              controls
              poster="/portfolio/project2.jpg"
              className="w-full"
            >
              <source
                src="/portfolio/project2.mp4"
                type="video/mp4"
              />
            </video>

            <div className="p-8">

              <p className="text-violet-500">
                Studio Experiment
              </p>

              <h3 className="text-3xl font-bold mt-3">
                Premium Skincare Launch
              </h3>

              <p className="text-gray-400 mt-4">
                Cinematic AI launch campaign
                with luxury visual direction.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
