import { useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Play,
  Star,
  Heart,
  Smile,
  Sun,
  Moon,
  Music,
  Tv,
  Radio,
  History,
  Share2,
  MessageCircle
} from 'lucide-react'

// VK Icon Component (SVG)
const VKIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.714-1.033-1.033-1.49-1.171-1.744-1.171-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.673 4 8.231c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.177-3.61 2.177-3.61.119-.254.322-.491.762-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.475-.085.72-.576.72z"/>
  </svg>
)

// Yandex Icon Component (SVG)
const YandexIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 16.5h-2.4l-1.2-3.6h-1.8v3.6H9v-9h4.2c1.8 0 3 1.2 3 3 0 1.5-.9 2.4-1.8 2.7l1.5 3.3zm-5.4-5.1h1.8c.6 0 1.2-.6 1.2-1.2 0-.6-.6-1.2-1.2-1.2h-1.8v2.4z"/>
  </svg>
)

// Russian Flag Icon Component (SVG)
const RussianFlagIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="0" y="0" width="24" height="8" fill="#FFFFFF"/>
    <rect x="0" y="8" width="24" height="8" fill="#0033A0"/>
    <rect x="0" y="16" width="24" height="8" fill="#DA291C"/>
  </svg>
)

// Animated Section Component
const AnimatedSection = ({ children, className }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Character Card Component
const CharacterCard = ({ name, color, bgColor, description, antenna, delay }) => {
  const cardRef = useRef(null)
  const isCardInView = useInView(cardRef, { once: true })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isCardInView ? 1 : 0, scale: isCardInView ? 1 : 0.8 }}
      transition={{ duration: 0.6, delay: delay, type: "spring" }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`relative overflow-hidden rounded-3xl p-6 ${bgColor} border-2 border-white/20 backdrop-blur-sm`}
    >
      <div className="absolute top-4 right-4 text-4xl opacity-30">{antenna}</div>
      <div className="h-32 w-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-white/30 to-transparent flex items-center justify-center text-6xl shadow-2xl">
        {color === 'purple' && '🟣'}
        {color === 'green' && '🟢'}
        {color === 'yellow' && '🟡'}
        {color === 'red' && '🔴'}
      </div>
      <h3 className="text-2xl font-black text-white text-center mb-2">{name}</h3>
      <p className="text-white/80 text-center text-sm leading-relaxed">{description}</p>
      <div className="mt-4 flex justify-center">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
          <Star className="w-3 h-3" /> Культовый персонаж
        </span>
      </div>
    </motion.div>
  )
}

// Gallery Image Component
const GalleryImage = ({ src, alt, delay }) => {
  const imgRef = useRef(null)
  const isImgInView = useInView(imgRef, { once: true })

  return (
    <motion.div
      ref={imgRef}
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: isImgInView ? 1 : 0, scale: isImgInView ? 1 : 0.8, rotate: isImgInView ? 0 : -5 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
      className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer group"
    >
      <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
        {src}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="text-white font-bold">{alt}</span>
      </div>
    </motion.div>
  )
}

