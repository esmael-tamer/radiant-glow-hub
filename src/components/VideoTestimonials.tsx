import { useState } from 'react';
import { Play, X } from 'lucide-react';

const videoTestimonials = [
  {
    id: 1,
    name: "سارة أحمد",
    thumbnail: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    review: "شعري تغير تماماً بعد استخدام زيت الخروع!"
  },
  {
    id: 2,
    name: "نورة محمد",
    thumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    review: "أفضل منتج استخدمته لتطويل الشعر"
  },
  {
    id: 3,
    name: "هند العتيبي",
    thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    review: "نتائج مذهلة خلال شهر واحد فقط!"
  },
  {
    id: 4,
    name: "ريم الشمري",
    thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    review: "لاحظت فرق كبير في كثافة شعري"
  }
];

const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-16 bg-cream-light" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-dark mb-4">
            شاهدي تجارب عملائنا
          </h2>
          <p className="text-brown text-lg">
            آراء حقيقية من عملاء حقيقيين
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoTestimonials.map((video) => (
            <div
              key={video.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-brown-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setActiveVideo(video.videoUrl)}
                    className="w-16 h-16 bg-gold rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg hover:bg-gold-dark"
                  >
                    <Play className="w-8 h-8 text-white fill-white mr-[-4px]" />
                  </button>
                </div>

                {/* Always visible play icon */}
                <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-brown-dark fill-brown-dark mr-[-2px]" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-bold text-brown-dark text-lg mb-1">{video.name}</h3>
                <p className="text-brown text-sm">{video.review}</p>
              </div>

              {/* Gold accent */}
              <div className="absolute top-4 left-4">
                <span className="bg-gold text-white text-xs px-3 py-1 rounded-full font-medium">
                  تجربة حقيقية
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-cream transition-colors z-10"
              >
                <X className="w-5 h-5 text-brown-dark" />
              </button>
              <iframe
                src={`${activeVideo}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonials;
