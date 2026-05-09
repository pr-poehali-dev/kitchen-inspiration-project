import Icon from "@/components/ui/icon";

const devices = [
  {
    id: 1,
    title: "Освещение",
    subtitle: "7 устройств активно",
    icon: "Lightbulb",
    status: "Включено",
    active: true,
    image: "https://cdn.poehali.dev/projects/6c508cda-5f6b-4ddc-8115-96042d3f103d/files/824478d9-56ff-45da-9563-e21d1b2edfc5.jpg",
    value: "72%",
    span: "col-span-2",
  },
  {
    id: 2,
    title: "Климат",
    subtitle: "Термостат",
    icon: "Thermometer",
    status: "22°C",
    active: true,
    image: "https://cdn.poehali.dev/projects/6c508cda-5f6b-4ddc-8115-96042d3f103d/files/fb5339c8-7963-4767-b85e-35d079c7a877.jpg",
    value: "22°C",
    span: "col-span-1",
  },
  {
    id: 3,
    title: "Безопасность",
    subtitle: "3 камеры",
    icon: "ShieldCheck",
    status: "Охрана",
    active: true,
    image: "https://cdn.poehali.dev/projects/6c508cda-5f6b-4ddc-8115-96042d3f103d/files/48f365dd-3880-43b0-a571-b628d4591a67.jpg",
    value: "ОК",
    span: "col-span-1",
  },
  {
    id: 4,
    title: "Умный замок",
    subtitle: "Входная дверь",
    icon: "Lock",
    status: "Закрыт",
    active: false,
    image: "https://cdn.poehali.dev/projects/6c508cda-5f6b-4ddc-8115-96042d3f103d/files/30c73a75-d8f6-48e3-af53-0db2a7e9ecaa.jpg",
    value: "—",
    span: "col-span-1",
  },
  {
    id: 5,
    title: "Энергия",
    subtitle: "Потребление сегодня",
    icon: "Zap",
    status: "3.2 кВт·ч",
    active: true,
    image: "https://cdn.poehali.dev/projects/6c508cda-5f6b-4ddc-8115-96042d3f103d/files/9d0d3c2f-0155-4959-9eaf-05e3fa7adeca.jpg",
    value: "3.2 кВт",
    span: "col-span-2",
  },
  {
    id: 6,
    title: "Умный хаб",
    subtitle: "Все системы",
    icon: "Cpu",
    status: "Онлайн",
    active: true,
    image: "https://cdn.poehali.dev/projects/6c508cda-5f6b-4ddc-8115-96042d3f103d/files/3369258c-f9fb-4c6a-a8f0-7bbd528893a1.jpg",
    value: "12",
    span: "col-span-1",
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Icon name="Home" size={16} className="text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg">Умный дом</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
          Все системы работают
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Hero text */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold">Панель управления</h1>
          <p className="text-muted-foreground mt-1">Добро пожаловать! Сегодня всё под контролем.</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: "Устройств онлайн", value: "12", icon: "Wifi" },
            { label: "Активных сцен", value: "4", icon: "Layers" },
            { label: "Экономия", value: "18%", icon: "TrendingDown" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-card border border-border p-4 flex flex-col gap-2">
              <Icon name={stat.icon} size={18} className="text-primary" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tiles grid */}
        <div className="grid grid-cols-3 gap-3">
          {devices.map((device) => (
            <div
              key={device.id}
              className={`${device.span} rounded-2xl border border-border bg-card overflow-hidden relative group cursor-pointer hover:border-primary/50 transition-all duration-300`}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={device.image}
                  alt={device.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-5 flex flex-col gap-3 h-full min-h-[140px]">
                <div className="flex items-start justify-between">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${device.active ? "bg-primary/20" : "bg-muted"}`}>
                    <Icon name={device.icon} size={20} className={device.active ? "text-primary" : "text-muted-foreground"} />
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${device.active ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"}`}>
                    {device.status}
                  </span>
                </div>
                <div className="mt-auto">
                  <div className="text-xl font-bold">{device.value}</div>
                  <div className="font-medium text-sm">{device.title}</div>
                  <div className="text-xs text-muted-foreground">{device.subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="mt-6 rounded-2xl border border-border bg-card p-5">
          <h2 className="font-semibold mb-4">Быстрые действия</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Режим «Дома»", icon: "Home" },
              { label: "Режим «Уходим»", icon: "LogOut" },
              { label: "Ночной режим", icon: "Moon" },
              { label: "Гостевой доступ", icon: "UserPlus" },
            ].map((action) => (
              <button
                key={action.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-accent hover:border-primary/40 transition-all text-sm"
              >
                <Icon name={action.icon} size={15} className="text-primary" />
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;