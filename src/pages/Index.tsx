import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/6c508cda-5f6b-4ddc-8115-96042d3f103d/files/fb5339c8-7963-4767-b85e-35d079c7a877.jpg",
    "https://cdn.poehali.dev/projects/6c508cda-5f6b-4ddc-8115-96042d3f103d/files/48f365dd-3880-43b0-a571-b628d4591a67.jpg",
    "https://cdn.poehali.dev/projects/6c508cda-5f6b-4ddc-8115-96042d3f103d/files/824478d9-56ff-45da-9563-e21d1b2edfc5.jpg",
    "https://cdn.poehali.dev/projects/6c508cda-5f6b-4ddc-8115-96042d3f103d/files/3369258c-f9fb-4c6a-a8f0-7bbd528893a1.jpg",
    "https://cdn.poehali.dev/projects/6c508cda-5f6b-4ddc-8115-96042d3f103d/files/30c73a75-d8f6-48e3-af53-0db2a7e9ecaa.jpg",
    "https://cdn.poehali.dev/projects/6c508cda-5f6b-4ddc-8115-96042d3f103d/files/9d0d3c2f-0155-4959-9eaf-05e3fa7adeca.jpg",
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={130}
        cardSizeMd={105}
        cardSizeSm={85}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;