function App() {
  const characters = [
    {
      name: "Тинки-Винки",
      color: "purple",
      bgColor: "bg-purple-600",
      antenna: "🔺",
      description: "Самый высокий фиолетовый Телепузик с треугольной антенной. Любит нести красную сумочку."
    },
    {
      name: "Дипси",
      color: "green",
      bgColor: "bg-emerald-600",
      antenna: "📡",
      description: "Зелёный Телепузик с прямой антенной. Обожает танцевать и носить чёрно-белую шляпу."
    },
    {
      name: "Лаа-Лаа",
      color: "yellow",
      bgColor: "bg-yellow-500",
      antenna: "🌀",
      description: "Жёлтая Телепузи с спиральной антенной. Любит петь, танцевать и играть с мячом."
    },
    {
      name: "По",
      color: "red",
      bgColor: "bg-red-600",
      antenna: "⭕",
      description: "Самая маленькая красная Телепузи с круглой антенной. Ездит на самокате и говорит 'А-о!'"
    }
  ]

  const facts = [
    { icon: <Tv className="w-6 h-6" />, text: "В России сериал впервые вышел в 1997 году на ОРТ" },
    { icon: <Radio className="w-6 h-6" />, text: "Русский закадровый голос принадлежит Алексею Борзунову" },
    { icon: <Music className="w-6 h-6" />, text: "Песня 'Телепузи-заварушка' стала настоящим хитом 90-х" },
    { icon: <Sun className="w-6 h-6" />, text: "Съёмки проходили в Англии на специальной ферме" },
    { icon: <Moon className="w-6 h-6" />, text: "Каждый костюм Телепузика весил около 13 кг" },
    { icon: <Smile className="w-6 h-6" />, text: "Мем 'По проснулась' стал вирусным в Рунете" }
  ]

  const galleryItems = [
    { src: "🏠", alt: "Дом Телепузиков" },
    { src: "🌅", alt: "Восход солнца" },
    { src: "📺", alt: "Живот в экране" },
    { src: "🍞", alt: "Тосты" },
    { src: "🎭", alt: "Танец" },
    { src: "🎪", alt: "Шоу" }
  ]

  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const historyRef = useRef(null)
  const isHistoryInView = useInView(historyRef, { once: true })

  const charactersRef = useRef(null)
  const isCharactersInView = useInView(charactersRef, { once: true })

  const galleryRef = useRef(null)
  const isGalleryInView = useInView(galleryRef, { once: true })

  const factsRef = useRef(null)
  const isFactsInView = useInView(factsRef, { once: true })

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden bg-russian-pattern">
      {/* Russian Flag Banner */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 flex">
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-blue-700"></div>
        <div className="flex-1 bg-red-600"></div>
      </div>

      {/* Header */}
      <header className="fixed top-1 left-0 right-0 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 z-40">
        <nav className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 via-blue-600 to-white flex items-center justify-center shadow-lg shadow-red-500/30">
              <RussianFlagIcon className="w-6 h-6 rounded" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight">
              <span className="text-white">ТЕЛЕ</span>
              <span className="text-red-500">ПУЗИ</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#history" className="text-slate-300 hover:text-white transition-colors font-semibold">История</a>
            <a href="#characters" className="text-slate-300 hover:text-white transition-colors font-semibold">Персонажи</a>
            <a href="#gallery" className="text-slate-300 hover:text-white transition-colors font-semibold">Галерея</a>
            <a href="#facts" className="text-slate-300 hover:text-white transition-colors font-semibold">Факты</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-600/20 hover:bg-blue-600/40 transition-colors">
              <VKIcon className="w-5 h-5 text-blue-400" />
            </a>
            <a href="https://yandex.ru" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-yellow-500/20 hover:bg-yellow-500/40 transition-colors">
              <YandexIcon className="w-5 h-5 text-yellow-400" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-slate-950 to-slate-950" />

        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isHeroInView ? 1 : 0, y: isHeroInView ? 0 : 30 }}
          transition={{ duration: 1 }}
          className="container mx-auto text-center relative z-10"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-8xl md:text-9xl mb-6"
          >
            📺
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-400 to-red-500 bg-clip-text text-transparent">
              ТЕЛЕПУЗИКИ
            </span>
          </h1>

          <p className="text-xl md:text-3xl text-slate-300 mb-4 font-bold">
            Культовый сериал 90-х в России
          </p>

          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Погрузитесь в мир ярких персонажей, ностальгии и русских мемов.
            А-о! Снова в эфире!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl shadow-red-600/30 flex items-center gap-2 min-w-[200px] justify-center"
            >
              <Play className="w-5 h-5" />
              Смотреть вводную
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 min-w-[200px] justify-center"
            >
              <Share2 className="w-5 h-5" />
              Поделиться
            </motion.button>
          </div>

          <div className="mt-16 flex justify-center gap-8 text-slate-500">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-black text-red-500">1997</span>
              <span className="text-sm">Год выхода в РФ</span>
            </div>
            <div className="w-px bg-slate-800" />
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-black text-blue-500">365</span>
              <span className="text-sm">Серий</span>
            </div>
            <div className="w-px bg-slate-800" />
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-black text-white">4</span>
              <span className="text-sm">Героя</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* History Section */}
      <section id="history" className="py-20 px-4 md:px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-4 mb-12">
              <History className="w-8 h-8 text-red-500" />
              <h2 className="text-4xl md:text-6xl font-black text-center">
                История в <span className="text-red-500">России</span>
              </h2>
            </div>
          </AnimatedSection>

          <div ref={historyRef} className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isHistoryInView ? 1 : 0, x: isHistoryInView ? 0 : -50 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Телепузи пришли в Россию!</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  В 1997 году российские телезрители впервые увидели странных существ в ярких костюмах,
                  которые жили в волшебной стране и общались на непонятном языке.
                  Сериал моментально стал хитом!
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Трансляция шла на ОРТ (ныне Первый канал) и РТР. Русский закадровый текст
                  читал легендарный Алексей Борзунов, чей голос стал узнаваемым для целого поколения.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Культурный феномен</h3>
                <p className="text-slate-300 leading-relaxed">
                  Телепузики стали не просто детским шоу, а настоящим культурным феноменом.
                  Фразы "А-о!", "Телепузи-заварушка" и "По проснулась" стали мемами ещё до того,
                  как появился сам интернет в современном виде.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isHistoryInView ? 1 : 0, x: isHistoryInView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-9xl shadow-2xl shadow-red-500/10">
                🎬
              </div>
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-black">26</div>
                <div className="text-sm">лет в РФ</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-black text-center mb-4">
              Познакомься с <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-yellow-400 to-red-500">героями</span>
            </h2>
            <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
              Четыре уникальных персонажа, каждый со своим характером и любимыми вещами
            </p>
          </AnimatedSection>

          <div ref={charactersRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {characters.map((char, index) => (
              <CharacterCard key={char.name} {...char} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 md:px-6 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-4 mb-12">
              <Tv className="w-8 h-8 text-blue-500" />
              <h2 className="text-4xl md:text-6xl font-black text-center">
                Галерея <span className="text-blue-500">воспоминаний</span>
              </h2>
            </div>
          </AnimatedSection>

          <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryItems.map((item, index) => (
              <GalleryImage key={index} {...item} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section id="facts" className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-black text-center mb-12">
              Интересные <span className="text-yellow-500">факты</span>
            </h2>
          </AnimatedSection>

          <div ref={factsRef} className="grid md:grid-cols-2 gap-4">
            {facts.map((fact, index) => {
              const factRef = useRef(null)
              const isFactInView = useInView(factRef, { once: true })

              return (
                <motion.div
                  key={index}
                  ref={factRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isFactInView ? 1 : 0, y: isFactInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="p-3 rounded-xl bg-red-500/20 text-red-400">
                    {fact.icon}
                  </div>
                  <p className="text-slate-200 font-semibold">{fact.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-red-600/20 via-blue-600/20 to-red-600/20">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ностальгируешь?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Присоединяйся к сообществу любителей Телепузиков в ВКонтакте.
            Делись воспоминаниями, мемами и находи единомышленников!
          </p>
          <motion.a
            href="https://vk.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#4A76A8] hover:bg-[#3d6491] text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl shadow-blue-500/30"
          >
            <VKIcon className="w-6 h-6" />
            Присоединиться к группе ВК
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10 py-12 px-4 md:px-6 telegram-safe-bottom">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <RussianFlagIcon className="w-8 h-6 rounded shadow-lg" />
                <span className="text-2xl font-black">ТЕЛЕПУЗИКИ</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Фан-сайт, посвящённый культовому британскому сериалу
                и его российской истории. Создано с любовью и ностальгией.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Разделы</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#history" className="hover:text-white transition-colors">История</a></li>
                <li><a href="#characters" className="hover:text-white transition-colors">Персонажи</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Галерея</a></li>
                <li><a href="#facts" className="hover:text-white transition-colors">Факты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#4A76A8] flex items-center justify-center hover:scale-110 transition-transform">
                  <VKIcon className="w-6 h-6 text-white" />
                </a>
                <a href="https://yandex.ru" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#FC3F1D] flex items-center justify-center hover:scale-110 transition-transform">
                  <YandexIcon className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 Телепузики Фан-Клуб. Не официальный сайт.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <span>Сделано с</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>в России</span>
              <RussianFlagIcon className="w-4 h-3 rounded" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App