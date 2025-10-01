import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />

      {/* Hero Section with Parallax Background */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: "url('https://w0.peakpx.com/wallpaper/736/470/HD-wallpaper-dreamcore-background-for.jpg')",
            backgroundAttachment: 'fixed',
            transform: 'translateZ(0)', // Optimización para el rendimiento
          }}
        />

        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-background/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40"></div>

        <div className="container relative mx-auto px-4 py-24 sm:py-32 z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl text-balance drop-shadow-2xl shadow-2xl">
              Huye
              <span className="block text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-2xl">
                Enfrenta tus Fobias
              </span>
            </h1>
            <div className="mt-16 flex items-center justify-center">
              <Link href="/vr-game" className="group">
                <div className="relative w-32 h-32 rounded-full bg-white border-4 border-primary shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl cursor-pointer flex items-center justify-center animate-bounce hover:animate-pulse">
                  <div className="w-0 h-0 border-l-[28px] border-l-primary border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent ml-2 drop-shadow-lg"></div>
                  <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-accent animate-ping"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Cards */}
      <section className="py-24 sm:py-32 bg-background relative z-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Proyectos realizados</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explora los proyectos destacados que muestran la aplicación de principios de HCI en entornos de realidad virtual.
            </p>
          </div>

          <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2">
            {/* VR Video Game Card */}
            <Card className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 horror-glow">
              <CardContent className="p-8">
                <div className="aspect-video mb-6 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-09-17-222559_hyprshot-ckXteAXVgn3xLGMYFJvsjmpvuNa7zF.png"
                    alt="VR Video Game Screenshot"
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">VR Video Game</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Un videojuego en el que tendras que salir del laberitno resolviendo puzzles y enfrentando tus miedos.
                </p>
                <div className="flex items-center justify-between">
                  <Button
                    asChild
                    variant="outline"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent horror-glow"
                  >
                    <Link href="/vr-game">Linea de tiempo</Link>
                  </Button>
                  <span className="text-sm text-muted-foreground">Proceso de desarrollo</span>
                </div>
              </CardContent>
            </Card>

            {/* Final VR Project Card */}
            <Card className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 horror-glow">
              <CardContent className="p-8">
                <div className="aspect-video mb-6 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-09-17-222552_hyprshot-fUdqHmUIrW3WXU8SBaFHGDWy3pP79y.png"
                    alt="Final VR Project Screenshot"
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Final VR Project</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comming soon
                </p>
                <div className="flex items-center justify-between">
                  <Button
                    asChild
                    variant="outline"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent horror-glow"
                  >
                    <Link href="/final-project">Linea de tiempo</Link>
                  </Button>
                  <span className="text-sm text-muted-foreground">Proceso de desarrollo</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 sm:py-32 bg-muted/30 relative z-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Listo para explorar?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explora las profundidades de tu mente y conquista tus miedos con nuestra experiencia de realidad virtual.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="horror-glow">
                <Link href="/overview">Comencemos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
